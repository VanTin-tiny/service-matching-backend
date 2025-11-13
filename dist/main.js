/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/common.module.ts":
/*!*************************************!*\
  !*** ./src/common/common.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommonModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_service_1 = __webpack_require__(/*! ./services/jwt.service */ "./src/common/services/jwt.service.ts");
let CommonModule = class CommonModule {
};
exports.CommonModule = CommonModule;
exports.CommonModule = CommonModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [jwt_service_1.JwtService],
        exports: [jwt_service_1.JwtService],
    })
], CommonModule);


/***/ }),

/***/ "./src/common/constants/jwt.constant.ts":
/*!**********************************************!*\
  !*** ./src/common/constants/jwt.constant.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JWT_AUDIENCE = exports.JWT_ISSUER = void 0;
exports.JWT_ISSUER = 'auth-service';
exports.JWT_AUDIENCE = 'app-users';


/***/ }),

/***/ "./src/common/decorators/@Transaction.ts":
/*!***********************************************!*\
  !*** ./src/common/decorators/@Transaction.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionManager = exports.Transactional = exports.TRANSACTION_KEY = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.TRANSACTION_KEY = 'transaction';
const Transactional = () => (0, common_1.SetMetadata)(exports.TRANSACTION_KEY, true);
exports.Transactional = Transactional;
exports.TransactionManager = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.transactionManager;
});


/***/ }),

/***/ "./src/common/dtos/base-response.dto.ts":
/*!**********************************************!*\
  !*** ./src/common/dtos/base-response.dto.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseResponseDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class BaseResponseDto {
}
exports.BaseResponseDto = BaseResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], BaseResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Operation successful' }),
    __metadata("design:type", String)
], BaseResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Object, nullable: true }),
    __metadata("design:type", Object)
], BaseResponseDto.prototype, "data", void 0);


/***/ }),

/***/ "./src/common/dtos/error-response.dto.ts":
/*!***********************************************!*\
  !*** ./src/common/dtos/error-response.dto.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ErrorResponseDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class ErrorResponseDto {
}
exports.ErrorResponseDto = ErrorResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], ErrorResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 401 }),
    __metadata("design:type", Number)
], ErrorResponseDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'INVALID_CREDENTIALS' }),
    __metadata("design:type", String)
], ErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Invalid email or password' }),
    __metadata("design:type", String)
], ErrorResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '/auth/login' }),
    __metadata("design:type", String)
], ErrorResponseDto.prototype, "path", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-11-04T07:26:05.344Z' }),
    __metadata("design:type", String)
], ErrorResponseDto.prototype, "timestamp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        example: { field: 'email', reason: 'invalid format' }
    }),
    __metadata("design:type", typeof (_a = typeof Record !== "undefined" && Record) === "function" ? _a : Object)
], ErrorResponseDto.prototype, "details", void 0);


/***/ }),

/***/ "./src/common/enums/user-role.enum.ts":
/*!********************************************!*\
  !*** ./src/common/enums/user-role.enum.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole["CUSTOMER"] = "customer";
    UserRole["PROVIDER"] = "provider";
    UserRole["ADMIN"] = "admin";
})(UserRole || (exports.UserRole = UserRole = {}));


/***/ }),

/***/ "./src/common/exceptions/base-exception.ts":
/*!*************************************************!*\
  !*** ./src/common/exceptions/base-exception.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseException = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
class BaseException extends common_1.HttpException {
    constructor(code, message, statusCode, details) {
        super({ code, message, details }, statusCode);
        this.code = code;
        this.message = message;
        this.statusCode = statusCode;
        this.details = details;
    }
}
exports.BaseException = BaseException;


/***/ }),

/***/ "./src/common/exceptions/custom-exceptions/authorization.exception.ts":
/*!****************************************************************************!*\
  !*** ./src/common/exceptions/custom-exceptions/authorization.exception.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RateLimitExceededException = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const base_exception_1 = __webpack_require__(/*! ../base-exception */ "./src/common/exceptions/base-exception.ts");
class RateLimitExceededException extends base_exception_1.BaseException {
    constructor(limit, windowMs) {
        super('RATE_LIMIT_EXCEEDED', `Too many requests. Please try again in ${Math.ceil(windowMs / 1000)} seconds.`, common_1.HttpStatus.TOO_MANY_REQUESTS, { limit, windowMs });
    }
}
exports.RateLimitExceededException = RateLimitExceededException;


/***/ }),

/***/ "./src/common/exceptions/custom-exceptions/business.exception.ts":
/*!***********************************************************************!*\
  !*** ./src/common/exceptions/custom-exceptions/business.exception.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InsufficientPermissionsException = exports.BusinessRuleViolationException = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const base_exception_1 = __webpack_require__(/*! ../base-exception */ "./src/common/exceptions/base-exception.ts");
class BusinessRuleViolationException extends base_exception_1.BaseException {
    constructor(rule, message, details) {
        super('BUSINESS_RULE_VIOLATION', message, common_1.HttpStatus.BAD_REQUEST, { rule, ...details });
    }
}
exports.BusinessRuleViolationException = BusinessRuleViolationException;
class InsufficientPermissionsException extends base_exception_1.BaseException {
    constructor(action, resource) {
        super('INSUFFICIENT_PERMISSIONS', `You do not have permission to ${action} ${resource}`, common_1.HttpStatus.FORBIDDEN, { action, resource });
    }
}
exports.InsufficientPermissionsException = InsufficientPermissionsException;


/***/ }),

/***/ "./src/common/exceptions/custom-exceptions/resource.exception.ts":
/*!***********************************************************************!*\
  !*** ./src/common/exceptions/custom-exceptions/resource.exception.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourceAlreadyExistsException = exports.ResourceNotFoundException = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const base_exception_1 = __webpack_require__(/*! ../base-exception */ "./src/common/exceptions/base-exception.ts");
class ResourceNotFoundException extends base_exception_1.BaseException {
    constructor(resource, identifier) {
        super('RESOURCE_NOT_FOUND', `${resource} with identifier ${identifier} not found`, common_1.HttpStatus.NOT_FOUND, { resource, identifier });
    }
}
exports.ResourceNotFoundException = ResourceNotFoundException;
class ResourceAlreadyExistsException extends base_exception_1.BaseException {
    constructor(resource, field, value) {
        super('RESOURCE_ALREADY_EXISTS', `${resource} with ${field} '${value}' already exists`, common_1.HttpStatus.CONFLICT, { resource, field, value });
    }
}
exports.ResourceAlreadyExistsException = ResourceAlreadyExistsException;


/***/ }),

/***/ "./src/common/exceptions/custom-exceptions/server.exception.ts":
/*!*********************************************************************!*\
  !*** ./src/common/exceptions/custom-exceptions/server.exception.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InternalServerException = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const base_exception_1 = __webpack_require__(/*! ../base-exception */ "./src/common/exceptions/base-exception.ts");
class InternalServerException extends base_exception_1.BaseException {
    constructor(message = 'Internal server error', details) {
        super('INTERNAL_SERVER_ERROR', message, common_1.HttpStatus.INTERNAL_SERVER_ERROR, process.env.NODE_ENV === 'production' ? undefined : details);
    }
}
exports.InternalServerException = InternalServerException;


/***/ }),

/***/ "./src/common/exceptions/custom-exceptions/validation.exception.ts":
/*!*************************************************************************!*\
  !*** ./src/common/exceptions/custom-exceptions/validation.exception.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InvalidInputException = exports.ValidationException = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const base_exception_1 = __webpack_require__(/*! ../base-exception */ "./src/common/exceptions/base-exception.ts");
class ValidationException extends base_exception_1.BaseException {
    constructor(field, message, details) {
        super('VALIDATION_ERROR', message, common_1.HttpStatus.BAD_REQUEST, { field, ...details });
    }
}
exports.ValidationException = ValidationException;
class InvalidInputException extends base_exception_1.BaseException {
    constructor(message, details) {
        super('INVALID_INPUT', message, common_1.HttpStatus.BAD_REQUEST, details);
    }
}
exports.InvalidInputException = InvalidInputException;


/***/ }),

/***/ "./src/common/exceptions/filters/global-exception.filter.ts":
/*!******************************************************************!*\
  !*** ./src/common/exceptions/filters/global-exception.filter.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var GlobalExceptionFilter_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlobalExceptionFilter = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const base_exception_1 = __webpack_require__(/*! ../base-exception */ "./src/common/exceptions/base-exception.ts");
const index_1 = __webpack_require__(/*! ./index */ "./src/common/exceptions/filters/index.ts");
let GlobalExceptionFilter = GlobalExceptionFilter_1 = class GlobalExceptionFilter {
    constructor(httpAdapterHost) {
        this.httpAdapterHost = httpAdapterHost;
        this.logger = new common_1.Logger(GlobalExceptionFilter_1.name);
        this.isProduction = process.env.NODE_ENV === 'production';
        this.sensitiveRoutes = ['/auth/login', '/auth/register', '/auth/refresh'];
    }
    catch(exception, host) {
        const { httpAdapter } = this.httpAdapterHost;
        const ctx = host.switchToHttp();
        const request = ctx.getRequest();
        const response = ctx.getResponse();
        const path = request?.url ?? 'unknown';
        const method = request?.method ?? 'unknown';
        const timestamp = new Date().toISOString();
        const correlationId = request?.correlationId || 'unknown';
        const errorResponse = this.buildErrorResponse(exception, path, timestamp);
        (0, index_1.logError)(this.logger, exception, method, path, errorResponse, correlationId, request);
        httpAdapter.reply(response, errorResponse, errorResponse.statusCode);
    }
    buildErrorResponse(exception, path, timestamp) {
        if (this.isBaseException(exception)) {
            return {
                success: false,
                statusCode: exception.statusCode,
                code: exception.code,
                message: exception.message,
                details: exception.details,
                path,
                timestamp,
            };
        }
        if (this.isQueryFailedError(exception)) {
            return (0, index_1.handleDatabaseError)(exception, path, timestamp);
        }
        if (this.isHttpException(exception)) {
            const status = exception.getStatus();
            const exceptionResponse = exception.getResponse();
            return {
                success: false,
                statusCode: status,
                code: (0, index_1.extractCode)(exceptionResponse, status),
                message: (0, index_1.extractMessage)(exceptionResponse, exception),
                details: (0, index_1.extractDetails)(exceptionResponse),
                path,
                timestamp,
            };
        }
        return {
            success: false,
            statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
            code: 'INTERNAL_SERVER_ERROR',
            message: this.isProduction
                ? 'An unexpected error occurred'
                : exception.message,
            details: this.isProduction
                ? undefined
                : {
                    name: exception.name,
                    stack: exception.stack?.split('\n').slice(0, 5).join('\n'),
                },
            path,
            timestamp,
        };
    }
    isBaseException(exception) {
        return exception instanceof base_exception_1.BaseException;
    }
    isQueryFailedError(exception) {
        return exception instanceof typeorm_1.QueryFailedError;
    }
    isHttpException(exception) {
        return exception instanceof common_1.HttpException;
    }
};
exports.GlobalExceptionFilter = GlobalExceptionFilter;
exports.GlobalExceptionFilter = GlobalExceptionFilter = GlobalExceptionFilter_1 = __decorate([
    (0, common_1.Catch)(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.HttpAdapterHost !== "undefined" && core_1.HttpAdapterHost) === "function" ? _a : Object])
], GlobalExceptionFilter);


/***/ }),

/***/ "./src/common/exceptions/filters/handlers/database-error.handler.ts":
/*!**************************************************************************!*\
  !*** ./src/common/exceptions/filters/handlers/database-error.handler.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleDatabaseError = handleDatabaseError;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
function handleDatabaseError(error, path, timestamp, isProduction = false) {
    const isPostgresError = (error) => {
        return 'code' in error && typeof error.code === 'string';
    };
    if (!isPostgresError(error)) {
        return {
            success: false,
            statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
            code: 'DATABASE_ERROR',
            message: isProduction
                ? 'A database error occurred'
                : error.message,
            path,
            timestamp,
        };
    }
    const pgError = error;
    switch (pgError.code) {
        case '23505':
            return {
                success: false,
                statusCode: common_1.HttpStatus.CONFLICT,
                code: 'DUPLICATE_ENTRY',
                message: 'A record with this value already exists',
                details: isProduction
                    ? undefined
                    : {
                        constraint: pgError.constraint,
                        detail: pgError.detail,
                    },
                path,
                timestamp,
            };
        case '23503':
            return {
                success: false,
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                code: 'FOREIGN_KEY_VIOLATION',
                message: 'Referenced record does not exist',
                details: isProduction
                    ? undefined
                    : {
                        constraint: pgError.constraint,
                    },
                path,
                timestamp,
            };
        case '23502':
            return {
                success: false,
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                code: 'MISSING_REQUIRED_FIELD',
                message: 'Required field is missing',
                details: isProduction
                    ? undefined
                    : {
                        column: pgError.column,
                    },
                path,
                timestamp,
            };
        case '22P02':
            return {
                success: false,
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                code: 'INVALID_DATA_FORMAT',
                message: 'Invalid data format',
                path,
                timestamp,
            };
        default:
            return {
                success: false,
                statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                code: 'DATABASE_ERROR',
                message: isProduction
                    ? 'A database error occurred'
                    : error.message,
                details: isProduction
                    ? undefined
                    : {
                        code: pgError.code,
                        detail: pgError.detail,
                    },
                path,
                timestamp,
            };
    }
}


/***/ }),

