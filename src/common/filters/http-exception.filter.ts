// src/common/filters/http-exception.filter.ts
import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
    HttpStatus,
    Logger,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

type ExceptionResponseShape =
    | string
    | { message?: string | string[] | Record<string, any>; error?: string; code?: string; statusCode?: number }
    | string[];

@Catch()
export class GlobalHttpExceptionFilter implements ExceptionFilter {
    private readonly logger = new Logger(GlobalHttpExceptionFilter.name);
    constructor(private readonly httpAdapterHost: HttpAdapterHost) { }

    catch(exception: unknown, host: ArgumentsHost) {
        const { httpAdapter } = this.httpAdapterHost;

        // Lấy context HTTP (framework-agnostic)
        const ctx = host.switchToHttp();
        const request = ctx.getRequest?.() ?? null;
        const url = request?.url ?? '';
        const method = request?.method ?? '';

        // Default
        let status = HttpStatus.INTERNAL_SERVER_ERROR;
        let exceptionResponse: ExceptionResponseShape = { message: 'Internal server error' };

        // Nếu là HttpException: lấy response + status
        if (exception instanceof HttpException) {
            status = exception.getStatus();
            exceptionResponse = exception.getResponse() as ExceptionResponseShape;
        } else if (exception instanceof Error) {
            // non-http exception (runtime)
            exceptionResponse = { message: exception.message };
        }

        // Extract fields safely
        let code = 'UNKNOWN_ERROR';
        let message = 'Something went wrong';

        // case: exceptionResponse là string
        if (typeof exceptionResponse === 'string') {
            message = exceptionResponse;
        } else if (Array.isArray(exceptionResponse)) {
            message = exceptionResponse.join(', ');
        } else if (typeof exceptionResponse === 'object' && exceptionResponse !== null) {
            // object hoặc { message: ..., code: ... }
            const respObj = exceptionResponse as { message?: any; code?: any; error?: any };

            // code ưu tiên từ code field, rồi error, rồi status name
            code = respObj.code ?? respObj.error ?? code;

            // message có thể là string | string[] | nested object (class-validator)
            const rawMsg = respObj.message;
            if (!rawMsg) {
                // try to fallback to exception.message if available
                if (exception instanceof Error && exception.message) message = exception.message;
            } else if (typeof rawMsg === 'string') {
                message = rawMsg;
            } else if (Array.isArray(rawMsg)) {
                message = rawMsg.join(', ');
            } else if (typeof rawMsg === 'object') {
                // thường class-validator trả về array/object; try to stringify or pick nested message
                if ('message' in rawMsg && typeof rawMsg.message === 'string') {
                    message = rawMsg.message;
                } else {
                    try {
                        message = JSON.stringify(rawMsg);
                    } catch {
                        message = String(rawMsg);
                    }
                }
            } else {
                message = String(rawMsg);
            }
        }

        // Chuẩn hoá code (nếu vẫn là UNKNOWN_ERROR, dùng HTTP status text)
        if (!code || code === 'UNKNOWN_ERROR') {
            code = HttpStatus[status] ? HttpStatus[status].toString() : `HTTP_${status}`;
        }

        // Log stack + request info (chi tiết) — quan trọng cho ops
        this.logger.error(
            `HTTP ${status} ${method} ${url} - ${message}`,
            (exception instanceof Error && exception.stack) || JSON.stringify(exception),
        );

        // Build response body
        const responseBody = {
            success: false,
            statusCode: status,
            code,
            message,
            path: url,
            timestamp: new Date().toISOString(),
        };

        // Nếu đang dev, bạn có thể thêm stack (cẩn thận không leak secret).
        if (process.env.NODE_ENV !== 'production' && exception instanceof Error) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            responseBody['stack'] = exception.stack;
        }

        // Sử dụng httpAdapter để trả response (framework-agnostic)
        httpAdapter.reply(ctx.getResponse(), responseBody, status);
    }
}