/***/ "./src/common/exceptions/filters/index.ts":
/*!************************************************!*\
  !*** ./src/common/exceptions/filters/index.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./handlers/database-error.handler */ "./src/common/exceptions/filters/handlers/database-error.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./utils/extract.util */ "./src/common/exceptions/filters/utils/extract.util.ts"), exports);
__exportStar(__webpack_require__(/*! ./utils/log-error.util */ "./src/common/exceptions/filters/utils/log-error.util.ts"), exports);
__exportStar(__webpack_require__(/*! ./utils/validation.util */ "./src/common/exceptions/filters/utils/validation.util.ts"), exports);


/***/ }),

/***/ "./src/common/exceptions/filters/utils/extract.util.ts":
/*!*************************************************************!*\
  !*** ./src/common/exceptions/filters/utils/extract.util.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.extractCode = extractCode;
exports.extractMessage = extractMessage;
exports.extractDetails = extractDetails;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const validation_util_1 = __webpack_require__(/*! ./validation.util */ "./src/common/exceptions/filters/utils/validation.util.ts");
function extractCode(response, status) {
    if (typeof response === 'object' && response !== null) {
        if (response.code) {
            return response.code;
        }
        if (response.error) {
            return response.error;
        }
    }
    return common_1.HttpStatus[status] ?? `HTTP_${status}`;
}
function extractMessage(response, exception) {
    if (typeof response === 'string') {
        return response;
    }
    if (typeof response === 'object' && response !== null) {
        const message = response.message;
        if (Array.isArray(message)) {
            return message.join(', ');
        }
        if (typeof message === 'string') {
            return message;
        }
        if (typeof message === 'object' && message !== null) {
            const messages = (0, validation_util_1.flattenValidationErrors)(message);
            return messages.join(', ');
        }
    }
    return exception.message || 'An error occurred';
}
function extractDetails(response) {
    if (typeof response === 'object' && response !== null) {
        const { message, code, error, statusCode, ...details } = response;
        return Object.keys(details).length > 0 ? details : undefined;
    }
    return undefined;
}


/***/ }),

/***/ "./src/common/exceptions/filters/utils/log-error.util.ts":
/*!***************************************************************!*\
  !*** ./src/common/exceptions/filters/utils/log-error.util.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.logError = logError;
function logError(logger, exception, method, path, errorResponse, correlationId, request, isProduction, sensitiveRoutes = []) {
    const { statusCode, code, message } = errorResponse;
    const isSensitive = sensitiveRoutes.some((route) => path.includes(route));
    const logContext = {
        correlationId,
        method,
        path,
        statusCode,
        code,
        message,
        timestamp: errorResponse.timestamp,
    };
    if (request?.user?.id) {
        logContext.userId = request.user.id;
    }
    if (statusCode >= 500 && !isProduction) {
        logContext.errorName = exception.name;
        if (exception instanceof Error && exception.stack) {
            logContext.stack = exception.stack.split('\n').slice(0, 5).join('\n');
        }
    }
    if (statusCode >= 500) {
        logger.error(JSON.stringify(logContext), exception instanceof Error ? exception.stack : undefined);
    }
    else if (statusCode === 401 || statusCode === 403) {
        if (isSensitive) {
            logger.warn(JSON.stringify({
                correlationId,
                method,
                path,
                statusCode,
                timestamp: errorResponse.timestamp,
            }));
        }
        else {
            logger.warn(JSON.stringify(logContext));
        }
    }
    else if (statusCode >= 400) {
        logger.warn(JSON.stringify(logContext));
    }
    else {
        logger.log(JSON.stringify(logContext));
    }
}


/***/ }),

/***/ "./src/common/exceptions/filters/utils/validation.util.ts":
/*!****************************************************************!*\
  !*** ./src/common/exceptions/filters/utils/validation.util.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.flattenValidationErrors = flattenValidationErrors;
function flattenValidationErrors(obj) {
    const messages = [];
    for (const key in obj) {
        const value = obj[key];
        if (typeof value === 'string') {
            messages.push(value);
        }
        else if (Array.isArray(value)) {
            messages.push(...value.filter((v) => typeof v === 'string'));
        }
        else if (typeof value === 'object' && value !== null) {
            messages.push(...flattenValidationErrors(value));
        }
    }
    return messages;
}


/***/ }),

/***/ "./src/common/exceptions/index.ts":
/*!****************************************!*\
  !*** ./src/common/exceptions/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./base-exception */ "./src/common/exceptions/base-exception.ts"), exports);
__exportStar(__webpack_require__(/*! ./custom-exceptions/authorization.exception */ "./src/common/exceptions/custom-exceptions/authorization.exception.ts"), exports);
__exportStar(__webpack_require__(/*! ./custom-exceptions/business.exception */ "./src/common/exceptions/custom-exceptions/business.exception.ts"), exports);
__exportStar(__webpack_require__(/*! ./custom-exceptions/resource.exception */ "./src/common/exceptions/custom-exceptions/resource.exception.ts"), exports);
__exportStar(__webpack_require__(/*! ./custom-exceptions/server.exception */ "./src/common/exceptions/custom-exceptions/server.exception.ts"), exports);
__exportStar(__webpack_require__(/*! ./custom-exceptions/validation.exception */ "./src/common/exceptions/custom-exceptions/validation.exception.ts"), exports);
__exportStar(__webpack_require__(/*! ./filters/global-exception.filter */ "./src/common/exceptions/filters/global-exception.filter.ts"), exports);


/***/ }),

/***/ "./src/common/interceptors/correlation-id.interceptor.ts":
/*!***************************************************************!*\
  !*** ./src/common/interceptors/correlation-id.interceptor.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CorrelationIdInterceptor = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
let CorrelationIdInterceptor = class CorrelationIdInterceptor {
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const response = context.switchToHttp().getResponse();
        const correlationId = request.headers['x-correlation-id'] ||
            (0, uuid_1.v4)();
        request.correlationId = correlationId;
        response.setHeader('X-Correlation-ID', correlationId);
        return next.handle();
    }
};
exports.CorrelationIdInterceptor = CorrelationIdInterceptor;
exports.CorrelationIdInterceptor = CorrelationIdInterceptor = __decorate([
    (0, common_1.Injectable)()
], CorrelationIdInterceptor);


/***/ }),

/***/ "./src/common/interceptors/logging.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/common/interceptors/logging.interceptor.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LoggingInterceptor_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggingInterceptor = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
let LoggingInterceptor = LoggingInterceptor_1 = class LoggingInterceptor {
    constructor() {
        this.logger = new common_1.Logger(LoggingInterceptor_1.name);
        this.sensitiveRoutes = ['/auth/login', '/auth/register', '/auth/refresh'];
    }
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const response = context.switchToHttp().getResponse();
        const startTime = Date.now();
        const logContext = {
            correlationId: request.correlationId || 'unknown',
            method: request.method,
            path: request.url,
            clientIp: this.extractClientIp(request),
            userAgent: request.headers['user-agent'] || 'unknown',
        };
        if (request.user) {
            logContext.userId = request.user.id;
        }
        if (request.headers['x-device-id']) {
            logContext.deviceId = request.headers['x-device-id'];
        }
        return next.handle().pipe((0, operators_1.tap)(() => {
            logContext.duration = Date.now() - startTime;
            logContext.statusCode = response.statusCode;
            this.logRequest(logContext, 'SUCCESS');
        }), (0, operators_1.catchError)((error) => {
            logContext.duration = Date.now() - startTime;
            logContext.statusCode = error.status || 500;
            logContext.error = error.message;
            this.logRequest(logContext, 'ERROR');
            throw error;
        }));
    }
    logRequest(context, type) {
        const isSensitive = this.sensitiveRoutes.some(route => context.path.includes(route));
        const sanitizedContext = isSensitive
            ? {
                correlationId: context.correlationId,
                method: context.method,
                path: context.path,
                statusCode: context.statusCode,
                duration: context.duration,
            }
            : context;
        const message = `${context.method} ${context.path} - ${context.statusCode} (${context.duration}ms)`;
        if (type === 'ERROR') {
            this.logger.error(message, JSON.stringify(sanitizedContext));
        }
        else if (context.statusCode && context.statusCode >= 400) {
            this.logger.warn(message, JSON.stringify(sanitizedContext));
        }
        else {
            this.logger.log(message, JSON.stringify(sanitizedContext));
        }
    }
    extractClientIp(request) {
        return (request.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
            request.headers['x-real-ip'] ||
            request.socket.remoteAddress ||
            'unknown');
    }
};
exports.LoggingInterceptor = LoggingInterceptor;
exports.LoggingInterceptor = LoggingInterceptor = LoggingInterceptor_1 = __decorate([
    (0, common_1.Injectable)()
], LoggingInterceptor);


/***/ }),

/***/ "./src/common/interceptors/transaction.interceptor.ts":
/*!************************************************************!*\
  !*** ./src/common/interceptors/transaction.interceptor.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionInterceptor = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const _Transaction_1 = __webpack_require__(/*! ../decorators/@Transaction */ "./src/common/decorators/@Transaction.ts");
let TransactionInterceptor = class TransactionInterceptor {
    constructor(dataSource, reflector) {
        this.dataSource = dataSource;
        this.reflector = reflector;
    }
    async intercept(context, next) {
        const isTransactional = this.reflector.get(_Transaction_1.TRANSACTION_KEY, context.getHandler());
        if (!isTransactional) {
            return next.handle();
        }
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        const request = context.switchToHttp().getRequest();
        request.transactionManager = queryRunner.manager;
        return next.handle().pipe((0, operators_1.tap)(async () => {
            await queryRunner.commitTransaction();
            await queryRunner.release();
        }), (0, operators_1.catchError)(async (error) => {
            await queryRunner.rollbackTransaction();
            await queryRunner.release();
            return (0, rxjs_1.throwError)(() => error);
        }));
    }
};
exports.TransactionInterceptor = TransactionInterceptor;
exports.TransactionInterceptor = TransactionInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(typeorm_1.DataSource)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.DataSource !== "undefined" && typeorm_1.DataSource) === "function" ? _a : Object, typeof (_b = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _b : Object])
], TransactionInterceptor);


/***/ }),

/***/ "./src/common/services/jwt.service.ts":
/*!********************************************!*\
  !*** ./src/common/services/jwt.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var JwtService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtService = void 0;
const jwt_constant_1 = __webpack_require__(/*! @/common/constants/jwt.constant */ "./src/common/constants/jwt.constant.ts");
const user_role_enum_1 = __webpack_require__(/*! @/common/enums/user-role.enum */ "./src/common/enums/user-role.enum.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jsonwebtoken_1 = __importDefault(__webpack_require__(/*! jsonwebtoken */ "jsonwebtoken"));
let JwtService = JwtService_1 = class JwtService {
    constructor(configService) {
        this.configService = configService;
        this.logger = new common_1.Logger(JwtService_1.name);
        this.jwtSecret = this.getEnv('JWT_SECRET');
        this.jwtRefreshSecret = this.getEnv('JWT_REFRESH_SECRET');
        this.jwtAccessExpire = this.parseExpire(this.getEnv('JWT_EXPIRES_IN'));
        this.jwtRefreshExpire = this.parseExpire(this.getEnv('JWT_REFRESH_EXPIRES_IN'));
    }
    getEnv(key) {
        const value = this.configService.get(key);
        if (!value)
            throw new Error(`Missing environment variable: ${key}`);
        return value;
    }
    isDurationFormat(value) {
        return /^\d+(s|m|h|d)$/.test(value);
    }
    parseExpire(value) {
        const numeric = Number(value);
        if (!Number.isNaN(numeric))
            return numeric;
        if (this.isDurationFormat(value))
            return value;
        throw new Error(`Invalid token expiration: ${value}`);
    }
    isJwtPayload(obj) {
        if (typeof obj !== 'object' || obj === null)
            return false;
        const o = obj;
        if (typeof o.id !== 'string')
            return false;
        if ('email' in o && typeof o.email !== 'string')
            return false;
        if ('role' in o && typeof o.role !== 'string')
            return false;
        return true;
    }
    sanitizePayload(payload) {
        if (!payload || typeof payload !== 'object') {
            throw new common_1.UnauthorizedException('Invalid JWT payload format');
        }
        const { id, email, role } = payload;
        if (!id || typeof id !== 'string') {
            throw new common_1.UnauthorizedException('Missing or invalid "id" in JWT payload');
        }
        if (email && typeof email !== 'string') {
            throw new common_1.UnauthorizedException('Invalid "email" in JWT payload');
        }
        const validRoles = Object.values(user_role_enum_1.UserRole);
        if (!role || !validRoles.includes(role)) {
            throw new common_1.UnauthorizedException('Invalid or missing "role" in JWT payload');
        }
        return {
            id: id.trim(),
            email: email?.trim() ?? '',
            role,
        };
    }
    generateAccessToken(payload) {
        const cleanPayload = this.sanitizePayload(payload);
        const options = {
            expiresIn: this.jwtAccessExpire,
            issuer: jwt_constant_1.JWT_ISSUER,
            subject: payload.id.toString(),
            audience: jwt_constant_1.JWT_AUDIENCE,
        };
        return jsonwebtoken_1.default.sign(cleanPayload, this.jwtSecret, options);
    }
    generateRefreshToken(payload) {
        const cleanPayload = this.sanitizePayload(payload);
        const options = {
            expiresIn: this.jwtRefreshExpire,
            issuer: jwt_constant_1.JWT_ISSUER,
            subject: payload.id.toString(),
            audience: jwt_constant_1.JWT_AUDIENCE,
        };
        return jsonwebtoken_1.default.sign(cleanPayload, this.jwtRefreshSecret, options);
    }
    verifyAccessToken(token) {
        return this.verify(token, this.jwtSecret, 'ACCESS');
    }
    verifyRefreshToken(token) {
        return this.verify(token, this.jwtRefreshSecret, 'REFRESH');
    }
    verify(token, secret, type) {
        try {
            const decoded = jsonwebtoken_1.default.verify(token, secret);
            if (!this.isJwtPayload(decoded)) {
                throw new common_1.UnauthorizedException({
                    code: `INVALID_${type}_TOKEN_PAYLOAD`,
                    message: `Invalid ${type.toLowerCase()} token payload`,
                });
            }
            return decoded;
        }
        catch (err) {
            const message = err?.message ?? 'Token verification failed';
            this.logger.warn(`${type} token invalid: ${message}`);
            throw new common_1.UnauthorizedException({
                code: `INVALID_${type}_TOKEN`,
                message: `${type} token is invalid or expired`,
            });
        }
    }
    extractTokenFromHeader(authHeader) {
        if (!authHeader)
            return null;
        const [type, token] = authHeader.split(' ');
        return type === 'Bearer' && token ? token : null;
    }
};
exports.JwtService = JwtService;
exports.JwtService = JwtService = JwtService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], JwtService);


/***/ }),

/***/ "./src/common/tests/health-check-response.interface.ts":
/*!*************************************************************!*\
  !*** ./src/common/tests/health-check-response.interface.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/common/utils/error.util.ts":
/*!****************************************!*\
  !*** ./src/common/utils/error.util.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ErrorUtil = void 0;
class ErrorUtil {
    static getMessage(error) {
        if (error instanceof Error) {
            return error.message;
        }
        if (typeof error === 'string') {
            return error;
        }
        if (error && typeof error === 'object' && 'message' in error) {
            return String(error.message);
        }
        return 'Unknown error occurred';
    }
    static getStack(error) {
        if (error instanceof Error && error.stack) {
            return error.stack;
        }
        return undefined;
    }
    static isKnownException(error, ...exceptionTypes) {
        if (!error || typeof error !== 'object') {
            return false;
        }
        return exceptionTypes.some((ExceptionType) => error instanceof ExceptionType);
    }
}
exports.ErrorUtil = ErrorUtil;


/***/ }),

/***/ "./src/config/config.module.ts":
/*!*************************************!*\
  !*** ./src/config/config.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppConfigModule = void 0;
const redis_config_1 = __importDefault(__webpack_require__(/*! @/config/redis.config */ "./src/config/redis.config.ts"));
const validation_config_1 = __importDefault(__webpack_require__(/*! @/config/validation.config */ "./src/config/validation.config.ts"));
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const database_config_1 = __importDefault(__webpack_require__(/*! ./database.config */ "./src/config/database.config.ts"));
let AppConfigModule = class AppConfigModule {
};
exports.AppConfigModule = AppConfigModule;
exports.AppConfigModule = AppConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [database_config_1.default, redis_config_1.default],
                validationSchema: validation_config_1.default,
                envFilePath: [
                    `.env.${process.env.NODE_ENV || 'development'}`,
                    '.env',
                ],
                validationOptions: {
                    abortEarly: false,
                    allowUnknown: true,
                },
            }),
        ],
    })
], AppConfigModule);


/***/ }),

/***/ "./src/config/database.config.ts":
/*!***************************************!*\
  !*** ./src/config/database.config.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
exports["default"] = (0, config_1.registerAs)('database', () => ({
    type: 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: process.env.DATABASE_PORT || '5432',
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
}));


/***/ }),

/***/ "./src/config/redis.config.ts":
/*!************************************!*\
  !*** ./src/config/redis.config.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
exports["default"] = (0, config_1.registerAs)('redis', () => ({
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || '6379',
    password: process.env.REDIS_PASSWORD || undefined,
    ttl: process.env.REDIS_TTL || '3600',
}));


/***/ }),

/***/ "./src/config/validation.config.ts":
/*!*****************************************!*\
  !*** ./src/config/validation.config.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Joi = __importStar(__webpack_require__(/*! joi */ "joi"));
exports["default"] = Joi.object({
    DATABASE_HOST: Joi.string().required(),
    DATABASE_PORT: Joi.number().default(5432),
    DATABASE_USERNAME: Joi.string().required(),
    DATABASE_PASSWORD: Joi.string().allow('').default(''),
    DATABASE_NAME: Joi.string().required(),
    REDIS_HOST: Joi.string().required(),
    REDIS_PORT: Joi.number().default(6379),
    REDIS_PASSWORD: Joi.string().allow('').default(''),
    JWT_SECRET: Joi.string().required(),
    JWT_EXPIRES_IN: Joi.string().default('1d'),
});


/***/ }),

/***/ "./src/core/app.module.ts":
/*!********************************!*\
  !*** ./src/core/app.module.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_module_1 = __webpack_require__(/*! @/common/common.module */ "./src/common/common.module.ts");
const config_module_1 = __webpack_require__(/*! @/config/config.module */ "./src/config/config.module.ts");
const typeorm_module_1 = __webpack_require__(/*! @/database/typeorm.module */ "./src/database/typeorm.module.ts");
const auth_module_1 = __webpack_require__(/*! @/modules/auth/auth.module */ "./src/modules/auth/auth.module.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const throttler_1 = __webpack_require__(/*! @nestjs/throttler */ "@nestjs/throttler");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_module_1.AppConfigModule,
            typeorm_module_1.TypeOrmDatabaseModule,
            auth_module_1.AuthModule,
            common_module_1.CommonModule,
            throttler_1.ThrottlerModule.forRoot([{
                    ttl: 60000,
                    limit: 10,
                }])
        ],
        controllers: [],
        providers: [],
    })
], AppModule);


/***/ }),

/***/ "./src/database/typeorm.module.ts":
/*!****************************************!*\
  !*** ./src/database/typeorm.module.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TypeOrmDatabaseModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
let TypeOrmDatabaseModule = class TypeOrmDatabaseModule {
};
exports.TypeOrmDatabaseModule = TypeOrmDatabaseModule;
exports.TypeOrmDatabaseModule = TypeOrmDatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (config) => {
                    const password = config.get('DATABASE_PASSWORD');
                    return {
                        type: 'postgres',
                        host: config.get('DATABASE_HOST', 'localhost'),
                        port: config.get('DATABASE_PORT', 5432),
                        username: config.get('DATABASE_USERNAME', 'postgres'),
                        password: password || '',
                        database: config.get('DATABASE_NAME', 'service_matching'),
                        autoLoadEntities: true,
                        synchronize: true,
                        logging: process.env.NODE_ENV === 'development',
                        ssl: false,
                    };
                },
            }),
        ],
    })
], TypeOrmDatabaseModule);


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const app_module_1 = __webpack_require__(/*! @/core/app.module */ "./src/core/app.module.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const cookie_parser_1 = __importDefault(__webpack_require__(/*! cookie-parser */ "cookie-parser"));
const index_1 = __webpack_require__(/*! ./common/exceptions/index */ "./src/common/exceptions/index.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((0, cookie_parser_1.default)());
    const httpAdapterHost = app.get(core_1.HttpAdapterHost);
    app.useGlobalFilters(new index_1.GlobalExceptionFilter(httpAdapterHost));
    const configService = app.get(config_1.ConfigService);
    app.enableCors({
        origin: [
            'https://postmaxillary-variably-justa.ngrok-free.dev',
        ],
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Service Matching API')
        .setDescription('API for service-matching platform')
        .setVersion('1.0')
        .addBearerAuth()
        .addServer('/api/v1')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    const apiPrefix = configService.get('API_PREFIX', 'api');
    app.setGlobalPrefix(apiPrefix);
    app.setGlobalPrefix(process.env.API_PREFIX || 'api');
    await app.listen(process.env.APP_PORT || 3000);
}
bootstrap();


/***/ }),

/***/ "./src/modules/auth/auth.controller.ts":
/*!*********************************************!*\
  !*** ./src/modules/auth/auth.controller.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const error_response_dto_1 = __webpack_require__(/*! @/common/dtos/error-response.dto */ "./src/common/dtos/error-response.dto.ts");
const health_check_response_interface_1 = __webpack_require__(/*! @/common/tests//health-check-response.interface */ "./src/common/tests/health-check-response.interface.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const throttler_1 = __webpack_require__(/*! @nestjs/throttler */ "@nestjs/throttler");
const express_1 = __webpack_require__(/*! express */ "express");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/modules/auth/auth.service.ts");
const device_id_decorator_1 = __webpack_require__(/*! ./decorators/device-id.decorator */ "./src/modules/auth/decorators/device-id.decorator.ts");
const login_mobile_dto_1 = __webpack_require__(/*! ./dtos/login-mobile.dto */ "./src/modules/auth/dtos/login-mobile.dto.ts");
const login_response_dto_1 = __webpack_require__(/*! ./dtos/login-response.dto */ "./src/modules/auth/dtos/login-response.dto.ts");
const login_dto_1 = __webpack_require__(/*! ./dtos/login.dto */ "./src/modules/auth/dtos/login.dto.ts");
const register_response_dto_1 = __webpack_require__(/*! ./dtos/register-response.dto */ "./src/modules/auth/dtos/register-response.dto.ts");
const register_dto_1 = __webpack_require__(/*! ./dtos/register.dto */ "./src/modules/auth/dtos/register.dto.ts");
const device_id_validation_pipe_1 = __webpack_require__(/*! ./pipes/device-id-validation.pipe */ "./src/modules/auth/pipes/device-id-validation.pipe.ts");
const auth_response_builder_service_1 = __webpack_require__(/*! ./services/auth-response-builder.service */ "./src/modules/auth/services/auth-response-builder.service.ts");
const cookie_service_1 = __webpack_require__(/*! ./services/cookie.service */ "./src/modules/auth/services/cookie.service.ts");
let AuthController = class AuthController {
    constructor(authService, cookieService, responseBuilder) {
        this.authService = authService;
        this.cookieService = cookieService;
        this.responseBuilder = responseBuilder;
    }
    healthCheck() {
        return this.responseBuilder.buildHealthCheckResponse();
    }
    async register(registerDto) {
        const result = await this.authService.register(registerDto);
        return this.responseBuilder.buildRegisterResponse(result);
    }
    async logoutAll(req, bodyRefreshToken, res) {
        const refreshToken = this.cookieService.extractRefreshTokenFromCookie(req) ?? bodyRefreshToken;
        await this.authService.revokeAllUserTokens(refreshToken);
        this.cookieService.clearRefreshTokenCookie(res);
        return this.responseBuilder.buildLogoutAllResponse();
    }
    async login(loginDto, res) {
        const result = await this.authService.login(loginDto);
        this.cookieService.setRefreshTokenCookie(res, result.refreshToken);
        return this.responseBuilder.buildLoginResponse(result);
    }
    async refresh(req, res) {
        const refreshToken = this.cookieService.extractRefreshTokenFromCookie(req);
        const tokens = await this.authService.refreshAccessToken({ refreshToken, deviceId: undefined });
        this.cookieService.setRefreshTokenCookie(res, tokens.refreshToken);
        return this.responseBuilder.buildRefreshResponse(tokens.accessToken);
    }
    async logout(req, res) {
        const refreshToken = this.cookieService.extractRefreshTokenFromCookie(req);
        await this.authService.revokeRefreshToken({
            refreshToken,
            deviceId: undefined,
        });
        this.cookieService.clearRefreshTokenCookie(res);
        return this.responseBuilder.buildLogoutResponse();
    }
    async loginMobile(loginDto, deviceId) {
        const result = await this.authService.loginMobile({
            ...loginDto,
            deviceId,
        });
        return this.responseBuilder.buildLoginMobileResponse(result);
    }
    async refreshMobile(refreshToken, deviceId) {
        const tokens = await this.authService.refreshAccessToken({
            refreshToken,
            deviceId,
        });
        return this.responseBuilder.buildRefreshMobileResponse(tokens);
    }
    async logoutMobile(refreshToken, deviceId) {
        await this.authService.revokeRefreshToken({ refreshToken, deviceId });
        return this.responseBuilder.buildLogoutResponse();
    }
    async logoutDevice(refreshToken, deviceId) {
        await this.authService.revokeAllDeviceTokens(refreshToken, deviceId);
        return this.responseBuilder.buildLogoutDeviceResponse();
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Get)('health'),
    (0, swagger_1.ApiExcludeEndpoint)(),
    (0, swagger_1.ApiTags)('Auth - Common'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Health check auth',
        description: 'Check if the authentication service is healthy',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Service is healthy',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_d = typeof health_check_response_interface_1.HealthCheckResponse !== "undefined" && health_check_response_interface_1.HealthCheckResponse) === "function" ? _d : Object)
], AuthController.prototype, "healthCheck", null);
__decorate([
    (0, common_1.Post)('register'),
    (0, swagger_1.ApiTags)('Auth - Common'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, throttler_1.Throttle)({ default: { limit: 5, ttl: 60000 } }),
    (0, swagger_1.ApiOperation)({
        summary: 'Register a new user',
        description: 'Create a new account using email, phone, and password.',
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Registration successful',
        type: register_response_dto_1.RegisterResponseDto,
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Invalid registration data',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    (0, swagger_1.ApiInternalServerErrorResponse)({
        description: 'Internal server error',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof register_dto_1.RegisterDto !== "undefined" && register_dto_1.RegisterDto) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('logout-all'),
    (0, swagger_1.ApiTags)('Auth - Common'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Logout from all devices',
        description: 'Revoke all refresh tokens for the current user.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Logged out from all devices successfully',
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Invalid or missing token',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)('refreshToken')),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _g : Object, String, typeof (_h = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], AuthController.prototype, "logoutAll", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiTags)('Auth - Web'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, throttler_1.Throttle)({ default: { limit: 10, ttl: 60000 } }),
    (0, swagger_1.ApiOperation)({
        summary: 'Login (Web)',
        description: 'Authenticate user via web browser. Refresh token stored in httpOnly cookie.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Login successful',
        type: login_response_dto_1.LoginResponseDto,
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Invalid credentials',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    (0, swagger_1.ApiForbiddenResponse)({
        description: 'Account not activated',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    (0, swagger_1.ApiInternalServerErrorResponse)({
        description: 'Internal server error',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof login_dto_1.LoginDto !== "undefined" && login_dto_1.LoginDto) === "function" ? _k : Object, typeof (_l = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _l : Object]),
    __metadata("design:returntype", typeof (_m = typeof Promise !== "undefined" && Promise) === "function" ? _m : Object)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('refresh'),
    (0, swagger_1.ApiTags)('Auth - Web'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, throttler_1.Throttle)({ default: { limit: 20, ttl: 60000 } }),
    (0, swagger_1.ApiOperation)({
        summary: 'Refresh access token (Web)',
        description: 'Generate new tokens using refresh token from cookie.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Token refreshed successfully',
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Invalid or expired refresh token',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_o = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _o : Object, typeof (_p = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _p : Object]),
    __metadata("design:returntype", typeof (_q = typeof Promise !== "undefined" && Promise) === "function" ? _q : Object)
], AuthController.prototype, "refresh", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, swagger_1.ApiTags)('Auth - Web'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Logout (Web)',
        description: 'Revoke refresh token and clear cookie.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Logout successful',
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Invalid or missing token',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_r = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _r : Object, typeof (_s = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _s : Object]),
    __metadata("design:returntype", typeof (_t = typeof Promise !== "undefined" && Promise) === "function" ? _t : Object)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Post)('login-mobile'),
    (0, swagger_1.ApiTags)('Auth - Mobile'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, throttler_1.Throttle)({ default: { limit: 10, ttl: 60000 } }),
    (0, swagger_1.ApiOperation)({
        summary: 'Login (Mobile)',
        description: 'Authenticate user via mobile app. Requires X-Device-ID header.',
    }),
    (0, swagger_1.ApiHeader)({
        name: 'X-Device-ID',
        description: 'Unique device identifier (UUID recommended)',
        required: true,
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Login successful',
        type: login_response_dto_1.LoginResponseDto,
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Invalid credentials',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    (0, swagger_1.ApiInternalServerErrorResponse)({
        description: 'Internal server error',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, device_id_decorator_1.DeviceId)(device_id_validation_pipe_1.DeviceIdValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_u = typeof login_mobile_dto_1.LoginMobileDto !== "undefined" && login_mobile_dto_1.LoginMobileDto) === "function" ? _u : Object, String]),
    __metadata("design:returntype", typeof (_v = typeof Promise !== "undefined" && Promise) === "function" ? _v : Object)
], AuthController.prototype, "loginMobile", null);
__decorate([
    (0, common_1.Post)('refresh-mobile'),
    (0, swagger_1.ApiTags)('Auth - Mobile'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, throttler_1.Throttle)({ default: { limit: 20, ttl: 60000 } }),
    (0, swagger_1.ApiOperation)({
        summary: 'Refresh access token (Mobile)',
        description: 'Generate new tokens using refresh token from request body.',
    }),
    (0, swagger_1.ApiHeader)({
        name: 'X-Device-ID',
        description: 'Unique device identifier',
        required: true,
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Token refreshed successfully',
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Invalid or expired refresh token',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Body)('refreshToken')),
    __param(1, (0, device_id_decorator_1.DeviceId)(device_id_validation_pipe_1.DeviceIdValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", typeof (_w = typeof Promise !== "undefined" && Promise) === "function" ? _w : Object)
], AuthController.prototype, "refreshMobile", null);
__decorate([
    (0, common_1.Post)('logout-mobile'),
    (0, swagger_1.ApiTags)('Auth - Mobile'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Logout (Mobile)',
        description: 'Revoke refresh token for specific device.',
    }),
    (0, swagger_1.ApiHeader)({
        name: 'X-Device-ID',
        description: 'Unique device identifier',
        required: true,
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Logout successful',
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Invalid or missing token',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Body)('refreshToken')),
    __param(1, (0, device_id_decorator_1.DeviceId)(device_id_validation_pipe_1.DeviceIdValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", typeof (_x = typeof Promise !== "undefined" && Promise) === "function" ? _x : Object)
], AuthController.prototype, "logoutMobile", null);
__decorate([
    (0, common_1.Post)('logout-device'),
    (0, swagger_1.ApiTags)('Auth - Mobile'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Logout specific device (Mobile)',
        description: 'Revoke all tokens for a specific device.',
    }),
    (0, swagger_1.ApiHeader)({
        name: 'X-Device-ID',
        description: 'Device identifier to logout',
        required: true,
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Device logged out successfully',
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Invalid or missing token',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Body)('refreshToken')),
    __param(1, (0, device_id_decorator_1.DeviceId)(device_id_validation_pipe_1.DeviceIdValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", typeof (_y = typeof Promise !== "undefined" && Promise) === "function" ? _y : Object)
], AuthController.prototype, "logoutDevice", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object, typeof (_b = typeof cookie_service_1.CookieService !== "undefined" && cookie_service_1.CookieService) === "function" ? _b : Object, typeof (_c = typeof auth_response_builder_service_1.AuthResponseBuilder !== "undefined" && auth_response_builder_service_1.AuthResponseBuilder) === "function" ? _c : Object])
], AuthController);


/***/ }),

/***/ "./src/modules/auth/auth.module.ts":
/*!*****************************************!*\
  !*** ./src/modules/auth/auth.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const correlation_id_interceptor_1 = __webpack_require__(/*! @/common/interceptors/correlation-id.interceptor */ "./src/common/interceptors/correlation-id.interceptor.ts");
const logging_interceptor_1 = __webpack_require__(/*! @/common/interceptors/logging.interceptor */ "./src/common/interceptors/logging.interceptor.ts");
const transaction_interceptor_1 = __webpack_require__(/*! @/common/interceptors/transaction.interceptor */ "./src/common/interceptors/transaction.interceptor.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./src/modules/auth/auth.controller.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/modules/auth/auth.service.ts");
const refresh_token_entity_1 = __webpack_require__(/*! ./entities/refresh-token.entity */ "./src/modules/auth/entities/refresh-token.entity.ts");
const refresh_token_repository_1 = __webpack_require__(/*! ./repositories/refresh-token.repository */ "./src/modules/auth/repositories/refresh-token.repository.ts");
const auth_config_service_1 = __webpack_require__(/*! ./services/auth-config.service */ "./src/modules/auth/services/auth-config.service.ts");
const auth_response_builder_service_1 = __webpack_require__(/*! ./services/auth-response-builder.service */ "./src/modules/auth/services/auth-response-builder.service.ts");
const authentication_factory_service_1 = __webpack_require__(/*! ./services/authentication-factory.service */ "./src/modules/auth/services/authentication-factory.service.ts");
const cookie_service_1 = __webpack_require__(/*! ./services/cookie.service */ "./src/modules/auth/services/cookie.service.ts");
const token_management_service_1 = __webpack_require__(/*! ./services/token-management.service */ "./src/modules/auth/services/token-management.service.ts");
const user_validation_service_1 = __webpack_require__(/*! ./services/user-validation.service */ "./src/modules/auth/services/user-validation.service.ts");
const users_module_1 = __webpack_require__(/*! ../users/users.module */ "./src/modules/users/users.module.ts");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            typeorm_1.TypeOrmModule.forFeature([refresh_token_entity_1.RefreshToken]),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            token_management_service_1.TokenManagementService,
            user_validation_service_1.UserValidationService,
            authentication_factory_service_1.AuthenticationFactory,
            auth_config_service_1.AuthConfigService,
            cookie_service_1.CookieService,
            auth_response_builder_service_1.AuthResponseBuilder,
            refresh_token_repository_1.RefreshTokenRepository,
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: correlation_id_interceptor_1.CorrelationIdInterceptor,
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: logging_interceptor_1.LoggingInterceptor,
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: transaction_interceptor_1.TransactionInterceptor,
            },
        ],
        exports: [auth_service_1.AuthService, token_management_service_1.TokenManagementService,
            user_validation_service_1.UserValidationService,],
    })
], AuthModule);


/***/ }),

/***/ "./src/modules/auth/auth.service.ts":
/*!******************************************!*\
  !*** ./src/modules/auth/auth.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AuthService_1;
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const _Transaction_1 = __webpack_require__(/*! @/common/decorators/@Transaction */ "./src/common/decorators/@Transaction.ts");
const exceptions_1 = __webpack_require__(/*! @/common/exceptions */ "./src/common/exceptions/index.ts");
const auth_exception_1 = __webpack_require__(/*! @/modules/auth/exceptions/auth.exception */ "./src/modules/auth/exceptions/auth.exception.ts");
const jwt_service_1 = __webpack_require__(/*! @/common/services/jwt.service */ "./src/common/services/jwt.service.ts");
const error_util_1 = __webpack_require__(/*! @/common/utils/error.util */ "./src/common/utils/error.util.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const auth_constants_1 = __webpack_require__(/*! ./constants/auth.constants */ "./src/modules/auth/constants/auth.constants.ts");
const login_interface_1 = __webpack_require__(/*! ./interfaces/login.interface */ "./src/modules/auth/interfaces/login.interface.ts");
const refresh_token_interface_1 = __webpack_require__(/*! ./interfaces/refresh-token.interface */ "./src/modules/auth/interfaces/refresh-token.interface.ts");
const register_interface_1 = __webpack_require__(/*! ./interfaces/register.interface */ "./src/modules/auth/interfaces/register.interface.ts");
const user_to_jwt_payload_mapper_1 = __webpack_require__(/*! ./mappers/user-to-jwt-payload.mapper */ "./src/modules/auth/mappers/user-to-jwt-payload.mapper.ts");
const auth_config_service_1 = __webpack_require__(/*! ./services/auth-config.service */ "./src/modules/auth/services/auth-config.service.ts");
const authentication_factory_service_1 = __webpack_require__(/*! ./services/authentication-factory.service */ "./src/modules/auth/services/authentication-factory.service.ts");
const token_management_service_1 = __webpack_require__(/*! ./services/token-management.service */ "./src/modules/auth/services/token-management.service.ts");
const user_validation_service_1 = __webpack_require__(/*! ./services/user-validation.service */ "./src/modules/auth/services/user-validation.service.ts");
const password_util_1 = __webpack_require__(/*! ./utils/password.util */ "./src/modules/auth/utils/password.util.ts");
let AuthService = AuthService_1 = class AuthService {
    constructor(jwtService, tokenMgmt, userValidation, authFactory, authConfig) {
        this.jwtService = jwtService;
        this.tokenMgmt = tokenMgmt;
        this.userValidation = userValidation;
        this.authFactory = authFactory;
        this.authConfig = authConfig;
        this.logger = new common_1.Logger(AuthService_1.name);
    }
    async register(data, manager) {
        try {
            const email = data.email?.toLowerCase().trim();
            const phone = data.phone?.trim();
            await Promise.all([
                this.userValidation.checkEmailExists(email, manager),
                this.userValidation.checkPhoneExists(phone, manager)
            ]);
            const passwordHash = await password_util_1.PasswordUtil.hash(data.password, this.authConfig.bcryptRounds);
            const user = await this.userValidation.createUser({
                email,
                phone,
                fullName: data.fullName?.trim(),
                passwordHash,
            }, manager);
            this.logger.log(`User registered: ${user.id}`);
            return {
                id: user.id,
                email: user.email,
                phone: user.phone,
                fullName: user.fullName,
            };
        }
        catch (error) {
            if (error_util_1.ErrorUtil.isKnownException(error, auth_exception_1.EmailAlreadyExistsException, auth_exception_1.PhoneAlreadyExistsException)) {
                throw error;
            }
            const errorMessage = error_util_1.ErrorUtil.getMessage(error);
            const errorStack = error_util_1.ErrorUtil.getStack(error);
            this.logger.error(`Registration failed: ${errorMessage}`, errorStack);
            throw new exceptions_1.InternalServerException('Failed to register user');
        }
    }
    async login(data, manager) {
        try {
            const user = await this.userValidation.validateCredentials(data.identifier, data.password, manager);
            this.logger.log(`User authenticated: ${user.id}`);
            return await this.authFactory.createAuthenticationResult(user, this.authConfig.maxTokensPerUser, undefined, manager);
        }
        catch (error) {
            if (error_util_1.ErrorUtil.isKnownException(error, auth_exception_1.InvalidCredentialsException)) {
                throw error;
            }
            const errorMessage = error_util_1.ErrorUtil.getMessage(error);
            const errorStack = error_util_1.ErrorUtil.getStack(error);
            this.logger.error(`Login failed: ${errorMessage}`, errorStack);
            throw new exceptions_1.InternalServerException('Login failed');
        }
    }
    async loginMobile(data, manager) {
        try {
            const user = await this.userValidation.validateCredentials(data.identifier, data.password, manager);
            this.logger.log(`Mobile authentication: ${user.id}`);
            return await this.authFactory.createAuthenticationResult(user, this.authConfig.maxTokensPerDevice, data.deviceId, manager);
        }
        catch (error) {
            if (error_util_1.ErrorUtil.isKnownException(error)) {
                throw error;
            }
            const errorMessage = error_util_1.ErrorUtil.getMessage(error);
            const errorStack = error_util_1.ErrorUtil.getStack(error);
            this.logger.error(`Mobile login failed: ${errorMessage}`, errorStack);
            throw new exceptions_1.InternalServerException('Mobile login failed');
        }
    }
    async refreshAccessToken(data, manager) {
        try {
            if (!data.refreshToken || typeof data.refreshToken !== 'string' || !data.refreshToken.trim()) {
                throw new common_1.UnauthorizedException({
                    code: auth_constants_1.AUTH_ERROR_CODES.REFRESH_TOKEN_MISSING,
                    message: 'Refresh token not found',
                });
            }
            const payload = this.jwtService.verifyRefreshToken(data.refreshToken);
            const validation = await this.tokenMgmt.validateRefreshToken(payload.id, data.refreshToken, data.deviceId, manager);
            if (!validation.isValid) {
                if (validation.shouldRevokeAll) {
                    await this.revokeAllUserTokens(payload.id, manager);
                    this.logger.warn(`Potential token reuse detected: ${payload.id}`);
                    throw new common_1.UnauthorizedException({
                        code: auth_constants_1.AUTH_ERROR_CODES.TOKEN_REUSE_DETECTED,
                        message: 'Token reuse detected. All sessions terminated.',
                    });
                }
                throw new auth_exception_1.InvalidTokenException('Invalid refresh token');
            }
            const user = await this.userValidation.findById(payload.id, manager);
            if (!user) {
                throw new common_1.UnauthorizedException({
                    code: auth_constants_1.AUTH_ERROR_CODES.INVALID_REFRESH_TOKEN,
                    message: 'User not found',
                });
            }
            const newPayload = (0, user_to_jwt_payload_mapper_1.toJwtPayload)(user);
            const newAccessToken = this.jwtService.generateAccessToken(newPayload);
            const newRefreshToken = this.jwtService.generateRefreshToken(newPayload);
            if (!validation.tokenId) {
                throw new exceptions_1.InternalServerException('Token ID is missing');
            }
            await this.tokenMgmt.revokeById(validation.tokenId, manager);
            await this.tokenMgmt.saveRefreshToken(payload.id, newRefreshToken, this.authConfig.refreshTokenExpiry, data.deviceId, manager);
            this.logger.log(`Token refreshed: ${payload.id}`);
            return {
                accessToken: newAccessToken,
                refreshToken: newRefreshToken,
            };
        }
        catch (error) {
            if (error_util_1.ErrorUtil.isKnownException(error, auth_exception_1.InvalidTokenException, common_1.UnauthorizedException, exceptions_1.InternalServerException)) {
                throw error;
            }
            const errorMessage = error_util_1.ErrorUtil.getMessage(error);
            const errorStack = error_util_1.ErrorUtil.getStack(error);
            this.logger.error(`Token refresh failed: ${errorMessage}`, errorStack);
            throw new exceptions_1.InternalServerException('Failed to refresh token');
        }
    }
    async revokeRefreshToken(data) {
        try {
            if (!data.refreshToken || typeof data.refreshToken !== 'string' || !data.refreshToken.trim()) {
                throw new common_1.UnauthorizedException({
                    code: auth_constants_1.AUTH_ERROR_CODES.REFRESH_TOKEN_MISSING,
                    message: 'Refresh token not found',
                });
            }
            const payload = this.jwtService.verifyRefreshToken(data.refreshToken);
            const validation = await this.tokenMgmt.validateRefreshToken(payload.id, data.refreshToken, data.deviceId);
            if (validation.isValid && validation.tokenId) {
                await this.tokenMgmt.revokeById(validation.tokenId);
                this.logger.log(`Token revoked: ${payload.id}`);
            }
            else {
                throw new common_1.UnauthorizedException({
                    code: auth_constants_1.AUTH_ERROR_CODES.INVALID_REFRESH_TOKEN,
                    message: 'Refresh token already revoked or invalid',
                });
            }
        }
        catch (error) {
            if (error_util_1.ErrorUtil.isKnownException(error, common_1.UnauthorizedException)) {
                throw error;
            }
            const errorMessage = error_util_1.ErrorUtil.getMessage(error);
            const errorStack = error_util_1.ErrorUtil.getStack(error);
            this.logger.error(`Failed to revoke token: ${errorMessage}`, errorStack);
            throw new exceptions_1.InternalServerException('Failed to revoke token');
        }
    }
    async revokeAllUserTokens(refreshTokenOrUserId, manager) {
        try {
            let userId;
            if (!refreshTokenOrUserId || !refreshTokenOrUserId.trim()) {
                throw new common_1.UnauthorizedException({
                    code: auth_constants_1.AUTH_ERROR_CODES.REFRESH_TOKEN_MISSING,
                    message: 'Refresh token not found',
                });
            }
            try {
                const payload = this.jwtService.verifyRefreshToken(refreshTokenOrUserId);
                userId = payload.id;
            }
            catch {
                userId = refreshTokenOrUserId;
            }
            await this.tokenMgmt.revokeAllByUserId(userId, manager);
            this.logger.log(`All tokens revoked: user ${userId}`);
        }
        catch (error) {
            if (error_util_1.ErrorUtil.isKnownException(error, common_1.UnauthorizedException)) {
                throw error;
            }
            const errorMessage = error_util_1.ErrorUtil.getMessage(error);
            const errorStack = error_util_1.ErrorUtil.getStack(error);
            this.logger.error(`Failed to revoke all tokens: ${errorMessage}`, errorStack);
            throw new exceptions_1.InternalServerException('Failed to revoke all tokens');
        }
    }
    async revokeAllDeviceTokens(refreshToken, deviceId) {
        try {
            if (!refreshToken || typeof refreshToken !== 'string' || !refreshToken.trim()) {
                throw new common_1.UnauthorizedException({
                    code: auth_constants_1.AUTH_ERROR_CODES.REFRESH_TOKEN_MISSING,
                    message: 'Refresh token not found',
                });
            }
            const payload = this.jwtService.verifyRefreshToken(refreshToken);
            await this.tokenMgmt.revokeAllByUserAndDevice(payload.id, deviceId);
            this.logger.log(`All tokens revoked: user ${payload.id}, device: ${deviceId}`);
        }
        catch (error) {
            if (error_util_1.ErrorUtil.isKnownException(error, common_1.UnauthorizedException)) {
                throw error;
            }
            const errorMessage = error_util_1.ErrorUtil.getMessage(error);
            const errorStack = error_util_1.ErrorUtil.getStack(error);
            this.logger.error(`Failed to revoke device tokens: ${errorMessage}`, errorStack);
            throw new exceptions_1.InternalServerException('Failed to revoke device tokens');
        }
    }
};
exports.AuthService = AuthService;
__decorate([
    (0, _Transaction_1.Transactional)(),
    __param(1, (0, _Transaction_1.TransactionManager)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof register_interface_1.RegisterInput !== "undefined" && register_interface_1.RegisterInput) === "function" ? _f : Object, typeof (_g = typeof typeorm_1.EntityManager !== "undefined" && typeorm_1.EntityManager) === "function" ? _g : Object]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], AuthService.prototype, "register", null);
__decorate([
    (0, _Transaction_1.Transactional)(),
    __param(1, (0, _Transaction_1.TransactionManager)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof login_interface_1.LoginWebInput !== "undefined" && login_interface_1.LoginWebInput) === "function" ? _j : Object, typeof (_k = typeof typeorm_1.EntityManager !== "undefined" && typeorm_1.EntityManager) === "function" ? _k : Object]),
    __metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], AuthService.prototype, "login", null);
__decorate([
    (0, _Transaction_1.Transactional)(),
    __param(1, (0, _Transaction_1.TransactionManager)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_m = typeof login_interface_1.LoginMobileInput !== "undefined" && login_interface_1.LoginMobileInput) === "function" ? _m : Object, typeof (_o = typeof typeorm_1.EntityManager !== "undefined" && typeorm_1.EntityManager) === "function" ? _o : Object]),
    __metadata("design:returntype", typeof (_p = typeof Promise !== "undefined" && Promise) === "function" ? _p : Object)
], AuthService.prototype, "loginMobile", null);
__decorate([
    (0, _Transaction_1.Transactional)(),
    __param(1, (0, _Transaction_1.TransactionManager)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_q = typeof refresh_token_interface_1.RefreshInput !== "undefined" && refresh_token_interface_1.RefreshInput) === "function" ? _q : Object, typeof (_r = typeof typeorm_1.EntityManager !== "undefined" && typeorm_1.EntityManager) === "function" ? _r : Object]),
    __metadata("design:returntype", typeof (_s = typeof Promise !== "undefined" && Promise) === "function" ? _s : Object)
], AuthService.prototype, "refreshAccessToken", null);
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_service_1.JwtService !== "undefined" && jwt_service_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof token_management_service_1.TokenManagementService !== "undefined" && token_management_service_1.TokenManagementService) === "function" ? _b : Object, typeof (_c = typeof user_validation_service_1.UserValidationService !== "undefined" && user_validation_service_1.UserValidationService) === "function" ? _c : Object, typeof (_d = typeof authentication_factory_service_1.AuthenticationFactory !== "undefined" && authentication_factory_service_1.AuthenticationFactory) === "function" ? _d : Object, typeof (_e = typeof auth_config_service_1.AuthConfigService !== "undefined" && auth_config_service_1.AuthConfigService) === "function" ? _e : Object])
], AuthService);


/***/ }),

/***/ "./src/modules/auth/constants/auth.constants.ts":
/*!******************************************************!*\
  !*** ./src/modules/auth/constants/auth.constants.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AUTH_ERROR_CODES = exports.AUTH_CONSTANTS = void 0;
exports.AUTH_CONSTANTS = {
    BCRYPT_ROUNDS: 12,
    REFRESH_TOKEN_BCRYPT_ROUNDS: 10,
    REFRESH_TOKEN_EXPIRY_DAYS: 7,
    MAX_REFRESH_TOKENS_PER_USER: 5,
    MAX_REFRESH_TOKENS_PER_DEVICE: 3,
    TOKEN_CLEANUP_BATCH_SIZE: 1000,
    MAX_LOGIN_ATTEMPTS: 5,
    LOGIN_LOCKOUT_DURATION_MINUTES: 15,
    PASSWORD_MIN_LENGTH: 8,
    PASSWORD_MIN_UPPERCASE: 1,
    PASSWORD_MIN_LOWERCASE: 1,
    PASSWORD_MIN_NUMBERS: 1,
    PASSWORD_MIN_SYMBOLS: 1,
};
exports.AUTH_ERROR_CODES = {
    INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
    TOKEN_REUSE_DETECTED: 'TOKEN_REUSE_DETECTED',
    INVALID_REFRESH_TOKEN: 'INVALID_REFRESH_TOKEN',
    DEVICE_ID_REQUIRED: 'DEVICE_ID_REQUIRED',
    INVALID_DEVICE_ID: 'INVALID_DEVICE_ID',
    WEAK_PASSWORD: 'WEAK_PASSWORD',
    REFRESH_TOKEN_MISSING: 'REFRESH_TOKEN_MISSING',
    REFRESH_TOKEN_NOT_FOUND: 'REFRESH_TOKEN_NOT_FOUND'
};


/***/ }),

/***/ "./src/modules/auth/constants/cookie.constants.ts":
/*!********************************************************!*\
  !*** ./src/modules/auth/constants/cookie.constants.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.COOKIE_OPTIONS = exports.COOKIE_NAMES = void 0;
exports.COOKIE_NAMES = {
    REFRESH_TOKEN: 'refreshToken',
};
exports.COOKIE_OPTIONS = {
    REFRESH_TOKEN_MAX_AGE: 7 * 24 * 60 * 60 * 1000,
};


/***/ }),

/***/ "./src/modules/auth/constants/header.constants.ts":
/*!********************************************************!*\
  !*** ./src/modules/auth/constants/header.constants.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DEVICE_ID_PATTERN = exports.AUTH_HEADERS = void 0;
exports.AUTH_HEADERS = {
    DEVICE_ID: 'x-device-id',
    CORRELATION_ID: 'x-correlation-id',
    FORWARDED_FOR: 'x-forwarded-for',
    REAL_IP: 'x-real-ip',
    USER_AGENT: 'user-agent',
};
exports.DEVICE_ID_PATTERN = /^[a-zA-Z0-9-_.]{1,255}$/;


/***/ }),

/***/ "./src/modules/auth/constants/index.ts":
/*!*********************************************!*\
  !*** ./src/modules/auth/constants/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./auth.constants */ "./src/modules/auth/constants/auth.constants.ts"), exports);
__exportStar(__webpack_require__(/*! ./cookie.constants */ "./src/modules/auth/constants/cookie.constants.ts"), exports);
__exportStar(__webpack_require__(/*! ./header.constants */ "./src/modules/auth/constants/header.constants.ts"), exports);


/***/ }),

/***/ "./src/modules/auth/decorators/device-id.decorator.ts":
/*!************************************************************!*\
  !*** ./src/modules/auth/decorators/device-id.decorator.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeviceId = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const header_constants_1 = __webpack_require__(/*! ../constants/header.constants */ "./src/modules/auth/constants/header.constants.ts");
exports.DeviceId = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const deviceId = request.headers[header_constants_1.AUTH_HEADERS.DEVICE_ID];
    if (!deviceId) {
        return undefined;
    }
    return Array.isArray(deviceId) ? deviceId[0] : deviceId;
});


/***/ }),

/***/ "./src/modules/auth/dtos/login-mobile.dto.ts":
/*!***************************************************!*\
  !*** ./src/modules/auth/dtos/login-mobile.dto.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginMobileDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class LoginMobileDto {
}
exports.LoginMobileDto = LoginMobileDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email or phone' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginMobileDto.prototype, "identifier", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginMobileDto.prototype, "password", void 0);


/***/ }),

/***/ "./src/modules/auth/dtos/login-response-data.dto.ts":
/*!**********************************************************!*\
  !*** ./src/modules/auth/dtos/login-response-data.dto.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginResponseDataDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class LoginResponseDataDto {
}
exports.LoginResponseDataDto = LoginResponseDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' }),
    __metadata("design:type", String)
], LoginResponseDataDto.prototype, "accessToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' }),
    __metadata("design:type", String)
], LoginResponseDataDto.prototype, "refreshToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            id: '1a2b3c4d-5678-90ef',
            email: 'user@example.com',
            name: 'Van Tin',
            role: 'CUSTERMOR',
        },
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], LoginResponseDataDto.prototype, "user", void 0);


/***/ }),

/***/ "./src/modules/auth/dtos/login-response.dto.ts":
/*!*****************************************************!*\
  !*** ./src/modules/auth/dtos/login-response.dto.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginResponseDto = void 0;
const base_response_dto_1 = __webpack_require__(/*! @/common/dtos/base-response.dto */ "./src/common/dtos/base-response.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const login_response_data_dto_1 = __webpack_require__(/*! ./login-response-data.dto */ "./src/modules/auth/dtos/login-response-data.dto.ts");
class LoginResponseDto extends base_response_dto_1.BaseResponseDto {
}
exports.LoginResponseDto = LoginResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], LoginResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Login successful' }),
    __metadata("design:type", String)
], LoginResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: login_response_data_dto_1.LoginResponseDataDto }),
    __metadata("design:type", typeof (_a = typeof login_response_data_dto_1.LoginResponseDataDto !== "undefined" && login_response_data_dto_1.LoginResponseDataDto) === "function" ? _a : Object)
], LoginResponseDto.prototype, "data", void 0);


/***/ }),

/***/ "./src/modules/auth/dtos/login.dto.ts":
/*!********************************************!*\
  !*** ./src/modules/auth/dtos/login.dto.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class LoginDto {
}
exports.LoginDto = LoginDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email or phone' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginDto.prototype, "identifier", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);


/***/ }),

/***/ "./src/modules/auth/dtos/register-response-data.dto.ts":
/*!*************************************************************!*\
  !*** ./src/modules/auth/dtos/register-response-data.dto.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterResponseDataDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class RegisterResponseDataDto {
}
exports.RegisterResponseDataDto = RegisterResponseDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1a2b3c4d-5678-90ef' }),
    __metadata("design:type", String)
], RegisterResponseDataDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], RegisterResponseDataDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterResponseDataDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterResponseDataDto.prototype, "fullName", void 0);


/***/ }),

/***/ "./src/modules/auth/dtos/register-response.dto.ts":
/*!********************************************************!*\
  !*** ./src/modules/auth/dtos/register-response.dto.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterResponseDto = void 0;
const base_response_dto_1 = __webpack_require__(/*! @/common/dtos/base-response.dto */ "./src/common/dtos/base-response.dto.ts");
const register_response_data_dto_1 = __webpack_require__(/*! @/modules/auth/dtos/register-response-data.dto */ "./src/modules/auth/dtos/register-response-data.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class RegisterResponseDto extends base_response_dto_1.BaseResponseDto {
}
exports.RegisterResponseDto = RegisterResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], RegisterResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Register successful' }),
    __metadata("design:type", String)
], RegisterResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: register_response_data_dto_1.RegisterResponseDataDto }),
    __metadata("design:type", typeof (_a = typeof register_response_data_dto_1.RegisterResponseDataDto !== "undefined" && register_response_data_dto_1.RegisterResponseDataDto) === "function" ? _a : Object)
], RegisterResponseDto.prototype, "data", void 0);


/***/ }),

/***/ "./src/modules/auth/dtos/register.dto.ts":
/*!***********************************************!*\
  !*** ./src/modules/auth/dtos/register.dto.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const auth_constants_1 = __webpack_require__(/*! ../constants/auth.constants */ "./src/modules/auth/constants/auth.constants.ts");
class RegisterDto {
}
exports.RegisterDto = RegisterDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'user@example.com',
        description: 'User email address',
    }),
    (0, class_validator_1.IsEmail)({}, { message: 'Invalid email format' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email is required' }),
    (0, class_transformer_1.Transform)(({ value }) => value?.toLowerCase().trim()),
    __metadata("design:type", String)
], RegisterDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '+84901234567',
        description: 'Phone number with country code',
    }),
    (0, class_validator_1.IsString)({ message: 'Phone must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Phone is required' }),
    (0, class_validator_1.Matches)(/^\+?[1-9]\d{1,14}$/, {
        message: 'Invalid phone number format (E.164)'
    }),
    (0, class_transformer_1.Transform)(({ value }) => value?.trim()),
    __metadata("design:type", String)
], RegisterDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'John Doe',
        description: 'Full name of the user',
    }),
    (0, class_validator_1.IsString)({ message: 'Full name must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Full name is required' }),
    (0, class_validator_1.MinLength)(2, { message: 'Full name must be at least 2 characters' }),
    (0, class_validator_1.MaxLength)(100, { message: 'Full name must not exceed 100 characters' }),
    (0, class_transformer_1.Transform)(({ value }) => value?.trim()),
    __metadata("design:type", String)
], RegisterDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Password123!',
        description: 'Strong password (min 8 chars, uppercase, lowercase, number, symbol)',
    }),
    (0, class_validator_1.IsString)({ message: 'Password must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Password is required' }),
    (0, class_validator_1.IsStrongPassword)({
        minLength: auth_constants_1.AUTH_CONSTANTS.PASSWORD_MIN_LENGTH,
        minUppercase: auth_constants_1.AUTH_CONSTANTS.PASSWORD_MIN_UPPERCASE,
        minLowercase: auth_constants_1.AUTH_CONSTANTS.PASSWORD_MIN_LOWERCASE,
        minNumbers: auth_constants_1.AUTH_CONSTANTS.PASSWORD_MIN_NUMBERS,
        minSymbols: auth_constants_1.AUTH_CONSTANTS.PASSWORD_MIN_SYMBOLS,
    }, {
        message: 'Password must contain at least 8 characters, including uppercase, lowercase, number, and special character',
    }),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);


/***/ }),

/***/ "./src/modules/auth/entities/refresh-token.entity.ts":
/*!***********************************************************!*\
  !*** ./src/modules/auth/entities/refresh-token.entity.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefreshToken = void 0;
const user_entity_1 = __webpack_require__(/*! @/modules/users/entities/user.entity */ "./src/modules/users/entities/user.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let RefreshToken = class RefreshToken {
};
exports.RefreshToken = RefreshToken;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RefreshToken.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id' }),
    (0, typeorm_1.Index)('idx_refresh_user'),
    __metadata("design:type", String)
], RefreshToken.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (u) => u.refreshTokens, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_a = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _a : Object)
], RefreshToken.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'token_hash', length: 500 }),
    __metadata("design:type", String)
], RefreshToken.prototype, "tokenHash", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'device_id', length: 255, nullable: true }),
    __metadata("design:type", String)
], RefreshToken.prototype, "deviceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp with time zone', name: 'expires_at' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], RefreshToken.prototype, "expiresAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_revoked', default: false, nullable: true }),
    __metadata("design:type", Boolean)
], RefreshToken.prototype, "isRevoked", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], RefreshToken.prototype, "createdAt", void 0);
exports.RefreshToken = RefreshToken = __decorate([
    (0, typeorm_1.Entity)('refresh_tokens'),
    (0, typeorm_1.Unique)(['tokenHash']),
    (0, typeorm_1.Index)('idx_user_active', ['userId', 'isRevoked', 'expiresAt']),
    (0, typeorm_1.Index)('idx_user_device_active', ['userId', 'deviceId', 'isRevoked', 'expiresAt']),
    (0, typeorm_1.Index)('idx_cleanup', ['isRevoked', 'expiresAt'])
], RefreshToken);


/***/ }),

/***/ "./src/modules/auth/exceptions/auth.exception.ts":
/*!*******************************************************!*\
  !*** ./src/modules/auth/exceptions/auth.exception.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountLockedException = exports.AccountNotActivatedException = exports.PhoneAlreadyExistsException = exports.EmailAlreadyExistsException = exports.InvalidTokenException = exports.InvalidCredentialsException = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const base_exception_1 = __webpack_require__(/*! ../../../common/exceptions/base-exception */ "./src/common/exceptions/base-exception.ts");
class InvalidCredentialsException extends base_exception_1.BaseException {
    constructor(details) {
        super('INVALID_CREDENTIALS', 'Invalid email or password', common_1.HttpStatus.UNAUTHORIZED, details);
    }
}
exports.InvalidCredentialsException = InvalidCredentialsException;
class InvalidTokenException extends base_exception_1.BaseException {
    constructor(message = 'Invalid or expired token', details) {
        super('INVALID_TOKEN', message, common_1.HttpStatus.UNAUTHORIZED, details);
    }
}
exports.InvalidTokenException = InvalidTokenException;
class EmailAlreadyExistsException extends base_exception_1.BaseException {
    constructor(email) {
        super('EMAIL_ALREADY_EXISTS', `Email ${email} is already registered`, common_1.HttpStatus.CONFLICT, { email });
    }
}
exports.EmailAlreadyExistsException = EmailAlreadyExistsException;
class PhoneAlreadyExistsException extends base_exception_1.BaseException {
    constructor(phone) {
        super('PHONE_ALREADY_EXISTS', `Phone number ${phone} is already registered`, common_1.HttpStatus.CONFLICT, { phone });
    }
}
exports.PhoneAlreadyExistsException = PhoneAlreadyExistsException;
class AccountNotActivatedException extends base_exception_1.BaseException {
    constructor(userId) {
        super('ACCOUNT_NOT_ACTIVATED', 'Your account is not activated. Please check your email.', common_1.HttpStatus.FORBIDDEN, { userId });
    }
}
exports.AccountNotActivatedException = AccountNotActivatedException;
class AccountLockedException extends base_exception_1.BaseException {
    constructor(userId, reason) {
        super('ACCOUNT_LOCKED', reason || 'Your account has been locked. Please contact support.', common_1.HttpStatus.FORBIDDEN, { userId, reason });
    }
}
exports.AccountLockedException = AccountLockedException;


/***/ }),

/***/ "./src/modules/auth/interfaces/login.interface.ts":
/*!********************************************************!*\
  !*** ./src/modules/auth/interfaces/login.interface.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/modules/auth/interfaces/refresh-token.interface.ts":
/*!****************************************************************!*\
  !*** ./src/modules/auth/interfaces/refresh-token.interface.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/modules/auth/interfaces/register.interface.ts":
/*!***********************************************************!*\
  !*** ./src/modules/auth/interfaces/register.interface.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/modules/auth/mappers/user-to-jwt-payload.mapper.ts":
/*!****************************************************************!*\
  !*** ./src/modules/auth/mappers/user-to-jwt-payload.mapper.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toJwtPayload = toJwtPayload;
function toJwtPayload(user) {
    return {
        id: user.id,
        email: user.email,
        role: user.role,
    };
}


/***/ }),

/***/ "./src/modules/auth/pipes/device-id-validation.pipe.ts":
/*!*************************************************************!*\
  !*** ./src/modules/auth/pipes/device-id-validation.pipe.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeviceIdValidationPipe = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const constants_1 = __webpack_require__(/*! ../constants */ "./src/modules/auth/constants/index.ts");
let DeviceIdValidationPipe = class DeviceIdValidationPipe {
    transform(value) {
        if (!value || value.trim().length === 0) {
            throw new common_1.BadRequestException({
                code: constants_1.AUTH_ERROR_CODES.INVALID_DEVICE_ID,
                message: 'Device ID is required and must not be empty',
            });
        }
        if (!constants_1.DEVICE_ID_PATTERN.test(value)) {
            throw new common_1.BadRequestException({
                code: constants_1.AUTH_ERROR_CODES.INVALID_DEVICE_ID,
                message: 'Device ID contains invalid characters',
            });
        }
        if (value.length > 255) {
            throw new common_1.BadRequestException({
                code: constants_1.AUTH_ERROR_CODES.INVALID_DEVICE_ID,
                message: 'Device ID too long (max 255 characters)',
            });
        }
        return value;
    }
};
exports.DeviceIdValidationPipe = DeviceIdValidationPipe;
exports.DeviceIdValidationPipe = DeviceIdValidationPipe = __decorate([
    (0, common_1.Injectable)()
], DeviceIdValidationPipe);


/***/ }),

/***/ "./src/modules/auth/repositories/refresh-token.repository.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/auth/repositories/refresh-token.repository.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var RefreshTokenRepository_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefreshTokenRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const refresh_token_entity_1 = __webpack_require__(/*! ../entities/refresh-token.entity */ "./src/modules/auth/entities/refresh-token.entity.ts");
let RefreshTokenRepository = RefreshTokenRepository_1 = class RefreshTokenRepository {
    constructor(repo) {
        this.repo = repo;
        this.logger = new common_1.Logger(RefreshTokenRepository_1.name);
    }
    getRepository(manager) {
        return manager ? manager.getRepository(refresh_token_entity_1.RefreshToken) : this.repo;
    }
    async findActiveByUserId(userId, manager) {
        const repository = this.getRepository(manager);
        return await repository.find({
            where: {
                userId,
                isRevoked: false,
                expiresAt: (0, typeorm_2.MoreThan)(new Date()),
            },
            order: { createdAt: 'DESC' },
        });
    }
    async findActiveByUserAndDevice(userId, deviceId, manager) {
        const repository = this.getRepository(manager);
        return await repository.findOne({
            where: {
                userId,
                deviceId,
                isRevoked: false,
                expiresAt: (0, typeorm_2.MoreThan)(new Date()),
            },
            order: { createdAt: 'DESC' },
        });
    }
    async findById(id, options = {}, manager) {
        const repository = this.getRepository(manager);
        const where = { id };
        if (!options.includeRevoked) {
            where.isRevoked = false;
        }
        if (!options.includeExpired) {
            where.expiresAt = (0, typeorm_2.MoreThan)(new Date());
        }
        const token = await repository.findOne({ where });
        return token ?? null;
    }
    async saveToken(userId, tokenHash, expiresAt, deviceId, manager) {
        const repository = this.getRepository(manager);
        const token = repository.create({
            userId,
            tokenHash,
            expiresAt,
            deviceId: deviceId ?? null,
            isRevoked: false,
            createdAt: new Date(),
        });
        const saved = await repository.save(token);
        this.logger.log(`Token created for user ${userId}${deviceId ? ` device ${deviceId}` : ''}`);
        return saved;
    }
    async revokeById(id, manager) {
        const repository = this.getRepository(manager);
        const result = await repository.update({ id, isRevoked: false }, { isRevoked: true });
        const affected = result.affected ?? 0;
        if (affected > 0) {
            this.logger.log(`Token ${id} revoked`);
        }
        return affected;
    }
    async revokeByIds(ids, manager) {
        if (!ids || ids.length === 0) {
            return 0;
        }
        const repository = this.getRepository(manager);
        const result = await repository.update({ id: (0, typeorm_2.In)(ids), isRevoked: false }, { isRevoked: true });
        const affected = result.affected ?? 0;
        this.logger.log(`Revoked ${affected} tokens`);
        return affected;
    }
    async revokeAllByUserId(userId, manager) {
        const repository = this.getRepository(manager);
        const result = await repository.update({ userId, isRevoked: false }, { isRevoked: true });
        const affected = result.affected ?? 0;
        this.logger.log(`Revoked all tokens for user ${userId}: ${affected}`);
        return affected;
    }
    async revokeAllByUserAndDevice(userId, deviceId, manager) {
        const repository = this.getRepository(manager);
        const result = await repository.update({ userId, deviceId, isRevoked: false }, { isRevoked: true });
        const affected = result.affected ?? 0;
        this.logger.log(`Revoked tokens for user ${userId} device ${deviceId}: ${affected}`);
        return affected;
    }
    async deleteExpiredAndRevoked(batchSize = 1000) {
        const tokensToDelete = await this.repo
            .createQueryBuilder('token')
            .select('token.id')
            .where('token.expiresAt <= :now OR token.isRevoked = true', {
            now: new Date(),
        })
            .limit(batchSize)
            .getMany();
        if (tokensToDelete.length === 0) {
            return 0;
        }
        const ids = tokensToDelete.map((token) => token.id);
        const result = await this.repo
            .createQueryBuilder()
            .delete()
            .where('id IN (:...ids)', { ids })
            .execute();
        const deleted = result.affected ?? 0;
        if (deleted > 0) {
            this.logger.log(`Cleaned up ${deleted} expired/revoked tokens`);
        }
        return deleted;
    }
    async getOldestActiveTokens(userId, limit, deviceId, manager) {
        const repository = this.getRepository(manager);
        const where = {
            userId,
            isRevoked: false,
            expiresAt: (0, typeorm_2.MoreThan)(new Date()),
        };
        if (deviceId) {
            where.deviceId = deviceId;
        }
        return await repository.find({
            where,
            order: { createdAt: 'ASC' },
            take: limit,
        });
    }
    async countActiveTokens(userId, deviceId, manager) {
        const repository = this.getRepository(manager);
        const where = {
            userId,
            isRevoked: false,
            expiresAt: (0, typeorm_2.MoreThan)(new Date()),
        };
        if (deviceId) {
            where.deviceId = deviceId;
        }
        return await repository.count({ where });
    }
};
exports.RefreshTokenRepository = RefreshTokenRepository;
exports.RefreshTokenRepository = RefreshTokenRepository = RefreshTokenRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(refresh_token_entity_1.RefreshToken)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], RefreshTokenRepository);


/***/ }),

/***/ "./src/modules/auth/services/auth-config.service.ts":
/*!**********************************************************!*\
  !*** ./src/modules/auth/services/auth-config.service.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthConfigService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const auth_constants_1 = __webpack_require__(/*! ../constants/auth.constants */ "./src/modules/auth/constants/auth.constants.ts");
let AuthConfigService = class AuthConfigService {
    constructor(configService) {
        this.configService = configService;
        this._bcryptRounds = this.configService.get('BCRYPT_ROUNDS', auth_constants_1.AUTH_CONSTANTS.BCRYPT_ROUNDS);
        this._refreshTokenExpiry = this.configService.get('REFRESH_TOKEN_EXPIRY_DAYS', auth_constants_1.AUTH_CONSTANTS.REFRESH_TOKEN_EXPIRY_DAYS);
    }
    get bcryptRounds() {
        return this._bcryptRounds;
    }
    get refreshTokenExpiry() {
        return this._refreshTokenExpiry;
    }
    get maxTokensPerUser() {
        return auth_constants_1.AUTH_CONSTANTS.MAX_REFRESH_TOKENS_PER_USER;
    }
    get maxTokensPerDevice() {
        return auth_constants_1.AUTH_CONSTANTS.MAX_REFRESH_TOKENS_PER_DEVICE;
    }
};
exports.AuthConfigService = AuthConfigService;
exports.AuthConfigService = AuthConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], AuthConfigService);


/***/ }),

/***/ "./src/modules/auth/services/auth-response-builder.service.ts":
/*!********************************************************************!*\
  !*** ./src/modules/auth/services/auth-response-builder.service.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthResponseBuilder = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AuthResponseBuilder = class AuthResponseBuilder {
    buildRegisterResponse(result) {
        return {
            success: true,
            message: 'Registration successful',
            data: result,
        };
    }
    buildLoginResponse(result) {
        return {
            success: true,
            message: 'Login successful',
            data: {
                accessToken: result.accessToken,
                user: result.user,
            },
        };
    }
    buildLoginMobileResponse(result) {
        return {
            success: true,
            message: 'Login successful',
            data: {
                accessToken: result.accessToken,
                refreshToken: result.refreshToken,
                user: result.user,
            },
        };
    }
    buildRefreshResponse(accessToken) {
        return {
            success: true,
            message: 'Token refreshed successfully',
            data: {
                accessToken,
            },
        };
    }
    buildRefreshMobileResponse(tokens) {
        return {
            success: true,
            message: 'Token refreshed successfully',
            data: {
                accessToken: tokens.accessToken,
                refreshToken: tokens.refreshToken,
            },
        };
    }
    buildLogoutResponse() {
        return {
            success: true,
            message: 'Logout successful',
        };
    }
    buildLogoutAllResponse() {
        return {
            success: true,
            message: 'Logged out from all devices successfully',
        };
    }
    buildLogoutDeviceResponse() {
        return {
            success: true,
            message: 'Device logged out successfully',
        };
    }
    buildHealthCheckResponse() {
        return {
            status: 'ok',
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
        };
    }
};
exports.AuthResponseBuilder = AuthResponseBuilder;
exports.AuthResponseBuilder = AuthResponseBuilder = __decorate([
    (0, common_1.Injectable)()
], AuthResponseBuilder);


/***/ }),

/***/ "./src/modules/auth/services/authentication-factory.service.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/auth/services/authentication-factory.service.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthenticationFactory = void 0;
const jwt_service_1 = __webpack_require__(/*! @/common/services/jwt.service */ "./src/common/services/jwt.service.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_to_jwt_payload_mapper_1 = __webpack_require__(/*! ../mappers/user-to-jwt-payload.mapper */ "./src/modules/auth/mappers/user-to-jwt-payload.mapper.ts");
const auth_config_service_1 = __webpack_require__(/*! ./auth-config.service */ "./src/modules/auth/services/auth-config.service.ts");
const token_management_service_1 = __webpack_require__(/*! ./token-management.service */ "./src/modules/auth/services/token-management.service.ts");
let AuthenticationFactory = class AuthenticationFactory {
    constructor(jwtService, tokenMgmt, authConfig) {
        this.jwtService = jwtService;
        this.tokenMgmt = tokenMgmt;
        this.authConfig = authConfig;
    }
    async createAuthenticationResult(user, maxTokens, deviceId, manager) {
        const payload = (0, user_to_jwt_payload_mapper_1.toJwtPayload)(user);
        const accessToken = this.jwtService.generateAccessToken(payload);
        const refreshToken = this.jwtService.generateRefreshToken(payload);
        await this.tokenMgmt.enforceTokenLimit(user.id, maxTokens, deviceId, manager);
        await this.tokenMgmt.saveRefreshToken(user.id, refreshToken, this.authConfig.refreshTokenExpiry, deviceId, manager);
        return {
            accessToken,
            refreshToken,
            user: {
                id: user.id,
                email: user.email,
                phone: user.phone,
                name: user.fullName,
                role: user.role,
            },
        };
    }
};
exports.AuthenticationFactory = AuthenticationFactory;
exports.AuthenticationFactory = AuthenticationFactory = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_service_1.JwtService !== "undefined" && jwt_service_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof token_management_service_1.TokenManagementService !== "undefined" && token_management_service_1.TokenManagementService) === "function" ? _b : Object, typeof (_c = typeof auth_config_service_1.AuthConfigService !== "undefined" && auth_config_service_1.AuthConfigService) === "function" ? _c : Object])
], AuthenticationFactory);


/***/ }),

/***/ "./src/modules/auth/services/cookie.service.ts":
/*!*****************************************************!*\
  !*** ./src/modules/auth/services/cookie.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CookieService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const cookie_constants_1 = __webpack_require__(/*! ../constants/cookie.constants */ "./src/modules/auth/constants/cookie.constants.ts");
let CookieService = class CookieService {
    constructor(configService) {
        this.configService = configService;
        this.isProduction = this.configService.get('NODE_ENV') === 'production';
    }
    getCookieOptions(includeMaxAge = true) {
        const options = {
            httpOnly: true,
            secure: this.isProduction,
            sameSite: this.isProduction ? 'strict' : 'lax',
            path: '/',
        };
        if (includeMaxAge) {
            options.maxAge = cookie_constants_1.COOKIE_OPTIONS.REFRESH_TOKEN_MAX_AGE;
        }
        return options;
    }
    setRefreshTokenCookie(res, refreshToken) {
        res.cookie(cookie_constants_1.COOKIE_NAMES.REFRESH_TOKEN, refreshToken, this.getCookieOptions(true));
    }
    clearRefreshTokenCookie(res) {
        res.clearCookie(cookie_constants_1.COOKIE_NAMES.REFRESH_TOKEN, this.getCookieOptions(false));
    }
    extractRefreshTokenFromCookie(req) {
        const cookies = req.cookies;
        return cookies?.[cookie_constants_1.COOKIE_NAMES.REFRESH_TOKEN] ?? null;
    }
};
exports.CookieService = CookieService;
exports.CookieService = CookieService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], CookieService);


/***/ }),

/***/ "./src/modules/auth/services/token-management.service.ts":
/*!***************************************************************!*\
  !*** ./src/modules/auth/services/token-management.service.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TokenManagementService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenManagementService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_constants_1 = __webpack_require__(/*! ../constants/auth.constants */ "./src/modules/auth/constants/auth.constants.ts");
const refresh_token_repository_1 = __webpack_require__(/*! ../repositories/refresh-token.repository */ "./src/modules/auth/repositories/refresh-token.repository.ts");
const password_util_1 = __webpack_require__(/*! ../utils/password.util */ "./src/modules/auth/utils/password.util.ts");
let TokenManagementService = TokenManagementService_1 = class TokenManagementService {
    constructor(tokenRepo) {
        this.tokenRepo = tokenRepo;
        this.logger = new common_1.Logger(TokenManagementService_1.name);
    }
    async validateRefreshToken(userId, token, deviceId, manager) {
        const tokens = deviceId
            ? await this.tokenRepo
                .findActiveByUserAndDevice(userId, deviceId, manager)
                .then((t) => (t ? [t] : []))
            : await this.tokenRepo.findActiveByUserId(userId, manager);
        if (tokens.length === 0) {
            return { isValid: false, shouldRevokeAll: true };
        }
        const matchPromises = tokens.map(async (rt) => {
            const match = await password_util_1.PasswordUtil.compareConstantTime(token, rt.tokenHash);
            return match ? rt.id : null;
        });
        const results = await Promise.all(matchPromises);
        const tokenId = results.find((id) => id !== null);
        if (tokenId) {
            return { isValid: true, tokenId };
        }
        return { isValid: false, shouldRevokeAll: true };
    }
    async saveRefreshToken(userId, refreshToken, refreshTokenExpiry, deviceId, manager) {
        const tokenHash = await password_util_1.PasswordUtil.hash(refreshToken, auth_constants_1.AUTH_CONSTANTS.REFRESH_TOKEN_BCRYPT_ROUNDS);
        const expiresAt = new Date(Date.now() + refreshTokenExpiry * 24 * 60 * 60 * 1000);
        await this.tokenRepo.saveToken(userId, tokenHash, expiresAt, deviceId, manager);
    }
    async enforceTokenLimit(userId, maxTokens, deviceId, manager) {
        const currentCount = await this.tokenRepo.countActiveTokens(userId, deviceId, manager);
        if (currentCount < maxTokens) {
            return;
        }
        const tokensToDelete = currentCount - maxTokens + 1;
        const oldestTokens = await this.tokenRepo.getOldestActiveTokens(userId, tokensToDelete, deviceId, manager);
        const idsToRevoke = oldestTokens.map((t) => t.id);
        await this.tokenRepo.revokeByIds(idsToRevoke, manager);
        this.logger.log(`Token limit enforced: user ${userId}${deviceId ? `, device ${deviceId}` : ''}: revoked ${idsToRevoke.length} tokens`);
    }
    async revokeById(tokenId, manager) {
        const affected = await this.tokenRepo.revokeById(tokenId, manager);
        if (affected === 0) {
            this.logger.warn(`No active token found with id: ${tokenId}`);
        }
    }
    async revokeAllByUserId(userId, manager) {
        const affected = await this.tokenRepo.revokeAllByUserId(userId, manager);
        if (affected <= 0) {
            this.logger.warn(`No active tokens found for userId=${userId}`);
            throw new common_1.UnauthorizedException({
                code: auth_constants_1.AUTH_ERROR_CODES.REFRESH_TOKEN_NOT_FOUND,
                message: 'No active tokens found',
            });
        }
    }
    async revokeAllByUserAndDevice(userId, deviceId, manager) {
        const affected = await this.tokenRepo.revokeAllByUserAndDevice(userId, deviceId, manager);
        if (affected <= 0) {
            this.logger.warn(`No active tokens found for userId=${userId}, deviceId=${deviceId}`);
            throw new common_1.UnauthorizedException({
                code: auth_constants_1.AUTH_ERROR_CODES.REFRESH_TOKEN_NOT_FOUND,
                message: 'No active tokens found for this device',
            });
        }
        this.logger.log(`Revoked ${affected} tokens for userId=${userId}, deviceId=${deviceId}`);
    }
};
exports.TokenManagementService = TokenManagementService;
exports.TokenManagementService = TokenManagementService = TokenManagementService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof refresh_token_repository_1.RefreshTokenRepository !== "undefined" && refresh_token_repository_1.RefreshTokenRepository) === "function" ? _a : Object])
], TokenManagementService);


/***/ }),

/***/ "./src/modules/auth/services/user-validation.service.ts":
/*!**************************************************************!*\
  !*** ./src/modules/auth/services/user-validation.service.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserValidationService = void 0;
const auth_exception_1 = __webpack_require__(/*! @/modules/auth/exceptions/auth.exception */ "./src/modules/auth/exceptions/auth.exception.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_repository_1 = __webpack_require__(/*! ../../users/repositorys/user.repository */ "./src/modules/users/repositorys/user.repository.ts");
const password_util_1 = __webpack_require__(/*! ../utils/password.util */ "./src/modules/auth/utils/password.util.ts");
let UserValidationService = class UserValidationService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async checkEmailExists(email, manager) {
        const existingEmail = await this.userRepo.findByEmail(email, manager);
        if (existingEmail) {
            throw new auth_exception_1.EmailAlreadyExistsException(email);
        }
    }
    async checkPhoneExists(phone, manager) {
        const existingPhone = await this.userRepo.findByPhone(phone, manager);
        if (existingPhone) {
            throw new auth_exception_1.PhoneAlreadyExistsException(phone);
        }
    }
    async validateCredentials(identifier, password, manager) {
        const user = await this.userRepo.findByIdentifier(identifier.toLowerCase().trim(), manager);
        const isMatch = await password_util_1.PasswordUtil.compareConstantTime(password, user?.passwordHash || null);
        if (!user || !isMatch) {
            throw new auth_exception_1.InvalidCredentialsException();
        }
        return user;
    }
    async findById(userId, manager) {
        return await this.userRepo.findById(userId, manager);
    }
    async createUser(data, manager) {
        return await this.userRepo.createUser(data, manager);
    }
};
exports.UserValidationService = UserValidationService;
exports.UserValidationService = UserValidationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof user_repository_1.UserRepository !== "undefined" && user_repository_1.UserRepository) === "function" ? _a : Object])
], UserValidationService);


/***/ }),

/***/ "./src/modules/auth/utils/password.util.ts":
/*!*************************************************!*\
  !*** ./src/modules/auth/utils/password.util.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PasswordUtil = void 0;
const bcrypt = __importStar(__webpack_require__(/*! bcrypt */ "bcrypt"));
class PasswordUtil {
    static async compareConstantTime(password, hash) {
        const hashToCompare = hash || this.DUMMY_HASH;
        const isMatch = await bcrypt.compare(password, hashToCompare);
        return hash !== null && isMatch;
    }
    static async hash(password, rounds) {
        return bcrypt.hash(password, rounds);
    }
}
exports.PasswordUtil = PasswordUtil;
PasswordUtil.DUMMY_HASH = '$2b$12$dummyHashForTimingAttackPreventionXXXXXXXXXXXXXXXXXXXXXX';


/***/ }),

/***/ "./src/modules/users/entities/user.entity.ts":
/*!***************************************************!*\
  !*** ./src/modules/users/entities/user.entity.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const user_role_enum_1 = __webpack_require__(/*! @/common/enums/user-role.enum */ "./src/common/enums/user-role.enum.ts");
const refresh_token_entity_1 = __webpack_require__(/*! @/modules/auth/entities/refresh-token.entity */ "./src/modules/auth/entities/refresh-token.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let User = class User {
    constructor() {
        this.role = user_role_enum_1.UserRole.CUSTOMER;
    }
    setDefaults() {
        if (!this.role)
            this.role = user_role_enum_1.UserRole.CUSTOMER;
    }
    isAdmin() {
        return this.role === user_role_enum_1.UserRole.ADMIN;
    }
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, nullable: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'password_hash', length: 255, nullable: true, select: false }),
    __metadata("design:type", String)
], User.prototype, "passwordHash", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: user_role_enum_1.UserRole, default: user_role_enum_1.UserRole.CUSTOMER }),
    __metadata("design:type", typeof (_a = typeof user_role_enum_1.UserRole !== "undefined" && user_role_enum_1.UserRole) === "function" ? _a : Object)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "fullName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'avatar_url', length: 500, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "avatarUrl", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at' }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], User.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => refresh_token_entity_1.RefreshToken, (rt) => rt.user, { cascade: true }),
    __metadata("design:type", Array)
], User.prototype, "refreshTokens", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], User.prototype, "setDefaults", null);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)('users'),
    (0, typeorm_1.Unique)(['email']),
    (0, typeorm_1.Index)(['role', 'deletedAt']),
    (0, typeorm_1.Index)(['createdAt'])
], User);


/***/ }),

/***/ "./src/modules/users/repositorys/user.repository.ts":
/*!**********************************************************!*\
  !*** ./src/modules/users/repositorys/user.repository.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var UserRepository_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ../entities/user.entity */ "./src/modules/users/entities/user.entity.ts");
let UserRepository = UserRepository_1 = class UserRepository {
    constructor(repo) {
        this.repo = repo;
        this.logger = new common_1.Logger(UserRepository_1.name);
    }
    getRepository(manager) {
        return manager ? manager.getRepository(user_entity_1.User) : this.repo;
    }
    async findByEmail(email, manager) {
        return await this.getRepository(manager).findOne({ where: { email } });
    }
    async findByPhone(phone, manager) {
        return await this.getRepository(manager).findOne({ where: { phone } });
    }
    async findByIdentifier(identifier, manager) {
        return await this.getRepository(manager).findOne({
            where: [
                { email: identifier.toLowerCase() },
                { phone: identifier },
            ],
            select: ['id', 'email', 'phone', 'fullName', 'role', 'passwordHash'],
        });
    }
    async findById(id, manager) {
        return await this.getRepository(manager).findOne({ where: { id } });
    }
    async createUser(data, manager) {
        const repository = this.getRepository(manager);
        const entity = repository.create(data);
        const saved = await repository.save(entity);
        this.logger.log(`User created: ${saved.id}`);
        return saved;
    }
    async updateUser(id, data, manager) {
        const repository = this.getRepository(manager);
        await repository.update(id, data);
        const updated = await this.findById(id, manager);
        if (!updated) {
            throw new Error(`User ${id} not found after update`);
        }
        this.logger.log(`User updated: ${id}`);
        return updated;
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = UserRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UserRepository);


/***/ }),

/***/ "./src/modules/users/users.module.ts":
/*!*******************************************!*\
  !*** ./src/modules/users/users.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const user_entity_1 = __webpack_require__(/*! ./entities/user.entity */ "./src/modules/users/entities/user.entity.ts");
const user_repository_1 = __webpack_require__(/*! ./repositorys/user.repository */ "./src/modules/users/repositorys/user.repository.ts");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
        ],
        providers: [
            user_repository_1.UserRepository,
        ],
        exports: [
            user_repository_1.UserRepository,
        ],
    })
], UsersModule);


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/throttler":
/*!************************************!*\
  !*** external "@nestjs/throttler" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@nestjs/throttler");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("joi");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;