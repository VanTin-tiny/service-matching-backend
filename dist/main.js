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
const upload_service_1 = __webpack_require__(/*! ./upload/upload.service */ "./src/common/upload/upload.service.ts");
let CommonModule = class CommonModule {
};
exports.CommonModule = CommonModule;
exports.CommonModule = CommonModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [jwt_service_1.JwtService, upload_service_1.UploadService],
        exports: [jwt_service_1.JwtService, upload_service_1.UploadService],
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

/***/ "./src/common/decorators/@CurrentUser.ts":
/*!***********************************************!*\
  !*** ./src/common/decorators/@CurrentUser.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CurrentUser = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.CurrentUser = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    if (!user) {
        throw new common_1.UnauthorizedException({
            code: 'USER_NOT_AUTHENTICATED',
            message: 'User is not authenticated',
        });
    }
    return user;
});


/***/ }),

/***/ "./src/common/decorators/@CurrentUserId.ts":
/*!*************************************************!*\
  !*** ./src/common/decorators/@CurrentUserId.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CurrentUserId = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.CurrentUserId = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    if (!user?.id) {
        throw new common_1.UnauthorizedException({
            code: 'USER_NOT_AUTHENTICATED',
            message: 'User is not authenticated',
        });
    }
    return user.id;
});


/***/ }),

/***/ "./src/common/decorators/@Roles.ts":
/*!*****************************************!*\
  !*** ./src/common/decorators/@Roles.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Roles = exports.ROLES_KEY = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.ROLES_KEY = 'roles';
const Roles = (...roles) => (0, common_1.SetMetadata)(exports.ROLES_KEY, roles);
exports.Roles = Roles;


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

/***/ "./src/common/guards/jwt-auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/common/guards/jwt-auth.guard.ts ***!
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const jwt_service_1 = __webpack_require__(/*! @/common/services/jwt.service */ "./src/common/services/jwt.service.ts");
const error_util_1 = __webpack_require__(/*! @/common/utils/error.util */ "./src/common/utils/error.util.ts");
const auth_exception_1 = __webpack_require__(/*! @/modules/auth/exceptions/auth.exception */ "./src/modules/auth/exceptions/auth.exception.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
let JwtAuthGuard = class JwtAuthGuard {
    constructor(jwtService, reflector) {
        this.jwtService = jwtService;
        this.reflector = reflector;
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers['authorization'];
        const token = this.jwtService.extractTokenFromHeader(authHeader);
        if (!token) {
            throw new common_1.UnauthorizedException({
                code: 'TOKEN_MISSING',
                message: 'Authorization token missing',
            });
        }
        try {
            const payload = this.jwtService.verifyAccessToken(token);
            request.user = payload;
            return true;
        }
        catch (error) {
            if (error_util_1.ErrorUtil.isKnownException(error, auth_exception_1.InvalidTokenException)) {
                throw error;
            }
            throw new common_1.UnauthorizedException({
                code: 'TOKEN_INVALID',
                message: 'Access token is invalid',
            });
        }
    }
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_service_1.JwtService !== "undefined" && jwt_service_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _b : Object])
], JwtAuthGuard);


/***/ }),

/***/ "./src/common/guards/roles.guard.ts":
/*!******************************************!*\
  !*** ./src/common/guards/roles.guard.ts ***!
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolesGuard = void 0;
const _Roles_1 = __webpack_require__(/*! @/common/decorators/@Roles */ "./src/common/decorators/@Roles.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
let RolesGuard = class RolesGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const requiredRoles = this.reflector.getAllAndOverride(_Roles_1.ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredRoles || requiredRoles.length === 0)
            return true;
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        if (!user) {
            throw new common_1.UnauthorizedException({
                code: 'USER_NOT_AUTHENTICATED',
                message: 'User is not authenticated',
            });
        }
        if (!user.role) {
            throw new common_1.ForbiddenException({
                code: 'ROLE_MISSING',
                message: 'User role not found in token',
            });
        }
        if (!requiredRoles.includes(user.role)) {
            throw new common_1.ForbiddenException({
                code: 'ACCESS_DENIED',
                message: `Access denied. Requires role: ${requiredRoles.join(', ')}`,
            });
        }
        return true;
    }
};
exports.RolesGuard = RolesGuard;
exports.RolesGuard = RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
], RolesGuard);


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

/***/ "./src/common/upload/upload.service.ts":
/*!*********************************************!*\
  !*** ./src/common/upload/upload.service.ts ***!
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
var UploadService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const supabase_js_1 = __webpack_require__(/*! @supabase/supabase-js */ "@supabase/supabase-js");
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
const BUCKET_NAME = 'images';
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024;
const MAX_FILES_PER_UPLOAD = 10;
let UploadService = UploadService_1 = class UploadService {
    constructor(configService) {
        this.configService = configService;
        this.logger = new common_1.Logger(UploadService_1.name);
        const supabaseUrl = this.configService.getOrThrow('SUPABASE_URL');
        const supabaseKey = this.configService.getOrThrow('SUPABASE_KEY');
        this.supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
    }
    async uploadSingle(file, folder) {
        this.validateFile(file);
        const fileName = this.buildFileName(folder, file.originalname);
        const { error } = await this.supabase.storage
            .from(BUCKET_NAME)
            .upload(fileName, file.buffer, {
            contentType: file.mimetype,
            upsert: false,
        });
        if (error) {
            this.logger.error(`Upload failed for [${fileName}]: ${error.message}`);
            throw new common_1.InternalServerErrorException(`Upload failed: ${error.message}`);
        }
        const { data: { publicUrl } } = this.supabase.storage
            .from(BUCKET_NAME)
            .getPublicUrl(fileName);
        this.logger.log(`Uploaded: ${fileName} (${file.size} bytes)`);
        return {
            publicUrl,
            fileName,
            size: file.size,
            mimeType: file.mimetype,
        };
    }
    async uploadMultiple(files, folder) {
        if (!files?.length) {
            throw new common_1.BadRequestException('No files provided');
        }
        if (files.length > MAX_FILES_PER_UPLOAD) {
            throw new common_1.BadRequestException(`Too many files. Maximum allowed: ${MAX_FILES_PER_UPLOAD}`);
        }
        const settlements = await Promise.allSettled(files.map((file) => this.uploadSingle(file, folder)));
        const succeeded = [];
        const failed = [];
        settlements.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                succeeded.push(result.value);
            }
            else {
                const reason = result.reason?.message ?? 'Unknown error';
                failed.push({ index, originalName: files[index].originalname, reason });
                this.logger.warn(`Upload failed for file[${index}] "${files[index].originalname}": ${reason}`);
            }
        });
        this.logger.log(`uploadMultiple — ${succeeded.length} succeeded, ${failed.length} failed`);
        return { succeeded, failed };
    }
    async uploadMultipleOrFail(files, folder) {
        const { succeeded, failed } = await this.uploadMultiple(files, folder);
        if (failed.length > 0) {
            const details = failed
                .map((f) => `"${f.originalName}": ${f.reason}`)
                .join('; ');
            throw new common_1.InternalServerErrorException(`Some uploads failed — ${details}`);
        }
        return succeeded;
    }
    async deleteFile(fileName) {
        const { error } = await this.supabase.storage
            .from(BUCKET_NAME)
            .remove([fileName]);
        if (error) {
            this.logger.error(`Delete failed for [${fileName}]: ${error.message}`);
            throw new common_1.InternalServerErrorException(`Delete failed: ${error.message}`);
        }
        this.logger.log(`Deleted file: ${fileName}`);
    }
    async deleteFiles(fileNames) {
        if (!fileNames?.length)
            return;
        const { error } = await this.supabase.storage
            .from(BUCKET_NAME)
            .remove(fileNames);
        if (error) {
            this.logger.error(`Bulk delete failed: ${error.message}`);
            throw new common_1.InternalServerErrorException(`Bulk delete failed: ${error.message}`);
        }
        this.logger.log(`Deleted ${fileNames.length} files`);
    }
    validateFile(file) {
        if (!file) {
            throw new common_1.BadRequestException('File is required');
        }
        if (!ALLOWED_MIME_TYPES.includes(file.mimetype)) {
            throw new common_1.BadRequestException(`Invalid file type "${file.mimetype}". Allowed: ${ALLOWED_MIME_TYPES.join(', ')}`);
        }
        if (file.size > MAX_FILE_SIZE_BYTES) {
            throw new common_1.BadRequestException(`File "${file.originalname}" exceeds max size of ${MAX_FILE_SIZE_BYTES / 1024 / 1024}MB`);
        }
    }
    buildFileName(folder, originalName) {
        const ext = originalName.split('.').pop()?.toLowerCase() ?? 'bin';
        const safeFolder = folder.replace(/[^a-zA-Z0-9_-]/g, '');
        return `${safeFolder}/${(0, uuid_1.v4)()}.${ext}`;
    }
};
exports.UploadService = UploadService;
exports.UploadService = UploadService = UploadService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], UploadService);


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
const moderation_config_1 = __importDefault(__webpack_require__(/*! ./moderation.config */ "./src/config/moderation.config.ts"));
let AppConfigModule = class AppConfigModule {
};
exports.AppConfigModule = AppConfigModule;
exports.AppConfigModule = AppConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [database_config_1.default, redis_config_1.default, moderation_config_1.default],
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

/***/ "./src/config/moderation.config.ts":
/*!*****************************************!*\
  !*** ./src/config/moderation.config.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
exports["default"] = (0, config_1.registerAs)('moderation', () => ({
    enabled: process.env.MODERATION_ENABLED === 'true',
    provider: process.env.MODERATION_PROVIDER || 'qwen',
    ollama: {
        baseUrl: process.env.OLLAMA_BASE_URL || 'http://localhost:11434',
        model: process.env.OLLAMA_MODEL || 'qwen2.5:7b',
        timeoutMs: parseInt(process.env.OLLAMA_TIMEOUT_MS || '60000', 10),
        maxRetries: parseInt(process.env.OLLAMA_MAX_RETRIES || '5', 10),
    },
    settings: {
        cacheTTL: parseInt(process.env.MODERATION_CACHE_TTL || '3600', 10),
        enableCache: process.env.MODERATION_ENABLE_CACHE === 'true',
        cacheProvider: process.env.MODERATION_CACHE_PROVIDER || 'memory',
    },
    thresholds: {
        sexual: parseFloat(process.env.MODERATION_THRESHOLD_SEXUAL || '0.7'),
        violence: parseFloat(process.env.MODERATION_THRESHOLD_VIOLENCE || '0.7'),
        hate: parseFloat(process.env.MODERATION_THRESHOLD_HATE || '0.8'),
        harassment: parseFloat(process.env.MODERATION_THRESHOLD_HARASSMENT || '0.75'),
    },
    fallbackMode: process.env.MODERATION_FALLBACK_MODE || 'allow',
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
    password: process.env.REDIS_PASSWORD,
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
const chat_module_1 = __webpack_require__(/*! @/modules/chat/chat.module */ "./src/modules/chat/chat.module.ts");
const notifications_module_1 = __webpack_require__(/*! @/modules/notifications/notifications.module */ "./src/modules/notifications/notifications.module.ts");
const orders_module_1 = __webpack_require__(/*! @/modules/orders/orders.module */ "./src/modules/orders/orders.module.ts");
const posts_module_1 = __webpack_require__(/*! @/modules/posts/posts.module */ "./src/modules/posts/posts.module.ts");
const profile_module_1 = __webpack_require__(/*! @/modules/profile/profile.module */ "./src/modules/profile/profile.module.ts");
const quotes_module_1 = __webpack_require__(/*! @/modules/quotes/quotes.module */ "./src/modules/quotes/quotes.module.ts");
const search_module_1 = __webpack_require__(/*! @/modules/search/search.module */ "./src/modules/search/search.module.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const event_emitter_1 = __webpack_require__(/*! @nestjs/event-emitter */ "@nestjs/event-emitter");
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
            posts_module_1.PostsModule,
            common_module_1.CommonModule,
            profile_module_1.ProfileModule,
            notifications_module_1.NotificationsModule,
            quotes_module_1.QuoteModule,
            chat_module_1.ChatModule,
            orders_module_1.OrdersModule,
            search_module_1.SearchModule,
            event_emitter_1.EventEmitterModule.forRoot(),
            throttler_1.ThrottlerModule.forRoot([{
                    ttl: 60000,
                    limit: 10,
                },]),
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
const platform_socket_io_1 = __webpack_require__(/*! @nestjs/platform-socket.io */ "@nestjs/platform-socket.io");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const cookie_parser_1 = __importDefault(__webpack_require__(/*! cookie-parser */ "cookie-parser"));
const index_1 = __webpack_require__(/*! ./common/exceptions/index */ "./src/common/exceptions/index.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useWebSocketAdapter(new platform_socket_io_1.IoAdapter(app));
    app.use((0, cookie_parser_1.default)());
    const httpAdapterHost = app.get(core_1.HttpAdapterHost);
    app.useGlobalFilters(new index_1.GlobalExceptionFilter(httpAdapterHost));
    const configService = app.get(config_1.ConfigService);
    app.enableCors({
        origin: [
            'https://postmaxillary-variably-justa.ngrok-free.dev',
            'http://localhost:3001',
            'http://localhost:3000',
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
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
const auth_response_dto_1 = __webpack_require__(/*! ./dtos/auth-response.dto */ "./src/modules/auth/dtos/auth-response.dto.ts");
const auth_dto_1 = __webpack_require__(/*! ./dtos/auth.dto */ "./src/modules/auth/dtos/auth.dto.ts");
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
    async register(bodyRegister) {
        const result = await this.authService.register(bodyRegister);
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
    async refreshMobile(bodyRefreshToken, deviceId) {
        const tokens = await this.authService.refreshAccessToken({
            ...bodyRefreshToken,
            deviceId,
        });
        return this.responseBuilder.buildRefreshMobileResponse(tokens);
    }
    async logoutMobile(bodyRefresh, deviceId) {
        await this.authService.revokeRefreshToken({ ...bodyRefresh, deviceId });
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
        description: 'Send body: RegisterDto',
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Registration successful',
        type: auth_response_dto_1.RegisterResponseDto,
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
    __metadata("design:paramtypes", [typeof (_e = typeof auth_dto_1.RegisterDto !== "undefined" && auth_dto_1.RegisterDto) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('logout-all'),
    (0, swagger_1.ApiTags)('Auth - Common'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Logout from all devices',
        description: 'Sent body: bodyRefreshToken, Revoke all refresh tokens for the current user.',
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
        description: 'Send body: LoginDto. Authenticate user via web browser. Refresh token stored in httpOnly cookie.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Login successful',
        type: auth_response_dto_1.LoginResponseDto,
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
    __metadata("design:paramtypes", [typeof (_k = typeof auth_dto_1.LoginDto !== "undefined" && auth_dto_1.LoginDto) === "function" ? _k : Object, typeof (_l = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _l : Object]),
    __metadata("design:returntype", typeof (_m = typeof Promise !== "undefined" && Promise) === "function" ? _m : Object)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('refresh'),
    (0, swagger_1.ApiTags)('Auth - Web'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, throttler_1.Throttle)({ default: { limit: 20, ttl: 60000 } }),
    (0, swagger_1.ApiOperation)({
        summary: 'Refresh access token (Web)',
        description: 'Do not send body, Do not send header, Sent cookie.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Token refreshed successfully, Do not send body, Do not send header, Refresh token is retrieved from cookie',
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
        description: 'Do not send body, Do not send header, Sent cookie. Revoke refresh token and clear cookie',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Logout successful',
        schema: {
            example: {
                success: true,
                message: 'Logout successfully',
                data: null
            }
        }
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
        description: 'Sent body: LoginMobileDto, Sent header X-Device-ID mobile',
    }),
    (0, swagger_1.ApiHeader)({
        name: 'X-Device-ID',
        description: 'Unique device identifier (UUID recommended)',
        required: true,
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Login successful (Mobile)',
        type: auth_response_dto_1.LoginResponseDto,
        schema: {
            example: {
                success: true,
                message: 'Login successfully',
                data: {
                    accessToken: 'access-token',
                    refreshToken: 'refresh-token',
                    user: {
                        id: 'uuid',
                        phone: '+84987654321',
                        name: 'Van Tin',
                        role: 'CUSTOMER'
                    }
                }
            }
        }
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
    __metadata("design:paramtypes", [typeof (_u = typeof auth_dto_1.LoginMobileDto !== "undefined" && auth_dto_1.LoginMobileDto) === "function" ? _u : Object, String]),
    __metadata("design:returntype", typeof (_v = typeof Promise !== "undefined" && Promise) === "function" ? _v : Object)
], AuthController.prototype, "loginMobile", null);
__decorate([
    (0, common_1.Post)('refresh-mobile'),
    (0, swagger_1.ApiTags)('Auth - Mobile'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, throttler_1.Throttle)({ default: { limit: 20, ttl: 60000 } }),
    (0, swagger_1.ApiOperation)({
        summary: 'Refresh access token (Mobile)',
        description: 'Sent body: RefreshTokenDto, Sent header X-Device-ID mobile.',
    }),
    (0, swagger_1.ApiHeader)({
        name: 'X-Device-ID',
        description: 'Unique device identifier',
        required: true,
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Token refreshed successfully',
        schema: {
            example: {
                success: true,
                message: 'Refresh token successfully',
                data: {
                    accessToken: 'new-access-token',
                    refreshToken: 'new-refresh-token'
                }
            }
        }
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Invalid or expired refresh token',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, device_id_decorator_1.DeviceId)(device_id_validation_pipe_1.DeviceIdValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_w = typeof auth_dto_1.RefreshTokenDto !== "undefined" && auth_dto_1.RefreshTokenDto) === "function" ? _w : Object, String]),
    __metadata("design:returntype", typeof (_x = typeof Promise !== "undefined" && Promise) === "function" ? _x : Object)
], AuthController.prototype, "refreshMobile", null);
__decorate([
    (0, common_1.Post)('logout-mobile'),
    (0, swagger_1.ApiTags)('Auth - Mobile'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Logout (Mobile)',
        description: 'Sent body: RefreshTokenDto, Sent header X-Device-ID mobile. Revoke refresh token for specific device.',
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
    __param(0, (0, common_1.Body)()),
    __param(1, (0, device_id_decorator_1.DeviceId)(device_id_validation_pipe_1.DeviceIdValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_y = typeof auth_dto_1.RefreshTokenDto !== "undefined" && auth_dto_1.RefreshTokenDto) === "function" ? _y : Object, String]),
    __metadata("design:returntype", typeof (_z = typeof Promise !== "undefined" && Promise) === "function" ? _z : Object)
], AuthController.prototype, "logoutMobile", null);
__decorate([
    (0, common_1.Post)('logout-device'),
    (0, swagger_1.ApiTags)('Auth - Mobile'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Logout specific device (Mobile)',
        description: 'Sent body: refreshToken, Sent header X-Device-ID mobile. Revoke all tokens for a specific device.',
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
    __metadata("design:returntype", typeof (_0 = typeof Promise !== "undefined" && Promise) === "function" ? _0 : Object)
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
const users_module_1 = __webpack_require__(/*! ../users/users.module */ "./src/modules/users/users.module.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/modules/auth/auth.service.ts");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./src/modules/auth/auth.controller.ts");
const refresh_token_entity_1 = __webpack_require__(/*! ./entities/refresh-token.entity */ "./src/modules/auth/entities/refresh-token.entity.ts");
const refresh_token_repository_1 = __webpack_require__(/*! ./repositories/refresh-token.repository */ "./src/modules/auth/repositories/refresh-token.repository.ts");
const auth_config_service_1 = __webpack_require__(/*! ./services/auth-config.service */ "./src/modules/auth/services/auth-config.service.ts");
const auth_response_builder_service_1 = __webpack_require__(/*! ./services/auth-response-builder.service */ "./src/modules/auth/services/auth-response-builder.service.ts");
const authentication_factory_service_1 = __webpack_require__(/*! ./services/authentication-factory.service */ "./src/modules/auth/services/authentication-factory.service.ts");
const cookie_service_1 = __webpack_require__(/*! ./services/cookie.service */ "./src/modules/auth/services/cookie.service.ts");
const token_management_service_1 = __webpack_require__(/*! ./services/token-management.service */ "./src/modules/auth/services/token-management.service.ts");
const user_validation_service_1 = __webpack_require__(/*! ./services/user-validation.service */ "./src/modules/auth/services/user-validation.service.ts");
const profile_module_1 = __webpack_require__(/*! @/modules/profile/profile.module */ "./src/modules/profile/profile.module.ts");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            profile_module_1.ProfileModule,
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const _Transaction_1 = __webpack_require__(/*! @/common/decorators/@Transaction */ "./src/common/decorators/@Transaction.ts");
const exceptions_1 = __webpack_require__(/*! @/common/exceptions */ "./src/common/exceptions/index.ts");
const auth_exception_1 = __webpack_require__(/*! @/modules/auth/exceptions/auth.exception */ "./src/modules/auth/exceptions/auth.exception.ts");
const user_role_enum_1 = __webpack_require__(/*! @/common/enums/user-role.enum */ "./src/common/enums/user-role.enum.ts");
const jwt_service_1 = __webpack_require__(/*! @/common/services/jwt.service */ "./src/common/services/jwt.service.ts");
const error_util_1 = __webpack_require__(/*! @/common/utils/error.util */ "./src/common/utils/error.util.ts");
const profile_repository_1 = __webpack_require__(/*! @/modules/profile/repositorys/profile-repository */ "./src/modules/profile/repositorys/profile-repository.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const auth_constants_1 = __webpack_require__(/*! ./constants/auth.constants */ "./src/modules/auth/constants/auth.constants.ts");
const auth_dto_1 = __webpack_require__(/*! ./dtos/auth.dto */ "./src/modules/auth/dtos/auth.dto.ts");
const refresh_token_interface_1 = __webpack_require__(/*! ./interfaces/refresh-token.interface */ "./src/modules/auth/interfaces/refresh-token.interface.ts");
const user_to_jwt_payload_mapper_1 = __webpack_require__(/*! ./mappers/user-to-jwt-payload.mapper */ "./src/modules/auth/mappers/user-to-jwt-payload.mapper.ts");
const auth_config_service_1 = __webpack_require__(/*! ./services/auth-config.service */ "./src/modules/auth/services/auth-config.service.ts");
const authentication_factory_service_1 = __webpack_require__(/*! ./services/authentication-factory.service */ "./src/modules/auth/services/authentication-factory.service.ts");
const token_management_service_1 = __webpack_require__(/*! ./services/token-management.service */ "./src/modules/auth/services/token-management.service.ts");
const user_validation_service_1 = __webpack_require__(/*! ./services/user-validation.service */ "./src/modules/auth/services/user-validation.service.ts");
const password_util_1 = __webpack_require__(/*! ./utils/password.util */ "./src/modules/auth/utils/password.util.ts");
let AuthService = AuthService_1 = class AuthService {
    constructor(jwtService, tokenMgmt, userValidation, authFactory, authConfig, profileRepo) {
        this.jwtService = jwtService;
        this.tokenMgmt = tokenMgmt;
        this.userValidation = userValidation;
        this.authFactory = authFactory;
        this.authConfig = authConfig;
        this.profileRepo = profileRepo;
        this.logger = new common_1.Logger(AuthService_1.name);
    }
    async register(data, manager) {
        try {
            const email = data.email?.toLowerCase().trim();
            const phone = data.phone?.trim();
            const fullName = data.fullName?.trim();
            const role = data.role;
            const allowedRoles = [user_role_enum_1.UserRole.CUSTOMER, user_role_enum_1.UserRole.PROVIDER];
            if (!role || !allowedRoles.includes(role)) {
                throw new common_1.BadRequestException(`Invalid role. Allowed roles: ${allowedRoles.join(', ')}`);
            }
            await Promise.all([
                this.userValidation.checkEmailExists(email, manager),
                this.userValidation.checkPhoneExists(phone, manager)
            ]);
            const passwordHash = await password_util_1.PasswordUtil.hash(data.password, this.authConfig.bcryptRounds);
            const user = await this.userValidation.createUser({
                email,
                phone,
                passwordHash,
                role,
                isVerified: false,
                isActive: true,
            }, manager);
            const profile = await this.profileRepo.createProfile(user.id, {
                fullName,
                displayName: fullName,
            }, manager);
            this.logger.log(`User registered: ${user.id} with role: ${role},Profile created: ${profile.id}`);
            return {
                id: user.id,
                email: user.email,
                phone: user.phone,
                fullName: profile.fullName
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
            throw new exceptions_1.InternalServerException('Mobile login failed: ${errorMessage}');
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
    __metadata("design:paramtypes", [typeof (_g = typeof auth_dto_1.RegisterDto !== "undefined" && auth_dto_1.RegisterDto) === "function" ? _g : Object, typeof (_h = typeof typeorm_1.EntityManager !== "undefined" && typeorm_1.EntityManager) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], AuthService.prototype, "register", null);
__decorate([
    (0, _Transaction_1.Transactional)(),
    __param(1, (0, _Transaction_1.TransactionManager)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof auth_dto_1.LoginDto !== "undefined" && auth_dto_1.LoginDto) === "function" ? _k : Object, typeof (_l = typeof typeorm_1.EntityManager !== "undefined" && typeorm_1.EntityManager) === "function" ? _l : Object]),
    __metadata("design:returntype", typeof (_m = typeof Promise !== "undefined" && Promise) === "function" ? _m : Object)
], AuthService.prototype, "login", null);
__decorate([
    (0, _Transaction_1.Transactional)(),
    __param(1, (0, _Transaction_1.TransactionManager)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_p = typeof typeorm_1.EntityManager !== "undefined" && typeorm_1.EntityManager) === "function" ? _p : Object]),
    __metadata("design:returntype", typeof (_q = typeof Promise !== "undefined" && Promise) === "function" ? _q : Object)
], AuthService.prototype, "loginMobile", null);
__decorate([
    (0, _Transaction_1.Transactional)(),
    __param(1, (0, _Transaction_1.TransactionManager)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_r = typeof refresh_token_interface_1.RefreshInput !== "undefined" && refresh_token_interface_1.RefreshInput) === "function" ? _r : Object, typeof (_s = typeof typeorm_1.EntityManager !== "undefined" && typeorm_1.EntityManager) === "function" ? _s : Object]),
    __metadata("design:returntype", typeof (_t = typeof Promise !== "undefined" && Promise) === "function" ? _t : Object)
], AuthService.prototype, "refreshAccessToken", null);
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_service_1.JwtService !== "undefined" && jwt_service_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof token_management_service_1.TokenManagementService !== "undefined" && token_management_service_1.TokenManagementService) === "function" ? _b : Object, typeof (_c = typeof user_validation_service_1.UserValidationService !== "undefined" && user_validation_service_1.UserValidationService) === "function" ? _c : Object, typeof (_d = typeof authentication_factory_service_1.AuthenticationFactory !== "undefined" && authentication_factory_service_1.AuthenticationFactory) === "function" ? _d : Object, typeof (_e = typeof auth_config_service_1.AuthConfigService !== "undefined" && auth_config_service_1.AuthConfigService) === "function" ? _e : Object, typeof (_f = typeof profile_repository_1.ProfileRepository !== "undefined" && profile_repository_1.ProfileRepository) === "function" ? _f : Object])
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

/***/ "./src/modules/auth/dtos/auth-data-response.dto.ts":
/*!*********************************************************!*\
  !*** ./src/modules/auth/dtos/auth-data-response.dto.ts ***!
  \*********************************************************/
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
exports.TokenResponseDataDto = exports.RegisterResponseDataDto = exports.LoginResponseDataDto = void 0;
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
class TokenResponseDataDto {
}
exports.TokenResponseDataDto = TokenResponseDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6...' }),
    __metadata("design:type", String)
], TokenResponseDataDto.prototype, "accessToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6...' }),
    __metadata("design:type", String)
], TokenResponseDataDto.prototype, "refreshToken", void 0);


/***/ }),

/***/ "./src/modules/auth/dtos/auth-response.dto.ts":
/*!****************************************************!*\
  !*** ./src/modules/auth/dtos/auth-response.dto.ts ***!
  \****************************************************/
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
exports.TokenResponseDto = exports.RegisterResponseDto = exports.LoginResponseDto = void 0;
const base_response_dto_1 = __webpack_require__(/*! @/common/dtos/base-response.dto */ "./src/common/dtos/base-response.dto.ts");
const auth_data_response_dto_1 = __webpack_require__(/*! @/modules/auth/dtos/auth-data-response.dto */ "./src/modules/auth/dtos/auth-data-response.dto.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
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
    (0, swagger_1.ApiProperty)({ type: auth_data_response_dto_1.LoginResponseDataDto }),
    __metadata("design:type", typeof (_a = typeof auth_data_response_dto_1.LoginResponseDataDto !== "undefined" && auth_data_response_dto_1.LoginResponseDataDto) === "function" ? _a : Object)
], LoginResponseDto.prototype, "data", void 0);
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
    (0, swagger_1.ApiProperty)({ type: auth_data_response_dto_1.RegisterResponseDataDto }),
    __metadata("design:type", typeof (_b = typeof auth_data_response_dto_1.RegisterResponseDataDto !== "undefined" && auth_data_response_dto_1.RegisterResponseDataDto) === "function" ? _b : Object)
], RegisterResponseDto.prototype, "data", void 0);
class TokenResponseDto extends base_response_dto_1.BaseResponseDto {
}
exports.TokenResponseDto = TokenResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], TokenResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Register successful' }),
    __metadata("design:type", String)
], TokenResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: auth_data_response_dto_1.TokenResponseDataDto }),
    __metadata("design:type", typeof (_c = typeof auth_data_response_dto_1.TokenResponseDataDto !== "undefined" && auth_data_response_dto_1.TokenResponseDataDto) === "function" ? _c : Object)
], TokenResponseDto.prototype, "data", void 0);


/***/ }),

/***/ "./src/modules/auth/dtos/auth.dto.ts":
/*!*******************************************!*\
  !*** ./src/modules/auth/dtos/auth.dto.ts ***!
  \*******************************************/
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
exports.RegisterDto = exports.RefreshTokenDto = exports.LoginDto = exports.LoginMobileDto = void 0;
const user_role_enum_1 = __webpack_require__(/*! @/common/enums/user-role.enum */ "./src/common/enums/user-role.enum.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const auth_constants_1 = __webpack_require__(/*! ../constants/auth.constants */ "./src/modules/auth/constants/auth.constants.ts");
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
class RefreshTokenDto {
}
exports.RefreshTokenDto = RefreshTokenDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Refresh token',
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RefreshTokenDto.prototype, "refreshToken", void 0);
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
    (0, class_validator_1.Matches)(/^0\d{9}$/, {
        message: 'Invalid phone number format',
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
__decorate([
    (0, swagger_1.ApiProperty)({
        example: user_role_enum_1.UserRole.CUSTOMER,
        description: 'User role - customer or provider',
        enum: user_role_enum_1.UserRole,
        enumName: 'UserRole',
    }),
    (0, class_validator_1.IsEnum)(user_role_enum_1.UserRole, {
        message: `Role must be either ${user_role_enum_1.UserRole.CUSTOMER} or ${user_role_enum_1.UserRole.PROVIDER}`
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Role is required' }),
    __metadata("design:type", typeof (_a = typeof user_role_enum_1.UserRole !== "undefined" && user_role_enum_1.UserRole) === "function" ? _a : Object)
], RegisterDto.prototype, "role", void 0);


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

/***/ "./src/modules/auth/interfaces/jwt-payload.interface.ts":
/*!**************************************************************!*\
  !*** ./src/modules/auth/interfaces/jwt-payload.interface.ts ***!
  \**************************************************************/
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

/***/ "./src/modules/auth/mappers/user-to-jwt-payload.mapper.ts":
/*!****************************************************************!*\
  !*** ./src/modules/auth/mappers/user-to-jwt-payload.mapper.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toJwtPayload = toJwtPayload;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
function toJwtPayload(user) {
    if (!user?.id || !user?.email || !user?.role) {
        throw new common_1.BadRequestException({
            code: 'INVALID_USER_DATA',
            message: 'User data is incomplete',
        });
    }
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

/***/ "./src/modules/chat/chat.controller.ts":
/*!*********************************************!*\
  !*** ./src/modules/chat/chat.controller.ts ***!
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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatController = void 0;
const jwt_auth_guard_1 = __webpack_require__(/*! @/common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const _CurrentUserId_1 = __webpack_require__(/*! ../../common/decorators/@CurrentUserId */ "./src/common/decorators/@CurrentUserId.ts");
const chat_service_1 = __webpack_require__(/*! ./chat.service */ "./src/modules/chat/chat.service.ts");
const chat_dto_1 = __webpack_require__(/*! ./dto/chat.dto */ "./src/modules/chat/dto/chat.dto.ts");
let ChatController = class ChatController {
    constructor(chatService) {
        this.chatService = chatService;
    }
    async getConversations(userId) {
        return await this.chatService.getUserConversations(userId);
    }
    async getConversation(conversationId, userId) {
        return await this.chatService.getConversationById(conversationId, userId);
    }
    async createDirectConversation(customerId, dto) {
        return await this.chatService.createDirectConversation(customerId, dto.providerId);
    }
    async sendMessage(conversationId, userId, dto) {
        return await this.chatService.sendMessage(conversationId, userId, dto);
    }
    async getMessages(conversationId, userId, query) {
        return await this.chatService.getMessages(conversationId, userId, query);
    }
    async markAsRead(conversationId, userId) {
        await this.chatService.markMessagesAsRead(conversationId, userId);
        return { success: true };
    }
    async getUnreadCount(userId) {
        const count = await this.chatService.getTotalUnreadCount(userId);
        return { count };
    }
    async closeConversation(conversationId, userId) {
        await this.chatService.closeConversation(conversationId, userId);
        return { success: true };
    }
    async deleteConversation(conversationId, userId) {
        await this.chatService.deleteConversation(conversationId, userId);
    }
    async searchMessages(userId, keyword, conversationId) {
        return await this.chatService.searchMessages(userId, keyword, conversationId);
    }
};
exports.ChatController = ChatController;
__decorate([
    (0, common_1.Get)('conversations'),
    (0, swagger_1.ApiOperation)({ summary: 'Lấy danh sách conversations' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Thành công' }),
    __param(0, (0, _CurrentUserId_1.CurrentUserId)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getConversations", null);
__decorate([
    (0, common_1.Get)('conversations/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Xem chi tiết conversation' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Thành công' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Không có quyền' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, _CurrentUserId_1.CurrentUserId)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getConversation", null);
__decorate([
    (0, common_1.Post)('conversations/direct'),
    (0, swagger_1.ApiOperation)({ summary: 'Tạo conversation riêng với thợ' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Tạo thành công' }),
    __param(0, (0, _CurrentUserId_1.CurrentUserId)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof chat_dto_1.CreateDirectConversationDto !== "undefined" && chat_dto_1.CreateDirectConversationDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "createDirectConversation", null);
__decorate([
    (0, common_1.Post)('conversations/:id/messages'),
    (0, swagger_1.ApiOperation)({ summary: 'Gửi tin nhắn' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Gửi thành công' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, _CurrentUserId_1.CurrentUserId)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, typeof (_c = typeof chat_dto_1.SendMessageDto !== "undefined" && chat_dto_1.SendMessageDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "sendMessage", null);
__decorate([
    (0, common_1.Get)('conversations/:id/messages'),
    (0, swagger_1.ApiOperation)({ summary: 'Lấy tin nhắn của conversation' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Thành công' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, _CurrentUserId_1.CurrentUserId)('id')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, typeof (_d = typeof chat_dto_1.GetMessagesQueryDto !== "undefined" && chat_dto_1.GetMessagesQueryDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getMessages", null);
__decorate([
    (0, common_1.Post)('conversations/:id/read'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Đánh dấu tin nhắn đã đọc' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Thành công' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, _CurrentUserId_1.CurrentUserId)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "markAsRead", null);
__decorate([
    (0, common_1.Get)('unread-count'),
    (0, swagger_1.ApiOperation)({ summary: 'Đếm tổng tin nhắn chưa đọc' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Thành công' }),
    __param(0, (0, _CurrentUserId_1.CurrentUserId)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getUnreadCount", null);
__decorate([
    (0, common_1.Post)('conversations/:id/close'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Đóng conversation' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Đóng thành công' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, _CurrentUserId_1.CurrentUserId)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "closeConversation", null);
__decorate([
    (0, common_1.Delete)('conversations/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Xóa conversation' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Xóa thành công' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, _CurrentUserId_1.CurrentUserId)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "deleteConversation", null);
__decorate([
    (0, common_1.Get)('search'),
    (0, swagger_1.ApiOperation)({ summary: 'Tìm kiếm tin nhắn' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Thành công' }),
    __param(0, (0, _CurrentUserId_1.CurrentUserId)('id')),
    __param(1, (0, common_1.Query)('keyword')),
    __param(2, (0, common_1.Query)('conversationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "searchMessages", null);
exports.ChatController = ChatController = __decorate([
    (0, swagger_1.ApiTags)('Chat'),
    (0, common_1.Controller)('chat'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [typeof (_a = typeof chat_service_1.ChatService !== "undefined" && chat_service_1.ChatService) === "function" ? _a : Object])
], ChatController);


/***/ }),

/***/ "./src/modules/chat/chat.gateway.ts":
/*!******************************************!*\
  !*** ./src/modules/chat/chat.gateway.ts ***!
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
var ChatGateway_1;
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatGateway = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const event_emitter_1 = __webpack_require__(/*! @nestjs/event-emitter */ "@nestjs/event-emitter");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const websockets_1 = __webpack_require__(/*! @nestjs/websockets */ "@nestjs/websockets");
const socket_io_1 = __webpack_require__(/*! socket.io */ "socket.io");
const chat_service_1 = __webpack_require__(/*! ./chat.service */ "./src/modules/chat/chat.service.ts");
let ChatGateway = ChatGateway_1 = class ChatGateway {
    constructor(jwtService, chatService) {
        this.jwtService = jwtService;
        this.chatService = chatService;
        this.logger = new common_1.Logger(ChatGateway_1.name);
        this.userSockets = new Map();
        this.socketUsers = new Map();
    }
    async handleConnection(client) {
        try {
            const token = client.handshake.auth.token ||
                client.handshake.headers.authorization?.split(' ')[1];
            if (!token) {
                client.disconnect();
                return;
            }
            const payload = await this.jwtService.verifyAsync(token);
            const userId = payload.sub || payload.id;
            if (!userId) {
                client.disconnect();
                return;
            }
            client.data.userId = userId;
            this.socketUsers.set(client.id, userId);
            if (!this.userSockets.has(userId)) {
                this.userSockets.set(userId, new Set());
            }
            this.userSockets.get(userId).add(client.id);
            await client.join(`user:${userId}`);
            const conversations = await this.chatService.getUserConversations(userId);
            for (const conv of conversations) {
                await client.join(`conversation:${conv.id}`);
            }
            this.logger.log(`Chat client connected: ${client.id} (User: ${userId})`);
            const unreadCount = await this.chatService.getTotalUnreadCount(userId);
            client.emit('connected', { userId, unreadCount });
        }
        catch (error) {
            this.logger.error('Chat connection error:', error);
            client.disconnect();
        }
    }
    handleDisconnect(client) {
        const userId = this.socketUsers.get(client.id);
        if (userId) {
            const sockets = this.userSockets.get(userId);
            if (sockets) {
                sockets.delete(client.id);
                if (sockets.size === 0) {
                    this.userSockets.delete(userId);
                }
            }
            this.socketUsers.delete(client.id);
        }
        this.logger.log(`Chat client disconnected: ${client.id} (User: ${userId})`);
    }
    async handleSendMessage(client, data) {
        try {
            const userId = client.data.userId;
            const message = await this.chatService.sendMessage(data.conversationId, userId, data.message);
            return { success: true, message };
        }
        catch (error) {
            this.logger.error('Send message error:', error);
            return { success: false, error: error.message };
        }
    }
    async handleMarkRead(client, data) {
        try {
            const userId = client.data.userId;
            await this.chatService.markMessagesAsRead(data.conversationId, userId);
            return { success: true };
        }
        catch (error) {
            this.logger.error('Mark read error:', error);
            return { success: false, error: error.message };
        }
    }
    handleTyping(client, data) {
        const userId = client.data.userId;
        client.to(`conversation:${data.conversationId}`).emit('user_typing', {
            conversationId: data.conversationId,
            userId,
            isTyping: data.isTyping,
        });
    }
    async handleJoinConversation(client, data) {
        try {
            const userId = client.data.userId;
            const conversation = await this.chatService.getConversationById(data.conversationId, userId);
            if (conversation) {
                await client.join(`conversation:${data.conversationId}`);
                return { success: true };
            }
            return { success: false, error: 'Not a participant' };
        }
        catch (error) {
            return { success: false, error: error.message };
        }
    }
    async handleLeaveConversation(client, data) {
        await client.leave(`conversation:${data.conversationId}`);
        return { success: true };
    }
    handleMessageSent(payload) {
        this.server
            .to(`conversation:${payload.conversationId}`)
            .emit('new_message', {
            conversationId: payload.conversationId,
            message: payload.message,
        });
        this.server.to(`user:${payload.receiverId}`).emit('unread_updated', {
            conversationId: payload.conversationId,
            increment: 1,
        });
        this.logger.log(`Message sent to conversation: ${payload.conversationId}`);
    }
    handleMessagesRead(payload) {
        this.server.to(`conversation:${payload.conversationId}`).emit('messages_read', {
            conversationId: payload.conversationId,
            readBy: payload.userId,
        });
    }
    isUserOnline(userId) {
        const sockets = this.userSockets.get(userId);
        return !!sockets && sockets.size > 0;
    }
    sendToUser(userId, event, data) {
        this.server.to(`user:${userId}`).emit(event, data);
    }
    sendToConversation(conversationId, event, data) {
        this.server.to(`conversation:${conversationId}`).emit(event, data);
    }
    getOnlineUsersCount() {
        return this.userSockets.size;
    }
    getOnlineUsers() {
        return Array.from(this.userSockets.keys());
    }
};
exports.ChatGateway = ChatGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", typeof (_c = typeof socket_io_1.Server !== "undefined" && socket_io_1.Server) === "function" ? _c : Object)
], ChatGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('send_message'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _d : Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleSendMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('mark_read'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _e : Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleMarkRead", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('typing'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _f : Object, Object]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "handleTyping", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('join_conversation'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _g : Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleJoinConversation", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('leave_conversation'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _h : Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleLeaveConversation", null);
__decorate([
    (0, event_emitter_1.OnEvent)('message.sent'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "handleMessageSent", null);
__decorate([
    (0, event_emitter_1.OnEvent)('messages.read'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "handleMessagesRead", null);
exports.ChatGateway = ChatGateway = ChatGateway_1 = __decorate([
    (0, common_1.Injectable)(),
    (0, websockets_1.WebSocketGateway)({
        namespace: 'chat',
        cors: {
            origin: process.env.FRONTEND_URL || '*',
            credentials: true,
        },
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof chat_service_1.ChatService !== "undefined" && chat_service_1.ChatService) === "function" ? _b : Object])
], ChatGateway);


/***/ }),

/***/ "./src/modules/chat/chat.module.ts":
/*!*****************************************!*\
  !*** ./src/modules/chat/chat.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatModule = void 0;
const notifications_module_1 = __webpack_require__(/*! @/modules/notifications/notifications.module */ "./src/modules/notifications/notifications.module.ts");
const quote_entity_1 = __webpack_require__(/*! @/modules/quotes/entities/quote.entity */ "./src/modules/quotes/entities/quote.entity.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const chat_controller_1 = __webpack_require__(/*! ./chat.controller */ "./src/modules/chat/chat.controller.ts");
const chat_gateway_1 = __webpack_require__(/*! ./chat.gateway */ "./src/modules/chat/chat.gateway.ts");
const chat_service_1 = __webpack_require__(/*! ./chat.service */ "./src/modules/chat/chat.service.ts");
const conversation_entity_1 = __webpack_require__(/*! ./entities/conversation.entity */ "./src/modules/chat/entities/conversation.entity.ts");
const message_entity_1 = __webpack_require__(/*! ./entities/message.entity */ "./src/modules/chat/entities/message.entity.ts");
let ChatModule = class ChatModule {
};
exports.ChatModule = ChatModule;
exports.ChatModule = ChatModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([conversation_entity_1.Conversation, message_entity_1.Message, quote_entity_1.Quote]),
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET || 'your-secret-key',
                signOptions: { expiresIn: '7d' },
            }),
            notifications_module_1.NotificationsModule,
        ],
        controllers: [chat_controller_1.ChatController],
        providers: [chat_service_1.ChatService, chat_gateway_1.ChatGateway],
        exports: [chat_service_1.ChatService, chat_gateway_1.ChatGateway],
    })
], ChatModule);


/***/ }),

/***/ "./src/modules/chat/chat.service.ts":
/*!******************************************!*\
  !*** ./src/modules/chat/chat.service.ts ***!
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
var ChatService_1;
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatService = void 0;
const notification_service_1 = __webpack_require__(/*! @/modules/notifications/notification.service */ "./src/modules/notifications/notification.service.ts");
const quote_entity_1 = __webpack_require__(/*! @/modules/quotes/entities/quote.entity */ "./src/modules/quotes/entities/quote.entity.ts");
const quote_status_enum_1 = __webpack_require__(/*! @/modules/quotes/enums/quote-status.enum */ "./src/modules/quotes/enums/quote-status.enum.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const event_emitter_1 = __webpack_require__(/*! @nestjs/event-emitter */ "@nestjs/event-emitter");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const conversation_entity_1 = __webpack_require__(/*! ./entities/conversation.entity */ "./src/modules/chat/entities/conversation.entity.ts");
const message_entity_1 = __webpack_require__(/*! ./entities/message.entity */ "./src/modules/chat/entities/message.entity.ts");
let ChatService = ChatService_1 = class ChatService {
    constructor(conversationRepo, messageRepo, quoteRepo, notificationService, eventEmitter) {
        this.conversationRepo = conversationRepo;
        this.messageRepo = messageRepo;
        this.quoteRepo = quoteRepo;
        this.notificationService = notificationService;
        this.eventEmitter = eventEmitter;
        this.logger = new common_1.Logger(ChatService_1.name);
        this.SYSTEM_USER_ID = '00000000-0000-0000-0000-000000000001';
    }
    async createConversationFromQuote(quoteId) {
        const quote = await this.quoteRepo.findOne({
            where: { id: quoteId },
            relations: ['post', 'post.customer', 'provider'],
        });
        if (!quote) {
            throw new common_1.NotFoundException('Quote not found');
        }
        if (quote.status !== quote_status_enum_1.QuoteStatus.ACCEPTED_FOR_CHAT) {
            throw new common_1.BadRequestException('Quote must be accepted for chat first. Current status: ' + quote.status);
        }
        const existing = await this.conversationRepo.findOne({
            where: { quoteId },
        });
        if (existing) {
            this.logger.log(`Conversation already exists for quote ${quoteId}`);
            return existing;
        }
        const conversation = this.conversationRepo.create({
            customerId: quote.post.customerId,
            providerId: quote.providerId,
            quoteId,
            type: conversation_entity_1.ConversationType.QUOTE_BASED,
            isActive: true,
        });
        const saved = await this.conversationRepo.save(conversation);
        await this.sendSystemMessage(saved.id, `Cuộc trò chuyện bắt đầu từ chào giá được chấp nhận.\n` +
            `Giá hiện tại: ${parseFloat(quote.price.toString()).toLocaleString('vi-VN')}đ\n` +
            `Thời gian ước tính: ${quote.estimatedDuration || 'Chưa xác định'} phút`);
        this.logger.log(`Conversation created from quote: ${saved.id}`);
        return saved;
    }
    async createDirectConversation(customerId, providerId) {
        if (customerId === providerId) {
            throw new common_1.BadRequestException('Cannot create conversation with yourself');
        }
        const existing = await this.conversationRepo.findOne({
            where: {
                customerId,
                providerId,
                type: conversation_entity_1.ConversationType.DIRECT_REQUEST,
            },
        });
        if (existing) {
            this.logger.log(`Direct conversation already exists: ${existing.id}`);
            return existing;
        }
        const conversation = this.conversationRepo.create({
            customerId,
            providerId,
            type: conversation_entity_1.ConversationType.DIRECT_REQUEST,
            isActive: true,
        });
        const saved = await this.conversationRepo.save(conversation);
        const systemMessage = this.messageRepo.create({
            conversationId: saved.id,
            senderId: this.SYSTEM_USER_ID,
            type: message_entity_1.MessageType.SYSTEM,
            content: 'Cuộc trò chuyện đã được tạo. Hãy thảo luận về yêu cầu dịch vụ của bạn.',
            isRead: false,
        });
        const savedMessage = await this.messageRepo.save(systemMessage);
        saved.lastMessageAt = savedMessage.createdAt;
        await this.conversationRepo.save(saved);
        this.eventEmitter.emit('message.sent', {
            conversationId: saved.id,
            message: savedMessage,
            receiverId: customerId,
        });
        this.eventEmitter.emit('message.sent', {
            conversationId: saved.id,
            message: savedMessage,
            receiverId: providerId,
        });
        await this.sendNotificationToBoth(saved, savedMessage, customerId, providerId);
        this.logger.log(`Direct conversation created: ${saved.id}`);
        return saved;
    }
    async sendNotificationToBoth(conversation, message, customerId, providerId) {
        try {
            this.eventEmitter.emit('notification.send', {
                userId: customerId,
                type: 'NEW_MESSAGE',
                title: 'Cuộc trò chuyện mới',
                body: message.content,
                data: {
                    conversationId: conversation.id,
                    messageId: message.id,
                },
            });
            this.eventEmitter.emit('notification.send', {
                userId: providerId,
                type: 'NEW_MESSAGE',
                title: 'Cuộc trò chuyện mới',
                body: message.content,
                data: {
                    conversationId: conversation.id,
                    messageId: message.id,
                },
            });
        }
        catch (error) {
            this.logger.error('Failed to send notifications', error);
        }
    }
    async sendMessage(conversationId, senderId, dto) {
        const conversation = await this.conversationRepo.findOne({
            where: { id: conversationId },
            relations: ['customer', 'provider'],
        });
        if (!conversation) {
            throw new common_1.NotFoundException('Conversation not found');
        }
        if (!conversation.isParticipant(senderId)) {
            throw new common_1.ForbiddenException('You are not a participant in this conversation');
        }
        if (!conversation.isActive) {
            throw new common_1.BadRequestException('Conversation is closed');
        }
        const normalizedSenderId = senderId === 'system' || senderId === message_entity_1.MessageType.SYSTEM
            ? this.SYSTEM_USER_ID
            : senderId;
        if (!conversation.isParticipant(normalizedSenderId) && normalizedSenderId !== this.SYSTEM_USER_ID) {
            throw new common_1.ForbiddenException('You are not a participant in this conversation');
        }
        this.validateMessageContent(dto);
        const message = this.messageRepo.create({
            conversationId,
            senderId,
            type: dto.type,
            content: dto.content?.trim(),
            fileUrls: dto.fileUrls || [],
            fileNames: dto.fileNames,
            isRead: false,
        });
        const saved = await this.messageRepo.save(message);
        await this.updateConversationAfterMessage(conversation, saved, normalizedSenderId);
        this.eventEmitter.emit('message.sent', {
            conversationId,
            message: saved,
            receiverId: conversation.getOtherUserId(normalizedSenderId),
        });
        await this.sendMessageNotification(conversation, saved, normalizedSenderId);
        return saved;
    }
    async sendSystemMessage(conversationId, content) {
        const message = this.messageRepo.create({
            conversationId,
            senderId: this.SYSTEM_USER_ID,
            type: message_entity_1.MessageType.SYSTEM,
            content,
            isRead: true,
        });
        const saved = await this.messageRepo.save(message);
        await this.conversationRepo.update(conversationId, {
            lastMessageAt: new Date(),
            lastMessagePreview: content,
        });
        this.eventEmitter.emit('system.message.sent', {
            conversationId,
            message: saved,
        });
        return saved;
    }
    async getUserConversations(userId) {
        return await this.conversationRepo.find({
            where: [{ customerId: userId }, { providerId: userId }],
            relations: ['customer', 'customer.profile', 'provider', 'provider.profile', 'quote'],
            order: { lastMessageAt: 'DESC' },
        });
    }
    async getConversationById(conversationId, userId) {
        const conversation = await this.conversationRepo.findOne({
            where: { id: conversationId },
            relations: ['customer', 'customer.profile', 'provider', 'provider.profile', 'quote'],
        });
        if (!conversation) {
            throw new common_1.NotFoundException('Conversation not found');
        }
        if (!conversation.isParticipant(userId)) {
            throw new common_1.ForbiddenException('You are not a participant in this conversation');
        }
        return conversation;
    }
    async getMessages(conversationId, userId, query) {
        const conversation = await this.conversationRepo.findOne({
            where: { id: conversationId },
        });
        if (!conversation) {
            throw new common_1.NotFoundException('Conversation not found');
        }
        if (!conversation.isParticipant(userId)) {
            throw new common_1.ForbiddenException('You are not a participant in this conversation');
        }
        const limit = Math.min(query.limit || 50, 100);
        const queryBuilder = this.messageRepo
            .createQueryBuilder('message')
            .where('message.conversation_id = :conversationId', { conversationId })
            .orderBy('message.created_at', 'DESC')
            .limit(limit + 1);
        if (query.before) {
            queryBuilder.andWhere('message.created_at < :before', {
                before: new Date(query.before),
            });
        }
        const messages = await queryBuilder
            .leftJoinAndSelect('message.sender', 'sender')
            .leftJoinAndSelect('sender.profile', 'profile')
            .getMany();
        const hasMore = messages.length > limit;
        if (hasMore) {
            messages.pop();
        }
        return {
            messages: messages.reverse(),
            hasMore,
        };
    }
    async markMessagesAsRead(conversationId, userId) {
        const conversation = await this.conversationRepo.findOne({
            where: { id: conversationId },
        });
        if (!conversation) {
            throw new common_1.NotFoundException('Conversation not found');
        }
        if (!conversation.isParticipant(userId)) {
            throw new common_1.ForbiddenException('You are not a participant in this conversation');
        }
        await this.messageRepo
            .createQueryBuilder()
            .update(message_entity_1.Message)
            .set({ isRead: true, readAt: new Date() })
            .where('conversation_id = :conversationId', { conversationId })
            .andWhere('sender_id != :userId', { userId })
            .andWhere('sender_id != :system', { system: 'system' })
            .andWhere('is_read = false')
            .execute();
        const isCustomer = userId === conversation.customerId;
        await this.conversationRepo.update(conversationId, {
            ...(isCustomer
                ? { customerUnreadCount: 0 }
                : { providerUnreadCount: 0 }),
        });
        this.eventEmitter.emit('messages.read', {
            conversationId,
            userId,
        });
    }
    async closeConversation(conversationId, userId) {
        const conversation = await this.conversationRepo.findOne({
            where: { id: conversationId },
        });
        if (!conversation) {
            throw new common_1.NotFoundException('Conversation not found');
        }
        if (!conversation.isParticipant(userId)) {
            throw new common_1.ForbiddenException('You are not a participant in this conversation');
        }
        await this.conversationRepo.update(conversationId, {
            isActive: false,
        });
        await this.sendSystemMessage(conversationId, 'Cuộc trò chuyện đã đóng.');
        this.logger.log(`Conversation closed: ${conversationId}`);
    }
    async deleteConversation(conversationId, userId) {
        const conversation = await this.conversationRepo.findOne({
            where: { id: conversationId },
        });
        if (!conversation) {
            throw new common_1.NotFoundException('Conversation not found');
        }
        if (!conversation.isParticipant(userId)) {
            throw new common_1.ForbiddenException('You are not a participant in this conversation');
        }
        await this.conversationRepo.delete(conversationId);
        this.logger.log(`Conversation deleted: ${conversationId}`);
    }
    async getTotalUnreadCount(userId) {
        const result = await this.conversationRepo
            .createQueryBuilder('conversation')
            .select(`SUM(CASE 
                    WHEN conversation.customer_id = :userId THEN conversation.customer_unread_count 
                    WHEN conversation.provider_id = :userId THEN conversation.provider_unread_count 
                    ELSE 0 
                END)`, 'total')
            .where('conversation.customer_id = :userId OR conversation.provider_id = :userId', {
            userId,
        })
            .getRawOne();
        return parseInt(result?.total || '0', 10);
    }
    async searchMessages(userId, keyword, conversationId) {
        if (!keyword || keyword.trim().length < 2) {
            throw new common_1.BadRequestException('Keyword must be at least 2 characters');
        }
        const queryBuilder = this.messageRepo
            .createQueryBuilder('message')
            .leftJoin('message.conversation', 'conversation')
            .where('(conversation.customer_id = :userId OR conversation.provider_id = :userId)', { userId })
            .andWhere('message.content ILIKE :keyword', {
            keyword: `%${keyword}%`,
        })
            .andWhere('message.type = :type', { type: message_entity_1.MessageType.TEXT })
            .orderBy('message.created_at', 'DESC')
            .limit(50);
        if (conversationId) {
            queryBuilder.andWhere('message.conversation_id = :conversationId', {
                conversationId,
            });
        }
        return await queryBuilder
            .leftJoinAndSelect('message.sender', 'sender')
            .leftJoinAndSelect('message.conversation', 'conv')
            .getMany();
    }
    validateMessageContent(dto) {
        if (dto.type === message_entity_1.MessageType.TEXT && !dto.content?.trim()) {
            throw new common_1.BadRequestException('Text message cannot be empty');
        }
        if ((dto.type === message_entity_1.MessageType.IMAGE || dto.type === message_entity_1.MessageType.FILE) &&
            (!dto.fileUrls || dto.fileUrls.length === 0)) {
            throw new common_1.BadRequestException('File message must have at least one file');
        }
        if (dto.type === message_entity_1.MessageType.SYSTEM) {
            throw new common_1.BadRequestException('Cannot send system message directly');
        }
    }
    async updateConversationAfterMessage(conversation, message, senderId) {
        const isCustomerSender = senderId === conversation.customerId;
        await this.conversationRepo.update(conversation.id, {
            lastMessageAt: new Date(),
            lastMessagePreview: this.getMessagePreview(message),
            ...(isCustomerSender
                ? { providerUnreadCount: () => 'provider_unread_count + 1' }
                : { customerUnreadCount: () => 'customer_unread_count + 1' }),
        });
    }
    async sendMessageNotification(conversation, message, senderId) {
        const receiverId = conversation.getOtherUserId(senderId);
        const senderName = senderId === conversation.customerId
            ? conversation.customer.profile?.displayName || conversation.customer.profile?.fullName
            : conversation.provider.profile?.displayName || conversation.provider.profile?.fullName;
        await this.notificationService.notifyNewMessage(receiverId, senderId, senderName || 'User', this.getMessagePreview(message), conversation.id);
    }
    getMessagePreview(message) {
        switch (message.type) {
            case message_entity_1.MessageType.TEXT:
                return message.content?.substring(0, 100) || '';
            case message_entity_1.MessageType.IMAGE:
                return 'Hình ảnh';
            case message_entity_1.MessageType.FILE:
                return 'File đính kèm';
            case message_entity_1.MessageType.SYSTEM:
                return message.content || '';
            default:
                return 'Tin nhắn';
        }
    }
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = ChatService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(conversation_entity_1.Conversation)),
    __param(1, (0, typeorm_1.InjectRepository)(message_entity_1.Message)),
    __param(2, (0, typeorm_1.InjectRepository)(quote_entity_1.Quote)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object, typeof (_d = typeof notification_service_1.NotificationService !== "undefined" && notification_service_1.NotificationService) === "function" ? _d : Object, typeof (_e = typeof event_emitter_1.EventEmitter2 !== "undefined" && event_emitter_1.EventEmitter2) === "function" ? _e : Object])
], ChatService);


/***/ }),

/***/ "./src/modules/chat/dto/chat.dto.ts":
/*!******************************************!*\
  !*** ./src/modules/chat/dto/chat.dto.ts ***!
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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageResponseDto = exports.ConversationResponseDto = exports.GetMessagesQueryDto = exports.CreateDirectConversationDto = exports.SendMessageDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const message_entity_1 = __webpack_require__(/*! ../entities/message.entity */ "./src/modules/chat/entities/message.entity.ts");
class SendMessageDto {
}
exports.SendMessageDto = SendMessageDto;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: message_entity_1.MessageType, description: 'Loại tin nhắn' }),
    (0, class_validator_1.IsEnum)(message_entity_1.MessageType),
    __metadata("design:type", typeof (_a = typeof message_entity_1.MessageType !== "undefined" && message_entity_1.MessageType) === "function" ? _a : Object)
], SendMessageDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nội dung tin nhắn (nếu là text)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(5000),
    __metadata("design:type", String)
], SendMessageDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Danh sách URL files', type: [String] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsUrl)({}, { each: true }),
    __metadata("design:type", Array)
], SendMessageDto.prototype, "fileUrls", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tên files', type: [String] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], SendMessageDto.prototype, "fileNames", void 0);
class CreateDirectConversationDto {
}
exports.CreateDirectConversationDto = CreateDirectConversationDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateDirectConversationDto.prototype, "providerId", void 0);
class GetMessagesQueryDto {
    constructor() {
        this.limit = 50;
    }
}
exports.GetMessagesQueryDto = GetMessagesQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Số lượng messages', default: 50 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], GetMessagesQueryDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Lấy messages trước thời điểm này (ISO 8601)',
        example: '2025-01-15T10:00:00Z'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsISO8601)(),
    __metadata("design:type", String)
], GetMessagesQueryDto.prototype, "before", void 0);
class ConversationResponseDto {
}
exports.ConversationResponseDto = ConversationResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ConversationResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ConversationResponseDto.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ConversationResponseDto.prototype, "providerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], ConversationResponseDto.prototype, "quoteId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ConversationResponseDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], ConversationResponseDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], ConversationResponseDto.prototype, "lastMessageAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], ConversationResponseDto.prototype, "lastMessagePreview", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ConversationResponseDto.prototype, "customerUnreadCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ConversationResponseDto.prototype, "providerUnreadCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], ConversationResponseDto.prototype, "createdAt", void 0);
class MessageResponseDto {
}
exports.MessageResponseDto = MessageResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MessageResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MessageResponseDto.prototype, "conversationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MessageResponseDto.prototype, "senderId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: message_entity_1.MessageType }),
    __metadata("design:type", typeof (_d = typeof message_entity_1.MessageType !== "undefined" && message_entity_1.MessageType) === "function" ? _d : Object)
], MessageResponseDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], MessageResponseDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], MessageResponseDto.prototype, "fileUrls", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], MessageResponseDto.prototype, "isRead", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], MessageResponseDto.prototype, "readAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], MessageResponseDto.prototype, "createdAt", void 0);


/***/ }),

/***/ "./src/modules/chat/entities/conversation.entity.ts":
/*!**********************************************************!*\
  !*** ./src/modules/chat/entities/conversation.entity.ts ***!
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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Conversation = exports.ConversationType = void 0;
const quote_entity_1 = __webpack_require__(/*! @/modules/quotes/entities/quote.entity */ "./src/modules/quotes/entities/quote.entity.ts");
const user_entity_1 = __webpack_require__(/*! @/modules/users/entities/user.entity */ "./src/modules/users/entities/user.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const message_entity_1 = __webpack_require__(/*! ./message.entity */ "./src/modules/chat/entities/message.entity.ts");
var ConversationType;
(function (ConversationType) {
    ConversationType["QUOTE_BASED"] = "quote_based";
    ConversationType["DIRECT_REQUEST"] = "direct_request";
})(ConversationType || (exports.ConversationType = ConversationType = {}));
let Conversation = class Conversation {
    constructor() {
        this.isActive = true;
        this.customerUnreadCount = 0;
        this.providerUnreadCount = 0;
    }
    isParticipant(userId) {
        return this.customerId === userId || this.providerId === userId;
    }
    getOtherUserId(userId) {
        return this.customerId === userId ? this.providerId : this.customerId;
    }
    getUnreadCount(userId) {
        return this.customerId === userId
            ? this.customerUnreadCount
            : this.providerUnreadCount;
    }
};
exports.Conversation = Conversation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Conversation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'customer_id' }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], Conversation.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'customer_id' }),
    __metadata("design:type", typeof (_a = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _a : Object)
], Conversation.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'provider_id' }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], Conversation.prototype, "providerId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'provider_id' }),
    __metadata("design:type", typeof (_b = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _b : Object)
], Conversation.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'quote_id', nullable: true }),
    __metadata("design:type", String)
], Conversation.prototype, "quoteId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => quote_entity_1.Quote, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'quote_id' }),
    __metadata("design:type", typeof (_c = typeof quote_entity_1.Quote !== "undefined" && quote_entity_1.Quote) === "function" ? _c : Object)
], Conversation.prototype, "quote", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ConversationType,
    }),
    __metadata("design:type", String)
], Conversation.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_active', default: true }),
    __metadata("design:type", Boolean)
], Conversation.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'last_message_at',
        type: 'timestamp with time zone',
        nullable: true,
    }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Conversation.prototype, "lastMessageAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'last_message_preview', type: 'text', nullable: true }),
    __metadata("design:type", String)
], Conversation.prototype, "lastMessagePreview", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'customer_unread_count', default: 0 }),
    __metadata("design:type", Number)
], Conversation.prototype, "customerUnreadCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'provider_unread_count', default: 0 }),
    __metadata("design:type", Number)
], Conversation.prototype, "providerUnreadCount", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], Conversation.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], Conversation.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => message_entity_1.Message, (m) => m.conversation),
    __metadata("design:type", Array)
], Conversation.prototype, "messages", void 0);
exports.Conversation = Conversation = __decorate([
    (0, typeorm_1.Entity)('conversations'),
    (0, typeorm_1.Index)(['customerId', 'providerId']),
    (0, typeorm_1.Index)(['quoteId'], { unique: true, where: 'quote_id IS NOT NULL' }),
    (0, typeorm_1.Index)(['lastMessageAt'])
], Conversation);


/***/ }),

/***/ "./src/modules/chat/entities/message.entity.ts":
/*!*****************************************************!*\
  !*** ./src/modules/chat/entities/message.entity.ts ***!
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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Message = exports.MessageType = void 0;
const user_entity_1 = __webpack_require__(/*! @/modules/users/entities/user.entity */ "./src/modules/users/entities/user.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const conversation_entity_1 = __webpack_require__(/*! ./conversation.entity */ "./src/modules/chat/entities/conversation.entity.ts");
var MessageType;
(function (MessageType) {
    MessageType["TEXT"] = "text";
    MessageType["IMAGE"] = "image";
    MessageType["FILE"] = "file";
    MessageType["SYSTEM"] = "system";
})(MessageType || (exports.MessageType = MessageType = {}));
let Message = class Message {
    constructor() {
        this.type = MessageType.TEXT;
        this.fileUrls = [];
        this.isRead = false;
    }
    markAsRead() {
        if (!this.isRead) {
            this.isRead = true;
            this.readAt = new Date();
        }
    }
    isOwnedBy(userId) {
        return this.senderId === userId;
    }
};
exports.Message = Message;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Message.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'conversation_id' }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], Message.prototype, "conversationId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => conversation_entity_1.Conversation, (c) => c.messages, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'conversation_id' }),
    __metadata("design:type", typeof (_a = typeof conversation_entity_1.Conversation !== "undefined" && conversation_entity_1.Conversation) === "function" ? _a : Object)
], Message.prototype, "conversation", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sender_id' }),
    __metadata("design:type", String)
], Message.prototype, "senderId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'sender_id' }),
    __metadata("design:type", typeof (_b = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _b : Object)
], Message.prototype, "sender", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: MessageType,
        default: MessageType.TEXT,
    }),
    __metadata("design:type", String)
], Message.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Message.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'file_urls',
        type: 'text',
        array: true,
        nullable: true,
        default: '{}',
    }),
    __metadata("design:type", Array)
], Message.prototype, "fileUrls", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'file_names', type: 'text', array: true, nullable: true }),
    __metadata("design:type", Array)
], Message.prototype, "fileNames", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_read', default: false }),
    __metadata("design:type", Boolean)
], Message.prototype, "isRead", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'read_at',
        type: 'timestamp with time zone',
        nullable: true,
    }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Message.prototype, "readAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Message.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], Message.prototype, "updatedAt", void 0);
exports.Message = Message = __decorate([
    (0, typeorm_1.Entity)('messages'),
    (0, typeorm_1.Index)(['conversationId', 'createdAt']),
    (0, typeorm_1.Index)(['senderId'])
], Message);


/***/ }),

/***/ "./src/modules/moderation/config/moderation-patterns.config.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/moderation/config/moderation-patterns.config.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SYSTEM_PROMPT = exports.SUSPICIOUS_PHRASES = exports.BLACKLIST_PATTERNS = void 0;
exports.BLACKLIST_PATTERNS = [
    /\b(địt|đít|lồn|cặc|buồi|cu|cứt|đụ|chịch|đéo|đệch|dmm|dcm|dm|cc|cl|đcm|đmm)\b/gi,
    /\b(sex|sexx|sexy|porn|xxx|18\+|bú|mút|bóp|vú|ngực|dương vật|âm đạo)\b/gi,
    /\b(s[e3]x+|s[e3][x×]|p[o0]rn|đ[ií]t|ch[ij]ch|đ[uủú]|bú+|mú+t)\b/gi,
    /[s$][e3€][x×✗]/gi,
    /\b(đ\.ụ|đ\.ị\.t|c\.h\.ị\.c\.h|l\.ồ\.n|c\.ặ\.c)\b/gi,
    /\b(gái gọi|call\s*girl|cave|karaoke|mại dâm|bán dâm|đi khách|gái ngành|book gái)\b/gi,
    /\b(nhận đi khách|nhận khách|tiếp khách|phục vụ khách|khách sạn vui vẻ)\b/gi,
    /\b(má sa da|massage\s*(đặc biệt|kín đáo|toàn thân|happy ending|tận nơi|vip))/gi,
    /\b(k[1-9]|hj|bj|full\s*service|tour|khách vip)\b/gi,
    /\b(tàu nhanh|tầu nhanh|tau nhanh)\b/gi,
    /\b(sinh viên\s*(còn trinh|trinh|sv|teen)\s*(nhận|đi|phục vụ)?\s*khách)\b/gi,
    /\b(gái\s*(dâm|dâm đãng|múi|ngon|xinh)\s*(nhận|đi)?\s*khách)\b/gi,
    /\b(đưa\s*(anh|chị|em)\s*(lên\s*mây|lên\s*tiên|lên\s*đỉnh|sướng))/gi,
    /\b(bay\s*lắc|bay\s*phê|ma\s*túy|thuốc\s*lắc)\b/gi,
    /\b(one\s*night|ons|fwb|fuck\s*buddy)\b/gi,
    /\b(sugar\s*baby|sugar\s*daddy|bao\s*nuôi)\b/gi,
    /\b(\d+\s*(?:tr|triệu|k|củ)\s*(?:\/|\s)?\s*(?:shot|lần|giờ|đêm))\b/gi,
    /\b(giá\s*(?:ok|oke|tốt|rẻ|mềm)\s*(?:inbox|ib|zalo))/gi,
    /\b(dịch vụ\s*(đêm|khuya|24\/7|đặc biệt|thư giãn toàn thân|riêng tư|kín đáo))/gi,
    /\b(phục vụ\s*(tận tình|chu đáo|nhiệt tình)\s*(đêm|khuya|24h))/gi,
    /\b(gái\s*(xinh|đẹp|múi|dâm|dễ thương)\s*(phục vụ|massage|tắm))/gi,
    /\b(em\s*(sẽ|phục vụ|làm cho|chiều|thỏa mãn)\s*(anh|chị))/gi,
    /\b((anh|chị)\s*muốn\s*em\s*(làm gì|phục vụ|chiều))/gi,
    /\b(zalo|telegram|viber|whatapp)\s*[:\s]*(tình dục|sex|massage|gái|dịch vụ đêm)/gi,
    /\b(bdsm|bạo dâm|sm|đánh đòn|trói|roi|xiềng xích|nô lệ tình dục)\b/gi,
    /\b(địt mẹ|đụ má|con chó|đĩ|điếm|đéo má|đm|vãi|vkl|vl|vcl)\b/gi,
    /\b(đjt|djt|dit|lon|cak|ku|đờ mờ)\b/gi,
    /[🔞🍆🍑💦😈🔥]+/g,
];
exports.SUSPICIOUS_PHRASES = [
    'massage', 'spa', 'thư giãn', 'kín đáo', 'riêng tư', 'tận nơi',
    'phục vụ', 'dịch vụ', 'đêm', 'khuya', '24/7', '24h',
    'vip', 'cao cấp', 'đặc biệt', 'full', 'toàn thân'
];
exports.SYSTEM_PROMPT = `Bạn là AI kiểm duyệt nội dung TIẾNG VIỆT cho nền tảng dịch vụ. Phát hiện nội dung vi phạm qua NGỮ NGHĨA.

### CÁC LOẠI VI PHẠM (ưu tiên cao → thấp):

**1. MẠI DÂM (PROSTITUTION)** - severity ≥ 0.6
- Trực tiếp: "gái gọi", "cave", "đi khách", "book gái", "gái ngành"
- Núp bóng: "massage kín đáo", "massage tận nơi đêm", "massage happy ending"
- Ám chỉ: "dịch vụ đêm", "phục vụ 24/7 kín đáo", "thư giãn toàn thân riêng tư"
- Kết hợp: "massage" + ("kín đáo"|"riêng tư"|"tận nơi"|"vip"|"24h")
- Giá + sex: "1tr5 full service", "500k/shot", "giá ok inbox"

**2. TÌNH DỤC (SEXUAL)** - severity ≥ 0.7
- Từ lóng: "địt", "đụ", "chịch", "lồn", "cặc", "cu", "sexx", "69"
- Biến thể: "đ!t", "ch!ch", "s3x", "xxx", "đ.ụ", "l.ồ.n"
- Mô tả: "bú", "mút", "vú", "ngực", "dương vật", "bộ phận nhạy cảm"
- Emoji: 🔞🍆🍑💦

**3. BDSM** - severity ≥ 0.7
- "bdsm", "bạo dâm", "sm", "trói", "đánh đòn", "roi", "nô lệ"

**4. BẠO LỰC (VIOLENCE)** - severity ≥ 0.8
- Đánh nhau, giết người, gây thương tích, đe dọa nghiêm trọng

**5. THÙ HẬN (HATE)** - severity ≥ 0.8
- Kỳ thị dân tộc, tôn giáo, giới tính

### LOGIC PHÂN TÍCH:

**CHO PHÉP:**
- Dịch vụ hợp pháp: "sửa điện", "sửa ống nước", "trang trí", "vận chuyển"
- Làm đẹp chuyên nghiệp: "spa chăm sóc da", "nail", "cắt tóc", "massage trị liệu"
- Từ trung tính: "dịch vụ tốt", "tận tâm", "uy tín"

**REJECT KHI:**
1. Có từ lóng tình dục/mại dâm rõ ràng
2. Massage/spa + ("kín đáo"|"riêng tư"|"tận nơi đêm"|"happy ending")
3. "Dịch vụ" + ("đêm"|"khuya"|"24/7") + ("kín đáo"|"riêng tư")
4. Giá tiền + từ khóa tình dục ("triệu/đêm", "k/shot")
5. Bất kỳ dấu hiệu mại dâm núp bóng

### OUTPUT (JSON only, NO explanation):
{
  "approved": true|false,
  "confidence": 0.0-1.0,
  "violations": [
    {
      "type": "PROSTITUTION|SEXUAL|BDSM|VIOLENCE|HATE",
      "severity": 0.0-1.0,
      "reason": "lý do ngắn gọn",
      "location": "title|description|both",
      "evidence": "đoạn text vi phạm"
    }
  ]
}

**QUY TẮC:**
- Phân tích NGỮ NGHĨA, không chỉ từ khóa
- confidence ≥ 0.8 khi chắc chắn
- severity ≥ 0.6 cho mại dâm (nguy hiểm cao)
- severity ≥ 0.7 cho tình dục
- Luôn cung cấp evidence
- REJECT khi có nghi ngờ hợp lý về mại dâm/tình dục`;


/***/ }),

/***/ "./src/modules/moderation/entities/moderation-log.entity.ts":
/*!******************************************************************!*\
  !*** ./src/modules/moderation/entities/moderation-log.entity.ts ***!
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModerationLog = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const moderation_interface_1 = __webpack_require__(/*! ../interfaces/moderation.interface */ "./src/modules/moderation/interfaces/moderation.interface.ts");
let ModerationLog = class ModerationLog {
    constructor() {
        this.violationTypes = [];
    }
};
exports.ModerationLog = ModerationLog;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ModerationLog.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id' }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], ModerationLog.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'entity_type', length: 50 }),
    __metadata("design:type", String)
], ModerationLog.prototype, "entityType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'entity_id', nullable: true }),
    __metadata("design:type", String)
], ModerationLog.prototype, "entityId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'request_id' }),
    __metadata("design:type", String)
], ModerationLog.prototype, "requestId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: moderation_interface_1.ModerationStatus,
    }),
    __metadata("design:type", typeof (_a = typeof moderation_interface_1.ModerationStatus !== "undefined" && moderation_interface_1.ModerationStatus) === "function" ? _a : Object)
], ModerationLog.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_allowed' }),
    __metadata("design:type", Boolean)
], ModerationLog.prototype, "isAllowed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 3, scale: 2 }),
    __metadata("design:type", Number)
], ModerationLog.prototype, "confidence", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: moderation_interface_1.ViolationType,
        array: true,
        default: '{}',
        name: 'violation_types',
    }),
    __metadata("design:type", Array)
], ModerationLog.prototype, "violationTypes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', name: 'violations_detail', nullable: true }),
    __metadata("design:type", Object)
], ModerationLog.prototype, "violationsDetail", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', name: 'original_title' }),
    __metadata("design:type", String)
], ModerationLog.prototype, "originalTitle", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', name: 'original_description' }),
    __metadata("design:type", String)
], ModerationLog.prototype, "originalDescription", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', name: 'moderated_content', nullable: true }),
    __metadata("design:type", Object)
], ModerationLog.prototype, "moderatedContent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb' }),
    __metadata("design:type", Object)
], ModerationLog.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], ModerationLog.prototype, "createdAt", void 0);
exports.ModerationLog = ModerationLog = __decorate([
    (0, typeorm_1.Entity)('moderation_logs'),
    (0, typeorm_1.Index)(['userId', 'createdAt']),
    (0, typeorm_1.Index)(['status', 'createdAt']),
    (0, typeorm_1.Index)(['entityType', 'entityId'])
], ModerationLog);


/***/ }),

/***/ "./src/modules/moderation/interfaces/moderation.interface.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/moderation/interfaces/moderation.interface.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ViolationType = exports.ModerationStatus = void 0;
var ModerationStatus;
(function (ModerationStatus) {
    ModerationStatus["APPROVED"] = "APPROVED";
    ModerationStatus["REJECTED"] = "REJECTED";
    ModerationStatus["PENDING"] = "PENDING";
    ModerationStatus["ERROR"] = "ERROR";
})(ModerationStatus || (exports.ModerationStatus = ModerationStatus = {}));
var ViolationType;
(function (ViolationType) {
    ViolationType["SEXUAL"] = "SEXUAL";
    ViolationType["VIOLENCE"] = "VIOLENCE";
    ViolationType["HATE"] = "HATE";
    ViolationType["HARASSMENT"] = "HARASSMENT";
    ViolationType["SELF_HARM"] = "SELF_HARM";
    ViolationType["ILLEGAL"] = "ILLEGAL";
})(ViolationType || (exports.ViolationType = ViolationType = {}));


/***/ }),

/***/ "./src/modules/moderation/moderation.module.ts":
/*!*****************************************************!*\
  !*** ./src/modules/moderation/moderation.module.ts ***!
  \*****************************************************/
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
exports.ModerationModule = void 0;
const moderation_config_1 = __importDefault(__webpack_require__(/*! @/config/moderation.config */ "./src/config/moderation.config.ts"));
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const moderation_log_entity_1 = __webpack_require__(/*! ./entities/moderation-log.entity */ "./src/modules/moderation/entities/moderation-log.entity.ts");
const moderation_log_repository_1 = __webpack_require__(/*! ./repositories/moderation-log.repository */ "./src/modules/moderation/repositories/moderation-log.repository.ts");
const al_moderation_service_1 = __webpack_require__(/*! ./services/al-moderation.service */ "./src/modules/moderation/services/al-moderation.service.ts");
const moderation_service_1 = __webpack_require__(/*! ./moderation.service */ "./src/modules/moderation/moderation.service.ts");
const ollama_moderation_service_1 = __webpack_require__(/*! ./services/ollama-moderation.service */ "./src/modules/moderation/services/ollama-moderation.service.ts");
const qwen_moderation_service_1 = __webpack_require__(/*! ./services/qwen-moderation.service */ "./src/modules/moderation/services/qwen-moderation.service.ts");
let ModerationModule = class ModerationModule {
};
exports.ModerationModule = ModerationModule;
exports.ModerationModule = ModerationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forFeature(moderation_config_1.default),
            typeorm_1.TypeOrmModule.forFeature([moderation_log_entity_1.ModerationLog]),
        ],
        providers: [
            ollama_moderation_service_1.OllamaModerationService,
            qwen_moderation_service_1.QwenModerationService,
            al_moderation_service_1.AIModerationService,
            moderation_service_1.ModerationService,
            moderation_log_repository_1.ModerationLogRepository,
        ],
        exports: [
            moderation_service_1.ModerationService,
            moderation_log_repository_1.ModerationLogRepository,
            al_moderation_service_1.AIModerationService,
        ],
    })
], ModerationModule);


/***/ }),

/***/ "./src/modules/moderation/moderation.service.ts":
/*!******************************************************!*\
  !*** ./src/modules/moderation/moderation.service.ts ***!
  \******************************************************/
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
var ModerationService_1;
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModerationService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const moderation_log_repository_1 = __webpack_require__(/*! ./repositories/moderation-log.repository */ "./src/modules/moderation/repositories/moderation-log.repository.ts");
const al_moderation_service_1 = __webpack_require__(/*! ./services/al-moderation.service */ "./src/modules/moderation/services/al-moderation.service.ts");
let ModerationService = ModerationService_1 = class ModerationService {
    constructor(aiModerationService, moderationLogRepository, configService) {
        this.aiModerationService = aiModerationService;
        this.moderationLogRepository = moderationLogRepository;
        this.configService = configService;
        this.logger = new common_1.Logger(ModerationService_1.name);
    }
    async moderatePostContent(title, description, userId, context) {
        const requestId = this.generateRequestId();
        this.logger.log(`[${requestId}] Moderating post content for user: ${userId}`);
        const userStats = await this.moderationLogRepository.getUserModerationStats(userId);
        if (userStats.recentRejections >= 5) {
            this.logger.warn(`[${requestId}] User ${userId} has ${userStats.recentRejections} recent rejections`);
        }
        const request = {
            title,
            description,
            userId,
            requestId,
        };
        const result = await this.aiModerationService.moderateContent(request);
        await this.logModerationResult(userId, requestId, result, title, description, context);
        return result;
    }
    async logModerationResult(userId, requestId, result, originalTitle, originalDescription, context) {
        try {
            await this.moderationLogRepository.createLog({
                userId,
                entityType: context?.entityType || 'post',
                entityId: context?.entityId,
                requestId,
                result,
                originalTitle,
                originalDescription,
                ipAddress: context?.ipAddress,
                userAgent: context?.userAgent,
            });
        }
        catch (error) {
            this.logger.error(`Failed to log moderation result: ${error instanceof Error ? error.message : 'Unknown'}`, error instanceof Error ? error.stack : undefined);
        }
    }
    async getUserModerationHistory(userId, limit = 20) {
        return this.moderationLogRepository.findByUser(userId, limit);
    }
    async getUserModerationStats(userId) {
        return this.moderationLogRepository.getUserModerationStats(userId);
    }
    generateRequestId() {
        return `mod_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
};
exports.ModerationService = ModerationService;
exports.ModerationService = ModerationService = ModerationService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof al_moderation_service_1.AIModerationService !== "undefined" && al_moderation_service_1.AIModerationService) === "function" ? _a : Object, typeof (_b = typeof moderation_log_repository_1.ModerationLogRepository !== "undefined" && moderation_log_repository_1.ModerationLogRepository) === "function" ? _b : Object, typeof (_c = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _c : Object])
], ModerationService);


/***/ }),

/***/ "./src/modules/moderation/repositories/moderation-log.repository.ts":
/*!**************************************************************************!*\
  !*** ./src/modules/moderation/repositories/moderation-log.repository.ts ***!
  \**************************************************************************/
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
var ModerationLogRepository_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModerationLogRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const moderation_log_entity_1 = __webpack_require__(/*! ../entities/moderation-log.entity */ "./src/modules/moderation/entities/moderation-log.entity.ts");
let ModerationLogRepository = ModerationLogRepository_1 = class ModerationLogRepository {
    constructor(repository) {
        this.repository = repository;
        this.logger = new common_1.Logger(ModerationLogRepository_1.name);
    }
    async createLog(dto) {
        const log = this.repository.create({
            userId: dto.userId,
            entityType: dto.entityType,
            entityId: dto.entityId,
            requestId: dto.requestId,
            status: dto.result.status,
            isAllowed: dto.result.isAllowed,
            confidence: dto.result.confidence,
            violationTypes: dto.result.violations.map(v => v.type),
            violationsDetail: dto.result.violations,
            originalTitle: dto.originalTitle,
            originalDescription: dto.originalDescription,
            moderatedContent: dto.result.moderatedContent,
            metadata: {
                ...dto.result.metadata,
                ipAddress: dto.ipAddress,
                userAgent: dto.userAgent,
            },
        });
        const saved = await this.repository.save(log);
        this.logger.log(`Moderation log created: ${saved.id}`);
        return saved;
    }
    async findByUser(userId, limit = 50) {
        return this.repository.find({
            where: { userId },
            order: { createdAt: 'DESC' },
            take: limit,
        });
    }
    async findByEntity(entityType, entityId) {
        return this.repository.findOne({
            where: { entityType, entityId },
            order: { createdAt: 'DESC' },
        });
    }
    async countUserRejections(userId, withinHours = 24) {
        const since = new Date();
        since.setHours(since.getHours() - withinHours);
        return this.repository.count({
            where: {
                userId,
                isAllowed: false,
            },
        });
    }
    async getUserModerationStats(userId) {
        const [total, rejected, recentRejections] = await Promise.all([
            this.repository.count({ where: { userId } }),
            this.repository.count({ where: { userId, isAllowed: false } }),
            this.countUserRejections(userId, 24),
        ]);
        return {
            total,
            approved: total - rejected,
            rejected,
            recentRejections,
        };
    }
};
exports.ModerationLogRepository = ModerationLogRepository;
exports.ModerationLogRepository = ModerationLogRepository = ModerationLogRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(moderation_log_entity_1.ModerationLog)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ModerationLogRepository);


/***/ }),

/***/ "./src/modules/moderation/services/al-moderation.service.ts":
/*!******************************************************************!*\
  !*** ./src/modules/moderation/services/al-moderation.service.ts ***!
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
var AIModerationService_1;
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AIModerationService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const ollama_moderation_service_1 = __webpack_require__(/*! ./ollama-moderation.service */ "./src/modules/moderation/services/ollama-moderation.service.ts");
const qwen_moderation_service_1 = __webpack_require__(/*! ./qwen-moderation.service */ "./src/modules/moderation/services/qwen-moderation.service.ts");
let AIModerationService = AIModerationService_1 = class AIModerationService {
    constructor(configService, ollamaService, qwenService) {
        this.configService = configService;
        this.ollamaService = ollamaService;
        this.qwenService = qwenService;
        this.logger = new common_1.Logger(AIModerationService_1.name);
        this.config = this.configService.get('moderation');
        this.logger.log(`AI Moderation Service initialized with provider: ${this.config.provider}`);
    }
    async moderateContent(request) {
        if (!this.config.enabled) {
            this.logger.log('Moderation disabled, allowing content');
            return this.createDisabledResult();
        }
        switch (this.config.provider) {
            case 'qwen':
                this.logger.debug('Using Qwen Vietnamese Content Classifier provider');
                return this.qwenService.moderateContent(request);
            case 'ollama':
                this.logger.debug('Using Ollama provider');
                return this.ollamaService.moderateContent(request);
            default:
                this.logger.warn(`Unknown provider: ${this.config.provider}, using Qwen as default`);
                return this.qwenService.moderateContent(request);
        }
    }
    async checkHealth() {
        try {
            const provider = this.config.provider;
            if (provider === 'qwen') {
                const isHealthy = await this.qwenService.checkHealth();
                return {
                    provider: 'qwen',
                    isHealthy,
                    message: isHealthy ? 'Qwen Vietnamese Content Classifier is operational' : 'Qwen service is down',
                };
            }
            if (provider === 'ollama') {
                const isHealthy = await this.ollamaService.checkHealth();
                return {
                    provider: 'ollama',
                    isHealthy,
                    message: isHealthy ? 'Ollama service is operational' : 'Ollama service is down',
                };
            }
            return {
                provider,
                isHealthy: true,
                message: 'Health check not implemented for this provider',
            };
        }
        catch (error) {
            this.logger.error('Health check failed', error);
            return {
                provider: this.config.provider,
                isHealthy: false,
                message: error instanceof Error ? error.message : 'Unknown error',
            };
        }
    }
    createDisabledResult() {
        return {
            status: 'APPROVED',
            isAllowed: true,
            violations: [],
            confidence: 1.0,
            metadata: {
                model: 'disabled',
                processingTime: 0,
                timestamp: new Date(),
            },
        };
    }
};
exports.AIModerationService = AIModerationService;
exports.AIModerationService = AIModerationService = AIModerationService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof ollama_moderation_service_1.OllamaModerationService !== "undefined" && ollama_moderation_service_1.OllamaModerationService) === "function" ? _b : Object, typeof (_c = typeof qwen_moderation_service_1.QwenModerationService !== "undefined" && qwen_moderation_service_1.QwenModerationService) === "function" ? _c : Object])
], AIModerationService);


/***/ }),

/***/ "./src/modules/moderation/services/ollama-moderation.service.ts":
/*!**********************************************************************!*\
  !*** ./src/modules/moderation/services/ollama-moderation.service.ts ***!
  \**********************************************************************/
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
var OllamaModerationService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OllamaModerationService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const moderation_patterns_config_1 = __webpack_require__(/*! ../config/moderation-patterns.config */ "./src/modules/moderation/config/moderation-patterns.config.ts");
const moderation_interface_1 = __webpack_require__(/*! ../interfaces/moderation.interface */ "./src/modules/moderation/interfaces/moderation.interface.ts");
let OllamaModerationService = OllamaModerationService_1 = class OllamaModerationService {
    constructor(configService) {
        this.configService = configService;
        this.logger = new common_1.Logger(OllamaModerationService_1.name);
        this.BLACKLIST_PATTERNS = moderation_patterns_config_1.BLACKLIST_PATTERNS;
        this.SUSPICIOUS_PHRASES = moderation_patterns_config_1.SUSPICIOUS_PHRASES;
        this.config = this.configService.get('moderation');
        this.baseUrl = this.config.ollama.baseUrl;
        this.logger.log(`Ollama moderation initialized: ${this.baseUrl}`);
        this.logger.log(`Using model: ${this.config.ollama.model}`);
    }
    async moderateContent(request) {
        const startTime = Date.now();
        const requestId = request.requestId || this.generateRequestId();
        this.logger.log(`[${requestId}] Starting moderation for user: ${request.userId}`);
        try {
            if (!this.config.enabled) {
                return this.createApprovedResult(startTime);
            }
            const blacklistResult = this.quickBlacklistCheck(request);
            if (!blacklistResult.passed) {
                this.logger.warn(`[${requestId}] REJECTED by blacklist: ${blacklistResult.reason}`);
                return this.createBlacklistRejection(blacklistResult, startTime);
            }
            const riskScore = this.calculateRiskScore(request);
            this.logger.debug(`[${requestId}] Risk score: ${riskScore.toFixed(2)}`);
            if (riskScore < 0.3) {
                this.logger.log(`[${requestId}] Low risk (${riskScore.toFixed(2)}), auto-approved`);
                return this.createApprovedResult(startTime, riskScore);
            }
            const analysis = await this.callOllama(request, requestId, riskScore);
            const result = this.processAnalysis(analysis, startTime, requestId);
            this.logger.log(`[${requestId}] Completed: ${result.status} ` +
                `(confidence: ${result.confidence.toFixed(2)}, time: ${Date.now() - startTime}ms)`);
            return result;
        }
        catch (error) {
            this.logger.error(`[${requestId}] Error: ${error instanceof Error ? error.message : 'Unknown'}`, error instanceof Error ? error.stack : undefined);
            return this.handleModerationError(startTime);
        }
    }
    quickBlacklistCheck(request) {
        const fullText = `${request.title} ${request.description || ''}`.toLowerCase();
        for (const pattern of this.BLACKLIST_PATTERNS) {
            const match = fullText.match(pattern);
            if (match) {
                return {
                    passed: false,
                    reason: 'Chứa từ ngữ cấm rõ ràng',
                    evidence: match[0]
                };
            }
        }
        return { passed: true };
    }
    calculateRiskScore(request) {
        const fullText = `${request.title} ${request.description || ''}`.toLowerCase();
        let score = 0;
        let suspiciousCount = 0;
        for (const phrase of this.SUSPICIOUS_PHRASES) {
            if (fullText.includes(phrase)) {
                suspiciousCount++;
            }
        }
        score += Math.min(suspiciousCount * 0.15, 0.6);
        const dangerousCombos = [
            ['massage', 'kín đáo'],
            ['massage', 'tận nơi'],
            ['dịch vụ', 'đêm'],
            ['dịch vụ', 'khuya'],
            ['spa', 'vip'],
            ['thư giãn', 'toàn thân'],
            ['phục vụ', '24/7'],
            ['giá', 'triệu', 'đêm'],
        ];
        for (const combo of dangerousCombos) {
            if (combo.every(word => fullText.includes(word))) {
                score += 0.25;
            }
        }
        if (/\d+\s*(triệu|tr|k|nghìn)/i.test(fullText)) {
            if (fullText.includes('đêm') || fullText.includes('giờ') || fullText.includes('lần')) {
                score += 0.3;
            }
        }
        if (fullText.length < 50 && suspiciousCount > 2) {
            score += 0.2;
        }
        return Math.min(score, 1.0);
    }
    async callOllama(request, requestId, riskScore) {
        const systemPrompt = this.buildOptimizedSystemPrompt();
        const userPrompt = this.buildOptimizedUserPrompt(request, riskScore);
        this.logger.debug(`[${requestId}] Calling Ollama API (risk: ${riskScore.toFixed(2)})`);
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.config.ollama.timeoutMs);
        try {
            const response = await fetch(`${this.baseUrl}/api/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: this.config.ollama.model,
                    messages: [
                        {
                            role: 'system',
                            content: systemPrompt,
                        },
                        {
                            role: 'user',
                            content: userPrompt,
                        },
                    ],
                    stream: false,
                    options: {
                        temperature: 0.1,
                        top_p: 0.85,
                        num_predict: 400,
                        repeat_penalty: 1.1,
                    },
                }),
                signal: controller.signal,
            });
            clearTimeout(timeoutId);
            if (!response.ok) {
                throw new Error(`Ollama API error: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            const content = data.message.content.trim();
            this.logger.debug(`[${requestId}] AI response: ${content.substring(0, 150)}...`);
            const parsed = this.extractJSON(content, requestId);
            if (typeof parsed.approved !== 'boolean') {
                throw new Error('Invalid AI response: missing approved field');
            }
            if (typeof parsed.confidence !== 'number') {
                parsed.confidence = parsed.approved ? 0.7 : 0.8;
            }
            parsed.risk_score = riskScore;
            return parsed;
        }
        catch (error) {
            clearTimeout(timeoutId);
            if (error instanceof Error && error.name === 'AbortError') {
                throw new Error('Ollama request timeout');
            }
            throw error;
        }
    }
    extractJSON(content, requestId) {
        let jsonStr = content;
        if (content.includes('```')) {
            const match = content.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
            jsonStr = match ? match[1].trim() : content;
        }
        const jsonMatch = jsonStr.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            jsonStr = jsonMatch[0];
        }
        try {
            return JSON.parse(jsonStr);
        }
        catch (e) {
            this.logger.error(`[${requestId}] JSON parse failed: ${e}`);
            return {
                approved: false,
                confidence: 0.5,
                violations: [{
                        type: 'UNKNOWN',
                        severity: 0.5,
                        reason: 'AI response parse error',
                        location: 'both'
                    }],
            };
        }
    }
    buildOptimizedSystemPrompt() {
        return moderation_patterns_config_1.SYSTEM_PROMPT;
    }
    buildOptimizedUserPrompt(request, riskScore) {
        return `Risk score: ${riskScore.toFixed(2)}

TIÊU ĐỀ: ${request.title}

MÔ TẢ: ${request.description || '(Không có)'}

Trả về JSON, không giải thích gì thêm.`;
    }
    processAnalysis(analysis, startTime, requestId) {
        const violations = (analysis.violations || []).map(v => ({
            type: v.type,
            severity: v.severity,
            reason: v.reason,
            location: v.location,
            evidence: v.evidence,
        }));
        const criticalViolations = violations.filter(v => {
            const threshold = this.getThresholdForType(v.type);
            return v.severity >= threshold;
        });
        let finalApproved = analysis.approved;
        let finalConfidence = analysis.confidence;
        if (criticalViolations.length > 0) {
            finalApproved = false;
            finalConfidence = Math.max(...criticalViolations.map(v => v.severity));
            this.logger.warn(`[${requestId}] REJECTED: ${criticalViolations.length} critical violations`);
        }
        if (analysis.approved && (analysis.risk_score || 0) > 0.7) {
            this.logger.warn(`[${requestId}] WARNING: AI approved but high risk score (${analysis.risk_score?.toFixed(2)})`);
        }
        return this.buildModerationResult(finalApproved, finalConfidence, criticalViolations, startTime, requestId);
    }
    buildModerationResult(approved, confidence, violations, startTime, requestId) {
        const processingTime = Date.now() - startTime;
        this.logger.log(`[${requestId}] Result: ${approved ? 'APPROVED' : 'REJECTED'} ` +
            `(confidence: ${confidence.toFixed(2)}, violations: ${violations.length}, time: ${processingTime}ms)`);
        if (!approved && violations.length > 0) {
            this.logger.warn(`[${requestId}] Violations:\n` +
                violations.map(v => `  - ${v.type} (${v.severity.toFixed(2)}): ${v.reason}` +
                    (v.evidence ? `\n    Evidence: "${v.evidence}"` : '')).join('\n'));
        }
        return {
            status: approved ? moderation_interface_1.ModerationStatus.APPROVED : moderation_interface_1.ModerationStatus.REJECTED,
            isAllowed: approved,
            violations,
            confidence,
            metadata: {
                model: this.config.ollama.model,
                processingTime,
                timestamp: new Date(),
            },
        };
    }
    getThresholdForType(type) {
        const typeUpper = type.toUpperCase();
        switch (typeUpper) {
            case 'PROSTITUTION':
                return 0.55;
            case 'SEXUAL':
                return this.config.thresholds.sexual || 0.7;
            case 'BDSM':
                return 0.7;
            case 'VIOLENCE':
                return this.config.thresholds.violence || 0.8;
            case 'HATE':
                return this.config.thresholds.hate || 0.8;
            case 'HARASSMENT':
                return this.config.thresholds.harassment || 0.7;
            default:
                return 0.7;
        }
    }
    createApprovedResult(startTime, riskScore = 0) {
        return {
            status: moderation_interface_1.ModerationStatus.APPROVED,
            isAllowed: true,
            violations: [],
            confidence: 1.0 - riskScore * 0.2,
            metadata: {
                model: this.config.ollama.model,
                processingTime: Date.now() - startTime,
                timestamp: new Date(),
            },
        };
    }
    createBlacklistRejection(blacklistResult, startTime) {
        return {
            status: moderation_interface_1.ModerationStatus.REJECTED,
            isAllowed: false,
            violations: [{
                    type: 'SEXUAL',
                    severity: 1.0,
                    reason: blacklistResult.reason || 'Chứa từ ngữ cấm',
                    location: 'both',
                    evidence: blacklistResult.evidence,
                }],
            confidence: 1.0,
            metadata: {
                model: 'blacklist',
                processingTime: Date.now() - startTime,
                timestamp: new Date(),
            },
        };
    }
    handleModerationError(startTime) {
        const fallbackMode = this.config.fallbackMode;
        this.logger.error(`Moderation error, using fallback mode: ${fallbackMode}`);
        const shouldBlock = fallbackMode === 'block';
        return {
            status: moderation_interface_1.ModerationStatus.ERROR,
            isAllowed: !shouldBlock,
            violations: [],
            confidence: 0,
            metadata: {
                model: 'error-fallback',
                processingTime: Date.now() - startTime,
                timestamp: new Date(),
            },
        };
    }
    generateRequestId() {
        return `mod_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
    async checkHealth() {
        try {
            const response = await fetch(`${this.baseUrl}/api/tags`, {
                method: 'GET',
                signal: AbortSignal.timeout(3000),
            });
            return response.ok;
        }
        catch (error) {
            this.logger.error('Ollama health check failed', error);
            return false;
        }
    }
};
exports.OllamaModerationService = OllamaModerationService;
exports.OllamaModerationService = OllamaModerationService = OllamaModerationService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], OllamaModerationService);


/***/ }),

/***/ "./src/modules/moderation/services/qwen-moderation.service.ts":
/*!********************************************************************!*\
  !*** ./src/modules/moderation/services/qwen-moderation.service.ts ***!
  \********************************************************************/
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
var QwenModerationService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QwenModerationService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const child_process_1 = __webpack_require__(/*! child_process */ "child_process");
const path_1 = __webpack_require__(/*! path */ "path");
const util_1 = __webpack_require__(/*! util */ "util");
const moderation_interface_1 = __webpack_require__(/*! ../interfaces/moderation.interface */ "./src/modules/moderation/interfaces/moderation.interface.ts");
const execAsync = (0, util_1.promisify)(child_process_1.exec);
let QwenModerationService = QwenModerationService_1 = class QwenModerationService {
    constructor() {
        this.logger = new common_1.Logger(QwenModerationService_1.name);
        const mergedModelPath = (0, path_1.join)(process.cwd(), 'models', 'vietnamese-content-classifier-final-merged');
        this.modelPath = mergedModelPath;
        this.pythonScriptPath = (0, path_1.join)(process.cwd(), 'models', 'inference_api.py');
        this.pythonBin = process.env.PYTHON_BIN || '/Users/tindethuong/miniconda3/bin/python3';
        this.logger.log('Qwen Moderation Service initialized');
        this.logger.log(`Python binary: ${this.pythonBin}`);
        this.logger.log(`Model path: ${this.modelPath}`);
        this.logger.log(`Python script: ${this.pythonScriptPath}`);
    }
    async moderateContent(request) {
        const startTime = Date.now();
        try {
            const combinedText = `${request.title || ''} ${request.description || ''}`.trim();
            if (!combinedText) {
                return this.createEmptyResult();
            }
            const titleResult = request.title
                ? await this.predictText(request.title)
                : null;
            const descriptionResult = request.description
                ? await this.predictText(request.description)
                : null;
            const results = [titleResult, descriptionResult].filter(Boolean);
            if (results.length === 0) {
                return this.createEmptyResult();
            }
            const worstResult = this.selectWorstPrediction(results);
            const processingTime = Date.now() - startTime;
            return this.mapToModerationResult(worstResult, titleResult, descriptionResult, request, processingTime);
        }
        catch (error) {
            this.logger.error(`Moderation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
            return this.createErrorResult(error);
        }
    }
    selectWorstPrediction(results) {
        return results.reduce((worst, current) => {
            if (!worst)
                return current;
            if (current.should_block && worst.should_block) {
                return current.confidence > worst.confidence ? current : worst;
            }
            if (current.should_block && !worst.should_block) {
                return current;
            }
            if (!current.should_block && worst.should_block) {
                return worst;
            }
            if (!current.is_safe && worst.is_safe) {
                return current;
            }
            return worst;
        });
    }
    async predictText(text) {
        try {
            const escapedText = text
                .replace(/\\/g, '\\\\')
                .replace(/"/g, '\\"')
                .replace(/`/g, '\\`')
                .replace(/\$/g, '\\$')
                .replace(/\n/g, ' ')
                .trim();
            const command = `${this.pythonBin} "${this.pythonScriptPath}" "${escapedText}"`;
            this.logger.debug(`Running prediction for text: ${text.substring(0, 50)}...`);
            const { stdout, stderr } = await execAsync(command, {
                timeout: 30000,
                maxBuffer: 1024 * 1024,
            });
            if (stderr && !stderr.includes('✓')) {
                const isWarning = stderr.includes('Warning') ||
                    stderr.includes('deprecated') ||
                    stderr.includes('⚠');
                if (!isWarning) {
                    this.logger.warn(`Python stderr: ${stderr.substring(0, 200)}`);
                }
            }
            const result = JSON.parse(stdout);
            this.logger.debug(`Prediction: ${result.prediction} ` +
                `(confidence: ${(result.confidence * 100).toFixed(1)}%, ` +
                `should_block: ${result.should_block})`);
            return result;
        }
        catch (error) {
            this.logger.error(`Prediction failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
            return {
                prediction: 'safe',
                confidence: 0,
                is_safe: true,
                should_block: false,
                inference_time_ms: 0,
            };
        }
    }
    mapToModerationResult(worstResult, titleResult, descriptionResult, request, processingTime) {
        const violations = [];
        const violationTypeMap = {
            prostitution: moderation_interface_1.ViolationType.ILLEGAL,
            sexual: moderation_interface_1.ViolationType.SEXUAL,
            violence: moderation_interface_1.ViolationType.VIOLENCE,
            hate: moderation_interface_1.ViolationType.HATE,
        };
        const violationType = violationTypeMap[worstResult.prediction];
        if (worstResult.should_block && violationType) {
            let location = 'both';
            if (titleResult?.should_block && !descriptionResult?.should_block) {
                location = 'title';
            }
            else if (!titleResult?.should_block && descriptionResult?.should_block) {
                location = 'description';
            }
            else if (titleResult?.should_block && descriptionResult?.should_block) {
                location = 'both';
            }
            violations.push({
                type: violationType,
                severity: Math.round(worstResult.confidence * 10),
                reason: `Detected ${worstResult.prediction} content with ${(worstResult.confidence * 100).toFixed(1)}% confidence`,
                location,
                evidence: worstResult.prediction,
            });
        }
        return {
            status: worstResult.should_block ? moderation_interface_1.ModerationStatus.REJECTED : moderation_interface_1.ModerationStatus.APPROVED,
            isAllowed: !worstResult.should_block,
            violations,
            confidence: worstResult.confidence,
            metadata: {
                model: 'qwen-vietnamese-content-classifier',
                processingTime,
                timestamp: new Date(),
            },
        };
    }
    createEmptyResult() {
        return {
            status: moderation_interface_1.ModerationStatus.APPROVED,
            isAllowed: true,
            violations: [],
            confidence: 1.0,
            metadata: {
                model: 'qwen-vietnamese-content-classifier',
                processingTime: 0,
                timestamp: new Date(),
            },
        };
    }
    createErrorResult(error) {
        this.logger.error(`Moderation error: ${error instanceof Error ? error.message : 'Unknown error'}`);
        return {
            status: moderation_interface_1.ModerationStatus.ERROR,
            isAllowed: true,
            violations: [],
            confidence: 0,
            metadata: {
                model: 'qwen-vietnamese-content-classifier',
                processingTime: 0,
                timestamp: new Date(),
                error: error instanceof Error ? error.message : 'Unknown error',
            },
        };
    }
    async checkHealth() {
        try {
            this.logger.log('Running health check...');
            const testResult = await this.predictText('test');
            const isHealthy = testResult !== null && testResult.prediction !== undefined;
            if (isHealthy) {
                this.logger.log('✓ Health check passed');
            }
            else {
                this.logger.error('✗ Health check failed: invalid response');
            }
            return isHealthy;
        }
        catch (error) {
            this.logger.error(`✗ Health check failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
            return false;
        }
    }
};
exports.QwenModerationService = QwenModerationService;
exports.QwenModerationService = QwenModerationService = QwenModerationService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], QwenModerationService);


/***/ }),

/***/ "./src/modules/notifications/dtos/notification.dto.ts":
/*!************************************************************!*\
  !*** ./src/modules/notifications/dtos/notification.dto.ts ***!
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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateNotification = exports.SuccessResponseDto = exports.UnreadCountResponseDto = exports.NotificationListResponseDto = exports.NotificationResponseDto = exports.GetNotificationsQueryDto = void 0;
const notification_enum_1 = __webpack_require__(/*! @/modules/notifications/enums/notification.enum */ "./src/modules/notifications/enums/notification.enum.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class GetNotificationsQueryDto {
    constructor() {
        this.page = 1;
        this.limit = 20;
        this.unreadOnly = false;
    }
}
exports.GetNotificationsQueryDto = GetNotificationsQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Number of pages', default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], GetNotificationsQueryDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Quantity/page', default: 20 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], GetNotificationsQueryDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Only take unread', default: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Transform)(({ value }) => value === 'true' || value === true),
    __metadata("design:type", Boolean)
], GetNotificationsQueryDto.prototype, "unreadOnly", void 0);
class NotificationResponseDto {
}
exports.NotificationResponseDto = NotificationResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID notification' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], NotificationResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID user' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], NotificationResponseDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Notification Type',
        enum: notification_enum_1.NotificationType,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", typeof (_a = typeof notification_enum_1.NotificationType !== "undefined" && notification_enum_1.NotificationType) === "function" ? _a : Object)
], NotificationResponseDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tilte' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], NotificationResponseDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Content' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], NotificationResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Additional data' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", typeof (_b = typeof Record !== "undefined" && Record) === "function" ? _b : Object)
], NotificationResponseDto.prototype, "metadata", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Action URL' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], NotificationResponseDto.prototype, "actionUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Have you read it?' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], NotificationResponseDto.prototype, "isRead", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Reading time' }),
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], NotificationResponseDto.prototype, "readAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation time' }),
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], NotificationResponseDto.prototype, "createdAt", void 0);
class NotificationListResponseDto {
}
exports.NotificationListResponseDto = NotificationListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of notifications',
        type: [NotificationResponseDto],
    }),
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => NotificationResponseDto),
    __metadata("design:type", Array)
], NotificationListResponseDto.prototype, "notifications", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of notifications' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], NotificationListResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of unread notifications' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], NotificationListResponseDto.prototype, "unreadCount", void 0);
class UnreadCountResponseDto {
}
exports.UnreadCountResponseDto = UnreadCountResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of unread notifications' }),
    __metadata("design:type", Number)
], UnreadCountResponseDto.prototype, "count", void 0);
class SuccessResponseDto {
}
exports.SuccessResponseDto = SuccessResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success status' }),
    __metadata("design:type", Boolean)
], SuccessResponseDto.prototype, "success", void 0);
class CreateNotification {
}
exports.CreateNotification = CreateNotification;


/***/ }),

/***/ "./src/modules/notifications/entities/notification.entity.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/notifications/entities/notification.entity.ts ***!
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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Notification = void 0;
const user_entity_1 = __webpack_require__(/*! @/modules/users/entities/user.entity */ "./src/modules/users/entities/user.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const notification_enum_1 = __webpack_require__(/*! ../enums/notification.enum */ "./src/modules/notifications/enums/notification.enum.ts");
let Notification = class Notification {
    constructor() {
        this.isRead = false;
    }
    markAsRead() {
        if (!this.isRead) {
            this.isRead = true;
            this.readAt = new Date();
        }
    }
    isUnread() {
        return !this.isRead;
    }
};
exports.Notification = Notification;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Notification.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id' }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], Notification.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_a = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _a : Object)
], Notification.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: notification_enum_1.NotificationType,
    }),
    __metadata("design:type", typeof (_b = typeof notification_enum_1.NotificationType !== "undefined" && notification_enum_1.NotificationType) === "function" ? _b : Object)
], Notification.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Notification.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Notification.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'jsonb',
        nullable: true,
        comment: 'Additional data (postId, quoteId, orderId...)',
    }),
    __metadata("design:type", typeof (_c = typeof Record !== "undefined" && Record) === "function" ? _c : Object)
], Notification.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'action_url',
        length: 500,
        nullable: true,
        comment: 'Deep link to navigate',
    }),
    __metadata("design:type", String)
], Notification.prototype, "actionUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_read', default: false }),
    __metadata("design:type", Boolean)
], Notification.prototype, "isRead", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'read_at',
        type: 'timestamp with time zone',
        nullable: true,
    }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Notification.prototype, "readAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], Notification.prototype, "createdAt", void 0);
exports.Notification = Notification = __decorate([
    (0, typeorm_1.Entity)('notifications'),
    (0, typeorm_1.Index)(['userId', 'isRead', 'createdAt']),
    (0, typeorm_1.Index)(['userId', 'type', 'isRead'])
], Notification);


/***/ }),

/***/ "./src/modules/notifications/enums/notification.enum.ts":
/*!**************************************************************!*\
  !*** ./src/modules/notifications/enums/notification.enum.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationType = void 0;
var NotificationType;
(function (NotificationType) {
    NotificationType["NEW_QUOTE_RECEIVED"] = "new_quote_received";
    NotificationType["QUOTE_ACCEPTED"] = "quote_accepted";
    NotificationType["QUOTE_REJECTED"] = "quote_rejected";
    NotificationType["POST_CLOSED"] = "post_closed";
    NotificationType["POST_UPDATED"] = "post_updated";
    NotificationType["DIRECT_REQUEST_RECEIVED"] = "direct_request_received";
    NotificationType["DIRECT_REQUEST_ACCEPTED"] = "direct_request_accepted";
    NotificationType["DIRECT_REQUEST_REJECTED"] = "direct_request_rejected";
    NotificationType["ORDER_CREATED"] = "order_created";
    NotificationType["ORDER_IN_PROGRESS"] = "order_in_progress";
    NotificationType["ORDER_COMPLETED"] = "order_completed";
    NotificationType["ORDER_CANCELLED"] = "order_cancelled";
    NotificationType["PAYMENT_RECEIVED"] = "payment_received";
    NotificationType["PAYMENT_FAILED"] = "payment_failed";
    NotificationType["REFUND_PROCESSED"] = "refund_processed";
    NotificationType["NEW_REVIEW_RECEIVED"] = "new_review_received";
    NotificationType["REVIEW_REPLY_RECEIVED"] = "review_reply_received";
    NotificationType["NEW_MESSAGE"] = "new_message";
    NotificationType["ACCOUNT_VERIFIED"] = "account_verified";
    NotificationType["ACCOUNT_SUSPENDED"] = "account_suspended";
    NotificationType["ACCOUNT_WARNING"] = "account_warning";
    NotificationType["SYSTEM_ANNOUNCEMENT"] = "system_announcement";
    NotificationType["QUOTE_ACCEPTED_FOR_CHAT"] = "quote_accepted_for_chat";
    NotificationType["QUOTE_REVISED"] = "quote_revised";
    NotificationType["ORDER_REQUESTED"] = "order_requested";
})(NotificationType || (exports.NotificationType = NotificationType = {}));


/***/ }),

/***/ "./src/modules/notifications/gateways/notifications.gateway.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/notifications/gateways/notifications.gateway.ts ***!
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
var NotificationsGateway_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationsGateway = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const event_emitter_1 = __webpack_require__(/*! @nestjs/event-emitter */ "@nestjs/event-emitter");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const websockets_1 = __webpack_require__(/*! @nestjs/websockets */ "@nestjs/websockets");
const socket_io_1 = __webpack_require__(/*! socket.io */ "socket.io");
let NotificationsGateway = NotificationsGateway_1 = class NotificationsGateway {
    constructor(jwtService) {
        this.jwtService = jwtService;
        this.logger = new common_1.Logger(NotificationsGateway_1.name);
        this.userSockets = new Map();
    }
    async handleConnection(client) {
        try {
            const token = client.handshake.auth.token ||
                client.handshake.headers.authorization?.split(' ')[1];
            if (!token) {
                client.disconnect();
                return;
            }
            const payload = await this.jwtService.verifyAsync(token);
            const userId = payload.sub || payload.id;
            if (!userId) {
                client.disconnect();
                return;
            }
            client.data.userId = userId;
            if (!this.userSockets.has(userId)) {
                this.userSockets.set(userId, new Set());
            }
            this.userSockets.get(userId).add(client.id);
            await client.join(`user:${userId}`);
            this.logger.log(`Client connected: ${client.id} (User: ${userId})`);
            client.emit('connected', { userId });
        }
        catch (error) {
            this.logger.error('Connection error:', error);
            client.disconnect();
        }
    }
    handleDisconnect(client) {
        const userId = client.data.userId;
        if (userId) {
            const sockets = this.userSockets.get(userId);
            if (sockets) {
                sockets.delete(client.id);
                if (sockets.size === 0) {
                    this.userSockets.delete(userId);
                }
            }
        }
        this.logger.log(`Client disconnected: ${client.id} (User: ${userId})`);
    }
    handleNotificationCreated(payload) {
        this.server
            .to(`user:${payload.userId}`)
            .emit('notification:new', payload.notification);
        this.logger.log(`Notification sent to user: ${payload.userId}`);
    }
    handleNotificationRead(payload) {
        this.server
            .to(`user:${payload.userId}`)
            .emit('notification:read', {
            notificationId: payload.notificationId,
        });
    }
    handleAllNotificationsRead(payload) {
        this.server
            .to(`user:${payload.userId}`)
            .emit('notification:all_read', {});
    }
    isUserOnline(userId) {
        const sockets = this.userSockets.get(userId);
        return !!sockets && sockets.size > 0;
    }
    getUserConnectionCount(userId) {
        return this.userSockets.get(userId)?.size || 0;
    }
    sendToUser(userId, event, data) {
        this.server.to(`user:${userId}`).emit(event, data);
    }
    broadcastToAll(event, data) {
        this.server.emit(event, data);
    }
};
exports.NotificationsGateway = NotificationsGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", typeof (_b = typeof socket_io_1.Server !== "undefined" && socket_io_1.Server) === "function" ? _b : Object)
], NotificationsGateway.prototype, "server", void 0);
__decorate([
    (0, event_emitter_1.OnEvent)('notification.created'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NotificationsGateway.prototype, "handleNotificationCreated", null);
__decorate([
    (0, event_emitter_1.OnEvent)('notification.read'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NotificationsGateway.prototype, "handleNotificationRead", null);
__decorate([
    (0, event_emitter_1.OnEvent)('notification.all_read'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NotificationsGateway.prototype, "handleAllNotificationsRead", null);
exports.NotificationsGateway = NotificationsGateway = NotificationsGateway_1 = __decorate([
    (0, common_1.Injectable)(),
    (0, websockets_1.WebSocketGateway)({
        namespace: 'notifications',
        cors: {
            origin: process.env.FRONTEND_URL || '*',
            credentials: true,
        },
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object])
], NotificationsGateway);


/***/ }),

/***/ "./src/modules/notifications/notification.controller.ts":
/*!**************************************************************!*\
  !*** ./src/modules/notifications/notification.controller.ts ***!
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationController = void 0;
const _CurrentUserId_1 = __webpack_require__(/*! @/common/decorators/@CurrentUserId */ "./src/common/decorators/@CurrentUserId.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! @/common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const notification_dto_1 = __webpack_require__(/*! ./dtos/notification.dto */ "./src/modules/notifications/dtos/notification.dto.ts");
const notification_service_1 = __webpack_require__(/*! ./notification.service */ "./src/modules/notifications/notification.service.ts");
let NotificationController = class NotificationController {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    async getNotifications(userId, query) {
        return await this.notificationService.getUserNotifications(userId, query.page, query.limit, query.unreadOnly);
    }
    async getUnreadCount(userId) {
        const count = await this.notificationService.getUnreadCount(userId);
        return { count };
    }
    async markAsRead(notificationId, userId) {
        await this.notificationService.markAsRead(notificationId, userId);
        return { success: true };
    }
    async markAllAsRead(userId) {
        await this.notificationService.markAllAsRead(userId);
        return { success: true };
    }
    async deleteNotification(notificationId, userId) {
        await this.notificationService.deleteNotification(notificationId, userId);
        return { success: true };
    }
    async deleteReadNotifications(userId) {
        await this.notificationService.deleteReadNotifications(userId);
        return { success: true };
    }
};
exports.NotificationController = NotificationController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'get successful list',
        description: 'get list of successful notifications',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'success',
        type: notification_dto_1.NotificationListResponseDto
    }),
    __param(0, (0, _CurrentUserId_1.CurrentUserId)('id')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof notification_dto_1.GetNotificationsQueryDto !== "undefined" && notification_dto_1.GetNotificationsQueryDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], NotificationController.prototype, "getNotifications", null);
__decorate([
    (0, common_1.Get)('unread-count'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'count unread notifications' }),
    (0, swagger_1.ApiOkResponse)({
        status: 200, description: 'success',
        type: notification_dto_1.UnreadCountResponseDto,
    }),
    __param(0, (0, _CurrentUserId_1.CurrentUserId)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], NotificationController.prototype, "getUnreadCount", null);
__decorate([
    (0, common_1.Post)(':id/read'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'mark as read' }),
    (0, swagger_1.ApiOkResponse)({ description: 'success' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, _CurrentUserId_1.CurrentUserId)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], NotificationController.prototype, "markAsRead", null);
__decorate([
    (0, common_1.Post)('mark-all-read'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'mark all read' }),
    (0, swagger_1.ApiOkResponse)({ description: 'success' }),
    __param(0, (0, _CurrentUserId_1.CurrentUserId)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], NotificationController.prototype, "markAllAsRead", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'delete notification' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Deleted successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, _CurrentUserId_1.CurrentUserId)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], NotificationController.prototype, "deleteNotification", null);
__decorate([
    (0, common_1.Delete)('read'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'delete all read receipts' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Deleted successfully' }),
    __param(0, (0, _CurrentUserId_1.CurrentUserId)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], NotificationController.prototype, "deleteReadNotifications", null);
exports.NotificationController = NotificationController = __decorate([
    (0, swagger_1.ApiTags)('Notifications'),
    (0, common_1.Controller)('notifications'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [typeof (_a = typeof notification_service_1.NotificationService !== "undefined" && notification_service_1.NotificationService) === "function" ? _a : Object])
], NotificationController);


/***/ }),

/***/ "./src/modules/notifications/notification.service.ts":
/*!***********************************************************!*\
  !*** ./src/modules/notifications/notification.service.ts ***!
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
exports.NotificationService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const notification_enum_1 = __webpack_require__(/*! ./enums/notification.enum */ "./src/modules/notifications/enums/notification.enum.ts");
const notification_action_service_1 = __webpack_require__(/*! ./services/notification-action.service */ "./src/modules/notifications/services/notification-action.service.ts");
const notification_creation_service_1 = __webpack_require__(/*! ./services/notification-creation.service */ "./src/modules/notifications/services/notification-creation.service.ts");
const notification_query_service_1 = __webpack_require__(/*! ./services/notification-query.service */ "./src/modules/notifications/services/notification-query.service.ts");
let NotificationService = class NotificationService {
    constructor(queryService, creationService, actionService) {
        this.queryService = queryService;
        this.creationService = creationService;
        this.actionService = actionService;
    }
    async notifyNewQuote(customerId, data) {
        await this.creationService.createNotification({
            userId: customerId,
            type: notification_enum_1.NotificationType.NEW_QUOTE_RECEIVED,
            title: 'Có báo giá mới',
            message: `${data.providerName} đã gửi báo giá ${data.price?.toLocaleString('vi-VN')}đ cho "${data.postTitle}"`,
            metadata: {
                postId: data.postId,
                quoteId: data.quoteId,
                providerId: data.providerName,
                price: data.price,
            },
            actionUrl: `/posts/${data.postId}/quotes`,
        });
    }
    async notifyQuoteAcceptedForChat(providerId, payload) {
        await this.creationService.createNotification({
            userId: providerId,
            type: notification_enum_1.NotificationType.QUOTE_ACCEPTED_FOR_CHAT,
            title: 'Báo giá được chấp nhận',
            message: `${payload.customerName} đã chấp nhận báo giá của bạn cho "${payload.postTitle}". Hãy vào chat để thảo luận thêm!`,
            metadata: {
                quoteId: payload.quoteId,
                postId: payload.postId,
            },
            actionUrl: `/chat/quote/${payload.quoteId}`,
        });
    }
    async notifyQuoteRevised(customerId, payload) {
        const oldPriceNumber = payload.oldPrice ?? payload.newPrice;
        const priceChange = payload.newPrice - oldPriceNumber;
        const changeText = priceChange > 0 ? 'tăng' : 'giảm';
        const changeAmount = Math.abs(priceChange).toLocaleString('vi-VN');
        const emoji = priceChange > 0 ? '📈' : '📉';
        await this.creationService.createNotification({
            userId: customerId,
            type: notification_enum_1.NotificationType.QUOTE_REVISED,
            title: `${emoji} Thợ đã cập nhật giá`,
            message: `${payload.providerName} đã ${changeText} giá ${changeAmount}đ cho "${payload.postTitle}". Giá mới: ${payload.newPrice.toLocaleString('vi-VN')}đ`,
            metadata: {
                quoteId: payload.quoteId,
                postId: payload.postId,
                newPrice: payload.newPrice,
                oldPrice: payload.oldPrice,
                priceChange,
            },
            actionUrl: `/chat/quote/${payload.quoteId}`,
        });
    }
    async notifyOrderRequested(providerId, payload) {
        const revisionText = payload.revisionNumber
            ? ` (Revision ${payload.revisionNumber})`
            : '';
        const notesText = payload.notes
            ? `\nGhi chú: ${payload.notes.substring(0, 100)}`
            : '';
        await this.creationService.createNotification({
            userId: providerId,
            type: notification_enum_1.NotificationType.ORDER_REQUESTED,
            title: 'Khách hàng muốn đặt đơn',
            message: `${payload.customerName} đã nhấn đặt đơn với giá ${payload.price.toLocaleString('vi-VN')}đ${revisionText} cho "${payload.postTitle}". Hãy xác nhận để bắt đầu làm!${notesText}`,
            metadata: {
                quoteId: payload.quoteId,
                postId: payload.postId,
                price: payload.price,
                revisionNumber: payload.revisionNumber,
                notes: payload.notes,
            },
            actionUrl: `/quotes/${payload.quoteId}`,
        });
    }
    async notifyQuoteRejected(providerId, data) {
        const reasonText = data.reason ? `\nLý do: ${data.reason}` : '';
        await this.creationService.createNotification({
            userId: providerId,
            type: notification_enum_1.NotificationType.QUOTE_REJECTED,
            title: 'Báo giá bị từ chối',
            message: `Báo giá của bạn cho "${data.postTitle}" đã bị từ chối.${reasonText}`,
            metadata: {
                postId: data.postId,
                quoteId: data.quoteId,
                reason: data.reason,
            },
            actionUrl: `/quotes/${data.quoteId}`,
        });
    }
    async notifyQuoteCancelled(customerId, payload) {
        const reasonText = payload.reason ? `\nLý do: ${payload.reason}` : '';
        await this.creationService.createNotification({
            userId: customerId,
            type: notification_enum_1.NotificationType.QUOTE_REJECTED,
            title: 'Thợ đã hủy báo giá',
            message: `${payload.providerName} đã hủy báo giá cho "${payload.postTitle}".${reasonText}`,
            metadata: {
                quoteId: payload.quoteId,
                postId: payload.postId,
                reason: payload.reason,
            },
            actionUrl: `/posts/${payload.postId}`,
        });
    }
    async notifyOrderCreated(customerId, providerId, orderId, orderTitle) {
        await this.creationService.createNotification({
            userId: customerId,
            type: notification_enum_1.NotificationType.ORDER_CREATED,
            title: 'Đơn hàng đã được tạo',
            message: `Thợ đã xác nhận và đơn hàng "${orderTitle}" đã được tạo. Công việc đang được thực hiện!`,
            metadata: { orderId },
            actionUrl: `/orders/${orderId}`,
        });
    }
    async notifyOrderInProgress(customerId, orderId, orderTitle) {
        await this.creationService.createNotification({
            userId: customerId,
            type: notification_enum_1.NotificationType.ORDER_IN_PROGRESS,
            title: '🔨 Thợ đã bắt đầu làm',
            message: `Thợ đã bắt đầu thực hiện đơn hàng "${orderTitle}"`,
            metadata: { orderId },
            actionUrl: `/orders/${orderId}`,
        });
    }
    async notifyProviderCompleted(customerId, orderId, orderTitle) {
        await this.creationService.createNotification({
            userId: customerId,
            type: notification_enum_1.NotificationType.ORDER_IN_PROGRESS,
            title: 'Thợ đã hoàn thành',
            message: `Thợ đã hoàn thành đơn hàng "${orderTitle}". Vui lòng xác nhận!`,
            metadata: { orderId },
            actionUrl: `/orders/${orderId}`,
        });
    }
    async notifyOrderCompleted(userId, orderId, orderTitle, isProvider) {
        const message = isProvider
            ? `Đơn hàng "${orderTitle}" đã hoàn thành. Vui lòng chờ thanh toán.`
            : `Đơn hàng "${orderTitle}" đã hoàn thành. Cảm ơn bạn đã sử dụng dịch vụ!`;
        await this.creationService.createNotification({
            userId,
            type: notification_enum_1.NotificationType.ORDER_COMPLETED,
            title: 'Đơn hàng hoàn thành',
            message,
            metadata: { orderId, isProvider },
            actionUrl: `/orders/${orderId}`,
        });
    }
    async notifyOrderCancelled(userId, orderId, orderTitle, reason) {
        await this.creationService.createNotification({
            userId,
            type: notification_enum_1.NotificationType.ORDER_CANCELLED,
            title: 'Đơn hàng đã bị hủy',
            message: `Đơn hàng "${orderTitle}" đã bị hủy. Lý do: ${reason}`,
            metadata: { orderId, reason },
            actionUrl: `/orders/${orderId}`,
        });
    }
    async notifyPaymentReceived(providerId, amount, orderId) {
        await this.creationService.createNotification({
            userId: providerId,
            type: notification_enum_1.NotificationType.PAYMENT_RECEIVED,
            title: 'Đã nhận thanh toán',
            message: `Bạn đã nhận thanh toán ${amount.toLocaleString('vi-VN')}đ`,
            metadata: { orderId, amount },
            actionUrl: `/orders/${orderId}`,
        });
    }
    async notifyPostClosed(providerIds, postTitle, postId) {
        for (const providerId of providerIds) {
            await this.creationService.createNotification({
                userId: providerId,
                type: notification_enum_1.NotificationType.POST_CLOSED,
                title: 'Post đã đóng',
                message: `Post "${postTitle}" mà bạn đã chào giá đã được đóng.`,
                metadata: { postId },
                actionUrl: `/posts/${postId}`,
            });
        }
    }
    async notifyNewReview(providerId, reviewId, rating, customerName) {
        const stars = 'sao'.repeat(rating);
        await this.creationService.createNotification({
            userId: providerId,
            type: notification_enum_1.NotificationType.NEW_REVIEW_RECEIVED,
            title: 'Đánh giá mới',
            message: `${customerName} đã đánh giá bạn ${stars} (${rating}/5)`,
            metadata: { reviewId, rating },
            actionUrl: `/reviews/${reviewId}`,
        });
    }
    async notifyNewMessage(userId, senderId, senderName, messagePreview, chatId) {
        await this.creationService.createNotification({
            userId,
            type: notification_enum_1.NotificationType.NEW_MESSAGE,
            title: 'Tin nhắn mới',
            message: `${senderName}: ${messagePreview.substring(0, 100)}`,
            metadata: { senderId, chatId },
            actionUrl: `/chats/${chatId}`,
        });
    }
    async notifySystem(userIds, title, message, metadata) {
        for (const userId of userIds) {
            await this.creationService.createNotification({
                userId,
                type: notification_enum_1.NotificationType.SYSTEM_ANNOUNCEMENT,
                title,
                message,
                metadata,
            });
        }
    }
    async getUserNotifications(userId, page = 1, limit = 20, unreadOnly = false) {
        return await this.queryService.getUserNotifications(userId, page, limit, unreadOnly);
    }
    async getUnreadCount(userId) {
        return await this.queryService.getUnreadCount(userId);
    }
    async markAsRead(notificationId, userId) {
        await this.actionService.markAsRead(notificationId, userId);
    }
    async markAllAsRead(userId) {
        await this.actionService.markAllAsRead(userId);
    }
    async deleteNotification(notificationId, userId) {
        await this.actionService.deleteNotification(notificationId, userId);
    }
    async deleteReadNotifications(userId) {
        await this.actionService.deleteReadNotifications(userId);
    }
};
exports.NotificationService = NotificationService;
exports.NotificationService = NotificationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof notification_query_service_1.NotificationQueryService !== "undefined" && notification_query_service_1.NotificationQueryService) === "function" ? _a : Object, typeof (_b = typeof notification_creation_service_1.NotificationCreationService !== "undefined" && notification_creation_service_1.NotificationCreationService) === "function" ? _b : Object, typeof (_c = typeof notification_action_service_1.NotificationActionService !== "undefined" && notification_action_service_1.NotificationActionService) === "function" ? _c : Object])
], NotificationService);


/***/ }),

/***/ "./src/modules/notifications/notifications.module.ts":
/*!***********************************************************!*\
  !*** ./src/modules/notifications/notifications.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const notification_entity_1 = __webpack_require__(/*! ./entities/notification.entity */ "./src/modules/notifications/entities/notification.entity.ts");
const notifications_gateway_1 = __webpack_require__(/*! ./gateways/notifications.gateway */ "./src/modules/notifications/gateways/notifications.gateway.ts");
const notification_controller_1 = __webpack_require__(/*! ./notification.controller */ "./src/modules/notifications/notification.controller.ts");
const notification_service_1 = __webpack_require__(/*! ./notification.service */ "./src/modules/notifications/notification.service.ts");
const notification_repository_1 = __webpack_require__(/*! ./repositories/notification.repository */ "./src/modules/notifications/repositories/notification.repository.ts");
const notification_action_service_1 = __webpack_require__(/*! ./services/notification-action.service */ "./src/modules/notifications/services/notification-action.service.ts");
const notification_creation_service_1 = __webpack_require__(/*! ./services/notification-creation.service */ "./src/modules/notifications/services/notification-creation.service.ts");
const notification_event_service_1 = __webpack_require__(/*! ./services/notification-event.service */ "./src/modules/notifications/services/notification-event.service.ts");
const notification_query_service_1 = __webpack_require__(/*! ./services/notification-query.service */ "./src/modules/notifications/services/notification-query.service.ts");
let NotificationsModule = class NotificationsModule {
};
exports.NotificationsModule = NotificationsModule;
exports.NotificationsModule = NotificationsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([notification_entity_1.Notification]),
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET || 'your-secret-key',
                signOptions: { expiresIn: '7d' },
            }),
        ],
        controllers: [notification_controller_1.NotificationController],
        providers: [
            notification_service_1.NotificationService,
            notification_repository_1.NotificationRepository,
            notifications_gateway_1.NotificationsGateway,
            notification_query_service_1.NotificationQueryService,
            notification_creation_service_1.NotificationCreationService,
            notification_action_service_1.NotificationActionService,
            notification_event_service_1.NotificationEventService,
        ],
        exports: [
            notification_service_1.NotificationService,
            notification_repository_1.NotificationRepository,
            notifications_gateway_1.NotificationsGateway,
            notification_query_service_1.NotificationQueryService,
            notification_creation_service_1.NotificationCreationService,
            notification_action_service_1.NotificationActionService,
            notification_event_service_1.NotificationEventService,
        ],
    })
], NotificationsModule);


/***/ }),

/***/ "./src/modules/notifications/repositories/notification.repository.ts":
/*!***************************************************************************!*\
  !*** ./src/modules/notifications/repositories/notification.repository.ts ***!
  \***************************************************************************/
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const notification_entity_1 = __webpack_require__(/*! ../entities/notification.entity */ "./src/modules/notifications/entities/notification.entity.ts");
let NotificationRepository = class NotificationRepository {
    constructor(repository) {
        this.repository = repository;
    }
    getRepository(manager) {
        return manager ? manager.getRepository(notification_entity_1.Notification) : this.repository;
    }
    create(data, manager) {
        return this.getRepository(manager).create(data);
    }
    async insert(entities) {
        await this.createQueryBuilder()
            .insert()
            .into(notification_entity_1.Notification)
            .values(entities)
            .execute();
    }
    async save(notification, manager) {
        return await this.getRepository(manager).save(notification);
    }
    async findAndCount(options, manager) {
        return await this.getRepository(manager).findAndCount(options);
    }
    async count(options, manager) {
        return await this.getRepository(manager).count(options);
    }
    async findOne(options, manager) {
        return await this.getRepository(manager).findOne(options);
    }
    createQueryBuilder(manager) {
        return this.getRepository(manager).createQueryBuilder();
    }
    async delete(criteria, manager) {
        await this.getRepository(manager).delete(criteria);
    }
};
exports.NotificationRepository = NotificationRepository;
exports.NotificationRepository = NotificationRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(notification_entity_1.Notification)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], NotificationRepository);


/***/ }),

/***/ "./src/modules/notifications/services/notification-action.service.ts":
/*!***************************************************************************!*\
  !*** ./src/modules/notifications/services/notification-action.service.ts ***!
  \***************************************************************************/
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
exports.NotificationActionService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const event_emitter_1 = __webpack_require__(/*! @nestjs/event-emitter */ "@nestjs/event-emitter");
const notification_entity_1 = __webpack_require__(/*! ../entities/notification.entity */ "./src/modules/notifications/entities/notification.entity.ts");
const notification_repository_1 = __webpack_require__(/*! ../repositories/notification.repository */ "./src/modules/notifications/repositories/notification.repository.ts");
const notification_query_service_1 = __webpack_require__(/*! ./notification-query.service */ "./src/modules/notifications/services/notification-query.service.ts");
let NotificationActionService = class NotificationActionService {
    constructor(notificationRepo, queryService, eventEmitter) {
        this.notificationRepo = notificationRepo;
        this.queryService = queryService;
        this.eventEmitter = eventEmitter;
    }
    async markAsRead(notificationId, userId) {
        const notification = await this.queryService.findNotification(notificationId, userId);
        if (notification && !notification.isRead) {
            notification.markAsRead();
            await this.notificationRepo.save(notification);
            this.eventEmitter.emit('notification.read', {
                userId,
                notificationId,
            });
        }
    }
    async markAllAsRead(userId) {
        await this.notificationRepo
            .createQueryBuilder()
            .update(notification_entity_1.Notification)
            .set({
            isRead: true,
            readAt: new Date(),
        })
            .where('user_id = :userId', { userId })
            .andWhere('is_read = false')
            .execute();
        this.eventEmitter.emit('notification.all_read', { userId });
    }
    async deleteNotification(notificationId, userId) {
        await this.notificationRepo.delete({ id: notificationId, userId });
        this.eventEmitter.emit('notification.deleted', {
            userId,
            notificationId,
        });
    }
    async deleteReadNotifications(userId) {
        await this.notificationRepo.delete({ userId, isRead: true });
        this.eventEmitter.emit('notification.read_deleted', { userId });
    }
};
exports.NotificationActionService = NotificationActionService;
exports.NotificationActionService = NotificationActionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof notification_repository_1.NotificationRepository !== "undefined" && notification_repository_1.NotificationRepository) === "function" ? _a : Object, typeof (_b = typeof notification_query_service_1.NotificationQueryService !== "undefined" && notification_query_service_1.NotificationQueryService) === "function" ? _b : Object, typeof (_c = typeof event_emitter_1.EventEmitter2 !== "undefined" && event_emitter_1.EventEmitter2) === "function" ? _c : Object])
], NotificationActionService);


/***/ }),

/***/ "./src/modules/notifications/services/notification-creation.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/modules/notifications/services/notification-creation.service.ts ***!
  \*****************************************************************************/
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationCreationService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const event_emitter_1 = __webpack_require__(/*! @nestjs/event-emitter */ "@nestjs/event-emitter");
const notification_repository_1 = __webpack_require__(/*! ../repositories/notification.repository */ "./src/modules/notifications/repositories/notification.repository.ts");
let NotificationCreationService = class NotificationCreationService {
    constructor(notificationRepo, eventEmitter) {
        this.notificationRepo = notificationRepo;
        this.eventEmitter = eventEmitter;
    }
    async createNotification(data) {
        const notification = this.notificationRepo.create({
            userId: data.userId,
            type: data.type,
            title: data.title,
            message: data.message,
            metadata: data.metadata,
            actionUrl: data.actionUrl,
            isRead: false,
        });
        const saved = await this.notificationRepo.save(notification);
        this.eventEmitter.emit('notification.created', {
            userId: data.userId,
            notification: saved,
        });
        return saved;
    }
    async createBulkNotifications(notifications) {
        const entities = notifications.map(notif => this.notificationRepo.create({
            userId: notif.userId,
            type: notif.type,
            title: notif.title,
            message: notif.message,
            metadata: notif.metadata,
            actionUrl: notif.actionUrl,
            isRead: false,
        }));
        await this.notificationRepo.insert(entities);
    }
};
exports.NotificationCreationService = NotificationCreationService;
exports.NotificationCreationService = NotificationCreationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof notification_repository_1.NotificationRepository !== "undefined" && notification_repository_1.NotificationRepository) === "function" ? _a : Object, typeof (_b = typeof event_emitter_1.EventEmitter2 !== "undefined" && event_emitter_1.EventEmitter2) === "function" ? _b : Object])
], NotificationCreationService);


/***/ }),

/***/ "./src/modules/notifications/services/notification-event.service.ts":
/*!**************************************************************************!*\
  !*** ./src/modules/notifications/services/notification-event.service.ts ***!
  \**************************************************************************/
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
exports.NotificationEventService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const notification_enum_1 = __webpack_require__(/*! ../enums/notification.enum */ "./src/modules/notifications/enums/notification.enum.ts");
const notification_creation_service_1 = __webpack_require__(/*! ./notification-creation.service */ "./src/modules/notifications/services/notification-creation.service.ts");
let NotificationEventService = class NotificationEventService {
    constructor(creationService) {
        this.creationService = creationService;
    }
    async notifyNewQuote(customerId, data) {
        await this.creationService.createNotification({
            userId: customerId,
            type: notification_enum_1.NotificationType.NEW_QUOTE_RECEIVED,
            title: 'new quote',
            message: `${data.providerName} sent a quote ${data.price?.toLocaleString('vi-VN')}đ for post "${data.postTitle}"`,
            metadata: {
                postId: data.postId,
                quoteId: data.quoteId,
                providerId: data.providerName,
                price: data.price,
            },
            actionUrl: `/posts/${data.postId}/quotes`,
        });
    }
    async notifyQuoteAccepted(providerId, data) {
        await this.creationService.createNotification({
            userId: providerId,
            type: notification_enum_1.NotificationType.QUOTE_ACCEPTED,
            title: 'Quote accepted',
            message: `Happy! Your quote for "${data.postTitle}" has been accepted`,
            metadata: {
                postId: data.postId,
                quoteId: data.quoteId,
            },
            actionUrl: `/quotes/${data.quoteId}`,
        });
    }
    async notifyQuoteRejected(providerId, data) {
        const reasonText = data.reason ? `: ${data.reason}` : '';
        await this.creationService.createNotification({
            userId: providerId,
            type: notification_enum_1.NotificationType.QUOTE_REJECTED,
            title: 'Quote was rejected',
            message: `Your quote for "${data.postTitle}" has been rejected${reasonText}`,
            metadata: {
                postId: data.postId,
                quoteId: data.quoteId,
                reason: data.reason,
            },
            actionUrl: `/quotes/${data.quoteId}`,
        });
    }
    async notifyPostClosed(providerIds, postTitle, postId) {
        await Promise.all(providerIds.map(providerId => this.creationService.createNotification({
            userId: providerId,
            type: notification_enum_1.NotificationType.POST_CLOSED,
            title: 'Post is closed',
            message: `Post "${postTitle}" you bid on has been closed.`,
            metadata: { postId },
            actionUrl: `/posts/${postId}`,
        })));
    }
    async notifyOrderCreated(providerId, customerId, orderId, orderTitle) {
        await this.creationService.createNotification({
            userId: providerId,
            type: notification_enum_1.NotificationType.ORDER_CREATED,
            title: 'new order',
            message: `you have new order: "${orderTitle}"`,
            metadata: { orderId },
            actionUrl: `/orders/${orderId}`,
        });
        await this.creationService.createNotification({
            userId: customerId,
            type: notification_enum_1.NotificationType.ORDER_CREATED,
            title: 'Order has been created',
            message: `Order "${orderTitle}" was created successfully`,
            metadata: { orderId },
            actionUrl: `/orders/${orderId}`,
        });
    }
    async notifyOrderInProgress(customerId, orderId, orderTitle) {
        await this.creationService.createNotification({
            userId: customerId,
            type: notification_enum_1.NotificationType.ORDER_IN_PROGRESS,
            title: 'Order in progress',
            message: `Provider has started working on order: "${orderTitle}"`,
            metadata: { orderId },
            actionUrl: `/orders/${orderId}`,
        });
    }
    async notifyProviderCompleted(customerId, orderId, orderTitle) {
        await this.creationService.createNotification({
            userId: customerId,
            type: notification_enum_1.NotificationType.ORDER_IN_PROGRESS,
            title: 'Provider completed work',
            message: `Provider has completed order: "${orderTitle}". Please confirm!`,
            metadata: { orderId },
            actionUrl: `/orders/${orderId}`,
        });
    }
    async notifyOrderCompleted(userId, orderId, orderTitle, isProvider) {
        const message = isProvider
            ? `Order "${orderTitle}" has been completed. Please wait for payment.`
            : `Order "${orderTitle}" has been completed. Thank you for using our service!`;
        await this.creationService.createNotification({
            userId,
            type: notification_enum_1.NotificationType.ORDER_COMPLETED,
            title: 'Order completed',
            message,
            metadata: { orderId, isProvider },
            actionUrl: `/orders/${orderId}`,
        });
    }
    async notifyOrderCancelled(userId, orderId, orderTitle, reason) {
        await this.creationService.createNotification({
            userId,
            type: notification_enum_1.NotificationType.ORDER_CANCELLED,
            title: 'Order cancelled',
            message: `Order "${orderTitle}" has been cancelled. Reason: ${reason}`,
            metadata: { orderId, reason },
            actionUrl: `/orders/${orderId}`,
        });
    }
    async notifyPaymentReceived(providerId, amount, orderId) {
        await this.creationService.createNotification({
            userId: providerId,
            type: notification_enum_1.NotificationType.PAYMENT_RECEIVED,
            title: 'Payment received',
            message: `You have received payment of ${amount.toLocaleString('vi-VN')} VNĐ`,
            metadata: { orderId, amount },
            actionUrl: `/orders/${orderId}`,
        });
    }
    async notifyNewReview(providerId, reviewId, rating, customerName) {
        await this.creationService.createNotification({
            userId: providerId,
            type: notification_enum_1.NotificationType.NEW_REVIEW_RECEIVED,
            title: 'New review',
            message: `${customerName} rated you ${rating} star`,
            metadata: { reviewId, rating },
            actionUrl: `/reviews/${reviewId}`,
        });
    }
    async notifyNewMessage(userId, senderId, senderName, messagePreview, chatId) {
        await this.creationService.createNotification({
            userId,
            type: notification_enum_1.NotificationType.NEW_MESSAGE,
            title: 'New message',
            message: `${senderName}: ${messagePreview}`,
            metadata: { senderId, chatId },
            actionUrl: `/chats/${chatId}`,
        });
    }
    async notifySystem(userIds, title, message, metadata) {
        await Promise.all(userIds.map(userId => this.creationService.createNotification({
            userId,
            type: notification_enum_1.NotificationType.SYSTEM_ANNOUNCEMENT,
            title,
            message,
            metadata,
        })));
    }
};
exports.NotificationEventService = NotificationEventService;
exports.NotificationEventService = NotificationEventService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof notification_creation_service_1.NotificationCreationService !== "undefined" && notification_creation_service_1.NotificationCreationService) === "function" ? _a : Object])
], NotificationEventService);


/***/ }),

/***/ "./src/modules/notifications/services/notification-query.service.ts":
/*!**************************************************************************!*\
  !*** ./src/modules/notifications/services/notification-query.service.ts ***!
  \**************************************************************************/
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
exports.NotificationQueryService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const notification_repository_1 = __webpack_require__(/*! ../repositories/notification.repository */ "./src/modules/notifications/repositories/notification.repository.ts");
let NotificationQueryService = class NotificationQueryService {
    constructor(notificationRepo) {
        this.notificationRepo = notificationRepo;
    }
    async getUserNotifications(userId, page = 1, limit = 20, unreadOnly = false) {
        const where = { userId };
        if (unreadOnly) {
            where.isRead = false;
        }
        const [notifications, total] = await this.notificationRepo.findAndCount({
            where,
            order: { createdAt: 'DESC' },
            skip: (page - 1) * limit,
            take: limit,
        });
        const unreadCount = await this.getUnreadCount(userId);
        return { notifications, total, unreadCount };
    }
    async getUnreadCount(userId) {
        return await this.notificationRepo.count({
            where: { userId, isRead: false },
        });
    }
    async findNotification(notificationId, userId) {
        return await this.notificationRepo.findOne({
            where: { id: notificationId, userId },
        });
    }
};
exports.NotificationQueryService = NotificationQueryService;
exports.NotificationQueryService = NotificationQueryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof notification_repository_1.NotificationRepository !== "undefined" && notification_repository_1.NotificationRepository) === "function" ? _a : Object])
], NotificationQueryService);


/***/ }),

/***/ "./src/modules/orders/dto/order.dto.ts":
/*!*********************************************!*\
  !*** ./src/modules/orders/dto/order.dto.ts ***!
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderResponseDto = exports.GetOrdersQueryDto = exports.UpdateNotesDto = exports.UpdatePaymentMethodDto = exports.CancelOrderDto = exports.CreateOrderDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const order_entity_1 = __webpack_require__(/*! ../entities/order.entity */ "./src/modules/orders/entities/order.entity.ts");
class CreateOrderDto {
}
exports.CreateOrderDto = CreateOrderDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Provider ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "providerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tiêu đề dịch vụ' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Mô tả chi tiết' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(5000),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Giá dịch vụ', example: 500000 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Địa điểm thực hiện' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Thời gian mong muốn (ISO 8601)',
        example: '2025-01-20T09:00:00Z'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsISO8601)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CreateOrderDto.prototype, "scheduledAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Thời gian ước tính (phút)', example: 120 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "estimatedDuration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Ghi chú thêm' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(2000),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "notes", void 0);
class CancelOrderDto {
}
exports.CancelOrderDto = CancelOrderDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Lý do hủy' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1000),
    __metadata("design:type", String)
], CancelOrderDto.prototype, "reason", void 0);
class UpdatePaymentMethodDto {
}
exports.UpdatePaymentMethodDto = UpdatePaymentMethodDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: order_entity_1.PaymentMethod,
        description: 'Phương thức thanh toán'
    }),
    (0, class_validator_1.IsEnum)(order_entity_1.PaymentMethod),
    __metadata("design:type", typeof (_b = typeof order_entity_1.PaymentMethod !== "undefined" && order_entity_1.PaymentMethod) === "function" ? _b : Object)
], UpdatePaymentMethodDto.prototype, "paymentMethod", void 0);
class UpdateNotesDto {
}
exports.UpdateNotesDto = UpdateNotesDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Ghi chú' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(2000),
    __metadata("design:type", String)
], UpdateNotesDto.prototype, "notes", void 0);
class GetOrdersQueryDto {
}
exports.GetOrdersQueryDto = GetOrdersQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        enum: order_entity_1.OrderStatus,
        description: 'Lọc theo trạng thái'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(order_entity_1.OrderStatus),
    __metadata("design:type", typeof (_c = typeof order_entity_1.OrderStatus !== "undefined" && order_entity_1.OrderStatus) === "function" ? _c : Object)
], GetOrdersQueryDto.prototype, "status", void 0);
class OrderResponseDto {
}
exports.OrderResponseDto = OrderResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OrderResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OrderResponseDto.prototype, "orderNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OrderResponseDto.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OrderResponseDto.prototype, "providerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OrderResponseDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OrderResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], OrderResponseDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], OrderResponseDto.prototype, "serviceFee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], OrderResponseDto.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: order_entity_1.OrderStatus }),
    __metadata("design:type", typeof (_d = typeof order_entity_1.OrderStatus !== "undefined" && order_entity_1.OrderStatus) === "function" ? _d : Object)
], OrderResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OrderResponseDto.prototype, "paymentStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], OrderResponseDto.prototype, "paymentMethod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], OrderResponseDto.prototype, "scheduledAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], OrderResponseDto.prototype, "startedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", typeof (_g = typeof Date !== "undefined" && Date) === "function" ? _g : Object)
], OrderResponseDto.prototype, "providerCompletedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", typeof (_h = typeof Date !== "undefined" && Date) === "function" ? _h : Object)
], OrderResponseDto.prototype, "customerCompletedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", typeof (_j = typeof Date !== "undefined" && Date) === "function" ? _j : Object)
], OrderResponseDto.prototype, "completedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", typeof (_k = typeof Date !== "undefined" && Date) === "function" ? _k : Object)
], OrderResponseDto.prototype, "createdAt", void 0);


/***/ }),

/***/ "./src/modules/orders/entities/order.entity.ts":
/*!*****************************************************!*\
  !*** ./src/modules/orders/entities/order.entity.ts ***!
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Order = exports.PaymentMethod = exports.PaymentStatus = exports.OrderStatus = void 0;
const quote_entity_1 = __webpack_require__(/*! @/modules/quotes/entities/quote.entity */ "./src/modules/quotes/entities/quote.entity.ts");
const user_entity_1 = __webpack_require__(/*! @/modules/users/entities/user.entity */ "./src/modules/users/entities/user.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "pending";
    OrderStatus["IN_PROGRESS"] = "in_progress";
    OrderStatus["COMPLETED"] = "completed";
    OrderStatus["CANCELLED"] = "cancelled";
    OrderStatus["DISPUTED"] = "disputed";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PENDING"] = "pending";
    PaymentStatus["PAID"] = "paid";
    PaymentStatus["REFUNDED"] = "refunded";
})(PaymentStatus || (exports.PaymentStatus = PaymentStatus = {}));
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["CASH"] = "cash";
    PaymentMethod["CARD"] = "card";
    PaymentMethod["BANK_TRANSFER"] = "bank_transfer";
    PaymentMethod["WALLET"] = "wallet";
})(PaymentMethod || (exports.PaymentMethod = PaymentMethod = {}));
let Order = class Order {
    constructor() {
        this.serviceFee = 0;
        this.status = OrderStatus.PENDING;
        this.paymentStatus = PaymentStatus.PENDING;
    }
    isPending() {
        return this.status === OrderStatus.PENDING;
    }
    isInProgress() {
        return this.status === OrderStatus.IN_PROGRESS;
    }
    isCompleted() {
        return this.status === OrderStatus.COMPLETED;
    }
    isCancelled() {
        return this.status === OrderStatus.CANCELLED;
    }
    canCancel() {
        if (this.status === OrderStatus.PENDING) {
            return true;
        }
        if (this.status === OrderStatus.IN_PROGRESS && this.startedAt) {
            const now = new Date();
            const minutesElapsed = (now.getTime() - this.startedAt.getTime()) / (1000 * 60);
            return minutesElapsed < 10;
        }
        return false;
    }
    belongsToCustomer(userId) {
        return this.customerId === userId;
    }
    belongsToProvider(userId) {
        return this.providerId === userId;
    }
    isParticipant(userId) {
        return this.customerId === userId || this.providerId === userId;
    }
    canProviderComplete() {
        return this.status === OrderStatus.IN_PROGRESS &&
            !this.providerCompletedAt;
    }
    canCustomerComplete() {
        return this.status === OrderStatus.IN_PROGRESS &&
            this.providerCompletedAt !== null &&
            !this.customerCompletedAt;
    }
};
exports.Order = Order;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Order.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'order_number', unique: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], Order.prototype, "orderNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'customer_id' }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], Order.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { eager: true, onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'customer_id' }),
    __metadata("design:type", typeof (_a = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _a : Object)
], Order.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'provider_id' }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], Order.prototype, "providerId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { eager: true, onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'provider_id' }),
    __metadata("design:type", typeof (_b = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _b : Object)
], Order.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'quote_id', nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "quoteId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => quote_entity_1.Quote, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'quote_id' }),
    __metadata("design:type", typeof (_c = typeof quote_entity_1.Quote !== "undefined" && quote_entity_1.Quote) === "function" ? _c : Object)
], Order.prototype, "quote", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Order.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Order.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'decimal',
        precision: 12,
        scale: 2,
    }),
    __metadata("design:type", Number)
], Order.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'service_fee',
        type: 'decimal',
        precision: 12,
        scale: 2,
        default: 0,
        comment: 'Phí nền tảng',
    }),
    __metadata("design:type", Number)
], Order.prototype, "serviceFee", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'total_amount',
        type: 'decimal',
        precision: 12,
        scale: 2,
        comment: 'Tổng tiền = price + serviceFee',
    }),
    __metadata("design:type", Number)
], Order.prototype, "totalAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: OrderStatus,
        default: OrderStatus.PENDING,
    }),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'payment_status',
        type: 'enum',
        enum: PaymentStatus,
        default: PaymentStatus.PENDING,
    }),
    __metadata("design:type", String)
], Order.prototype, "paymentStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'payment_method',
        type: 'enum',
        enum: PaymentMethod,
        nullable: true,
    }),
    __metadata("design:type", String)
], Order.prototype, "paymentMethod", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500, nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'scheduled_at',
        type: 'timestamp with time zone',
        nullable: true,
    }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Order.prototype, "scheduledAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'estimated_duration',
        type: 'int',
        nullable: true,
        comment: 'Thời gian ước tính (phút)',
    }),
    __metadata("design:type", Number)
], Order.prototype, "estimatedDuration", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'started_at',
        type: 'timestamp with time zone',
        nullable: true,
    }),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], Order.prototype, "startedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'provider_completed_at',
        type: 'timestamp with time zone',
        nullable: true,
        comment: 'Thợ xác nhận hoàn thành',
    }),
    __metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], Order.prototype, "providerCompletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'customer_completed_at',
        type: 'timestamp with time zone',
        nullable: true,
        comment: 'Khách xác nhận hoàn thành',
    }),
    __metadata("design:type", typeof (_g = typeof Date !== "undefined" && Date) === "function" ? _g : Object)
], Order.prototype, "customerCompletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'completed_at',
        type: 'timestamp with time zone',
        nullable: true,
        comment: 'Hoàn thành (cả 2 bên đồng ý)',
    }),
    __metadata("design:type", typeof (_h = typeof Date !== "undefined" && Date) === "function" ? _h : Object)
], Order.prototype, "completedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'cancelled_at',
        type: 'timestamp with time zone',
        nullable: true,
    }),
    __metadata("design:type", typeof (_j = typeof Date !== "undefined" && Date) === "function" ? _j : Object)
], Order.prototype, "cancelledAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cancellation_reason', type: 'text', nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "cancellationReason", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cancelled_by', nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "cancelledBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", typeof (_k = typeof Date !== "undefined" && Date) === "function" ? _k : Object)
], Order.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", typeof (_l = typeof Date !== "undefined" && Date) === "function" ? _l : Object)
], Order.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'paid_at', type: 'timestamp', nullable: true }),
    __metadata("design:type", typeof (_m = typeof Date !== "undefined" && Date) === "function" ? _m : Object)
], Order.prototype, "paidAt", void 0);
exports.Order = Order = __decorate([
    (0, typeorm_1.Entity)('orders'),
    (0, typeorm_1.Index)(['customerId', 'status']),
    (0, typeorm_1.Index)(['providerId', 'status']),
    (0, typeorm_1.Index)(['status', 'createdAt'])
], Order);


/***/ }),

/***/ "./src/modules/orders/order.controller.ts":
/*!************************************************!*\
  !*** ./src/modules/orders/order.controller.ts ***!
  \************************************************/
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderController = void 0;
const _CurrentUser_1 = __webpack_require__(/*! @/common/decorators/@CurrentUser */ "./src/common/decorators/@CurrentUser.ts");
const _Roles_1 = __webpack_require__(/*! @/common/decorators/@Roles */ "./src/common/decorators/@Roles.ts");
const user_role_enum_1 = __webpack_require__(/*! @/common/enums/user-role.enum */ "./src/common/enums/user-role.enum.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! @/common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const roles_guard_1 = __webpack_require__(/*! @/common/guards/roles.guard */ "./src/common/guards/roles.guard.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const order_dto_1 = __webpack_require__(/*! ./dto/order.dto */ "./src/modules/orders/dto/order.dto.ts");
const order_service_1 = __webpack_require__(/*! ./order.service */ "./src/modules/orders/order.service.ts");
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    async confirmOrderFromQuote(quoteId, providerId) {
        return await this.orderService.createOrderFromQuoteConfirmation(quoteId, providerId);
    }
    async providerComplete(orderId, providerId) {
        return await this.orderService.providerCompleteOrder(orderId, providerId);
    }
    async customerComplete(orderId, customerId) {
        return await this.orderService.customerCompleteOrder(orderId, customerId);
    }
    async getMyOrders(userId, query) {
        return await this.orderService.getUserOrders(userId, query.status);
    }
    async getOrderStats(userId) {
        return await this.orderService.getOrderStats(userId);
    }
    async getOrder(orderId, userId) {
        return await this.orderService.getOrderById(orderId, userId);
    }
    async getOrderByNumber(orderNumber, userId) {
        return await this.orderService.getOrderByNumber(orderNumber, userId);
    }
    async cancelOrder(orderId, userId, dto) {
        return await this.orderService.cancelOrder(orderId, userId, dto);
    }
};
exports.OrderController = OrderController;
__decorate([
    (0, common_1.Post)('confirm-from-quote/:quoteId'),
    (0, _Roles_1.Roles)(user_role_enum_1.UserRole.PROVIDER),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: '[Provider] Xác nhận làm → Tạo order',
        description: 'Provider xác nhận sau khi customer nhấn đặt đơn. Order được tạo với trạng thái IN_PROGRESS'
    }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Order created' }),
    __param(0, (0, common_1.Param)('quoteId')),
    __param(1, (0, _CurrentUser_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "confirmOrderFromQuote", null);
__decorate([
    (0, common_1.Post)(':id/provider-complete'),
    (0, _Roles_1.Roles)(user_role_enum_1.UserRole.PROVIDER),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: '[Provider] Thợ xác nhận hoàn thành' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, _CurrentUser_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "providerComplete", null);
__decorate([
    (0, common_1.Post)(':id/customer-complete'),
    (0, _Roles_1.Roles)(user_role_enum_1.UserRole.CUSTOMER),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: '[Customer] Khách hàng xác nhận hoàn thành (finalize)',
        description: 'Khách xác nhận sau khi thợ đã hoàn thành → Order COMPLETED'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, _CurrentUser_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "customerComplete", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Lấy danh sách đơn hàng của tôi' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success' }),
    __param(0, (0, _CurrentUser_1.CurrentUser)('id')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof order_dto_1.GetOrdersQueryDto !== "undefined" && order_dto_1.GetOrdersQueryDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getMyOrders", null);
__decorate([
    (0, common_1.Get)('stats'),
    (0, swagger_1.ApiOperation)({ summary: 'Thống kê đơn hàng' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success' }),
    __param(0, (0, _CurrentUser_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrderStats", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Xem chi tiết đơn hàng' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, _CurrentUser_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrder", null);
__decorate([
    (0, common_1.Get)('number/:orderNumber'),
    (0, swagger_1.ApiOperation)({ summary: 'Xem đơn hàng theo mã số' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success' }),
    __param(0, (0, common_1.Param)('orderNumber')),
    __param(1, (0, _CurrentUser_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrderByNumber", null);
__decorate([
    (0, common_1.Post)(':id/cancel'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Hủy đơn hàng',
        description: 'Cả customer và provider đều có thể hủy. KHÔNG thể hủy sau 10 phút IN_PROGRESS'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Cancelled' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Cannot cancel after 10 minutes' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, _CurrentUser_1.CurrentUser)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, typeof (_c = typeof order_dto_1.CancelOrderDto !== "undefined" && order_dto_1.CancelOrderDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "cancelOrder", null);
exports.OrderController = OrderController = __decorate([
    (0, swagger_1.ApiTags)('Orders'),
    (0, common_1.Controller)('orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [typeof (_a = typeof order_service_1.OrderService !== "undefined" && order_service_1.OrderService) === "function" ? _a : Object])
], OrderController);


/***/ }),

/***/ "./src/modules/orders/order.service.ts":
/*!*********************************************!*\
  !*** ./src/modules/orders/order.service.ts ***!
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
var OrderService_1;
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderService = void 0;
const chat_service_1 = __webpack_require__(/*! @/modules/chat/chat.service */ "./src/modules/chat/chat.service.ts");
const notification_event_service_1 = __webpack_require__(/*! @/modules/notifications/services/notification-event.service */ "./src/modules/notifications/services/notification-event.service.ts");
const post_entity_1 = __webpack_require__(/*! @/modules/posts/entities/post.entity */ "./src/modules/posts/entities/post.entity.ts");
const quote_entity_1 = __webpack_require__(/*! @/modules/quotes/entities/quote.entity */ "./src/modules/quotes/entities/quote.entity.ts");
const quote_status_enum_1 = __webpack_require__(/*! @/modules/quotes/enums/quote-status.enum */ "./src/modules/quotes/enums/quote-status.enum.ts");
const quote_revision_service_1 = __webpack_require__(/*! @/modules/quotes/services/quote-revision.service */ "./src/modules/quotes/services/quote-revision.service.ts");
const quote_status_service_1 = __webpack_require__(/*! @/modules/quotes/services/quote-status.service */ "./src/modules/quotes/services/quote-status.service.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const order_entity_1 = __webpack_require__(/*! ./entities/order.entity */ "./src/modules/orders/entities/order.entity.ts");
let OrderService = OrderService_1 = class OrderService {
    constructor(orderRepo, quoteRepo, postRepo, notificationService, chatService, quoteStatusService, quoteRevisionService, dataSource) {
        this.orderRepo = orderRepo;
        this.quoteRepo = quoteRepo;
        this.postRepo = postRepo;
        this.notificationService = notificationService;
        this.chatService = chatService;
        this.quoteStatusService = quoteStatusService;
        this.quoteRevisionService = quoteRevisionService;
        this.dataSource = dataSource;
        this.logger = new common_1.Logger(OrderService_1.name);
    }
    async createOrderFromQuoteConfirmation(quoteId, providerId) {
        return await this.dataSource.transaction(async (manager) => {
            const quote = await manager.findOne(quote_entity_1.Quote, {
                where: { id: quoteId },
                relations: ['post', 'post.customer', 'provider', 'revisions'],
                lock: { mode: 'pessimistic_write' },
            });
            if (!quote) {
                throw new common_1.NotFoundException('Quote not found');
            }
            if (quote.status !== quote_status_enum_1.QuoteStatus.ORDER_REQUESTED) {
                throw new common_1.BadRequestException('Quote must be in ORDER_REQUESTED status. Customer needs to request order first.');
            }
            if (!quote.belongsTo(providerId)) {
                throw new common_1.ForbiddenException('You are not the provider of this quote');
            }
            const existing = await manager.findOne(order_entity_1.Order, {
                where: { quoteId },
            });
            if (existing) {
                this.logger.warn(`Order already exists for quote ${quoteId}`);
                return existing;
            }
            const currentRevision = await this.quoteRevisionService.getLatestRevision(quoteId);
            if (currentRevision.usedForOrderId) {
                throw new common_1.BadRequestException(`This quote revision has already been used for order ${currentRevision.usedForOrderId}`);
            }
            await this.quoteStatusService.confirmOrder(quote);
            const orderNumber = await this.generateOrderNumber(manager);
            const price = parseFloat(quote.price.toString());
            const serviceFee = this.calculateServiceFee(price);
            const totalAmount = price + serviceFee;
            const order = manager.create(order_entity_1.Order, {
                orderNumber,
                customerId: quote.post.customerId,
                providerId: quote.providerId,
                quoteId,
                title: quote.post.title,
                description: quote.description,
                price,
                serviceFee,
                totalAmount,
                status: order_entity_1.OrderStatus.IN_PROGRESS,
                paymentStatus: order_entity_1.PaymentStatus.PENDING,
                location: quote.post.location,
                scheduledAt: quote.post.desiredTime,
                estimatedDuration: quote.estimatedDuration,
                startedAt: new Date(),
            });
            const saved = await manager.save(order_entity_1.Order, order);
            await this.quoteRevisionService.markRevisionAsUsedForOrder(currentRevision.id, saved.id);
            await this.notificationService.notifyOrderCreated(saved.customerId, saved.providerId, saved.id, saved.title);
            await this.notificationService.notifyOrderInProgress(saved.customerId, saved.id, saved.title);
            this.logger.log(`Order created from quote confirmation: ${saved.id} ` +
                `(Quote: ${quoteId}, Revision: ${currentRevision.revisionNumber})`);
            return saved;
        });
    }
    async createDirectOrder(customerId, dto) {
        if (customerId === dto.providerId) {
            throw new common_1.BadRequestException('Cannot create order with yourself');
        }
        const orderNumber = await this.generateOrderNumber();
        const price = dto.price;
        const serviceFee = this.calculateServiceFee(price);
        const totalAmount = price + serviceFee;
        const order = this.orderRepo.create({
            orderNumber,
            customerId,
            providerId: dto.providerId,
            title: dto.title,
            description: dto.description,
            price,
            serviceFee,
            totalAmount,
            status: order_entity_1.OrderStatus.PENDING,
            paymentStatus: order_entity_1.PaymentStatus.PENDING,
            location: dto.location,
            scheduledAt: dto.scheduledAt,
            estimatedDuration: dto.estimatedDuration,
            notes: dto.notes,
        });
        const saved = await this.orderRepo.save(order);
        try {
            await this.chatService.createDirectConversation(customerId, dto.providerId);
        }
        catch {
            this.logger.warn(`Failed to create conversation for order ${saved.id}:`);
        }
        await this.notificationService.notifyOrderCreated(saved.providerId, saved.customerId, saved.id, saved.title);
        this.logger.log(`Direct order created: ${saved.id}`);
        return saved;
    }
    async startOrder(orderId, providerId) {
        const order = await this.orderRepo.findOne({
            where: { id: orderId },
            relations: ['quote'],
        });
        if (!order) {
            throw new common_1.NotFoundException('Order not found');
        }
        if (!order.belongsToProvider(providerId)) {
            throw new common_1.ForbiddenException('You are not the provider of this order');
        }
        if (order.quoteId) {
            throw new common_1.BadRequestException('Cannot manually start order created from quote. It starts automatically.');
        }
        if (!order.isPending()) {
            throw new common_1.BadRequestException('Order must be in pending status to start');
        }
        order.status = order_entity_1.OrderStatus.IN_PROGRESS;
        order.startedAt = new Date();
        const saved = await this.orderRepo.save(order);
        await this.notificationService.notifyOrderInProgress(order.customerId, order.id, order.title);
        this.logger.log(`Order started: ${orderId}`);
        return saved;
    }
    async providerCompleteOrder(orderId, providerId) {
        const order = await this.orderRepo.findOne({
            where: { id: orderId },
        });
        if (!order) {
            throw new common_1.NotFoundException('Order not found');
        }
        if (!order.belongsToProvider(providerId)) {
            throw new common_1.ForbiddenException('You are not the provider of this order');
        }
        if (!order.canProviderComplete()) {
            throw new common_1.BadRequestException('Cannot complete order. Order must be in progress and not already completed.');
        }
        order.providerCompletedAt = new Date();
        const saved = await this.orderRepo.save(order);
        await this.notificationService.notifyProviderCompleted(order.customerId, order.id, order.title);
        this.logger.log(`Provider completed order: ${orderId}`);
        return saved;
    }
    async customerCompleteOrder(orderId, customerId) {
        const order = await this.orderRepo.findOne({
            where: { id: orderId },
        });
        if (!order) {
            throw new common_1.NotFoundException('Order not found');
        }
        if (!order.belongsToCustomer(customerId)) {
            throw new common_1.ForbiddenException('You are not the customer of this order');
        }
        if (!order.canCustomerComplete()) {
            throw new common_1.BadRequestException('Provider must complete the order first, and order must be in progress');
        }
        order.customerCompletedAt = new Date();
        order.completedAt = new Date();
        order.status = order_entity_1.OrderStatus.COMPLETED;
        const saved = await this.orderRepo.save(order);
        await this.notificationService.notifyOrderCompleted(order.customerId, order.id, order.title, false);
        await this.notificationService.notifyOrderCompleted(order.providerId, order.id, order.title, true);
        this.logger.log(`Order completed: ${orderId}`);
        return saved;
    }
    async cancelOrder(orderId, userId, dto) {
        const order = await this.orderRepo.findOne({
            where: { id: orderId },
        });
        if (!order) {
            throw new common_1.NotFoundException('Order not found');
        }
        if (!order.isParticipant(userId)) {
            throw new common_1.ForbiddenException('You are not a participant in this order');
        }
        if (!order.canCancel()) {
            throw new common_1.BadRequestException('Cannot cancel order after 10 minutes from start time');
        }
        if (order.status === order_entity_1.OrderStatus.COMPLETED) {
            throw new common_1.BadRequestException('Cannot cancel completed order');
        }
        order.status = order_entity_1.OrderStatus.CANCELLED;
        order.cancelledAt = new Date();
        order.cancelledBy = userId;
        order.cancellationReason = dto.reason;
        const saved = await this.orderRepo.save(order);
        const otherUserId = userId === order.customerId ? order.providerId : order.customerId;
        await this.notificationService.notifyOrderCancelled(otherUserId, order.id, order.title, dto.reason || 'No reason provided');
        this.logger.log(`Order cancelled: ${orderId} by ${userId}`);
        return saved;
    }
    async getUserOrders(userId, status) {
        const queryBuilder = this.orderRepo
            .createQueryBuilder('order')
            .leftJoinAndSelect('order.customer', 'customer')
            .leftJoinAndSelect('order.provider', 'provider')
            .leftJoinAndSelect('order.quote', 'quote')
            .where('order.customerId = :userId OR order.providerId = :userId', { userId });
        if (status) {
            queryBuilder.andWhere('order.status = :status', { status });
        }
        return await queryBuilder
            .orderBy('order.createdAt', 'DESC')
            .getMany();
    }
    async getOrderById(orderId, userId) {
        const order = await this.orderRepo.findOne({
            where: { id: orderId },
            relations: ['customer', 'provider', 'quote', 'quote.revisions'],
        });
        if (!order) {
            throw new common_1.NotFoundException('Order not found');
        }
        if (!order.isParticipant(userId)) {
            throw new common_1.ForbiddenException('You are not a participant in this order');
        }
        return order;
    }
    async getOrderByNumber(orderNumber, userId) {
        const order = await this.orderRepo.findOne({
            where: { orderNumber },
            relations: ['customer', 'provider', 'quote'],
        });
        if (!order) {
            throw new common_1.NotFoundException('Order not found');
        }
        if (!order.isParticipant(userId)) {
            throw new common_1.ForbiddenException('You are not a participant in this order');
        }
        return order;
    }
    async getOrderStats(userId) {
        const orders = await this.getUserOrders(userId);
        return {
            total: orders.length,
            pending: orders.filter((o) => o.status === order_entity_1.OrderStatus.PENDING).length,
            inProgress: orders.filter((o) => o.status === order_entity_1.OrderStatus.IN_PROGRESS).length,
            completed: orders.filter((o) => o.status === order_entity_1.OrderStatus.COMPLETED).length,
            cancelled: orders.filter((o) => o.status === order_entity_1.OrderStatus.CANCELLED).length,
        };
    }
    async updatePaymentMethod(orderId, customerId, paymentMethod) {
        const order = await this.orderRepo.findOne({
            where: { id: orderId },
        });
        if (!order) {
            throw new common_1.NotFoundException('Order not found');
        }
        if (!order.belongsToCustomer(customerId)) {
            throw new common_1.ForbiddenException('You are not the customer of this order');
        }
        if (order.paymentStatus === order_entity_1.PaymentStatus.PAID) {
            throw new common_1.BadRequestException('Order is already paid');
        }
        if (order.status === order_entity_1.OrderStatus.CANCELLED) {
            throw new common_1.BadRequestException('Cannot update payment method of cancelled order');
        }
        order.paymentMethod = paymentMethod;
        const saved = await this.orderRepo.save(order);
        this.logger.log(`Payment method updated for order ${orderId}: ${paymentMethod}`);
        return saved;
    }
    async confirmPayment(orderId, customerId) {
        const order = await this.orderRepo.findOne({
            where: { id: orderId },
        });
        if (!order) {
            throw new common_1.NotFoundException('Order not found');
        }
        if (!order.belongsToCustomer(customerId)) {
            throw new common_1.ForbiddenException('You are not the customer of this order');
        }
        if (order.paymentStatus === order_entity_1.PaymentStatus.PAID) {
            throw new common_1.BadRequestException('Order is already paid');
        }
        if (order.status !== order_entity_1.OrderStatus.COMPLETED) {
            throw new common_1.BadRequestException('Can only pay for completed orders');
        }
        order.paymentStatus = order_entity_1.PaymentStatus.PAID;
        order.paidAt = new Date();
        const saved = await this.orderRepo.save(order);
        await this.notificationService.notifyPaymentReceived(order.providerId, order.totalAmount, order.id);
        this.logger.log(`Payment confirmed for order: ${orderId}`);
        return saved;
    }
    async updateNotes(orderId, userId, notes) {
        const order = await this.orderRepo.findOne({
            where: { id: orderId },
        });
        if (!order) {
            throw new common_1.NotFoundException('Order not found');
        }
        if (!order.isParticipant(userId)) {
            throw new common_1.ForbiddenException('You are not a participant in this order');
        }
        order.notes = notes;
        order.updatedAt = new Date();
        const saved = await this.orderRepo.save(order);
        this.logger.log(`Notes updated for order ${orderId}`);
        return saved;
    }
    async generateOrderNumber(manager) {
        const repo = manager ? manager.getRepository(order_entity_1.Order) : this.orderRepo;
        const date = new Date();
        const dateStr = date.toISOString().slice(0, 10).replace(/-/g, '');
        const count = await repo
            .createQueryBuilder('order')
            .where('order.order_number LIKE :prefix', {
            prefix: `ORD-${dateStr}-%`,
        })
            .getCount();
        const sequence = (count + 1).toString().padStart(4, '0');
        return `ORD-${dateStr}-${sequence}`;
    }
    calculateServiceFee(price) {
        const feeRate = 0.1;
        return Math.round(price * feeRate);
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = OrderService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __param(1, (0, typeorm_1.InjectRepository)(quote_entity_1.Quote)),
    __param(2, (0, typeorm_1.InjectRepository)(post_entity_1.PostCustomer)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object, typeof (_d = typeof notification_event_service_1.NotificationEventService !== "undefined" && notification_event_service_1.NotificationEventService) === "function" ? _d : Object, typeof (_e = typeof chat_service_1.ChatService !== "undefined" && chat_service_1.ChatService) === "function" ? _e : Object, typeof (_f = typeof quote_status_service_1.QuoteStatusService !== "undefined" && quote_status_service_1.QuoteStatusService) === "function" ? _f : Object, typeof (_g = typeof quote_revision_service_1.QuoteRevisionService !== "undefined" && quote_revision_service_1.QuoteRevisionService) === "function" ? _g : Object, typeof (_h = typeof typeorm_2.DataSource !== "undefined" && typeorm_2.DataSource) === "function" ? _h : Object])
], OrderService);


/***/ }),

/***/ "./src/modules/orders/orders.module.ts":
/*!*********************************************!*\
  !*** ./src/modules/orders/orders.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrdersModule = void 0;
const chat_module_1 = __webpack_require__(/*! @/modules/chat/chat.module */ "./src/modules/chat/chat.module.ts");
const notifications_module_1 = __webpack_require__(/*! @/modules/notifications/notifications.module */ "./src/modules/notifications/notifications.module.ts");
const post_entity_1 = __webpack_require__(/*! @/modules/posts/entities/post.entity */ "./src/modules/posts/entities/post.entity.ts");
const quote_entity_1 = __webpack_require__(/*! @/modules/quotes/entities/quote.entity */ "./src/modules/quotes/entities/quote.entity.ts");
const quotes_module_1 = __webpack_require__(/*! @/modules/quotes/quotes.module */ "./src/modules/quotes/quotes.module.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const order_entity_1 = __webpack_require__(/*! ./entities/order.entity */ "./src/modules/orders/entities/order.entity.ts");
const order_controller_1 = __webpack_require__(/*! ./order.controller */ "./src/modules/orders/order.controller.ts");
const order_service_1 = __webpack_require__(/*! ./order.service */ "./src/modules/orders/order.service.ts");
let OrdersModule = class OrdersModule {
};
exports.OrdersModule = OrdersModule;
exports.OrdersModule = OrdersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([order_entity_1.Order, quote_entity_1.Quote, post_entity_1.PostCustomer]),
            notifications_module_1.NotificationsModule,
            chat_module_1.ChatModule,
            quotes_module_1.QuoteModule
        ],
        controllers: [order_controller_1.OrderController],
        providers: [order_service_1.OrderService],
        exports: [order_service_1.OrderService],
    })
], OrdersModule);


/***/ }),

/***/ "./src/modules/posts/dtos/post.dto.ts":
/*!********************************************!*\
  !*** ./src/modules/posts/dtos/post.dto.ts ***!
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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeletePostResponseDto = exports.FeedResponseDto = exports.PostResponseDto = exports.GetFeedQueryDto = exports.UpdatePostDto = exports.CreatePostDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const post_status_enum_1 = __webpack_require__(/*! ../enums/post-status.enum */ "./src/modules/posts/enums/post-status.enum.ts");
class CreatePostDto {
}
exports.CreatePostDto = CreatePostDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Post title',
        example: 'Cần thợ sửa điện nước tại nhà'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreatePostDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Detailed description',
        example: 'Cần sửa chữa hệ thống điện và thay vòi nước bị hỏng'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Image URLs',
        type: [String],
        example: ['https://cohangxomdamdang/image1.jpg']
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.ArrayMaxSize)(10),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreatePostDto.prototype, "imageUrls", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Service location',
        example: 'Quận 1, TP.HCM'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Desired completion time',
        example: '2025-11-20T10:00:00Z'
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CreatePostDto.prototype, "desiredTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Budget in VND',
        example: 500000
    }),
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 2 }),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreatePostDto.prototype, "budget", void 0);
class UpdatePostDto extends (0, swagger_1.PartialType)(CreatePostDto) {
}
exports.UpdatePostDto = UpdatePostDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Post status',
        enum: post_status_enum_1.PostStatus,
        example: post_status_enum_1.PostStatus.OPEN
    }),
    (0, class_validator_1.IsEnum)(post_status_enum_1.PostStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_b = typeof post_status_enum_1.PostStatus !== "undefined" && post_status_enum_1.PostStatus) === "function" ? _b : Object)
], UpdatePostDto.prototype, "status", void 0);
class GetFeedQueryDto {
    constructor() {
        this.limit = 10;
    }
}
exports.GetFeedQueryDto = GetFeedQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Number of posts per page',
        example: 10,
        minimum: 1,
        maximum: 50
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], GetFeedQueryDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Cursor for pagination (ISO date)',
        example: '2025-11-13T10:00:00.000Z'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], GetFeedQueryDto.prototype, "cursor", void 0);
class PostResponseDto {
}
exports.PostResponseDto = PostResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'uuid-123' }),
    __metadata("design:type", String)
], PostResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Cần thợ sửa điện nước' }),
    __metadata("design:type", String)
], PostResponseDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Mô tả chi tiết...' }),
    __metadata("design:type", String)
], PostResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [String] }),
    __metadata("design:type", Array)
], PostResponseDto.prototype, "imageUrls", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Quận 1, TP.HCM' }),
    __metadata("design:type", String)
], PostResponseDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2025-11-20T10:00:00Z' }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], PostResponseDto.prototype, "desiredTime", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 500000 }),
    __metadata("design:type", Number)
], PostResponseDto.prototype, "budget", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: post_status_enum_1.PostStatus, example: post_status_enum_1.PostStatus.OPEN }),
    __metadata("design:type", typeof (_d = typeof post_status_enum_1.PostStatus !== "undefined" && post_status_enum_1.PostStatus) === "function" ? _d : Object)
], PostResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Customer information',
        type: 'object',
        properties: {
            customerId: { type: 'string' },
            fullName: { type: 'string' },
            avatarUrl: { type: 'string' },
        }
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], PostResponseDto.prototype, "customer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-11-13T10:00:00Z' }),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], PostResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-11-13T10:00:00Z' }),
    __metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], PostResponseDto.prototype, "updatedAt", void 0);
class FeedResponseDto {
}
exports.FeedResponseDto = FeedResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [PostResponseDto] }),
    __metadata("design:type", Array)
], FeedResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Next cursor for pagination',
        example: '2025-11-13T09:00:00.000Z'
    }),
    __metadata("design:type", String)
], FeedResponseDto.prototype, "nextCursor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10 }),
    __metadata("design:type", Number)
], FeedResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], FeedResponseDto.prototype, "hasMore", void 0);
class DeletePostResponseDto {
}
exports.DeletePostResponseDto = DeletePostResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], DeletePostResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Post deleted successfully' }),
    __metadata("design:type", String)
], DeletePostResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'uuid-123' }),
    __metadata("design:type", String)
], DeletePostResponseDto.prototype, "postId", void 0);


/***/ }),

/***/ "./src/modules/posts/entities/post.entity.ts":
/*!***************************************************!*\
  !*** ./src/modules/posts/entities/post.entity.ts ***!
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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostCustomer = void 0;
const post_status_enum_1 = __webpack_require__(/*! @/modules/posts/enums/post-status.enum */ "./src/modules/posts/enums/post-status.enum.ts");
const user_entity_1 = __webpack_require__(/*! @/modules/users/entities/user.entity */ "./src/modules/users/entities/user.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let PostCustomer = class PostCustomer {
    constructor() {
        this.imageUrls = [];
        this.status = post_status_enum_1.PostStatus.OPEN;
    }
    isOpen() {
        return this.status === post_status_enum_1.PostStatus.OPEN && !this.deletedAt;
    }
    isClosed() {
        return this.status === post_status_enum_1.PostStatus.CLOSED;
    }
    belongsTo(userId) {
        return this.customerId === userId;
    }
};
exports.PostCustomer = PostCustomer;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PostCustomer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], PostCustomer.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], PostCustomer.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'image_urls',
        type: 'text',
        array: true,
        nullable: true,
        default: '{}',
    }),
    __metadata("design:type", Array)
], PostCustomer.prototype, "imageUrls", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], PostCustomer.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp with time zone',
        name: 'desired_time',
        nullable: true
    }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], PostCustomer.prototype, "desiredTime", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'decimal',
        precision: 10,
        scale: 2,
        nullable: true
    }),
    __metadata("design:type", Number)
], PostCustomer.prototype, "budget", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: post_status_enum_1.PostStatus,
        default: post_status_enum_1.PostStatus.OPEN,
    }),
    __metadata("design:type", typeof (_b = typeof post_status_enum_1.PostStatus !== "undefined" && post_status_enum_1.PostStatus) === "function" ? _b : Object)
], PostCustomer.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'customer_id' }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], PostCustomer.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { eager: false, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'customer_id' }),
    __metadata("design:type", typeof (_c = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _c : Object)
], PostCustomer.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], PostCustomer.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], PostCustomer.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at' }),
    __metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], PostCustomer.prototype, "deletedAt", void 0);
exports.PostCustomer = PostCustomer = __decorate([
    (0, typeorm_1.Entity)('post_customer'),
    (0, typeorm_1.Index)(['status', 'deletedAt', 'createdAt']),
    (0, typeorm_1.Index)(['customerId', 'status'])
], PostCustomer);


/***/ }),

/***/ "./src/modules/posts/enums/post-status.enum.ts":
/*!*****************************************************!*\
  !*** ./src/modules/posts/enums/post-status.enum.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostStatus = void 0;
var PostStatus;
(function (PostStatus) {
    PostStatus["OPEN"] = "OPEN";
    PostStatus["CLOSED"] = "CLOSED";
})(PostStatus || (exports.PostStatus = PostStatus = {}));


/***/ }),

/***/ "./src/modules/posts/post.service.ts":
/*!*******************************************!*\
  !*** ./src/modules/posts/post.service.ts ***!
  \*******************************************/
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
var PostService_1;
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostService = void 0;
const upload_service_1 = __webpack_require__(/*! @/common/upload/upload.service */ "./src/common/upload/upload.service.ts");
const user_repository_1 = __webpack_require__(/*! @/modules/users/repositorys/user.repository */ "./src/modules/users/repositorys/user.repository.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const post_repository_1 = __webpack_require__(/*! ./repositories/post.repository */ "./src/modules/posts/repositories/post.repository.ts");
const post_business_service_1 = __webpack_require__(/*! ./services/post-business.service */ "./src/modules/posts/services/post-business.service.ts");
const post_mapper_service_1 = __webpack_require__(/*! ./services/post-mapper.service */ "./src/modules/posts/services/post-mapper.service.ts");
const post_validation_service_1 = __webpack_require__(/*! ./services/post-validation.service */ "./src/modules/posts/services/post-validation.service.ts");
let PostService = PostService_1 = class PostService {
    constructor(postRepository, userRepository, validationService, mapperService, businessService, uploadService) {
        this.postRepository = postRepository;
        this.userRepository = userRepository;
        this.validationService = validationService;
        this.mapperService = mapperService;
        this.businessService = businessService;
        this.uploadService = uploadService;
        this.logger = new common_1.Logger(PostService_1.name);
    }
    async createWithFiles(dto, files, jwtUser, context) {
        if (files?.length > 0) {
            const { succeeded, failed } = await this.uploadService.uploadMultiple(files, 'posts');
            if (failed.length > 0) {
                this.logger.warn(`Some images failed to upload: ${failed.map(f => f.originalName).join(', ')}`);
            }
            dto.imageUrls = succeeded.map(r => r.publicUrl);
        }
        return this.create(dto, jwtUser, context);
    }
    async create(dto, jwtUser, context) {
        this.logger.log(`Creating post for user: ${jwtUser.id}`);
        await this.validationService.validateUserExists(jwtUser.id);
        await this.validationService.validateAndModeratePostContent(dto, jwtUser.id, context);
        const post = await this.businessService.createPost(dto, jwtUser.id);
        this.logger.log(`Post created successfully: ${post.id}`);
        return this.mapperService.toResponseDto(post);
    }
    async getFeed(limit = 10, cursor) {
        this.logger.log(`Fetching public feed - limit: ${limit}, cursor: ${cursor}`);
        const parsedCursor = this.validationService.validateAndParseCursor(cursor);
        const { posts, hasMore, nextCursor } = await this.businessService.getPublicFeed(limit, parsedCursor);
        return {
            data: posts.map(post => this.mapperService.toResponseDto(post)),
            nextCursor,
            total: posts.length,
            hasMore,
        };
    }
    async getById(id) {
        this.logger.log(`Fetching post by ID: ${id}`);
        const post = await this.validationService.validatePostExists(id);
        return this.mapperService.toResponseDto(post);
    }
    async update(id, dto, jwtUser, context) {
        this.logger.log(`Updating post: ${id} by user: ${jwtUser.id}`);
        const post = await this.validationService.validatePostOwnership(id);
        this.validationService.validatePostUpdateRules(post, dto);
        await this.validationService.validateAndModeratePostUpdate(post, dto, jwtUser.id, context);
        const updatedPost = await this.businessService.updatePost(post, dto);
        this.logger.log(`Post updated successfully: ${updatedPost.id}`);
        return this.mapperService.toResponseDto(updatedPost);
    }
    async delete(id, jwtUser) {
        this.logger.log(`Deleting post: ${id} by user: ${jwtUser.id}`);
        await this.validationService.validatePostOwnership(id);
        await this.businessService.deletePost(id);
        this.logger.log(`Post deleted successfully: ${id}`);
        return {
            success: true,
            message: 'Post deleted successfully',
            postId: id,
        };
    }
    async close(id, jwtUser) {
        this.logger.log(`Closing post: ${id} by user: ${jwtUser.id}`);
        const post = await this.validationService.validatePostOwnership(id);
        this.validationService.validatePostNotClosed(post);
        const closedPost = await this.businessService.closePost(post);
        this.logger.log(`Post closed successfully: ${closedPost.id}`);
        return this.mapperService.toResponseDto(closedPost);
    }
    async getMyPosts(jwtUser, limit = 10, cursor) {
        this.logger.log(`Fetching posts for user: ${jwtUser.id}`);
        const parsedCursor = this.validationService.validateAndParseCursor(cursor);
        const { posts, hasMore, nextCursor } = await this.businessService.getCustomerPosts(jwtUser.id, limit, parsedCursor);
        return {
            data: posts.map(post => this.mapperService.toResponseDto(post)),
            nextCursor,
            total: posts.length,
            hasMore,
        };
    }
    async createPost(providerId, jwtUser, dto, context) {
        this.logger.log(`Creating post for user to provider: ${jwtUser.id}`);
        await this.validationService.validateUserExists(jwtUser.id);
        await this.validationService.validateAndModeratePostContent(dto, jwtUser.id, context);
        const post = await this.businessService.createPost(dto, jwtUser.id);
        this.logger.log(`Post created successfully: ${post.id}`);
        return this.mapperService.toResponseDto(post);
    }
};
exports.PostService = PostService;
exports.PostService = PostService = PostService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof post_repository_1.PostRepository !== "undefined" && post_repository_1.PostRepository) === "function" ? _a : Object, typeof (_b = typeof user_repository_1.UserRepository !== "undefined" && user_repository_1.UserRepository) === "function" ? _b : Object, typeof (_c = typeof post_validation_service_1.PostValidationService !== "undefined" && post_validation_service_1.PostValidationService) === "function" ? _c : Object, typeof (_d = typeof post_mapper_service_1.PostMapperService !== "undefined" && post_mapper_service_1.PostMapperService) === "function" ? _d : Object, typeof (_e = typeof post_business_service_1.PostBusinessService !== "undefined" && post_business_service_1.PostBusinessService) === "function" ? _e : Object, typeof (_f = typeof upload_service_1.UploadService !== "undefined" && upload_service_1.UploadService) === "function" ? _f : Object])
], PostService);


/***/ }),

/***/ "./src/modules/posts/posts.controller.ts":
/*!***********************************************!*\
  !*** ./src/modules/posts/posts.controller.ts ***!
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostController = void 0;
const _CurrentUser_1 = __webpack_require__(/*! @/common/decorators/@CurrentUser */ "./src/common/decorators/@CurrentUser.ts");
const _Roles_1 = __webpack_require__(/*! @/common/decorators/@Roles */ "./src/common/decorators/@Roles.ts");
const user_role_enum_1 = __webpack_require__(/*! @/common/enums/user-role.enum */ "./src/common/enums/user-role.enum.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! @/common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const roles_guard_1 = __webpack_require__(/*! @/common/guards/roles.guard */ "./src/common/guards/roles.guard.ts");
const jwt_payload_interface_1 = __webpack_require__(/*! @/modules/auth/interfaces/jwt-payload.interface */ "./src/modules/auth/interfaces/jwt-payload.interface.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const platform_express_1 = __webpack_require__(/*! @nestjs/platform-express */ "@nestjs/platform-express");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const post_dto_1 = __webpack_require__(/*! ./dtos/post.dto */ "./src/modules/posts/dtos/post.dto.ts");
const post_service_1 = __webpack_require__(/*! ./post.service */ "./src/modules/posts/post.service.ts");
let PostController = class PostController {
    constructor(postService) {
        this.postService = postService;
    }
    getRequestContext(ipAddress, userAgent) {
        return {
            ipAddress: ipAddress || 'unknown',
            userAgent: userAgent || 'unknown',
        };
    }
    async getFeed(query) {
        return await this.postService.getFeed(query.limit, query.cursor);
    }
    async getPostById(id) {
        return await this.postService.getById(id);
    }
    async createPost(files, dto, user, ipAddress, userAgent) {
        const context = this.getRequestContext(ipAddress, userAgent);
        return await this.postService.createWithFiles(dto, files, user, context);
    }
    async updatePost(id, dto, user, ipAddress, userAgent) {
        const context = this.getRequestContext(ipAddress, userAgent);
        return await this.postService.update(id, dto, user, context);
    }
    async deletePost(id, user) {
        return await this.postService.delete(id, user);
    }
    async closePost(id, user) {
        return await this.postService.close(id, user);
    }
    async getMyPosts(query, user) {
        return await this.postService.getMyPosts(user, query.limit, query.cursor);
    }
};
exports.PostController = PostController;
__decorate([
    (0, common_2.Get)('feed'),
    (0, common_2.HttpCode)(common_2.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Get public feed of open posts',
        description: 'Retrieve paginated list of all open posts from customers. Uses cursor-based pagination for infinite scroll.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_2.HttpStatus.OK,
        description: 'Feed retrieved successfully',
        type: post_dto_1.FeedResponseDto,
    }),
    (0, swagger_1.ApiQuery)({ type: post_dto_1.GetFeedQueryDto }),
    (0, swagger_1.ApiResponse)({
        status: common_2.HttpStatus.BAD_REQUEST,
        description: 'Invalid cursor format',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_2.HttpStatus.INTERNAL_SERVER_ERROR,
        description: 'Failed to fetch feed',
    }),
    __param(0, (0, common_2.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof post_dto_1.GetFeedQueryDto !== "undefined" && post_dto_1.GetFeedQueryDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], PostController.prototype, "getFeed", null);
__decorate([
    (0, common_2.Get)(':id'),
    (0, common_2.HttpCode)(common_2.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Get post by ID',
        description: 'Retrieve detailed information of a specific post',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_2.HttpStatus.OK,
        description: 'Post retrieved successfully',
        type: post_dto_1.PostResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_2.HttpStatus.NOT_FOUND,
        description: 'Post not found',
    }),
    __param(0, (0, common_2.Param)('id', common_2.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], PostController.prototype, "getPostById", null);
__decorate([
    (0, common_2.Post)(),
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, _Roles_1.Roles)(user_role_enum_1.UserRole.CUSTOMER),
    (0, common_2.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files', 10)),
    (0, common_2.HttpCode)(common_2.HttpStatus.CREATED),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Create new post',
        description: 'Create a new service request post (Customer only)',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_2.HttpStatus.CREATED,
        description: 'Post created successfully',
        type: post_dto_1.PostResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_2.HttpStatus.UNAUTHORIZED,
        description: 'Unauthorized - Invalid or missing token',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_2.HttpStatus.FORBIDDEN,
        description: 'Forbidden - Customer role required',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_2.HttpStatus.BAD_REQUEST,
        description: 'Invalid input data',
    }),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_2.Body)()),
    __param(2, (0, _CurrentUser_1.CurrentUser)()),
    __param(3, (0, common_2.Ip)()),
    __param(4, (0, common_2.Headers)('user-agent')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, typeof (_e = typeof post_dto_1.CreatePostDto !== "undefined" && post_dto_1.CreatePostDto) === "function" ? _e : Object, typeof (_f = typeof jwt_payload_interface_1.JwtPayload !== "undefined" && jwt_payload_interface_1.JwtPayload) === "function" ? _f : Object, String, String]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], PostController.prototype, "createPost", null);
__decorate([
    (0, common_2.Patch)(':id'),
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, _Roles_1.Roles)(user_role_enum_1.UserRole.CUSTOMER),
    (0, common_2.HttpCode)(common_2.HttpStatus.OK),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Update post',
        description: 'Update an existing post. Only the post owner can update it.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_2.HttpStatus.OK,
        description: 'Post updated successfully',
        type: post_dto_1.PostResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_2.HttpStatus.NOT_FOUND,
        description: 'Post not found or you do not have permission',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_2.HttpStatus.FORBIDDEN,
        description: 'Cannot update a closed post',
    }),
    __param(0, (0, common_2.Param)('id', common_2.ParseUUIDPipe)),
    __param(1, (0, common_2.Body)()),
    __param(2, (0, _CurrentUser_1.CurrentUser)()),
    __param(3, (0, common_2.Ip)()),
    __param(4, (0, common_2.Headers)('user-agent')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_h = typeof post_dto_1.UpdatePostDto !== "undefined" && post_dto_1.UpdatePostDto) === "function" ? _h : Object, typeof (_j = typeof jwt_payload_interface_1.JwtPayload !== "undefined" && jwt_payload_interface_1.JwtPayload) === "function" ? _j : Object, String, String]),
    __metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], PostController.prototype, "updatePost", null);
__decorate([
    (0, common_2.Delete)(':id'),
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, _Roles_1.Roles)(user_role_enum_1.UserRole.CUSTOMER),
    (0, common_2.HttpCode)(common_2.HttpStatus.OK),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Delete post',
        description: 'Soft delete a post. Only the post owner can delete it.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_2.HttpStatus.OK,
        description: 'Post deleted successfully',
        type: post_dto_1.DeletePostResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_2.HttpStatus.NOT_FOUND,
        description: 'Post not found or you do not have permission',
    }),
    __param(0, (0, common_2.Param)('id', common_2.ParseUUIDPipe)),
    __param(1, (0, _CurrentUser_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_l = typeof jwt_payload_interface_1.JwtPayload !== "undefined" && jwt_payload_interface_1.JwtPayload) === "function" ? _l : Object]),
    __metadata("design:returntype", typeof (_m = typeof Promise !== "undefined" && Promise) === "function" ? _m : Object)
], PostController.prototype, "deletePost", null);
__decorate([
    (0, common_2.Patch)(':id/close'),
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, _Roles_1.Roles)(user_role_enum_1.UserRole.CUSTOMER),
    (0, common_2.HttpCode)(common_2.HttpStatus.OK),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Close post',
        description: 'Change post status to CLOSED. Only the post owner can close it.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_2.HttpStatus.OK,
        description: 'Post closed successfully',
        type: post_dto_1.PostResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_2.HttpStatus.NOT_FOUND,
        description: 'Post not found or you do not have permission',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_2.HttpStatus.FORBIDDEN,
        description: 'Post is already closed',
    }),
    __param(0, (0, common_2.Param)('id', common_2.ParseUUIDPipe)),
    __param(1, (0, _CurrentUser_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_o = typeof jwt_payload_interface_1.JwtPayload !== "undefined" && jwt_payload_interface_1.JwtPayload) === "function" ? _o : Object]),
    __metadata("design:returntype", typeof (_p = typeof Promise !== "undefined" && Promise) === "function" ? _p : Object)
], PostController.prototype, "closePost", null);
__decorate([
    (0, common_2.Get)('my/posts'),
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, _Roles_1.Roles)(user_role_enum_1.UserRole.CUSTOMER),
    (0, common_2.HttpCode)(common_2.HttpStatus.OK),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Get my posts',
        description: 'Retrieve all posts created by the current customer',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_2.HttpStatus.OK,
        description: 'Posts retrieved successfully',
        type: post_dto_1.FeedResponseDto,
    }),
    (0, swagger_1.ApiQuery)({ type: post_dto_1.GetFeedQueryDto }),
    __param(0, (0, common_2.Query)()),
    __param(1, (0, _CurrentUser_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_q = typeof post_dto_1.GetFeedQueryDto !== "undefined" && post_dto_1.GetFeedQueryDto) === "function" ? _q : Object, typeof (_r = typeof jwt_payload_interface_1.JwtPayload !== "undefined" && jwt_payload_interface_1.JwtPayload) === "function" ? _r : Object]),
    __metadata("design:returntype", typeof (_s = typeof Promise !== "undefined" && Promise) === "function" ? _s : Object)
], PostController.prototype, "getMyPosts", null);
exports.PostController = PostController = __decorate([
    (0, swagger_1.ApiTags)('Posts'),
    (0, common_2.Controller)('posts'),
    __metadata("design:paramtypes", [typeof (_a = typeof post_service_1.PostService !== "undefined" && post_service_1.PostService) === "function" ? _a : Object])
], PostController);


/***/ }),

/***/ "./src/modules/posts/posts.module.ts":
/*!*******************************************!*\
  !*** ./src/modules/posts/posts.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostsModule = void 0;
const moderation_module_1 = __webpack_require__(/*! @/modules/moderation/moderation.module */ "./src/modules/moderation/moderation.module.ts");
const users_module_1 = __webpack_require__(/*! @/modules/users/users.module */ "./src/modules/users/users.module.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const post_entity_1 = __webpack_require__(/*! ./entities/post.entity */ "./src/modules/posts/entities/post.entity.ts");
const post_service_1 = __webpack_require__(/*! ./post.service */ "./src/modules/posts/post.service.ts");
const posts_controller_1 = __webpack_require__(/*! ./posts.controller */ "./src/modules/posts/posts.controller.ts");
const post_repository_1 = __webpack_require__(/*! ./repositories/post.repository */ "./src/modules/posts/repositories/post.repository.ts");
const post_business_service_1 = __webpack_require__(/*! ./services/post-business.service */ "./src/modules/posts/services/post-business.service.ts");
const post_mapper_service_1 = __webpack_require__(/*! ./services/post-mapper.service */ "./src/modules/posts/services/post-mapper.service.ts");
const post_validation_service_1 = __webpack_require__(/*! ./services/post-validation.service */ "./src/modules/posts/services/post-validation.service.ts");
let PostsModule = class PostsModule {
};
exports.PostsModule = PostsModule;
exports.PostsModule = PostsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([post_entity_1.PostCustomer]),
            users_module_1.UsersModule,
            moderation_module_1.ModerationModule
        ],
        controllers: [posts_controller_1.PostController],
        providers: [
            post_service_1.PostService,
            post_validation_service_1.PostValidationService,
            post_business_service_1.PostBusinessService,
            post_mapper_service_1.PostMapperService,
            post_repository_1.PostRepository,
        ],
        exports: [
            post_service_1.PostService,
            post_repository_1.PostRepository,
            post_validation_service_1.PostValidationService,
            post_business_service_1.PostBusinessService,
            post_mapper_service_1.PostMapperService,
        ],
    })
], PostsModule);


/***/ }),

/***/ "./src/modules/posts/repositories/post.repository.ts":
/*!***********************************************************!*\
  !*** ./src/modules/posts/repositories/post.repository.ts ***!
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var PostRepository_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const post_entity_1 = __webpack_require__(/*! ../entities/post.entity */ "./src/modules/posts/entities/post.entity.ts");
const post_status_enum_1 = __webpack_require__(/*! ../enums/post-status.enum */ "./src/modules/posts/enums/post-status.enum.ts");
let PostRepository = PostRepository_1 = class PostRepository {
    constructor(repository) {
        this.repository = repository;
        this.logger = new common_1.Logger(PostRepository_1.name);
    }
    getRepository(manager) {
        return manager ? manager.getRepository(post_entity_1.PostCustomer) : this.repository;
    }
    async createPost(data, manager) {
        const repo = this.getRepository(manager);
        const entity = repo.create(data);
        const saved = await repo.save(entity);
        this.logger.log(`Post created: ${saved.id}`);
        return await this.findById(saved.id, manager);
    }
    async findByIdWithRelations(id, manager) {
        return this.getRepository(manager).findOne({
            where: { id },
            relations: {
                customer: {
                    profile: true,
                },
            },
        });
    }
    async findPostsForFeed(limit = 20, offset = 0, manager) {
        return this.getRepository(manager).createQueryBuilder('post')
            .leftJoinAndSelect('post.customer', 'customer')
            .leftJoinAndSelect('customer.profile', 'profile')
            .where('post.deleted_at IS NULL')
            .orderBy('post.created_at', 'DESC')
            .take(limit)
            .skip(offset)
            .getMany();
    }
    async updatePost(id, data, manager) {
        const repo = this.getRepository(manager);
        await repo.update(id, data);
        this.logger.log(`Post updated: ${id}`);
        const updated = await this.findById(id, manager);
        if (!updated) {
            throw new Error(`Post ${id} not found after update`);
        }
        return updated;
    }
    async findById(id, manager) {
        return await this.getRepository(manager).findOne({
            where: { id, deletedAt: (0, typeorm_2.IsNull)() },
            relations: {
                customer: {
                    profile: true
                }
            },
        });
    }
    async findByIdAndCustomer(id, customerId, manager) {
        return await this.getRepository(manager).findOne({
            where: {
                id,
                customerId,
                deletedAt: (0, typeorm_2.IsNull)(),
            },
            relations: {
                customer: {
                    profile: true
                }
            },
        });
    }
    async findPublicPosts(limit, cursor, manager) {
        const qb = this.getRepository(manager)
            .createQueryBuilder('post')
            .leftJoinAndSelect('post.customer', 'customer')
            .leftJoinAndSelect('customer.profile', 'profile')
            .where('post.status = :status', { status: post_status_enum_1.PostStatus.OPEN })
            .andWhere('post.deletedAt IS NULL')
            .orderBy('post.createdAt', 'DESC')
            .take(limit);
        if (cursor) {
            qb.andWhere('post.createdAt < :cursor', { cursor });
        }
        return await qb.getMany();
    }
    async findCustomerPosts(customerId, limit, cursor, manager) {
        const qb = this.getRepository(manager)
            .createQueryBuilder('post')
            .leftJoinAndSelect('post.customer', 'customer')
            .leftJoinAndSelect('customer.profile', 'profile')
            .where('post.customerId = :customerId', { customerId })
            .andWhere('post.deletedAt IS NULL')
            .orderBy('post.createdAt', 'DESC')
            .take(limit);
        if (cursor) {
            qb.andWhere('post.createdAt < :cursor', { cursor });
        }
        return await qb.getMany();
    }
    async softDelete(id, manager) {
        await this.getRepository(manager).softDelete(id);
        this.logger.log(`Post soft deleted: ${id}`);
    }
    async closePost(post, manager) {
        const repo = this.getRepository(manager);
        post.status = post_status_enum_1.PostStatus.CLOSED;
        const closed = await repo.save(post);
        this.logger.log(`Post closed: ${closed.id}`);
        return closed;
    }
    async countOpenPostsByCustomer(customerId, manager) {
        return await this.getRepository(manager).count({
            where: {
                customerId,
                status: post_status_enum_1.PostStatus.OPEN,
                deletedAt: (0, typeorm_2.IsNull)(),
            },
        });
    }
};
exports.PostRepository = PostRepository;
exports.PostRepository = PostRepository = PostRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.PostCustomer)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], PostRepository);


/***/ }),

/***/ "./src/modules/posts/services/post-business.service.ts":
/*!*************************************************************!*\
  !*** ./src/modules/posts/services/post-business.service.ts ***!
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
var PostBusinessService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostBusinessService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const post_repository_1 = __webpack_require__(/*! ../repositories/post.repository */ "./src/modules/posts/repositories/post.repository.ts");
let PostBusinessService = PostBusinessService_1 = class PostBusinessService {
    constructor(postRepository) {
        this.postRepository = postRepository;
        this.logger = new common_1.Logger(PostBusinessService_1.name);
    }
    async createPost(dto, customerId) {
        const postData = {
            ...dto,
            customerId,
        };
        return await this.postRepository.createPost(postData);
    }
    async getPublicFeed(limit, cursor) {
        const posts = await this.postRepository.findPublicPosts(limit + 1, cursor);
        const hasMore = posts.length > limit;
        const data = hasMore ? posts.slice(0, limit) : posts;
        const nextCursor = hasMore && data.length > 0
            ? data[data.length - 1].createdAt.toISOString()
            : null;
        return { posts: data, hasMore, nextCursor };
    }
    async updatePost(post, dto) {
        const updateData = {
            ...dto,
            updatedAt: new Date(),
        };
        return await this.postRepository.updatePost(post.id, updateData);
    }
    async deletePost(postId) {
        await this.postRepository.softDelete(postId);
    }
    async closePost(post) {
        return await this.postRepository.closePost(post);
    }
    async getCustomerPosts(customerId, limit, cursor) {
        const posts = await this.postRepository.findCustomerPosts(customerId, limit + 1, cursor);
        const hasMore = posts.length > limit;
        const data = hasMore ? posts.slice(0, limit) : posts;
        const nextCursor = hasMore && data.length > 0
            ? data[data.length - 1].createdAt.toISOString()
            : null;
        return { posts: data, hasMore, nextCursor };
    }
};
exports.PostBusinessService = PostBusinessService;
exports.PostBusinessService = PostBusinessService = PostBusinessService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof post_repository_1.PostRepository !== "undefined" && post_repository_1.PostRepository) === "function" ? _a : Object])
], PostBusinessService);


/***/ }),

/***/ "./src/modules/posts/services/post-mapper.service.ts":
/*!***********************************************************!*\
  !*** ./src/modules/posts/services/post-mapper.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostMapperService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let PostMapperService = class PostMapperService {
    toResponseDto(post) {
        return {
            id: post.id,
            title: post.title,
            description: post.description,
            imageUrls: post.imageUrls,
            location: post.location,
            desiredTime: post.desiredTime,
            budget: post.budget ? Number(post.budget) : undefined,
            status: post.status,
            customer: {
                customerId: post.customer.id,
                fullName: post.customer.profile?.fullName ?? null,
                avatarUrl: post.customer.profile?.avatarUrl ?? null,
            },
            createdAt: post.createdAt,
            updatedAt: post.updatedAt,
        };
    }
    toResponseDtoArray(posts) {
        return posts.map(post => this.toResponseDto(post));
    }
};
exports.PostMapperService = PostMapperService;
exports.PostMapperService = PostMapperService = __decorate([
    (0, common_1.Injectable)()
], PostMapperService);


/***/ }),

/***/ "./src/modules/posts/services/post-validation.service.ts":
/*!***************************************************************!*\
  !*** ./src/modules/posts/services/post-validation.service.ts ***!
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostValidationService = void 0;
const moderation_service_1 = __webpack_require__(/*! @/modules/moderation/moderation.service */ "./src/modules/moderation/moderation.service.ts");
const user_repository_1 = __webpack_require__(/*! @/modules/users/repositorys/user.repository */ "./src/modules/users/repositorys/user.repository.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const post_repository_1 = __webpack_require__(/*! ../repositories/post.repository */ "./src/modules/posts/repositories/post.repository.ts");
let PostValidationService = class PostValidationService {
    constructor(postRepository, userRepository, moderationService) {
        this.postRepository = postRepository;
        this.userRepository = userRepository;
        this.moderationService = moderationService;
    }
    async validateUserExists(userId) {
        const user = await this.userRepository.findById(userId);
        if (!user) {
            throw new common_1.NotFoundException({
                code: 'USER_NOT_FOUND',
                message: 'Customer not found',
            });
        }
    }
    async validatePostExists(postId) {
        const post = await this.postRepository.findByIdWithRelations(postId);
        if (!post) {
            throw new common_1.NotFoundException({
                code: 'POST_NOT_FOUND',
                message: 'Post not found',
            });
        }
        return post;
    }
    async validatePostOwnership(postId) {
        const post = await this.postRepository.findByIdWithRelations(postId);
        if (!post) {
            throw new common_1.NotFoundException({
                code: 'POST_NOT_FOUND',
                message: 'Post not found or you do not have permission to access it',
            });
        }
        return post;
    }
    validateAndParseCursor(cursor) {
        if (!cursor) {
            return undefined;
        }
        const parsedCursor = new Date(cursor);
        if (isNaN(parsedCursor.getTime())) {
            throw new common_1.BadRequestException({
                code: 'INVALID_CURSOR',
                message: 'Invalid cursor format. Expected ISO date string',
            });
        }
        return parsedCursor;
    }
    validatePostNotClosed(post) {
        if (post.isClosed()) {
            throw new common_1.ForbiddenException({
                code: 'POST_ALREADY_CLOSED',
                message: 'Post is already closed',
            });
        }
    }
    validatePostUpdateRules(post, dto) {
        if (post.isClosed() && dto.title) {
            throw new common_1.ForbiddenException({
                code: 'POST_CLOSED',
                message: 'Cannot update content of a closed post',
            });
        }
    }
    async validateAndModeratePostContent(dto, userId, context) {
        const moderationResult = await this.moderationService.moderatePostContent(dto.title, dto.description, userId, {
            ...context,
            entityType: 'post',
        });
        if (!moderationResult.isAllowed) {
            const violationMessages = moderationResult.violations
                .map(v => `- ${this.getViolationTypeVietnamese(v.type)}: ${v.reason}`)
                .join('\n');
            throw new common_1.ForbiddenException({
                code: 'CONTENT_MODERATION_FAILED',
                message: 'Your content violates our community guidelines',
                userMessage: `Nội dung của bạn vi phạm quy định cộng đồng:\n${violationMessages}\n\nVui lòng chỉnh sửa và thử lại.`,
                details: {
                    violations: moderationResult.violations,
                    suggestions: moderationResult.moderatedContent,
                },
            });
        }
    }
    async validateAndModeratePostUpdate(post, dto, userId, context) {
        const isContentUpdate = dto.title || dto.description;
        if (!isContentUpdate) {
            return;
        }
        const title = dto.title || post.title;
        const description = dto.description || post.description;
        const moderationResult = await this.moderationService.moderatePostContent(title, description, userId, {
            ...context,
            entityType: 'post_update',
            entityId: post.id,
        });
        if (!moderationResult.isAllowed) {
            const violationMessages = moderationResult.violations
                .map(v => `- ${this.getViolationTypeVietnamese(v.type)}: ${v.reason}`)
                .join('\n');
            throw new common_1.ForbiddenException({
                code: 'CONTENT_MODERATION_FAILED',
                message: 'Your updated content violates our community guidelines',
                userMessage: `Nội dung cập nhật vi phạm quy định cộng đồng:\n${violationMessages}\n\nVui lòng chỉnh sửa và thử lại.`,
                details: {
                    violations: moderationResult.violations,
                    suggestions: moderationResult.moderatedContent,
                },
            });
        }
    }
    getViolationTypeVietnamese(type) {
        const mapping = {
            'SEXUAL': 'Nội dung tình dục',
            'VIOLENCE': 'Nội dung bạo lực',
            'HATE': 'Ngôn từ thù hận',
            'HARASSMENT': 'Quấy rối',
            'SELF_HARM': 'Tự gây hại',
            'ILLEGAL': 'Nội dung bất hợp pháp',
        };
        return mapping[type] || type;
    }
};
exports.PostValidationService = PostValidationService;
exports.PostValidationService = PostValidationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof post_repository_1.PostRepository !== "undefined" && post_repository_1.PostRepository) === "function" ? _a : Object, typeof (_b = typeof user_repository_1.UserRepository !== "undefined" && user_repository_1.UserRepository) === "function" ? _b : Object, typeof (_c = typeof moderation_service_1.ModerationService !== "undefined" && moderation_service_1.ModerationService) === "function" ? _c : Object])
], PostValidationService);


/***/ }),

/***/ "./src/modules/profile/controllers/profile.controller.ts":
/*!***************************************************************!*\
  !*** ./src/modules/profile/controllers/profile.controller.ts ***!
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfileController = void 0;
const _CurrentUser_1 = __webpack_require__(/*! @/common/decorators/@CurrentUser */ "./src/common/decorators/@CurrentUser.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! @/common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const jwt_payload_interface_1 = __webpack_require__(/*! @/modules/auth/interfaces/jwt-payload.interface */ "./src/modules/auth/interfaces/jwt-payload.interface.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const platform_express_1 = __webpack_require__(/*! @nestjs/platform-express */ "@nestjs/platform-express");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const profile_dto_1 = __webpack_require__(/*! ../dtos/profile.dto */ "./src/modules/profile/dtos/profile.dto.ts");
const profile_service_1 = __webpack_require__(/*! ../services/profile.service */ "./src/modules/profile/services/profile.service.ts");
let ProfileController = class ProfileController {
    constructor(profileService) {
        this.profileService = profileService;
    }
    async getMyProfile(user) {
        return this.profileService.getMyProfile(user);
    }
    async updateMyProfile(dto, user) {
        return this.profileService.updateProfile(user, dto);
    }
    async updateContact(dto, user) {
        return this.profileService.updateContact(user, dto);
    }
    async changeDisplayName(dto, user) {
        return this.profileService.changeDisplayName(user, dto);
    }
    async updateAvatar(file, user) {
        return this.profileService.updateAvatarFile(user, file);
    }
    async deleteAccount(user) {
        return this.profileService.deleteAccount(user);
    }
    async getPublicProfile(userId) {
        return this.profileService.getPublicProfile(userId);
    }
    async searchProfiles(query) {
        const { searchTerm = '', limit = 20, offset = 0 } = query;
        const result = await this.profileService.searchProfiles(searchTerm, limit, offset);
        return {
            profiles: result.profiles,
            total: result.total,
            count: result.profiles.length,
        };
    }
};
exports.ProfileController = ProfileController;
__decorate([
    (0, common_1.Get)('me'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Get my profile',
        description: 'Retrieve the authenticated user\'s complete profile information including private data',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Profile retrieved successfully',
        type: profile_dto_1.ProfileResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: 'Unauthorized - Invalid or missing token',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'User not found',
    }),
    __param(0, (0, _CurrentUser_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof jwt_payload_interface_1.JwtPayload !== "undefined" && jwt_payload_interface_1.JwtPayload) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], ProfileController.prototype, "getMyProfile", null);
__decorate([
    (0, common_1.Patch)('me'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Update my profile',
        description: 'Update profile information (excluding display name and contact info - use dedicated endpoints)',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Profile updated successfully',
        type: profile_dto_1.ProfileResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Invalid input or trying to update restricted fields',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: 'Unauthorized - Invalid or missing token',
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, _CurrentUser_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof profile_dto_1.UpdateProfileDto !== "undefined" && profile_dto_1.UpdateProfileDto) === "function" ? _d : Object, typeof (_e = typeof jwt_payload_interface_1.JwtPayload !== "undefined" && jwt_payload_interface_1.JwtPayload) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], ProfileController.prototype, "updateMyProfile", null);
__decorate([
    (0, common_1.Put)('contact'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Update contact information',
        description: 'Update email and/or phone number with uniqueness validation',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Contact information updated successfully',
        type: profile_dto_1.ProfileResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Invalid email or phone format',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CONFLICT,
        description: 'Email or phone already in use by another account',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: 'Unauthorized - Invalid or missing token',
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, _CurrentUser_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof profile_dto_1.UpdateContactDto !== "undefined" && profile_dto_1.UpdateContactDto) === "function" ? _g : Object, typeof (_h = typeof jwt_payload_interface_1.JwtPayload !== "undefined" && jwt_payload_interface_1.JwtPayload) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], ProfileController.prototype, "updateContact", null);
__decorate([
    (0, common_1.Put)('display-name'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Change display name',
        description: 'Change display name (restricted to once every 30 days)',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Display name changed successfully',
        type: profile_dto_1.DisplayNameChangeResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Invalid display name format or same as current name',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: 'Cannot change display name yet - 30-day restriction not elapsed',
        schema: {
            example: {
                statusCode: 403,
                message: 'You can only change your display name once every 30 days. Please wait 15 more day(s).',
                error: 'Forbidden',
                code: 'DISPLAY_NAME_CHANGE_RESTRICTED',
                daysUntilCanChange: 15
            }
        }
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: 'Unauthorized - Invalid or missing token',
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, _CurrentUser_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof profile_dto_1.ChangeDisplayNameDto !== "undefined" && profile_dto_1.ChangeDisplayNameDto) === "function" ? _k : Object, typeof (_l = typeof jwt_payload_interface_1.JwtPayload !== "undefined" && jwt_payload_interface_1.JwtPayload) === "function" ? _l : Object]),
    __metadata("design:returntype", typeof (_m = typeof Promise !== "undefined" && Promise) === "function" ? _m : Object)
], ProfileController.prototype, "changeDisplayName", null);
__decorate([
    (0, common_1.Patch)('avatar'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        limits: { fileSize: 2 * 1024 * 1024 },
    })),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Update avatar',
        description: 'Update user avatar URL (must be a valid URL)',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Avatar updated successfully',
        type: profile_dto_1.ProfileResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Invalid avatar URL format',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: 'Unauthorized - Invalid or missing token',
    }),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, _CurrentUser_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_p = typeof Express !== "undefined" && (_o = Express.Multer) !== void 0 && _o.File) === "function" ? _p : Object, typeof (_q = typeof jwt_payload_interface_1.JwtPayload !== "undefined" && jwt_payload_interface_1.JwtPayload) === "function" ? _q : Object]),
    __metadata("design:returntype", typeof (_r = typeof Promise !== "undefined" && Promise) === "function" ? _r : Object)
], ProfileController.prototype, "updateAvatar", null);
__decorate([
    (0, common_1.Delete)('me'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Delete account',
        description: 'Soft delete the authenticated user\'s account (can be recovered within 30 days)',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Account deleted successfully',
        type: profile_dto_1.DeleteAccountResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: 'Unauthorized - Invalid or missing token',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
        description: 'Failed to delete account',
    }),
    __param(0, (0, _CurrentUser_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_s = typeof jwt_payload_interface_1.JwtPayload !== "undefined" && jwt_payload_interface_1.JwtPayload) === "function" ? _s : Object]),
    __metadata("design:returntype", typeof (_t = typeof Promise !== "undefined" && Promise) === "function" ? _t : Object)
], ProfileController.prototype, "deleteAccount", null);
__decorate([
    (0, common_1.Get)('user/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Get public profile',
        description: 'View public profile information of any user (limited data for privacy)',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'User UUID',
        example: 'uuid-123'
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Public profile retrieved successfully',
        type: profile_dto_1.PublicProfileResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Invalid UUID format',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'User not found or account inactive',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_u = typeof Promise !== "undefined" && Promise) === "function" ? _u : Object)
], ProfileController.prototype, "getPublicProfile", null);
__decorate([
    (0, common_1.Get)('search'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Search profiles',
        description: 'Search for users by display name (public endpoint for user discovery)',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'searchTerm',
        required: false,
        description: 'Search term for display name',
        example: 'John'
    }),
    (0, swagger_1.ApiQuery)({
        name: 'limit',
        required: false,
        description: 'Maximum number of results',
        example: 20
    }),
    (0, swagger_1.ApiQuery)({
        name: 'offset',
        required: false,
        description: 'Number of results to skip',
        example: 0
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Profiles found',
        type: profile_dto_1.ProfileListResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Invalid query parameters',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_v = typeof profile_dto_1.SearchProfilesQueryDto !== "undefined" && profile_dto_1.SearchProfilesQueryDto) === "function" ? _v : Object]),
    __metadata("design:returntype", typeof (_w = typeof Promise !== "undefined" && Promise) === "function" ? _w : Object)
], ProfileController.prototype, "searchProfiles", null);
exports.ProfileController = ProfileController = __decorate([
    (0, swagger_1.ApiTags)('Profile'),
    (0, common_1.Controller)('profile'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __metadata("design:paramtypes", [typeof (_a = typeof profile_service_1.ProfileService !== "undefined" && profile_service_1.ProfileService) === "function" ? _a : Object])
], ProfileController);


/***/ }),

/***/ "./src/modules/profile/dtos/profile.dto.ts":
/*!*************************************************!*\
  !*** ./src/modules/profile/dtos/profile.dto.ts ***!
  \*************************************************/
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfileListResponseDto = exports.DeleteAccountResponseDto = exports.DisplayNameChangeResponseDto = exports.ProfileCompletionDto = exports.MinimalProfileDto = exports.PublicProfileResponseDto = exports.ProfileResponseDto = exports.DisplayNameChangeInfoDto = exports.SearchProfilesQueryDto = exports.UpdateAvatarDto = exports.ChangeDisplayNameDto = exports.UpdateContactDto = exports.UpdateProfileDto = void 0;
const user_role_enum_1 = __webpack_require__(/*! @/common/enums/user-role.enum */ "./src/common/enums/user-role.enum.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UpdateProfileDto {
}
exports.UpdateProfileDto = UpdateProfileDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Full legal name',
        example: 'Vo Van Tin',
        maxLength: 255
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(255, { message: 'Full name must not exceed 255 characters' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Avatar URL (must be valid URL)',
        example: 'https://example.com/avatar.jpg',
        maxLength: 500
    }),
    (0, class_validator_1.IsUrl)({}, { message: 'Avatar URL must be a valid URL' }),
    (0, class_validator_1.MaxLength)(500, { message: 'Avatar URL must not exceed 500 characters' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "avatarUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'User biography/description (min 10 chars for completion)',
        example: 'Experienced electrician with 10+ years in the industry',
        maxLength: 500
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500, { message: 'Bio must not exceed 500 characters' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "bio", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Physical address',
        example: '123 Nguyen Van Linh, Hai Chau, Da Nang',
        maxLength: 255
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255, { message: 'Address must not exceed 255 characters' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Date of birth (must be at least 13 years old)',
        example: '1990-01-15',
        type: String
    }),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsDate)({ message: 'Birthday must be a valid date' }),
    (0, class_validator_1.MinDate)(new Date('1900-01-01'), {
        message: 'Birthday must be after January 1, 1900'
    }),
    (0, class_validator_1.MaxDate)(new Date(new Date().setFullYear(new Date().getFullYear() - 13)), { message: 'You must be at least 13 years old' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UpdateProfileDto.prototype, "birthday", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Gender',
        example: 'male',
        enum: ['male', 'female', 'other']
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(['male', 'female', 'other'], {
        message: 'Gender must be one of: male, female, other'
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "gender", void 0);
class UpdateContactDto {
}
exports.UpdateContactDto = UpdateContactDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Email address',
        example: 'user@example.com'
    }),
    (0, class_validator_1.IsEmail)({}, { message: 'Please provide a valid email address' }),
    (0, class_validator_1.MaxLength)(255, { message: 'Email must not exceed 255 characters' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateContactDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Phone number (10-11 digits, Vietnam format)',
        example: '0901234567'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^(0|\+84)[0-9]{9,10}$/, {
        message: 'Phone number must be a valid Vietnam phone number (10-11 digits)',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateContactDto.prototype, "phone", void 0);
class ChangeDisplayNameDto {
}
exports.ChangeDisplayNameDto = ChangeDisplayNameDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'New display name (can only change every 30 days)',
        example: 'Tin The Great',
        minLength: 3,
        maxLength: 100
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Display name is required' }),
    (0, class_validator_1.Length)(3, 100, {
        message: 'Display name must be between 3 and 100 characters'
    }),
    (0, class_validator_1.Matches)(/^[a-zA-Z0-9\s\u00C0-\u024F\u1E00-\u1EFF]+$/, {
        message: 'Display name can only contain letters, numbers, and spaces',
    }),
    __metadata("design:type", String)
], ChangeDisplayNameDto.prototype, "displayName", void 0);
class UpdateAvatarDto {
}
exports.UpdateAvatarDto = UpdateAvatarDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Avatar URL',
        example: 'https://example.com/avatar.jpg'
    }),
    (0, class_validator_1.IsUrl)({}, { message: 'Avatar URL must be a valid URL' }),
    (0, class_validator_1.MaxLength)(500, { message: 'Avatar URL must not exceed 500 characters' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Avatar URL is required' }),
    __metadata("design:type", String)
], UpdateAvatarDto.prototype, "avatarUrl", void 0);
class SearchProfilesQueryDto {
    constructor() {
        this.limit = 20;
        this.offset = 0;
    }
}
exports.SearchProfilesQueryDto = SearchProfilesQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Search term for display name',
        example: 'John'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SearchProfilesQueryDto.prototype, "searchTerm", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Number of results to return',
        example: 20,
        default: 20
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], SearchProfilesQueryDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Number of results to skip',
        example: 0,
        default: 0
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], SearchProfilesQueryDto.prototype, "offset", void 0);
class DisplayNameChangeInfoDto {
}
exports.DisplayNameChangeInfoDto = DisplayNameChangeInfoDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Whether user can change display name now',
        example: false
    }),
    __metadata("design:type", Boolean)
], DisplayNameChangeInfoDto.prototype, "canChange", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Last display name change timestamp',
        example: '2024-11-13T10:00:00Z'
    }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], DisplayNameChangeInfoDto.prototype, "lastChanged", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Total number of display name changes',
        example: 2
    }),
    __metadata("design:type", Number)
], DisplayNameChangeInfoDto.prototype, "changeCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Days remaining until next change is allowed',
        example: 15
    }),
    __metadata("design:type", Number)
], DisplayNameChangeInfoDto.prototype, "daysUntilNextChange", void 0);
class ProfileResponseDto {
}
exports.ProfileResponseDto = ProfileResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User unique identifier',
        example: 'uuid-123'
    }),
    __metadata("design:type", String)
], ProfileResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Email address',
        example: 'user@example.com'
    }),
    __metadata("design:type", String)
], ProfileResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Phone number',
        example: '0901234567'
    }),
    __metadata("design:type", String)
], ProfileResponseDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User role',
        enum: user_role_enum_1.UserRole,
        example: user_role_enum_1.UserRole.CUSTOMER
    }),
    __metadata("design:type", typeof (_c = typeof user_role_enum_1.UserRole !== "undefined" && user_role_enum_1.UserRole) === "function" ? _c : Object)
], ProfileResponseDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Full legal name',
        example: 'Vo Van Tin'
    }),
    __metadata("design:type", String)
], ProfileResponseDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Public display name',
        example: 'Van Tin'
    }),
    __metadata("design:type", String)
], ProfileResponseDto.prototype, "displayName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Avatar image URL',
        example: 'https://cdn.example.com/avatar.jpg'
    }),
    __metadata("design:type", String)
], ProfileResponseDto.prototype, "avatarUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'User biography',
        example: 'Professional electrician with 10 years experience'
    }),
    __metadata("design:type", String)
], ProfileResponseDto.prototype, "bio", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Physical address',
        example: '123 Nguyen Van Linh, Da Nang'
    }),
    __metadata("design:type", String)
], ProfileResponseDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Date of birth',
        example: '1990-01-15'
    }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], ProfileResponseDto.prototype, "birthday", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Gender',
        example: 'male',
        enum: ['male', 'female', 'other']
    }),
    __metadata("design:type", String)
], ProfileResponseDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Email/phone verification status',
        example: true
    }),
    __metadata("design:type", Boolean)
], ProfileResponseDto.prototype, "isVerified", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Account active status',
        example: true
    }),
    __metadata("design:type", Boolean)
], ProfileResponseDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Display name change information and restrictions',
        type: DisplayNameChangeInfoDto
    }),
    __metadata("design:type", DisplayNameChangeInfoDto)
], ProfileResponseDto.prototype, "displayNameChangeInfo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Account creation timestamp',
        example: '2025-01-01T00:00:00Z'
    }),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], ProfileResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Last profile update timestamp',
        example: '2025-11-13T10:00:00Z'
    }),
    __metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], ProfileResponseDto.prototype, "updatedAt", void 0);
class PublicProfileResponseDto {
}
exports.PublicProfileResponseDto = PublicProfileResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User unique identifier',
        example: 'uuid-123'
    }),
    __metadata("design:type", String)
], PublicProfileResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User role',
        enum: user_role_enum_1.UserRole,
        example: user_role_enum_1.UserRole.PROVIDER
    }),
    __metadata("design:type", typeof (_g = typeof user_role_enum_1.UserRole !== "undefined" && user_role_enum_1.UserRole) === "function" ? _g : Object)
], PublicProfileResponseDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Public display name',
        example: 'Van Tin'
    }),
    __metadata("design:type", String)
], PublicProfileResponseDto.prototype, "displayName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Avatar image URL',
        example: 'https://cdn.example.com/avatar.jpg'
    }),
    __metadata("design:type", String)
], PublicProfileResponseDto.prototype, "avatarUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'User biography',
        example: 'Professional electrician'
    }),
    __metadata("design:type", String)
], PublicProfileResponseDto.prototype, "bio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Verification badge status',
        example: true
    }),
    __metadata("design:type", Boolean)
], PublicProfileResponseDto.prototype, "isVerified", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Member since date',
        example: '2025-01-01T00:00:00Z'
    }),
    __metadata("design:type", typeof (_h = typeof Date !== "undefined" && Date) === "function" ? _h : Object)
], PublicProfileResponseDto.prototype, "memberSince", void 0);
class MinimalProfileDto {
}
exports.MinimalProfileDto = MinimalProfileDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User unique identifier',
        example: 'uuid-123'
    }),
    __metadata("design:type", String)
], MinimalProfileDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Display name',
        example: 'VanA'
    }),
    __metadata("design:type", String)
], MinimalProfileDto.prototype, "displayName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Avatar URL',
        example: 'https://cdn.example.com/avatar.jpg'
    }),
    __metadata("design:type", String)
], MinimalProfileDto.prototype, "avatarUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Verification status',
        example: true
    }),
    __metadata("design:type", Boolean)
], MinimalProfileDto.prototype, "isVerified", void 0);
class ProfileCompletionDto {
}
exports.ProfileCompletionDto = ProfileCompletionDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Whether profile is 100% complete',
        example: false
    }),
    __metadata("design:type", Boolean)
], ProfileCompletionDto.prototype, "isComplete", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Completion percentage (0-100)',
        example: 67
    }),
    __metadata("design:type", Number)
], ProfileCompletionDto.prototype, "completionPercentage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Number of completed fields',
        example: 4
    }),
    __metadata("design:type", Number)
], ProfileCompletionDto.prototype, "completedFields", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Total required fields',
        example: 6
    }),
    __metadata("design:type", Number)
], ProfileCompletionDto.prototype, "totalFields", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of missing field names',
        example: ['bio', 'avatarUrl']
    }),
    __metadata("design:type", Array)
], ProfileCompletionDto.prototype, "missingFields", void 0);
class DisplayNameChangeResponseDto {
}
exports.DisplayNameChangeResponseDto = DisplayNameChangeResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Operation success status',
        example: true
    }),
    __metadata("design:type", Boolean)
], DisplayNameChangeResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Response message',
        example: 'Display name changed successfully'
    }),
    __metadata("design:type", String)
], DisplayNameChangeResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'New display name',
        example: 'Van Tin Pro'
    }),
    __metadata("design:type", String)
], DisplayNameChangeResponseDto.prototype, "newDisplayName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Change timestamp',
        example: '2025-11-13T10:00:00Z'
    }),
    __metadata("design:type", typeof (_j = typeof Date !== "undefined" && Date) === "function" ? _j : Object)
], DisplayNameChangeResponseDto.prototype, "changedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Days until next change allowed',
        example: 30
    }),
    __metadata("design:type", Number)
], DisplayNameChangeResponseDto.prototype, "daysUntilNextChange", void 0);
class DeleteAccountResponseDto {
}
exports.DeleteAccountResponseDto = DeleteAccountResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Operation success status',
        example: true
    }),
    __metadata("design:type", Boolean)
], DeleteAccountResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Response message',
        example: 'Account deleted successfully'
    }),
    __metadata("design:type", String)
], DeleteAccountResponseDto.prototype, "message", void 0);
class ProfileListResponseDto {
}
exports.ProfileListResponseDto = ProfileListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of profiles',
        type: [PublicProfileResponseDto]
    }),
    __metadata("design:type", Array)
], ProfileListResponseDto.prototype, "profiles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Total number of profiles matching query',
        example: 100
    }),
    __metadata("design:type", Number)
], ProfileListResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Number of results returned in this response',
        example: 20
    }),
    __metadata("design:type", Number)
], ProfileListResponseDto.prototype, "count", void 0);


/***/ }),

/***/ "./src/modules/profile/entities/profile.entity.ts":
/*!********************************************************!*\
  !*** ./src/modules/profile/entities/profile.entity.ts ***!
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
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Profile = void 0;
const user_entity_1 = __webpack_require__(/*! @/modules/users/entities/user.entity */ "./src/modules/users/entities/user.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Profile = class Profile {
    constructor() {
        this.displayNameChangeCount = 0;
    }
    setDefaults() {
        if (!this.displayName && this.fullName) {
            this.displayName = this.fullName;
        }
        if (!this.displayNameHistory) {
            this.displayNameHistory = [];
        }
    }
    updateTimestamp() {
        this.updatedAt = new Date();
    }
    canChangeDisplayName() {
        if (!this.lastDisplayNameChange)
            return true;
        const daysSinceLastChange = this.getDaysSinceLastDisplayNameChange();
        return daysSinceLastChange >= 30;
    }
    getDaysSinceLastDisplayNameChange() {
        if (!this.lastDisplayNameChange)
            return Infinity;
        const now = new Date();
        const lastChange = new Date(this.lastDisplayNameChange);
        const diffTime = Math.abs(now.getTime() - lastChange.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }
    getDaysUntilCanChangeDisplayName() {
        if (!this.lastDisplayNameChange)
            return 0;
        const daysSinceLastChange = this.getDaysSinceLastDisplayNameChange();
        return Math.max(0, 30 - daysSinceLastChange);
    }
    addDisplayNameToHistory(oldName, newName) {
        if (!this.displayNameHistory) {
            this.displayNameHistory = [];
        }
        if (this.displayNameHistory.length >= 10) {
            this.displayNameHistory.shift();
        }
        this.displayNameHistory.push({
            name: newName,
            changedAt: new Date()
        });
    }
    getAge() {
        if (!this.birthday)
            return null;
        const today = new Date();
        const birthDate = new Date(this.birthday);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    isProfileComplete() {
        return !!(this.fullName &&
            this.displayName &&
            this.birthday &&
            this.gender);
    }
};
exports.Profile = Profile;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Profile.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'user_id',
        type: 'uuid',
        unique: true
    }),
    __metadata("design:type", String)
], Profile.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'full_name',
        length: 255,
        nullable: true,
        comment: 'User full legal name'
    }),
    __metadata("design:type", String)
], Profile.prototype, "fullName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'display_name',
        length: 100,
        nullable: true,
        comment: 'Public display name (changeable with restrictions)'
    }),
    __metadata("design:type", String)
], Profile.prototype, "displayName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'avatar_url',
        length: 500,
        nullable: true,
        comment: 'Profile picture URL'
    }),
    __metadata("design:type", String)
], Profile.prototype, "avatarUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        nullable: true,
        comment: 'User biography/description'
    }),
    __metadata("design:type", String)
], Profile.prototype, "bio", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 255,
        nullable: true,
        comment: 'Physical address'
    }),
    __metadata("design:type", String)
], Profile.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'date',
        nullable: true,
        comment: 'Date of birth'
    }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Profile.prototype, "birthday", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 10,
        nullable: true,
        comment: 'Gender: male, female, other'
    }),
    __metadata("design:type", String)
], Profile.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'last_display_name_change',
        type: 'timestamp with time zone',
        nullable: true,
        comment: 'Timestamp of last display name change'
    }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Profile.prototype, "lastDisplayNameChange", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'display_name_change_count',
        type: 'int',
        default: 0,
        comment: 'Total number of display name changes'
    }),
    __metadata("design:type", Number)
], Profile.prototype, "displayNameChangeCount", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'display_name_history',
        type: 'jsonb',
        nullable: true,
        comment: 'History of display name changes for audit'
    }),
    __metadata("design:type", typeof (_c = typeof Array !== "undefined" && Array) === "function" ? _c : Object)
], Profile.prototype, "displayNameHistory", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'jsonb',
        nullable: true,
        comment: 'Additional profile metadata (preferences, settings, etc.)'
    }),
    __metadata("design:type", typeof (_d = typeof Record !== "undefined" && Record) === "function" ? _d : Object)
], Profile.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamp with time zone'
    }),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], Profile.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamp with time zone'
    }),
    __metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], Profile.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, user => user.profile, {
        onDelete: 'CASCADE'
    }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_g = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _g : Object)
], Profile.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Profile.prototype, "setDefaults", null);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Profile.prototype, "updateTimestamp", null);
exports.Profile = Profile = __decorate([
    (0, typeorm_1.Entity)('profiles'),
    (0, typeorm_1.Index)(['userId'], { unique: true }),
    (0, typeorm_1.Index)(['displayName']),
    (0, typeorm_1.Index)(['updatedAt'])
], Profile);


/***/ }),

/***/ "./src/modules/profile/entities/providertrade.entity.ts":
/*!**************************************************************!*\
  !*** ./src/modules/profile/entities/providertrade.entity.ts ***!
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProviderTrade = void 0;
const user_entity_1 = __webpack_require__(/*! @/modules/users/entities/user.entity */ "./src/modules/users/entities/user.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const trade_entity_1 = __webpack_require__(/*! ./trade.entity */ "./src/modules/profile/entities/trade.entity.ts");
let ProviderTrade = class ProviderTrade {
};
exports.ProviderTrade = ProviderTrade;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ProviderTrade.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'provider_id', type: 'uuid' }),
    __metadata("design:type", String)
], ProviderTrade.prototype, "providerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'trade_id', type: 'uuid' }),
    __metadata("design:type", String)
], ProviderTrade.prototype, "tradeId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'years_experience',
        type: 'smallint',
        nullable: true,
    }),
    __metadata("design:type", Number)
], ProviderTrade.prototype, "yearsExperience", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamp with time zone' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], ProviderTrade.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { eager: false, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'provider_id' }),
    __metadata("design:type", typeof (_b = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _b : Object)
], ProviderTrade.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => trade_entity_1.Trade, trade => trade.providerTrades, {
        eager: false,
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'trade_id' }),
    __metadata("design:type", typeof (_c = typeof trade_entity_1.Trade !== "undefined" && trade_entity_1.Trade) === "function" ? _c : Object)
], ProviderTrade.prototype, "trade", void 0);
exports.ProviderTrade = ProviderTrade = __decorate([
    (0, typeorm_1.Entity)('provider_trades'),
    (0, typeorm_1.Unique)(['providerId', 'tradeId']),
    (0, typeorm_1.Index)(['providerId']),
    (0, typeorm_1.Index)(['tradeId'])
], ProviderTrade);


/***/ }),

/***/ "./src/modules/profile/entities/trade.entity.ts":
/*!******************************************************!*\
  !*** ./src/modules/profile/entities/trade.entity.ts ***!
  \******************************************************/
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
exports.Trade = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const providertrade_entity_1 = __webpack_require__(/*! ./providertrade.entity */ "./src/modules/profile/entities/providertrade.entity.ts");
let Trade = class Trade {
    constructor() {
        this.isActive = true;
        this.sortOrder = 0;
    }
};
exports.Trade = Trade;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Trade.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, unique: true }),
    __metadata("design:type", String)
], Trade.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, unique: true }),
    __metadata("design:type", String)
], Trade.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Trade.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 10, nullable: true }),
    __metadata("design:type", String)
], Trade.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_active', default: true }),
    __metadata("design:type", Boolean)
], Trade.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sort_order', type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Trade.prototype, "sortOrder", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamp with time zone' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Trade.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => providertrade_entity_1.ProviderTrade, pt => pt.trade),
    __metadata("design:type", Array)
], Trade.prototype, "providerTrades", void 0);
exports.Trade = Trade = __decorate([
    (0, typeorm_1.Entity)('trades'),
    (0, typeorm_1.Index)(['slug'], { unique: true }),
    (0, typeorm_1.Index)(['isActive'])
], Trade);


/***/ }),

/***/ "./src/modules/profile/mapper/profile-mapper.ts":
/*!******************************************************!*\
  !*** ./src/modules/profile/mapper/profile-mapper.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toProfile = toProfile;
exports.toProfiles = toProfiles;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
function toProfile(profile) {
    if (!profile?.id || !profile?.userId) {
        throw new common_1.BadRequestException({
            code: 'INVALID_PROFILE_DATA',
            message: 'Profile data is incomplete - missing id or userId',
        });
    }
    return {
        id: profile.id,
        userId: profile.userId,
        fullName: profile.fullName,
        displayName: profile.displayName,
        avatarUrl: profile.avatarUrl,
        bio: profile.bio,
        address: profile.address,
        birthday: profile.birthday,
        gender: profile.gender,
        lastDisplayNameChange: profile.lastDisplayNameChange,
        displayNameChangeCount: profile.displayNameChangeCount ?? 0,
        displayNameHistory: profile.displayNameHistory,
        updatedAt: profile.updatedAt,
        createdAt: profile.createdAt,
    };
}
function toProfiles(profiles) {
    return profiles
        .filter(profile => profile?.id && profile?.userId)
        .map(profile => toProfile(profile));
}


/***/ }),

/***/ "./src/modules/profile/profile.module.ts":
/*!***********************************************!*\
  !*** ./src/modules/profile/profile.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfileModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const user_entity_1 = __webpack_require__(/*! @/modules/users/entities/user.entity */ "./src/modules/users/entities/user.entity.ts");
const profile_entity_1 = __webpack_require__(/*! ./entities/profile.entity */ "./src/modules/profile/entities/profile.entity.ts");
const profile_controller_1 = __webpack_require__(/*! ./controllers/profile.controller */ "./src/modules/profile/controllers/profile.controller.ts");
const profile_repository_1 = __webpack_require__(/*! ./repositorys/profile-repository */ "./src/modules/profile/repositorys/profile-repository.ts");
const profile_domain_service_1 = __webpack_require__(/*! ./services/profile-domain.service */ "./src/modules/profile/services/profile-domain.service.ts");
const profile_response_builder_service_1 = __webpack_require__(/*! ./services/profile-response-builder.service */ "./src/modules/profile/services/profile-response-builder.service.ts");
const profile_service_1 = __webpack_require__(/*! ./services/profile.service */ "./src/modules/profile/services/profile.service.ts");
let ProfileModule = class ProfileModule {
};
exports.ProfileModule = ProfileModule;
exports.ProfileModule = ProfileModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([profile_entity_1.Profile, user_entity_1.User]),
            config_1.ConfigModule,
        ],
        controllers: [profile_controller_1.ProfileController],
        providers: [
            profile_service_1.ProfileService,
            profile_domain_service_1.ProfileDomainService,
            profile_response_builder_service_1.ProfileResponseBuilder,
            profile_repository_1.ProfileRepository,
        ],
        exports: [
            profile_service_1.ProfileService,
            profile_domain_service_1.ProfileDomainService,
            profile_response_builder_service_1.ProfileResponseBuilder,
            profile_repository_1.ProfileRepository,
        ],
    })
], ProfileModule);


/***/ }),

/***/ "./src/modules/profile/repositorys/profile-repository.ts":
/*!***************************************************************!*\
  !*** ./src/modules/profile/repositorys/profile-repository.ts ***!
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ProfileRepository_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfileRepository = void 0;
const user_entity_1 = __webpack_require__(/*! @/modules/users/entities/user.entity */ "./src/modules/users/entities/user.entity.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const profile_entity_1 = __webpack_require__(/*! ../entities/profile.entity */ "./src/modules/profile/entities/profile.entity.ts");
let ProfileRepository = ProfileRepository_1 = class ProfileRepository {
    constructor(profileRepo, userRepo) {
        this.profileRepo = profileRepo;
        this.userRepo = userRepo;
        this.logger = new common_1.Logger(ProfileRepository_1.name);
    }
    getProfileRepository(manager) {
        return manager ? manager.getRepository(profile_entity_1.Profile) : this.profileRepo;
    }
    getUserRepository(manager) {
        return manager ? manager.getRepository(user_entity_1.User) : this.userRepo;
    }
    async findUserWithProfile(userId, manager) {
        try {
            return await this.getUserRepository(manager).findOne({
                where: { id: userId, deletedAt: (0, typeorm_2.IsNull)() },
                relations: ['profile'],
            });
        }
        catch (error) {
            this.logger.error(`Error finding user with profile: ${userId}`, error);
            throw error;
        }
    }
    async findProfileByUserId(userId, manager) {
        try {
            return await this.getProfileRepository(manager).findOne({
                where: { userId },
                relations: ['user'],
            });
        }
        catch (error) {
            this.logger.error(`Error finding profile for user: ${userId}`, error);
            throw error;
        }
    }
    async createProfile(userId, data, manager) {
        try {
            const profile = this.getProfileRepository(manager).create({
                userId,
                ...data,
            });
            return await this.getProfileRepository(manager).save(profile);
        }
        catch (error) {
            this.logger.error(`Error creating profile for user: ${userId}`, error);
            throw error;
        }
    }
    async updateProfile(profile, dto, manager) {
        try {
            Object.keys(dto).forEach((key) => {
                if (dto[key] !== undefined) {
                    profile[key] = dto[key];
                }
            });
            return await this.getProfileRepository(manager).save(profile);
        }
        catch (error) {
            this.logger.error(`Error updating profile: ${profile.id}`, error);
            throw error;
        }
    }
    async updateContact(user, dto, manager) {
        try {
            if (dto.email !== undefined)
                user.email = dto.email;
            if (dto.phone !== undefined)
                user.phone = dto.phone;
            return await this.getUserRepository(manager).save(user);
        }
        catch (error) {
            this.logger.error(`Error updating contact for user: ${user.id}`, error);
            throw error;
        }
    }
    async changeDisplayName(profile, newDisplayName, manager) {
        try {
            const oldDisplayName = profile.displayName;
            profile.displayName = newDisplayName;
            profile.lastDisplayNameChange = new Date();
            profile.displayNameChangeCount += 1;
            profile.addDisplayNameToHistory(oldDisplayName, newDisplayName);
            return await this.getProfileRepository(manager).save(profile);
        }
        catch (error) {
            this.logger.error(`Error changing display name for profile: ${profile.id}`, error);
            throw error;
        }
    }
    async updateAvatar(userId, avatarUrl, manager) {
        try {
            const profile = await this.findProfileByUserId(userId, manager);
            if (!profile) {
                throw new common_1.NotFoundException('Profile not found');
            }
            profile.avatarUrl = avatarUrl;
            return await this.getProfileRepository(manager).save(profile);
        }
        catch (error) {
            this.logger.error(`Error updating avatar for user: ${userId}`, error);
            throw error;
        }
    }
    async isEmailTaken(email, excludeUserId, manager) {
        try {
            const query = this.getUserRepository(manager)
                .createQueryBuilder('user')
                .where('LOWER(user.email) = LOWER(:email)', { email })
                .andWhere('user.deletedAt IS NULL');
            if (excludeUserId) {
                query.andWhere('user.id != :userId', { userId: excludeUserId });
            }
            const count = await query.getCount();
            return count > 0;
        }
        catch (error) {
            this.logger.error(`Error checking email availability: ${email}`, error);
            throw error;
        }
    }
    async isPhoneTaken(phone, excludeUserId, manager) {
        try {
            const query = this.getUserRepository(manager)
                .createQueryBuilder('user')
                .where('user.phone = :phone', { phone })
                .andWhere('user.deletedAt IS NULL');
            if (excludeUserId) {
                query.andWhere('user.id != :userId', { userId: excludeUserId });
            }
            const count = await query.getCount();
            return count > 0;
        }
        catch (error) {
            this.logger.error(`Error checking phone availability: ${phone}`, error);
            throw error;
        }
    }
    async softDeleteUser(userId, manager) {
        try {
            await this.getUserRepository(manager).softDelete(userId);
            this.logger.log(`User soft deleted: ${userId}`);
        }
        catch (error) {
            this.logger.error(`Error soft deleting user: ${userId}`, error);
            throw error;
        }
    }
    async findUsersByRole(role, limit = 100, offset = 0, manager) {
        try {
            return await this.getUserRepository(manager).findAndCount({
                where: { role, deletedAt: (0, typeorm_2.IsNull)() },
                relations: ['profile'],
                take: limit,
                skip: offset,
                order: { createdAt: 'DESC' },
            });
        }
        catch (error) {
            this.logger.error(`Error finding users by role: ${role}`, error);
            throw error;
        }
    }
    async searchProfilesByDisplayName(searchTerm, limit = 20, offset = 0, manager) {
        try {
            const query = this.getProfileRepository(manager)
                .createQueryBuilder('profile')
                .leftJoinAndSelect('profile.user', 'user')
                .where('profile.displayName ILIKE :searchTerm', {
                searchTerm: `%${searchTerm}%`
            })
                .andWhere('user.deletedAt IS NULL')
                .andWhere('user.isActive = :isActive', { isActive: true })
                .take(limit)
                .skip(offset)
                .orderBy('profile.displayName', 'ASC');
            return await query.getManyAndCount();
        }
        catch (error) {
            this.logger.error(`Error searching profiles: ${searchTerm}`, error);
            throw error;
        }
    }
    async getProfileStats(manager) {
        try {
            const repo = this.getProfileRepository(manager);
            const [totalProfiles, profilesWithAvatar,] = await Promise.all([
                repo.count(),
                repo.count({ where: { avatarUrl: (0, typeorm_2.IsNull)() } }),
            ]);
            return {
                totalProfiles,
                completeProfiles: 0,
                incompleteProfiles: 0,
                profilesWithAvatar,
            };
        }
        catch (error) {
            this.logger.error('Error getting profile stats', error);
            throw error;
        }
    }
};
exports.ProfileRepository = ProfileRepository;
exports.ProfileRepository = ProfileRepository = ProfileRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(profile_entity_1.Profile)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], ProfileRepository);


/***/ }),

/***/ "./src/modules/profile/services/profile-domain.service.ts":
/*!****************************************************************!*\
  !*** ./src/modules/profile/services/profile-domain.service.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfileDomainService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let ProfileDomainService = class ProfileDomainService {
    constructor() {
        this.DISPLAY_NAME_CHANGE_COOLDOWN_DAYS = 30;
    }
    canChangeDisplayName(profile) {
        if (!profile.lastDisplayNameChange) {
            return true;
        }
        const daysSinceLastChange = this.getDaysSinceLastChange(profile.lastDisplayNameChange);
        return daysSinceLastChange >= this.DISPLAY_NAME_CHANGE_COOLDOWN_DAYS;
    }
    getDaysUntilCanChangeDisplayName(profile) {
        if (!profile.lastDisplayNameChange) {
            return 0;
        }
        const daysSinceLastChange = this.getDaysSinceLastChange(profile.lastDisplayNameChange);
        const daysRemaining = this.DISPLAY_NAME_CHANGE_COOLDOWN_DAYS - daysSinceLastChange;
        return Math.max(0, Math.ceil(daysRemaining));
    }
    calculateCompletionPercentage(profile) {
        const requiredFields = {
            fullName: !!profile.fullName,
            displayName: !!profile.displayName,
            birthday: !!profile.birthday,
            gender: !!profile.gender,
            bio: !!profile.bio && profile.bio.length >= 10,
            avatarUrl: !!profile.avatarUrl,
        };
        const totalFields = Object.keys(requiredFields).length;
        const completedFields = Object.values(requiredFields).filter(Boolean).length;
        const percentage = Math.round((completedFields / totalFields) * 100);
        const missingFields = Object.entries(requiredFields)
            .filter(([, value]) => !value)
            .map(([key]) => key);
        return {
            isComplete: percentage === 100,
            percentage,
            completedFields,
            totalFields,
            missingFields,
        };
    }
    validateDisplayNameChange(currentDisplayName, newDisplayName) {
        if (!newDisplayName || newDisplayName.trim().length === 0) {
            return { valid: false, error: 'Display name cannot be empty' };
        }
        if (currentDisplayName === newDisplayName) {
            return {
                valid: false,
                error: 'New display name must be different from current one',
            };
        }
        return { valid: true };
    }
    getDaysSinceLastChange(lastChangeDate) {
        const now = new Date();
        const lastChange = new Date(lastChangeDate);
        const diffInMs = now.getTime() - lastChange.getTime();
        return diffInMs / (1000 * 60 * 60 * 24);
    }
};
exports.ProfileDomainService = ProfileDomainService;
exports.ProfileDomainService = ProfileDomainService = __decorate([
    (0, common_1.Injectable)()
], ProfileDomainService);


/***/ }),

/***/ "./src/modules/profile/services/profile-response-builder.service.ts":
/*!**************************************************************************!*\
  !*** ./src/modules/profile/services/profile-response-builder.service.ts ***!
  \**************************************************************************/
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
var ProfileResponseBuilder_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfileResponseBuilder = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const profile_domain_service_1 = __webpack_require__(/*! ./profile-domain.service */ "./src/modules/profile/services/profile-domain.service.ts");
let ProfileResponseBuilder = ProfileResponseBuilder_1 = class ProfileResponseBuilder {
    constructor(configService, profileDomainService) {
        this.configService = configService;
        this.profileDomainService = profileDomainService;
        this.logger = new common_1.Logger(ProfileResponseBuilder_1.name);
    }
    buildProfileResponse(user, profile) {
        this.validateInputs(user, profile, 'buildProfileResponse');
        try {
            return {
                id: user.id,
                email: user.email,
                phone: user.phone,
                role: user.role,
                fullName: profile.fullName,
                displayName: profile.displayName,
                avatarUrl: this.buildAvatarUrl(profile.avatarUrl),
                bio: profile.bio,
                address: profile.address,
                birthday: profile.birthday,
                gender: profile.gender,
                isVerified: user.isVerified,
                isActive: user.isActive,
                displayNameChangeInfo: this.buildDisplayNameChangeInfo(profile),
                createdAt: user.createdAt,
                updatedAt: profile.updatedAt,
            };
        }
        catch (error) {
            this.logger.error(`Failed to build profile response for user ${user.id}`, error);
            throw new Error('Failed to build profile response');
        }
    }
    buildPublicProfileResponse(user, profile) {
        this.validateInputs(user, profile, 'buildPublicProfileResponse');
        try {
            return {
                id: user.id,
                role: user.role,
                displayName: profile.displayName || 'Anonymous User',
                avatarUrl: this.buildAvatarUrl(profile.avatarUrl),
                bio: profile.bio,
                isVerified: user.isVerified,
                memberSince: user.createdAt,
            };
        }
        catch (error) {
            this.logger.error(`Failed to build public profile for user ${user.id}`, error);
            throw new Error('Failed to build public profile');
        }
    }
    buildMinimalProfile(user, profile) {
        this.validateInputs(user, profile, 'buildMinimalProfile');
        try {
            return {
                id: user.id,
                displayName: profile.displayName || 'Anonymous',
                avatarUrl: this.buildAvatarUrl(profile.avatarUrl),
                isVerified: user.isVerified,
            };
        }
        catch (error) {
            this.logger.error(`Failed to build minimal profile for user ${user.id}`, error);
            return {
                id: user.id,
                displayName: 'User',
                avatarUrl: this.getDefaultAvatarUrl(),
                isVerified: false,
            };
        }
    }
    buildProfileCompletionStatus(profile) {
        if (!profile) {
            this.logger.warn('Profile is null in buildProfileCompletionStatus');
            return this.getEmptyCompletionStatus();
        }
        try {
            const completion = this.profileDomainService.calculateCompletionPercentage(profile);
            return {
                isComplete: completion.isComplete,
                completionPercentage: completion.percentage,
                completedFields: completion.completedFields,
                totalFields: completion.totalFields,
                missingFields: completion.missingFields,
            };
        }
        catch (error) {
            this.logger.error('Failed to build profile completion status', error);
            return this.getEmptyCompletionStatus();
        }
    }
    buildMinimalProfiles(usersWithProfiles) {
        if (!Array.isArray(usersWithProfiles)) {
            this.logger.warn('Invalid input for buildMinimalProfiles');
            return [];
        }
        return usersWithProfiles
            .map(({ user, profile }) => {
            try {
                return this.buildMinimalProfile(user, profile);
            }
            catch (error) {
                this.logger.warn(`Skipped building minimal profile for user ${user?.id}`, error);
                return null;
            }
        })
            .filter((profile) => profile !== null);
    }
    validateInputs(user, profile, method) {
        if (!user || !profile) {
            this.logger.error(`Invalid input in ${method}: user=${!!user}, profile=${!!profile}`);
            throw new Error('User and Profile are required');
        }
        if (!user.id) {
            this.logger.error(`User missing ID in ${method}`);
            throw new Error('User ID is required');
        }
    }
    buildDisplayNameChangeInfo(profile) {
        try {
            return {
                canChange: this.profileDomainService.canChangeDisplayName(profile),
                lastChanged: profile.lastDisplayNameChange,
                changeCount: profile.displayNameChangeCount,
                daysUntilNextChange: this.profileDomainService.getDaysUntilCanChangeDisplayName(profile),
            };
        }
        catch (error) {
            this.logger.warn('Failed to build display name change info', error);
            return {
                canChange: false,
                lastChanged: undefined,
                changeCount: 0,
                daysUntilNextChange: 0,
            };
        }
    }
    buildAvatarUrl(avatarUrl) {
        if (!avatarUrl) {
            return this.getDefaultAvatarUrl();
        }
        if (avatarUrl.startsWith('http://') || avatarUrl.startsWith('https://')) {
            return avatarUrl;
        }
        const cdnUrl = this.configService.get('CDN_URL');
        if (!cdnUrl) {
            this.logger.warn('CDN_URL not configured, returning relative path');
            return avatarUrl;
        }
        return `${cdnUrl}/${avatarUrl}`;
    }
    getDefaultAvatarUrl() {
        return (this.configService.get('DEFAULT_AVATAR_URL') ||
            '/assets/default-avatar.png');
    }
    getEmptyCompletionStatus() {
        return {
            isComplete: false,
            completionPercentage: 0,
            completedFields: 0,
            totalFields: 6,
            missingFields: [
                'fullName',
                'displayName',
                'birthday',
                'gender',
                'bio',
                'avatarUrl',
            ],
        };
    }
};
exports.ProfileResponseBuilder = ProfileResponseBuilder;
exports.ProfileResponseBuilder = ProfileResponseBuilder = ProfileResponseBuilder_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof profile_domain_service_1.ProfileDomainService !== "undefined" && profile_domain_service_1.ProfileDomainService) === "function" ? _b : Object])
], ProfileResponseBuilder);


/***/ }),

/***/ "./src/modules/profile/services/profile.service.ts":
/*!*********************************************************!*\
  !*** ./src/modules/profile/services/profile.service.ts ***!
  \*********************************************************/
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
var ProfileService_1;
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfileService = void 0;
const upload_service_1 = __webpack_require__(/*! @/common/upload/upload.service */ "./src/common/upload/upload.service.ts");
const profile_mapper_1 = __webpack_require__(/*! @/modules/profile/mapper/profile-mapper */ "./src/modules/profile/mapper/profile-mapper.ts");
const user_mapper_1 = __webpack_require__(/*! @/modules/users/mapper/user.mapper */ "./src/modules/users/mapper/user.mapper.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const profile_repository_1 = __webpack_require__(/*! ../repositorys/profile-repository */ "./src/modules/profile/repositorys/profile-repository.ts");
const profile_domain_service_1 = __webpack_require__(/*! ./profile-domain.service */ "./src/modules/profile/services/profile-domain.service.ts");
const profile_response_builder_service_1 = __webpack_require__(/*! ./profile-response-builder.service */ "./src/modules/profile/services/profile-response-builder.service.ts");
let ProfileService = ProfileService_1 = class ProfileService {
    constructor(profileRepo, profileBuilder, profileDomainService, dataSource, uploadService) {
        this.profileRepo = profileRepo;
        this.profileBuilder = profileBuilder;
        this.profileDomainService = profileDomainService;
        this.dataSource = dataSource;
        this.uploadService = uploadService;
        this.logger = new common_1.Logger(ProfileService_1.name);
    }
    async updateAvatarFile(jwtUser, file) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            if (!file) {
                throw new common_1.BadRequestException('Avatar file is required');
            }
            const { publicUrl: avatarUrl } = await this.uploadService.uploadSingle(file, 'avatars');
            const updatedProfile = await this.profileRepo.updateAvatar(jwtUser.id, avatarUrl, queryRunner.manager);
            const user = await this.profileRepo.findUserWithProfile(jwtUser.id, queryRunner.manager);
            await queryRunner.commitTransaction();
            const userMapper = (0, user_mapper_1.toUser)(user);
            const profileMapper = (0, profile_mapper_1.toProfile)(updatedProfile);
            return this.profileBuilder.buildProfileResponse(userMapper, profileMapper);
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        }
        finally {
            await queryRunner.release();
        }
    }
    async getMyProfile(jwtUser) {
        try {
            const user = await this.profileRepo.findUserWithProfile(jwtUser.id);
            if (!user) {
                throw new common_1.NotFoundException({
                    code: 'USER_NOT_FOUND',
                    message: 'User not found',
                });
            }
            if (!user.profile) {
                this.logger.warn(`Profile not found for user ${user.id}, creating...`);
                user.profile = await this.profileRepo.createProfile(user.id);
            }
            const userMapper = (0, user_mapper_1.toUser)(user);
            const profileMapper = (0, profile_mapper_1.toProfile)(user.profile);
            return this.profileBuilder.buildProfileResponse(userMapper, profileMapper);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            this.logger.error(`Failed to fetch profile for user: ${jwtUser.id}`, error);
            throw new common_1.InternalServerErrorException({
                code: 'PROFILE_FETCH_FAILED',
                message: 'Failed to fetch profile',
            });
        }
    }
    async getPublicProfile(userId) {
        try {
            const user = await this.profileRepo.findUserWithProfile(userId);
            if (!user) {
                throw new common_1.NotFoundException({
                    code: 'USER_NOT_FOUND',
                    message: 'User not found',
                });
            }
            if (!user.isActive) {
                throw new common_1.NotFoundException({
                    code: 'USER_NOT_ACTIVE',
                    message: 'User account is not active',
                });
            }
            if (!user.profile) {
                throw new common_1.NotFoundException({
                    code: 'PROFILE_NOT_FOUND',
                    message: 'Profile not found',
                });
            }
            const userMapper = (0, user_mapper_1.toUser)(user);
            const profileMapper = (0, profile_mapper_1.toProfile)(user.profile);
            return this.profileBuilder.buildPublicProfileResponse(userMapper, profileMapper);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            this.logger.error(`Failed to fetch public profile: ${userId}`, error);
            throw new common_1.InternalServerErrorException({
                code: 'PUBLIC_PROFILE_FETCH_FAILED',
                message: 'Failed to fetch public profile',
            });
        }
    }
    async updateProfile(jwtUser, dto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const user = await this.profileRepo.findUserWithProfile(jwtUser.id, queryRunner.manager);
            if (!user) {
                throw new common_1.NotFoundException({
                    code: 'USER_NOT_FOUND',
                    message: 'User not found',
                });
            }
            if (!user.profile) {
                user.profile = await this.profileRepo.createProfile(user.id, dto, queryRunner.manager);
            }
            else {
                user.profile = await this.profileRepo.updateProfile(user.profile, dto, queryRunner.manager);
            }
            await queryRunner.commitTransaction();
            this.logger.log(`Profile updated for user: ${user.id}`);
            const userMapper = (0, user_mapper_1.toUser)(user);
            const profileMapper = (0, profile_mapper_1.toProfile)(user.profile);
            return this.profileBuilder.buildProfileResponse(userMapper, profileMapper);
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            if (error instanceof common_1.NotFoundException ||
                error instanceof common_1.BadRequestException) {
                throw error;
            }
            this.logger.error(`Failed to update profile for user: ${jwtUser.id}`, error);
            throw new common_1.InternalServerErrorException({
                code: 'PROFILE_UPDATE_FAILED',
                message: 'Failed to update profile',
            });
        }
        finally {
            await queryRunner.release();
        }
    }
    async updateContact(jwtUser, dto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const user = await this.profileRepo.findUserWithProfile(jwtUser.id, queryRunner.manager);
            if (!user) {
                throw new common_1.NotFoundException({
                    code: 'USER_NOT_FOUND',
                    message: 'User not found',
                });
            }
            if (dto.email) {
                const emailTaken = await this.profileRepo.isEmailTaken(dto.email, user.id, queryRunner.manager);
                if (emailTaken) {
                    throw new common_1.ConflictException({
                        code: 'EMAIL_ALREADY_EXISTS',
                        message: 'Email is already in use',
                    });
                }
            }
            if (dto.phone) {
                const phoneTaken = await this.profileRepo.isPhoneTaken(dto.phone, user.id, queryRunner.manager);
                if (phoneTaken) {
                    throw new common_1.ConflictException({
                        code: 'PHONE_ALREADY_EXISTS',
                        message: 'Phone number is already in use',
                    });
                }
            }
            const updatedUser = await this.profileRepo.updateContact(user, dto, queryRunner.manager);
            await queryRunner.commitTransaction();
            this.logger.log(`Contact info updated for user: ${updatedUser.id}`);
            const userMapper = (0, user_mapper_1.toUser)(updatedUser);
            const profileMapper = (0, profile_mapper_1.toProfile)(user.profile);
            return this.profileBuilder.buildProfileResponse(userMapper, profileMapper);
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            if (error instanceof common_1.NotFoundException ||
                error instanceof common_1.ConflictException) {
                throw error;
            }
            this.logger.error(`Failed to update contact for user: ${jwtUser.id}`, error);
            throw new common_1.InternalServerErrorException({
                code: 'CONTACT_UPDATE_FAILED',
                message: 'Failed to update contact information',
            });
        }
        finally {
            await queryRunner.release();
        }
    }
    async changeDisplayName(jwtUser, dto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const user = await this.profileRepo.findUserWithProfile(jwtUser.id, queryRunner.manager);
            if (!user || !user.profile) {
                throw new common_1.NotFoundException({
                    code: 'USER_NOT_FOUND',
                    message: 'User or profile not found',
                });
            }
            const profileMapper = (0, profile_mapper_1.toProfile)(user.profile);
            if (!this.profileDomainService.canChangeDisplayName(profileMapper)) {
                const daysUntilCanChange = this.profileDomainService.getDaysUntilCanChangeDisplayName(profileMapper);
                throw new common_1.ForbiddenException({
                    code: 'DISPLAY_NAME_CHANGE_RESTRICTED',
                    message: `You can only change your display name once every 30 days. Please wait ${daysUntilCanChange} more day(s).`,
                    daysUntilCanChange,
                });
            }
            const validation = this.profileDomainService.validateDisplayNameChange(profileMapper.displayName, dto.displayName);
            if (!validation.valid) {
                throw new common_1.BadRequestException({
                    code: 'INVALID_DISPLAY_NAME',
                    message: validation.error,
                });
            }
            const updatedProfile = await this.profileRepo.changeDisplayName(user.profile, dto.displayName, queryRunner.manager);
            await queryRunner.commitTransaction();
            this.logger.log(`Display name changed for user: ${user.id} ` +
                `(Count: ${updatedProfile.displayNameChangeCount})`);
            return {
                success: true,
                message: 'Display name changed successfully',
                newDisplayName: updatedProfile.displayName,
                changedAt: updatedProfile.lastDisplayNameChange,
                daysUntilNextChange: 30,
            };
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            if (error instanceof common_1.NotFoundException ||
                error instanceof common_1.ForbiddenException ||
                error instanceof common_1.BadRequestException) {
                throw error;
            }
            this.logger.error(`Failed to change display name for user: ${jwtUser.id}`, error);
            throw new common_1.InternalServerErrorException({
                code: 'DISPLAY_NAME_CHANGE_FAILED',
                message: 'Failed to change display name',
            });
        }
        finally {
            await queryRunner.release();
        }
    }
    async updateAvatar(jwtUser, avatarUrl) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const updatedProfile = await this.profileRepo.updateAvatar(jwtUser.id, avatarUrl, queryRunner.manager);
            const user = await this.profileRepo.findUserWithProfile(jwtUser.id, queryRunner.manager);
            await queryRunner.commitTransaction();
            this.logger.log(`Avatar updated for user: ${jwtUser.id}`);
            const userMapper = (0, user_mapper_1.toUser)(user);
            const profileMapper = (0, profile_mapper_1.toProfile)(updatedProfile);
            return this.profileBuilder.buildProfileResponse(userMapper, profileMapper);
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            this.logger.error(`Failed to update avatar for user: ${jwtUser.id}`, error);
            throw new common_1.InternalServerErrorException({
                code: 'AVATAR_UPDATE_FAILED',
                message: 'Failed to update avatar',
            });
        }
        finally {
            await queryRunner.release();
        }
    }
    async deleteAccount(jwtUser) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await this.profileRepo.softDeleteUser(jwtUser.id, queryRunner.manager);
            await queryRunner.commitTransaction();
            this.logger.log(`Account deleted for user: ${jwtUser.id}`);
            return {
                success: true,
                message: 'Account deleted successfully',
            };
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            this.logger.error(`Failed to delete account for user: ${jwtUser.id}`, error);
            throw new common_1.InternalServerErrorException({
                code: 'ACCOUNT_DELETE_FAILED',
                message: 'Failed to delete account',
            });
        }
        finally {
            await queryRunner.release();
        }
    }
    async searchProfiles(searchTerm, limit = 20, offset = 0) {
        try {
            const [profiles, total] = await this.profileRepo.searchProfilesByDisplayName(searchTerm, limit, offset);
            const mappedProfiles = profiles.map(profile => {
                const userMapper = (0, user_mapper_1.toUser)(profile.user);
                const profileMapper = (0, profile_mapper_1.toProfile)(profile);
                return this.profileBuilder.buildPublicProfileResponse(userMapper, profileMapper);
            });
            return { profiles: mappedProfiles, total };
        }
        catch (error) {
            this.logger.error(`Failed to search profiles: ${searchTerm}`, error);
            throw new common_1.InternalServerErrorException({
                code: 'PROFILE_SEARCH_FAILED',
                message: 'Failed to search profiles',
            });
        }
    }
};
exports.ProfileService = ProfileService;
exports.ProfileService = ProfileService = ProfileService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof profile_repository_1.ProfileRepository !== "undefined" && profile_repository_1.ProfileRepository) === "function" ? _a : Object, typeof (_b = typeof profile_response_builder_service_1.ProfileResponseBuilder !== "undefined" && profile_response_builder_service_1.ProfileResponseBuilder) === "function" ? _b : Object, typeof (_c = typeof profile_domain_service_1.ProfileDomainService !== "undefined" && profile_domain_service_1.ProfileDomainService) === "function" ? _c : Object, typeof (_d = typeof typeorm_1.DataSource !== "undefined" && typeorm_1.DataSource) === "function" ? _d : Object, typeof (_e = typeof upload_service_1.UploadService !== "undefined" && upload_service_1.UploadService) === "function" ? _e : Object])
], ProfileService);


/***/ }),

/***/ "./src/modules/quotes/dtos/quote.dto.ts":
/*!**********************************************!*\
  !*** ./src/modules/quotes/dtos/quote.dto.ts ***!
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
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CancelQuoteDto = exports.ReviseQuoteDto = exports.CreateQuoteToCustomerDto = exports.QuoteResponseDto = exports.StatusQuoteDto = exports.RejectQuoteDto = exports.AcceptQuoteDto = exports.UpdateQuoteDto = exports.CreateQuoteDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const quote_status_enum_1 = __webpack_require__(/*! ../enums/quote-status.enum */ "./src/modules/quotes/enums/quote-status.enum.ts");
class CreateQuoteDto {
}
exports.CreateQuoteDto = CreateQuoteDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID post' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateQuoteDto.prototype, "postId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'the price of a quote ', example: 500000 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateQuoteDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Detailed description quote' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(2000),
    __metadata("design:type", String)
], CreateQuoteDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Terms and conditions' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1000),
    __metadata("design:type", String)
], CreateQuoteDto.prototype, "terms", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Estimated time (minutes)', example: 120 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateQuoteDto.prototype, "estimatedDuration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'List of image URLs' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsUrl)({}, { each: true }),
    __metadata("design:type", Array)
], CreateQuoteDto.prototype, "imageUrls", void 0);
class UpdateQuoteDto {
}
exports.UpdateQuoteDto = UpdateQuoteDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'New offer price' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], UpdateQuoteDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'New description' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(2000),
    __metadata("design:type", String)
], UpdateQuoteDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'New Terms' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1000),
    __metadata("design:type", String)
], UpdateQuoteDto.prototype, "terms", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'New estimated time' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], UpdateQuoteDto.prototype, "estimatedDuration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'New image' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsUrl)({}, { each: true }),
    __metadata("design:type", Array)
], UpdateQuoteDto.prototype, "imageUrls", void 0);
class AcceptQuoteDto {
}
exports.AcceptQuoteDto = AcceptQuoteDto;
class RejectQuoteDto {
}
exports.RejectQuoteDto = RejectQuoteDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Reason for refusal' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], RejectQuoteDto.prototype, "reason", void 0);
class StatusQuoteDto {
}
exports.StatusQuoteDto = StatusQuoteDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Post status',
        enum: quote_status_enum_1.QuoteStatus,
        example: quote_status_enum_1.QuoteStatus.CANCELLED,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(quote_status_enum_1.QuoteStatus),
    __metadata("design:type", typeof (_a = typeof quote_status_enum_1.QuoteStatus !== "undefined" && quote_status_enum_1.QuoteStatus) === "function" ? _a : Object)
], StatusQuoteDto.prototype, "status", void 0);
class QuoteResponseDto {
}
exports.QuoteResponseDto = QuoteResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID quote' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], QuoteResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID post' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], QuoteResponseDto.prototype, "postId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID provider' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], QuoteResponseDto.prototype, "providerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'price quote', example: 500000 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], QuoteResponseDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Detailed description' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], QuoteResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'terms' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], QuoteResponseDto.prototype, "terms", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Estimated time (hours)', example: 4 }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], QuoteResponseDto.prototype, "estimatedDuration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'List of image URLs',
        type: [String],
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], QuoteResponseDto.prototype, "imageUrls", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'status quote',
        enum: quote_status_enum_1.QuoteStatus,
        example: quote_status_enum_1.QuoteStatus.PENDING,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", typeof (_b = typeof quote_status_enum_1.QuoteStatus !== "undefined" && quote_status_enum_1.QuoteStatus) === "function" ? _b : Object)
], QuoteResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Acceptance time' }),
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], QuoteResponseDto.prototype, "acceptedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Time of rejection' }),
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], QuoteResponseDto.prototype, "rejectedAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Reason for refusal' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], QuoteResponseDto.prototype, "rejectionReason", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'time cancel' }),
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], QuoteResponseDto.prototype, "cancelledAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Reason for cancellation' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], QuoteResponseDto.prototype, "cancellationReason", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'creation time' }),
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], QuoteResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Update time' }),
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", typeof (_g = typeof Date !== "undefined" && Date) === "function" ? _g : Object)
], QuoteResponseDto.prototype, "updatedAt", void 0);
class CreateQuoteToCustomerDto {
}
exports.CreateQuoteToCustomerDto = CreateQuoteToCustomerDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID post' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateQuoteToCustomerDto.prototype, "providerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'the price of a quote ', example: 500000 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateQuoteToCustomerDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Detailed description quote' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(2000),
    __metadata("design:type", String)
], CreateQuoteToCustomerDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Terms and conditions' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1000),
    __metadata("design:type", String)
], CreateQuoteToCustomerDto.prototype, "terms", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Estimated time (minutes)', example: 120 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateQuoteToCustomerDto.prototype, "estimatedDuration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'List of image URLs' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsUrl)({}, { each: true }),
    __metadata("design:type", Array)
], CreateQuoteToCustomerDto.prototype, "imageUrls", void 0);
class ReviseQuoteDto {
}
exports.ReviseQuoteDto = ReviseQuoteDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Giá mới' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], ReviseQuoteDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Mô tả cập nhật (nếu có)' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(2000),
    __metadata("design:type", String)
], ReviseQuoteDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(1000),
    __metadata("design:type", String)
], ReviseQuoteDto.prototype, "terms", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], ReviseQuoteDto.prototype, "estimatedDuration", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Lý do thay đổi giá' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], ReviseQuoteDto.prototype, "changeReason", void 0);
class CancelQuoteDto {
}
exports.CancelQuoteDto = CancelQuoteDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Lý do hủy' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], CancelQuoteDto.prototype, "reason", void 0);


/***/ }),

/***/ "./src/modules/quotes/entities/quote-revision.entity.ts":
/*!**************************************************************!*\
  !*** ./src/modules/quotes/entities/quote-revision.entity.ts ***!
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuoteRevision = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const quote_entity_1 = __webpack_require__(/*! ./quote.entity */ "./src/modules/quotes/entities/quote.entity.ts");
let QuoteRevision = class QuoteRevision {
    constructor() {
        this.imageUrls = [];
    }
};
exports.QuoteRevision = QuoteRevision;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], QuoteRevision.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'quote_id' }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], QuoteRevision.prototype, "quoteId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => quote_entity_1.Quote, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'quote_id' }),
    __metadata("design:type", typeof (_a = typeof quote_entity_1.Quote !== "undefined" && quote_entity_1.Quote) === "function" ? _a : Object)
], QuoteRevision.prototype, "quote", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'decimal',
        precision: 12,
        scale: 2,
    }),
    __metadata("design:type", Number)
], QuoteRevision.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], QuoteRevision.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QuoteRevision.prototype, "terms", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'estimated_duration',
        type: 'int',
        nullable: true,
    }),
    __metadata("design:type", Number)
], QuoteRevision.prototype, "estimatedDuration", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'image_urls',
        type: 'text',
        array: true,
        nullable: true,
        default: '{}',
    }),
    __metadata("design:type", Array)
], QuoteRevision.prototype, "imageUrls", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'revision_number',
        type: 'int',
        comment: 'Số lần chào giá (1, 2, 3...)',
    }),
    __metadata("design:type", Number)
], QuoteRevision.prototype, "revisionNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'changed_by',
        comment: 'Provider ID who made this revision',
    }),
    __metadata("design:type", String)
], QuoteRevision.prototype, "changedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QuoteRevision.prototype, "changeReason", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], QuoteRevision.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'used_for_order_id', nullable: true }),
    __metadata("design:type", String)
], QuoteRevision.prototype, "usedForOrderId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'used_at', type: 'timestamp', nullable: true }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], QuoteRevision.prototype, "usedAt", void 0);
exports.QuoteRevision = QuoteRevision = __decorate([
    (0, typeorm_1.Entity)('quote_revisions'),
    (0, typeorm_1.Index)(['quoteId', 'createdAt'])
], QuoteRevision);


/***/ }),

/***/ "./src/modules/quotes/entities/quote.entity.ts":
/*!*****************************************************!*\
  !*** ./src/modules/quotes/entities/quote.entity.ts ***!
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Quote = void 0;
const post_entity_1 = __webpack_require__(/*! @/modules/posts/entities/post.entity */ "./src/modules/posts/entities/post.entity.ts");
const user_entity_1 = __webpack_require__(/*! @/modules/users/entities/user.entity */ "./src/modules/users/entities/user.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const quote_status_enum_1 = __webpack_require__(/*! ../enums/quote-status.enum */ "./src/modules/quotes/enums/quote-status.enum.ts");
const quote_revision_entity_1 = __webpack_require__(/*! ./quote-revision.entity */ "./src/modules/quotes/entities/quote-revision.entity.ts");
let Quote = class Quote {
    constructor() {
        this.imageUrls = [];
        this.status = quote_status_enum_1.QuoteStatus.PENDING;
        this.revisionCount = 1;
    }
    isPending() {
        return this.status === quote_status_enum_1.QuoteStatus.PENDING && !this.deletedAt;
    }
    isAcceptedForChat() {
        return this.status === quote_status_enum_1.QuoteStatus.ACCEPTED_FOR_CHAT;
    }
    isRevising() {
        return this.status === quote_status_enum_1.QuoteStatus.REVISING;
    }
    isOrderRequested() {
        return this.status === quote_status_enum_1.QuoteStatus.ORDER_REQUESTED;
    }
    isConfirmed() {
        return this.status === quote_status_enum_1.QuoteStatus.CONFIRMED;
    }
    isRejected() {
        return this.status === quote_status_enum_1.QuoteStatus.REJECTED;
    }
    isCancelled() {
        return this.status === quote_status_enum_1.QuoteStatus.CANCELLED;
    }
    canEdit() {
        return this.status === quote_status_enum_1.QuoteStatus.PENDING && !this.deletedAt;
    }
    canRevise() {
        return (this.status === quote_status_enum_1.QuoteStatus.ACCEPTED_FOR_CHAT ||
            this.status === quote_status_enum_1.QuoteStatus.REVISING) && !this.deletedAt;
    }
    canCancel() {
        return (this.status === quote_status_enum_1.QuoteStatus.PENDING ||
            this.status === quote_status_enum_1.QuoteStatus.ACCEPTED_FOR_CHAT ||
            this.status === quote_status_enum_1.QuoteStatus.REVISING ||
            this.status === quote_status_enum_1.QuoteStatus.ORDER_REQUESTED) && !this.deletedAt;
    }
    canRequestOrder() {
        return (this.status === quote_status_enum_1.QuoteStatus.ACCEPTED_FOR_CHAT ||
            this.status === quote_status_enum_1.QuoteStatus.REVISING) && !this.deletedAt;
    }
    canConfirmOrder() {
        return this.status === quote_status_enum_1.QuoteStatus.ORDER_REQUESTED && !this.deletedAt;
    }
    belongsTo(providerId) {
        return this.providerId === providerId;
    }
    isActive() {
        return !this.deletedAt &&
            this.status !== quote_status_enum_1.QuoteStatus.REJECTED &&
            this.status !== quote_status_enum_1.QuoteStatus.CANCELLED &&
            this.status !== quote_status_enum_1.QuoteStatus.CONFIRMED;
    }
};
exports.Quote = Quote;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Quote.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'post_id' }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], Quote.prototype, "postId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => post_entity_1.PostCustomer, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'post_id' }),
    __metadata("design:type", typeof (_a = typeof post_entity_1.PostCustomer !== "undefined" && post_entity_1.PostCustomer) === "function" ? _a : Object)
], Quote.prototype, "post", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'provider_id' }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], Quote.prototype, "providerId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { eager: false, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'provider_id' }),
    __metadata("design:type", typeof (_b = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _b : Object)
], Quote.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'decimal',
        precision: 12,
        scale: 2,
    }),
    __metadata("design:type", Number)
], Quote.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Quote.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Quote.prototype, "terms", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'estimated_duration',
        type: 'int',
        nullable: true,
        comment: 'Estimated completion time (minutes)'
    }),
    __metadata("design:type", Number)
], Quote.prototype, "estimatedDuration", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'image_urls',
        type: 'text',
        array: true,
        nullable: true,
        default: '{}',
    }),
    __metadata("design:type", Array)
], Quote.prototype, "imageUrls", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: quote_status_enum_1.QuoteStatus,
        default: quote_status_enum_1.QuoteStatus.PENDING,
    }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", typeof (_c = typeof quote_status_enum_1.QuoteStatus !== "undefined" && quote_status_enum_1.QuoteStatus) === "function" ? _c : Object)
], Quote.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'revision_count',
        type: 'int',
        default: 1,
        comment: 'Số lần đã chào giá (bắt đầu từ 1)',
    }),
    __metadata("design:type", Number)
], Quote.prototype, "revisionCount", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => quote_revision_entity_1.QuoteRevision, (revision) => revision.quote, { cascade: true }),
    __metadata("design:type", Array)
], Quote.prototype, "revisions", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'chat_opened_at',
        type: 'timestamp with time zone',
        nullable: true,
        comment: 'Thời điểm khách chấp nhận và mở chat',
    }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Quote.prototype, "chatOpenedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'order_requested_at',
        type: 'timestamp with time zone',
        nullable: true,
        comment: 'Thời điểm khách nhấn đặt đơn với revision hiện tại',
    }),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], Quote.prototype, "orderRequestedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'accepted_at',
        type: 'timestamp with time zone',
        nullable: true
    }),
    __metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], Quote.prototype, "acceptedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'rejected_at',
        type: 'timestamp with time zone',
        nullable: true
    }),
    __metadata("design:type", typeof (_g = typeof Date !== "undefined" && Date) === "function" ? _g : Object)
], Quote.prototype, "rejectedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'cancelled_at',
        type: 'timestamp with time zone',
        nullable: true
    }),
    __metadata("design:type", typeof (_h = typeof Date !== "undefined" && Date) === "function" ? _h : Object)
], Quote.prototype, "cancelledAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'confirmed_at',
        type: 'timestamp with time zone',
        nullable: true,
        comment: 'Thời điểm thợ xác nhận làm (tạo order)',
    }),
    __metadata("design:type", typeof (_j = typeof Date !== "undefined" && Date) === "function" ? _j : Object)
], Quote.prototype, "confirmedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'rejection_reason',
        type: 'text',
        nullable: true
    }),
    __metadata("design:type", String)
], Quote.prototype, "rejectionReason", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'cancellation_reason',
        type: 'text',
        nullable: true
    }),
    __metadata("design:type", String)
], Quote.prototype, "cancellationReason", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", typeof (_k = typeof Date !== "undefined" && Date) === "function" ? _k : Object)
], Quote.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", typeof (_l = typeof Date !== "undefined" && Date) === "function" ? _l : Object)
], Quote.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at' }),
    __metadata("design:type", typeof (_m = typeof Date !== "undefined" && Date) === "function" ? _m : Object)
], Quote.prototype, "deletedAt", void 0);
exports.Quote = Quote = __decorate([
    (0, typeorm_1.Entity)('quotes'),
    (0, typeorm_1.Index)(['postId', 'providerId', 'status']),
    (0, typeorm_1.Index)(['providerId', 'status', 'createdAt']),
    (0, typeorm_1.Index)(['postId', 'status', 'createdAt'])
], Quote);


/***/ }),

/***/ "./src/modules/quotes/enums/quote-status.enum.ts":
/*!*******************************************************!*\
  !*** ./src/modules/quotes/enums/quote-status.enum.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuoteStatus = void 0;
var QuoteStatus;
(function (QuoteStatus) {
    QuoteStatus["PENDING"] = "pending";
    QuoteStatus["ACCEPTED"] = "accepted";
    QuoteStatus["REJECTED"] = "rejected";
    QuoteStatus["CANCELLED"] = "cancelled";
    QuoteStatus["ACCEPTED_FOR_CHAT"] = "accepted_for_chat";
    QuoteStatus["REVISING"] = "revising";
    QuoteStatus["ORDER_REQUESTED"] = "order_requested";
    QuoteStatus["CONFIRMED"] = "confirmed";
    QuoteStatus["EXPIRED"] = "expired";
})(QuoteStatus || (exports.QuoteStatus = QuoteStatus = {}));


/***/ }),

/***/ "./src/modules/quotes/quote.controller.ts":
/*!************************************************!*\
  !*** ./src/modules/quotes/quote.controller.ts ***!
  \************************************************/
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
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuoteController = void 0;
const _Roles_1 = __webpack_require__(/*! @/common/decorators/@Roles */ "./src/common/decorators/@Roles.ts");
const user_role_enum_1 = __webpack_require__(/*! @/common/enums/user-role.enum */ "./src/common/enums/user-role.enum.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! @/common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const roles_guard_1 = __webpack_require__(/*! @/common/guards/roles.guard */ "./src/common/guards/roles.guard.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const _CurrentUserId_1 = __webpack_require__(/*! ../../common/decorators/@CurrentUserId */ "./src/common/decorators/@CurrentUserId.ts");
const quote_dto_1 = __webpack_require__(/*! ./dtos/quote.dto */ "./src/modules/quotes/dtos/quote.dto.ts");
const quote_service_1 = __webpack_require__(/*! ./quote.service */ "./src/modules/quotes/quote.service.ts");
let QuoteController = class QuoteController {
    constructor(quoteService) {
        this.quoteService = quoteService;
    }
    async createQuote(providerId, dto) {
        return await this.quoteService.createQuote(providerId, dto);
    }
    async reviseQuote(quoteId, providerId, dto) {
        return await this.quoteService.reviseQuote(quoteId, providerId, dto);
    }
    async updateQuote(quoteId, providerId, dto) {
        return await this.quoteService.updateQuote(quoteId, providerId, dto);
    }
    async cancelQuote(quoteId, providerId, dto) {
        return await this.quoteService.cancelQuote(quoteId, providerId, dto.reason);
    }
    async deleteQuote(quoteId, providerId) {
        await this.quoteService.deleteQuote(quoteId, providerId);
        return { success: true, message: 'Quote deleted' };
    }
    async getMyQuotes(providerId, query) {
        return await this.quoteService.getProviderQuotes(providerId, query.status);
    }
    async acceptQuoteForChat(quoteId, customerId) {
        return await this.quoteService.acceptQuoteForChat(quoteId, customerId);
    }
    async requestOrderFromRevision(quoteId, customerId, dto) {
        return await this.quoteService.reviseQuote(quoteId, customerId, dto);
    }
    async rejectQuote(quoteId, customerId, dto) {
        return await this.quoteService.rejectQuote(quoteId, customerId, dto.reason);
    }
    async getPostQuotes(postId, customerId) {
        return await this.quoteService.getPostQuotes(postId, customerId);
    }
    async getQuoteById(quoteId, userId) {
        return await this.quoteService.getQuoteById(quoteId, userId);
    }
    async getQuoteWithRevisions(quoteId, userId) {
        return await this.quoteService.getQuoteRevisionHistory(quoteId, userId);
    }
};
exports.QuoteController = QuoteController;
__decorate([
    (0, common_1.Post)(),
    (0, _Roles_1.Roles)(user_role_enum_1.UserRole.PROVIDER),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: '[Provider] Tạo quote mới cho post',
        description: 'Provider chào giá lần đầu cho một post của customer'
    }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Quote created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Validation failed' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Already quoted this post' }),
    __param(0, (0, _CurrentUserId_1.CurrentUserId)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof quote_dto_1.CreateQuoteDto !== "undefined" && quote_dto_1.CreateQuoteDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], QuoteController.prototype, "createQuote", null);
__decorate([
    (0, common_1.Post)(':id/revise'),
    (0, _Roles_1.Roles)(user_role_enum_1.UserRole.PROVIDER),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: '[Provider] Chào giá lại trong chat',
        description: 'Provider thay đổi giá sau khi chat đã mở. Tạo revision mới.'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Quote revised successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Cannot revise at current status' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, _CurrentUserId_1.CurrentUserId)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, typeof (_c = typeof quote_dto_1.ReviseQuoteDto !== "undefined" && quote_dto_1.ReviseQuoteDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], QuoteController.prototype, "reviseQuote", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, _Roles_1.Roles)(user_role_enum_1.UserRole.PROVIDER),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: '[Provider] Sửa quote (chỉ khi PENDING)',
        description: 'Chỉ có thể sửa khi quote chưa được accept. Không tạo revision mới.'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Quote updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Cannot edit accepted quote' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, _CurrentUserId_1.CurrentUserId)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, typeof (_d = typeof quote_dto_1.UpdateQuoteDto !== "undefined" && quote_dto_1.UpdateQuoteDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], QuoteController.prototype, "updateQuote", null);
__decorate([
    (0, common_1.Post)(':id/cancel'),
    (0, _Roles_1.Roles)(user_role_enum_1.UserRole.PROVIDER),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: '[Provider] Hủy quote',
        description: 'Provider hủy quote. Có thể hủy trước khi order được tạo.'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Quote cancelled successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Cannot cancel' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, _CurrentUserId_1.CurrentUserId)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, typeof (_e = typeof quote_dto_1.CancelQuoteDto !== "undefined" && quote_dto_1.CancelQuoteDto) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], QuoteController.prototype, "cancelQuote", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, _Roles_1.Roles)(user_role_enum_1.UserRole.PROVIDER),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: '[Provider] Xóa quote',
        description: 'Soft delete quote. Chỉ có thể xóa khi chưa có order.'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Quote deleted successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, _CurrentUserId_1.CurrentUserId)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], QuoteController.prototype, "deleteQuote", null);
__decorate([
    (0, common_1.Get)('my-quotes'),
    (0, _Roles_1.Roles)(user_role_enum_1.UserRole.PROVIDER),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: '[Provider] Lấy danh sách quote của tôi',
        description: 'Xem tất cả quotes đã tạo, có thể filter theo status'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success' }),
    __param(0, (0, _CurrentUserId_1.CurrentUserId)('id')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_f = typeof quote_dto_1.QuoteResponseDto !== "undefined" && quote_dto_1.QuoteResponseDto) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], QuoteController.prototype, "getMyQuotes", null);
__decorate([
    (0, common_1.Post)(':id/accept-for-chat'),
    (0, _Roles_1.Roles)(user_role_enum_1.UserRole.CUSTOMER),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: '[Customer] Chấp nhận quote để mở chat',
        description: 'Customer chấp nhận quote, mở conversation để thương lượng. KHÔNG tạo order ngay.'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Chat opened successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Cannot accept quote' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, _CurrentUserId_1.CurrentUserId)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], QuoteController.prototype, "acceptQuoteForChat", null);
__decorate([
    (0, common_1.Post)(':id/request-order'),
    (0, _Roles_1.Roles)(user_role_enum_1.UserRole.CUSTOMER),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: '[Customer] Nhấn đặt đơn với revision cụ thể',
        description: 'Customer chọn một revision (hoặc revision hiện tại) để tạo order. Provider cần confirm.'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Order requested successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Cannot request order' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, _CurrentUserId_1.CurrentUserId)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, typeof (_g = typeof quote_dto_1.CreateQuoteDto !== "undefined" && quote_dto_1.CreateQuoteDto) === "function" ? _g : Object]),
    __metadata("design:returntype", Promise)
], QuoteController.prototype, "requestOrderFromRevision", null);
__decorate([
    (0, common_1.Post)(':id/reject'),
    (0, _Roles_1.Roles)(user_role_enum_1.UserRole.CUSTOMER),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: '[Customer] Từ chối quote',
        description: 'Customer từ chối quote khi còn PENDING'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Quote rejected successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, _CurrentUserId_1.CurrentUserId)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, typeof (_h = typeof quote_dto_1.RejectQuoteDto !== "undefined" && quote_dto_1.RejectQuoteDto) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], QuoteController.prototype, "rejectQuote", null);
__decorate([
    (0, common_1.Get)('post/:postId'),
    (0, _Roles_1.Roles)(user_role_enum_1.UserRole.CUSTOMER),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: '[Customer] Lấy tất cả quote của một post',
        description: 'Xem tất cả quotes cho post của mình'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success' }),
    __param(0, (0, common_1.Param)('postId')),
    __param(1, (0, _CurrentUserId_1.CurrentUserId)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], QuoteController.prototype, "getPostQuotes", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Xem chi tiết quote',
        description: 'Lấy thông tin quote (không bao gồm revisions)'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'No access' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, _CurrentUserId_1.CurrentUserId)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], QuoteController.prototype, "getQuoteById", null);
__decorate([
    (0, common_1.Get)(':id/with-revisions'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Xem quote với toàn bộ lịch sử revisions',
        description: 'Dùng cho chat để hiển thị lịch sử chào giá. Customer có thể chọn revision để tạo order.'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'No access' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, _CurrentUserId_1.CurrentUserId)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], QuoteController.prototype, "getQuoteWithRevisions", null);
exports.QuoteController = QuoteController = __decorate([
    (0, swagger_1.ApiTags)('Quotes'),
    (0, common_1.Controller)('quotes'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [typeof (_a = typeof quote_service_1.QuoteService !== "undefined" && quote_service_1.QuoteService) === "function" ? _a : Object])
], QuoteController);


/***/ }),

/***/ "./src/modules/quotes/quote.service.ts":
/*!*********************************************!*\
  !*** ./src/modules/quotes/quote.service.ts ***!
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
var QuoteService_1;
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuoteService = void 0;
const post_repository_1 = __webpack_require__(/*! @/modules/posts/repositories/post.repository */ "./src/modules/posts/repositories/post.repository.ts");
const user_repository_1 = __webpack_require__(/*! @/modules/users/repositorys/user.repository */ "./src/modules/users/repositorys/user.repository.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const quote_repository_1 = __webpack_require__(/*! ./repositories/quote.repository */ "./src/modules/quotes/repositories/quote.repository.ts");
const quote_notification_service_1 = __webpack_require__(/*! ./services/quote-notification.service */ "./src/modules/quotes/services/quote-notification.service.ts");
const quote_query_service_1 = __webpack_require__(/*! ./services/quote-query.service */ "./src/modules/quotes/services/quote-query.service.ts");
const quote_revision_service_1 = __webpack_require__(/*! ./services/quote-revision.service */ "./src/modules/quotes/services/quote-revision.service.ts");
const quote_status_service_1 = __webpack_require__(/*! ./services/quote-status.service */ "./src/modules/quotes/services/quote-status.service.ts");
const quote_validation_service_1 = __webpack_require__(/*! ./services/quote-validation.service */ "./src/modules/quotes/services/quote-validation.service.ts");
let QuoteService = QuoteService_1 = class QuoteService {
    constructor(postRepository, userRepository, quoteRepo, validationService, statusService, queryService, revisionService, notificationService) {
        this.postRepository = postRepository;
        this.userRepository = userRepository;
        this.quoteRepo = quoteRepo;
        this.validationService = validationService;
        this.statusService = statusService;
        this.queryService = queryService;
        this.revisionService = revisionService;
        this.notificationService = notificationService;
        this.logger = new common_1.Logger(QuoteService_1.name);
    }
    async createQuote(providerId, dto) {
        const provider = await this.validationService.validateProvider(providerId);
        const post = await this.validationService.validatePostForQuote(dto.postId, providerId);
        this.validationService.validatePrice(dto.price, post.budget);
        const quote = this.quoteRepo.create({
            postId: dto.postId,
            providerId,
            price: dto.price,
            description: dto.description,
            terms: dto.terms,
            estimatedDuration: dto.estimatedDuration,
            imageUrls: dto.imageUrls || [],
        });
        const savedQuote = await this.quoteRepo.save(quote);
        await this.notificationService.notifyNewQuote(post.customerId, savedQuote, provider, post);
        this.logger.log(`Quote created: ${savedQuote.id} for post ${post.id}`);
        return savedQuote;
    }
    async acceptQuoteForChat(quoteId, customerId) {
        const quote = await this.queryService.findQuoteWithRelations(quoteId, [
            'post',
            'provider',
        ]);
        this.validationService.validatePostOwnership(quote.post, customerId);
        this.validationService.validateQuoteIsPending(quote);
        this.validationService.validatePostIsOpen(quote.post);
        return await this.statusService.acceptForChat(quote, customerId);
    }
    async reviseQuote(quoteId, providerId, dto) {
        const quote = await this.queryService.findQuoteWithRelations(quoteId, ['post']);
        this.validationService.validateQuoteOwnership(quote, providerId);
        if (!quote.canRevise()) {
            throw new common_1.BadRequestException('Quote cannot be revised at this stage');
        }
        this.validationService.validatePrice(dto.price, quote.post.budget);
        return await this.statusService.reviseQuote(quote, dto.price, dto.description, dto.terms, dto.estimatedDuration, dto.changeReason);
    }
    async requestOrder(quoteId, customerId) {
        const quote = await this.queryService.findQuoteWithRelations(quoteId, ['post']);
        this.validationService.validatePostOwnership(quote.post, customerId);
        if (!quote.canRequestOrder()) {
            throw new common_1.BadRequestException('Cannot request order for this quote');
        }
        return await this.statusService.requestOrder(quote, customerId);
    }
    async updateQuote(quoteId, providerId, dto) {
        const quote = await this.queryService.findQuoteWithRelations(quoteId, [
            'post',
            'provider',
        ]);
        this.validationService.validateQuoteOwnership(quote, providerId);
        this.validationService.validateQuoteCanEdit(quote);
        if (dto.price !== undefined) {
            this.validationService.validatePrice(dto.price);
            quote.price = dto.price;
        }
        this.updateQuoteFields(quote, dto);
        return await this.quoteRepo.save(quote);
    }
    async cancelQuote(quoteId, providerId, reason) {
        const quote = await this.queryService.findQuoteWithRelations(quoteId, ['post']);
        this.validationService.validateQuoteOwnership(quote, providerId);
        this.validationService.validateQuoteCanCancel(quote);
        return await this.statusService.cancelQuote(quote, reason);
    }
    async rejectQuote(quoteId, customerId, reason) {
        const quote = await this.queryService.findQuoteWithRelations(quoteId, ['post']);
        this.validationService.validatePostOwnership(quote.post, customerId);
        this.validationService.validateQuoteIsPending(quote);
        return await this.statusService.rejectQuote(quote, reason);
    }
    async getProviderQuotes(providerId, status) {
        return await this.queryService.findProviderQuotes(providerId, status);
    }
    async getPostQuotes(postId, customerId) {
        const post = await this.postRepository.findById(postId);
        if (!post) {
            throw new common_1.NotFoundException('Post not found');
        }
        this.validationService.validatePostOwnership(post, customerId);
        return await this.queryService.findPostQuotes(postId);
    }
    async getQuoteById(quoteId, userId) {
        const quote = await this.queryService.findQuoteWithRelations(quoteId, [
            'post',
            'post.customer',
            'provider',
        ]);
        this.validationService.validateQuoteAccess(quote, userId);
        return quote;
    }
    async getQuoteRevisionHistory(quoteId, userId) {
        const quote = await this.queryService.findQuoteWithRelations(quoteId, ['post']);
        this.validationService.validateQuoteAccess(quote, userId);
        const revisions = await this.revisionService.getRevisionHistory(quoteId);
        const priceChanges = await this.revisionService.getPriceChanges(quoteId);
        return {
            quote,
            revisions,
            priceChanges,
        };
    }
    async deleteQuote(quoteId, providerId) {
        const quote = await this.queryService.findQuoteById(quoteId);
        this.validationService.validateQuoteOwnership(quote, providerId);
        this.validationService.validateQuoteCanCancel(quote);
        await this.quoteRepo.softDelete(quoteId);
    }
    updateQuoteFields(quote, dto) {
        if (dto.description !== undefined) {
            quote.description = dto.description;
        }
        if (dto.terms !== undefined) {
            quote.terms = dto.terms;
        }
        if (dto.estimatedDuration !== undefined) {
            quote.estimatedDuration = dto.estimatedDuration;
        }
        if (dto.imageUrls !== undefined) {
            quote.imageUrls = dto.imageUrls;
        }
    }
};
exports.QuoteService = QuoteService;
exports.QuoteService = QuoteService = QuoteService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof post_repository_1.PostRepository !== "undefined" && post_repository_1.PostRepository) === "function" ? _a : Object, typeof (_b = typeof user_repository_1.UserRepository !== "undefined" && user_repository_1.UserRepository) === "function" ? _b : Object, typeof (_c = typeof quote_repository_1.QuoteRepository !== "undefined" && quote_repository_1.QuoteRepository) === "function" ? _c : Object, typeof (_d = typeof quote_validation_service_1.QuoteValidationService !== "undefined" && quote_validation_service_1.QuoteValidationService) === "function" ? _d : Object, typeof (_e = typeof quote_status_service_1.QuoteStatusService !== "undefined" && quote_status_service_1.QuoteStatusService) === "function" ? _e : Object, typeof (_f = typeof quote_query_service_1.QuoteQueryService !== "undefined" && quote_query_service_1.QuoteQueryService) === "function" ? _f : Object, typeof (_g = typeof quote_revision_service_1.QuoteRevisionService !== "undefined" && quote_revision_service_1.QuoteRevisionService) === "function" ? _g : Object, typeof (_h = typeof quote_notification_service_1.QuoteNotificationService !== "undefined" && quote_notification_service_1.QuoteNotificationService) === "function" ? _h : Object])
], QuoteService);


/***/ }),

/***/ "./src/modules/quotes/quotes.module.ts":
/*!*********************************************!*\
  !*** ./src/modules/quotes/quotes.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuoteModule = void 0;
const notifications_module_1 = __webpack_require__(/*! @/modules/notifications/notifications.module */ "./src/modules/notifications/notifications.module.ts");
const post_entity_1 = __webpack_require__(/*! @/modules/posts/entities/post.entity */ "./src/modules/posts/entities/post.entity.ts");
const posts_module_1 = __webpack_require__(/*! @/modules/posts/posts.module */ "./src/modules/posts/posts.module.ts");
const user_entity_1 = __webpack_require__(/*! @/modules/users/entities/user.entity */ "./src/modules/users/entities/user.entity.ts");
const users_module_1 = __webpack_require__(/*! @/modules/users/users.module */ "./src/modules/users/users.module.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const quote_entity_1 = __webpack_require__(/*! ./entities/quote.entity */ "./src/modules/quotes/entities/quote.entity.ts");
const quote_controller_1 = __webpack_require__(/*! ./quote.controller */ "./src/modules/quotes/quote.controller.ts");
const quote_service_1 = __webpack_require__(/*! ./quote.service */ "./src/modules/quotes/quote.service.ts");
const quote_repository_1 = __webpack_require__(/*! ./repositories/quote.repository */ "./src/modules/quotes/repositories/quote.repository.ts");
const quote_notification_service_1 = __webpack_require__(/*! ./services/quote-notification.service */ "./src/modules/quotes/services/quote-notification.service.ts");
const quote_query_service_1 = __webpack_require__(/*! ./services/quote-query.service */ "./src/modules/quotes/services/quote-query.service.ts");
const quote_status_service_1 = __webpack_require__(/*! ./services/quote-status.service */ "./src/modules/quotes/services/quote-status.service.ts");
const quote_revision_service_1 = __webpack_require__(/*! ./services/quote-revision.service */ "./src/modules/quotes/services/quote-revision.service.ts");
const chat_module_1 = __webpack_require__(/*! @/modules/chat//chat.module */ "./src/modules/chat/chat.module.ts");
const quote_revision_entity_1 = __webpack_require__(/*! @/modules/quotes/entities/quote-revision.entity */ "./src/modules/quotes/entities/quote-revision.entity.ts");
const quote_validation_service_1 = __webpack_require__(/*! ./services/quote-validation.service */ "./src/modules/quotes/services/quote-validation.service.ts");
let QuoteModule = class QuoteModule {
};
exports.QuoteModule = QuoteModule;
exports.QuoteModule = QuoteModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([quote_entity_1.Quote, post_entity_1.PostCustomer, user_entity_1.User, quote_revision_entity_1.QuoteRevision]),
            notifications_module_1.NotificationsModule,
            posts_module_1.PostsModule,
            users_module_1.UsersModule,
            chat_module_1.ChatModule
        ],
        controllers: [quote_controller_1.QuoteController],
        providers: [
            quote_repository_1.QuoteRepository,
            quote_service_1.QuoteService,
            quote_validation_service_1.QuoteValidationService,
            quote_status_service_1.QuoteStatusService,
            quote_query_service_1.QuoteQueryService,
            quote_notification_service_1.QuoteNotificationService, quote_query_service_1.QuoteQueryService, quote_revision_service_1.QuoteRevisionService
        ],
        exports: [quote_service_1.QuoteService, quote_status_service_1.QuoteStatusService, quote_query_service_1.QuoteQueryService, quote_revision_service_1.QuoteRevisionService],
    })
], QuoteModule);


/***/ }),

/***/ "./src/modules/quotes/repositories/quote.repository.ts":
/*!*************************************************************!*\
  !*** ./src/modules/quotes/repositories/quote.repository.ts ***!
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuoteRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const quote_entity_1 = __webpack_require__(/*! ../entities/quote.entity */ "./src/modules/quotes/entities/quote.entity.ts");
let QuoteRepository = class QuoteRepository {
    constructor(repository) {
        this.repository = repository;
    }
    getRepository(manager) {
        return manager ? manager.getRepository(quote_entity_1.Quote) : this.repository;
    }
    create(data, manager) {
        return this.getRepository(manager).create(data);
    }
    async save(quote, manager) {
        return await this.getRepository(manager).save(quote);
    }
    async findOne(options, manager) {
        return await this.getRepository(manager).findOne(options);
    }
    async find(options, manager) {
        return await this.getRepository(manager).find(options);
    }
    async count(options, manager) {
        return await this.getRepository(manager).count(options);
    }
    createQueryBuilder(alias, manager) {
        return this.getRepository(manager).createQueryBuilder(alias);
    }
    async softDelete(id, manager) {
        await this.getRepository(manager).softDelete(id);
    }
};
exports.QuoteRepository = QuoteRepository;
exports.QuoteRepository = QuoteRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(quote_entity_1.Quote)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], QuoteRepository);


/***/ }),

/***/ "./src/modules/quotes/services/quote-notification.service.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/quotes/services/quote-notification.service.ts ***!
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
var QuoteNotificationService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuoteNotificationService = void 0;
const notification_service_1 = __webpack_require__(/*! @/modules/notifications/notification.service */ "./src/modules/notifications/notification.service.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let QuoteNotificationService = QuoteNotificationService_1 = class QuoteNotificationService {
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.logger = new common_1.Logger(QuoteNotificationService_1.name);
    }
    async notifyNewQuote(customerId, quote, provider, post) {
        try {
            await this.notificationService.notifyNewQuote(customerId, {
                postId: post.id,
                quoteId: quote.id,
                providerName: provider.profile?.fullName || 'Thợ',
                price: parseFloat(quote.price.toString()),
                postTitle: post.title,
            });
        }
        catch {
            this.logger.error(`Failed to notify new quote:`);
        }
    }
    async notifyQuoteAcceptedForChat(quote, customerId) {
        try {
            const customerName = quote.post.customer?.profile?.fullName || 'Khách hàng';
            await this.notificationService.notifyQuoteAcceptedForChat(quote.providerId, {
                quoteId: quote.id,
                postId: quote.postId,
                postTitle: quote.post.title,
                customerName,
            });
        }
        catch {
            this.logger.error(`Failed to notify quote accepted for chat: `);
        }
    }
    async notifyQuoteRevised(quote, customerId, oldPrice) {
        try {
            const providerName = quote.provider?.profile?.fullName || 'Thợ';
            const newPrice = parseFloat(quote.price.toString());
            await this.notificationService.notifyQuoteRevised(customerId, {
                quoteId: quote.id,
                postId: quote.postId,
                postTitle: quote.post.title,
                providerName,
                newPrice,
                oldPrice,
            });
        }
        catch {
            this.logger.error(`Failed to notify quote revised:`);
        }
    }
    async notifyOrderRequested(quote, customerId, revisionNumber, notes) {
        try {
            const customerName = quote.post.customer?.profile?.fullName || 'Khách hàng';
            await this.notificationService.notifyOrderRequested(quote.providerId, {
                quoteId: quote.id,
                postId: quote.postId,
                postTitle: quote.post.title,
                customerName,
                price: parseFloat(quote.price.toString()),
                revisionNumber,
                notes,
            });
        }
        catch {
            this.logger.error(`Failed to notify order requested: `);
        }
    }
    async notifyQuoteRejected(quote, reason) {
        try {
            await this.notificationService.notifyQuoteRejected(quote.providerId, {
                quoteId: quote.id,
                postId: quote.postId,
                postTitle: quote.post.title,
                reason,
            });
        }
        catch {
            this.logger.error(`Failed to notify quote rejected:`);
        }
    }
    async notifyQuoteCancelled(quote, customerId, reason) {
        try {
            const providerName = quote.provider?.profile?.fullName || 'Thợ';
            await this.notificationService.notifyQuoteCancelled(customerId, {
                quoteId: quote.id,
                postId: quote.postId,
                postTitle: quote.post.title,
                providerName,
                reason,
            });
        }
        catch {
            this.logger.error(`Failed to notify quote cancelled:`);
        }
    }
};
exports.QuoteNotificationService = QuoteNotificationService;
exports.QuoteNotificationService = QuoteNotificationService = QuoteNotificationService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof notification_service_1.NotificationService !== "undefined" && notification_service_1.NotificationService) === "function" ? _a : Object])
], QuoteNotificationService);


/***/ }),

/***/ "./src/modules/quotes/services/quote-query.service.ts":
/*!************************************************************!*\
  !*** ./src/modules/quotes/services/quote-query.service.ts ***!
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuoteQueryService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const quote_repository_1 = __webpack_require__(/*! ../repositories/quote.repository */ "./src/modules/quotes/repositories/quote.repository.ts");
let QuoteQueryService = class QuoteQueryService {
    constructor(quoteRepo) {
        this.quoteRepo = quoteRepo;
    }
    async findQuoteById(quoteId) {
        const quote = await this.quoteRepo.findOne({
            where: { id: quoteId },
        });
        if (!quote) {
            throw new common_1.NotFoundException('Not found quote');
        }
        return quote;
    }
    async findQuoteWithRelations(quoteId, relations) {
        const quote = await this.quoteRepo.findOne({
            where: { id: quoteId },
            relations,
        });
        if (!quote) {
            throw new common_1.NotFoundException('Not found quote');
        }
        return quote;
    }
    async findProviderQuotes(providerId, status) {
        const where = { providerId, deletedAt: (0, typeorm_1.IsNull)() };
        if (status)
            where.status = status;
        return await this.quoteRepo.find({
            where,
            relations: ['post', 'post.customer'],
            order: { createdAt: 'DESC' },
        });
    }
    async findPostQuotes(postId) {
        return await this.quoteRepo.find({
            where: { postId, deletedAt: (0, typeorm_1.IsNull)() },
            relations: ['provider'],
            order: { createdAt: 'DESC' },
        });
    }
};
exports.QuoteQueryService = QuoteQueryService;
exports.QuoteQueryService = QuoteQueryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof quote_repository_1.QuoteRepository !== "undefined" && quote_repository_1.QuoteRepository) === "function" ? _a : Object])
], QuoteQueryService);


/***/ }),

/***/ "./src/modules/quotes/services/quote-revision.service.ts":
/*!***************************************************************!*\
  !*** ./src/modules/quotes/services/quote-revision.service.ts ***!
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuoteRevisionService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const quote_revision_entity_1 = __webpack_require__(/*! ../entities/quote-revision.entity */ "./src/modules/quotes/entities/quote-revision.entity.ts");
let QuoteRevisionService = class QuoteRevisionService {
    constructor(revisionRepo) {
        this.revisionRepo = revisionRepo;
    }
    async createRevision(quote, changedBy, changeReason) {
        const revision = this.revisionRepo.create({
            quoteId: quote.id,
            price: quote.price,
            description: quote.description,
            terms: quote.terms,
            estimatedDuration: quote.estimatedDuration,
            imageUrls: quote.imageUrls,
            revisionNumber: quote.revisionCount,
            changedBy,
            changeReason,
        });
        return await this.revisionRepo.save(revision);
    }
    async getRevisionHistory(quoteId) {
        return await this.revisionRepo.find({
            where: { quoteId },
            order: { revisionNumber: 'ASC' },
        });
    }
    async getLatestRevision(quoteId) {
        const revision = await this.revisionRepo.findOne({
            where: { quoteId },
            order: { revisionNumber: 'DESC' },
        });
        if (!revision) {
            throw new common_1.NotFoundException(`No revision found for quote ${quoteId}`);
        }
        return revision;
    }
    async markRevisionAsUsedForOrder(revisionId, orderId) {
        const revision = await this.revisionRepo.findOne({
            where: { id: revisionId },
        });
        if (!revision) {
            throw new common_1.NotFoundException(`Revision ${revisionId} not found`);
        }
        revision.usedForOrderId = orderId;
        revision.usedAt = new Date();
        return await this.revisionRepo.save(revision);
    }
    async isRevisionUsedForOrder(revisionId) {
        const revision = await this.revisionRepo.findOne({
            where: { id: revisionId },
            select: ['id', 'usedForOrderId'],
        });
        return !!revision?.usedForOrderId;
    }
    async getPriceChanges(quoteId) {
        const revisions = await this.getRevisionHistory(quoteId);
        return revisions.map((revision, index) => {
            const result = {
                revisionNumber: revision.revisionNumber,
                price: parseFloat(revision.price.toString()),
                timestamp: revision.createdAt,
            };
            if (index > 0) {
                const previousPrice = parseFloat(revisions[index - 1].price.toString());
                const currentPrice = parseFloat(revision.price.toString());
                result.priceChange = currentPrice - previousPrice;
                result.percentChange = ((currentPrice - previousPrice) / previousPrice) * 100;
            }
            return result;
        });
    }
};
exports.QuoteRevisionService = QuoteRevisionService;
exports.QuoteRevisionService = QuoteRevisionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(quote_revision_entity_1.QuoteRevision)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], QuoteRevisionService);


/***/ }),

/***/ "./src/modules/quotes/services/quote-status.service.ts":
/*!*************************************************************!*\
  !*** ./src/modules/quotes/services/quote-status.service.ts ***!
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
var QuoteStatusService_1;
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuoteStatusService = void 0;
const chat_service_1 = __webpack_require__(/*! @/modules/chat/chat.service */ "./src/modules/chat/chat.service.ts");
const post_repository_1 = __webpack_require__(/*! @/modules/posts/repositories/post.repository */ "./src/modules/posts/repositories/post.repository.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const quote_status_enum_1 = __webpack_require__(/*! ../enums/quote-status.enum */ "./src/modules/quotes/enums/quote-status.enum.ts");
const quote_repository_1 = __webpack_require__(/*! ../repositories/quote.repository */ "./src/modules/quotes/repositories/quote.repository.ts");
const quote_notification_service_1 = __webpack_require__(/*! ./quote-notification.service */ "./src/modules/quotes/services/quote-notification.service.ts");
const quote_revision_service_1 = __webpack_require__(/*! ./quote-revision.service */ "./src/modules/quotes/services/quote-revision.service.ts");
let QuoteStatusService = QuoteStatusService_1 = class QuoteStatusService {
    constructor(quoteRepo, postRepo, revisionService, notificationService, chatService) {
        this.quoteRepo = quoteRepo;
        this.postRepo = postRepo;
        this.revisionService = revisionService;
        this.notificationService = notificationService;
        this.chatService = chatService;
        this.logger = new common_1.Logger(QuoteStatusService_1.name);
    }
    async acceptForChat(quote, customerId) {
        this.logger.log(`Customer ${customerId} accepting quote ${quote.id} for chat`);
        await this.revisionService.createRevision(quote, quote.providerId, 'Initial quote');
        quote.status = quote_status_enum_1.QuoteStatus.ACCEPTED_FOR_CHAT;
        quote.acceptedAt = new Date();
        quote.chatOpenedAt = new Date();
        const savedQuote = await this.quoteRepo.save(quote);
        await this.chatService.createConversationFromQuote(quote.id);
        await this.notificationService.notifyQuoteAcceptedForChat(savedQuote, customerId);
        return savedQuote;
    }
    async reviseQuote(quote, newPrice, newDescription, newTerms, newEstimatedDuration, changeReason) {
        this.logger.log(`Provider revising quote ${quote.id}, new price: ${newPrice}`);
        await this.revisionService.createRevision(quote, quote.providerId, changeReason || 'Price revision');
        quote.price = newPrice;
        if (newDescription)
            quote.description = newDescription;
        if (newTerms !== undefined)
            quote.terms = newTerms;
        if (newEstimatedDuration !== undefined)
            quote.estimatedDuration = newEstimatedDuration;
        quote.status = quote_status_enum_1.QuoteStatus.REVISING;
        quote.revisionCount += 1;
        const savedQuote = await this.quoteRepo.save(quote);
        await this.notificationService.notifyQuoteRevised(savedQuote, quote.post.customerId);
        return savedQuote;
    }
    async requestOrder(quote, customerId) {
        this.logger.log(`Customer ${customerId} requesting order for quote ${quote.id}`);
        quote.status = quote_status_enum_1.QuoteStatus.ORDER_REQUESTED;
        quote.orderRequestedAt = new Date();
        const savedQuote = await this.quoteRepo.save(quote);
        await this.notificationService.notifyOrderRequested(savedQuote, customerId);
        return savedQuote;
    }
    async confirmOrder(quote) {
        this.logger.log(`Provider confirming order for quote ${quote.id}`);
        quote.status = quote_status_enum_1.QuoteStatus.CONFIRMED;
        quote.confirmedAt = new Date();
        const savedQuote = await this.quoteRepo.save(quote);
        await this.postRepo.closePost(quote.post);
        await this.rejectOtherQuotes(quote.postId, quote.id);
        return savedQuote;
    }
    async rejectQuote(quote, reason) {
        quote.status = quote_status_enum_1.QuoteStatus.REJECTED;
        quote.rejectedAt = new Date();
        quote.rejectionReason = reason;
        const savedQuote = await this.quoteRepo.save(quote);
        await this.notificationService.notifyQuoteRejected(savedQuote, reason);
        return savedQuote;
    }
    async cancelQuote(quote, reason) {
        quote.status = quote_status_enum_1.QuoteStatus.CANCELLED;
        quote.cancelledAt = new Date();
        quote.cancellationReason = reason;
        return await this.quoteRepo.save(quote);
    }
    async rejectOtherQuotes(postId, confirmedQuoteId) {
        const otherQuotes = await this.quoteRepo.find({
            where: {
                postId,
                id: (0, typeorm_1.Not)(confirmedQuoteId),
                status: (0, typeorm_1.Not)(quote_status_enum_1.QuoteStatus.REJECTED),
                deletedAt: (0, typeorm_1.IsNull)(),
            },
            relations: ['post'],
        });
        const rejectionReason = 'Khách hàng đã chọn thợ khác';
        for (const quote of otherQuotes) {
            quote.status = quote_status_enum_1.QuoteStatus.REJECTED;
            quote.rejectedAt = new Date();
            quote.rejectionReason = rejectionReason;
            await this.quoteRepo.save(quote);
            await this.notificationService.notifyQuoteRejected(quote, rejectionReason);
        }
        this.logger.log(`Rejected ${otherQuotes.length} other quotes for post ${postId}`);
    }
};
exports.QuoteStatusService = QuoteStatusService;
exports.QuoteStatusService = QuoteStatusService = QuoteStatusService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof quote_repository_1.QuoteRepository !== "undefined" && quote_repository_1.QuoteRepository) === "function" ? _a : Object, typeof (_b = typeof post_repository_1.PostRepository !== "undefined" && post_repository_1.PostRepository) === "function" ? _b : Object, typeof (_c = typeof quote_revision_service_1.QuoteRevisionService !== "undefined" && quote_revision_service_1.QuoteRevisionService) === "function" ? _c : Object, typeof (_d = typeof quote_notification_service_1.QuoteNotificationService !== "undefined" && quote_notification_service_1.QuoteNotificationService) === "function" ? _d : Object, typeof (_e = typeof chat_service_1.ChatService !== "undefined" && chat_service_1.ChatService) === "function" ? _e : Object])
], QuoteStatusService);


/***/ }),

/***/ "./src/modules/quotes/services/quote-validation.service.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/quotes/services/quote-validation.service.ts ***!
  \*****************************************************************/
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
exports.QuoteValidationService = void 0;
const post_repository_1 = __webpack_require__(/*! @/modules/posts/repositories/post.repository */ "./src/modules/posts/repositories/post.repository.ts");
const user_repository_1 = __webpack_require__(/*! @/modules/users/repositorys/user.repository */ "./src/modules/users/repositorys/user.repository.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const quote_status_enum_1 = __webpack_require__(/*! ../enums/quote-status.enum */ "./src/modules/quotes/enums/quote-status.enum.ts");
const quote_repository_1 = __webpack_require__(/*! ../repositories/quote.repository */ "./src/modules/quotes/repositories/quote.repository.ts");
let QuoteValidationService = class QuoteValidationService {
    constructor(userRepo, postRepo, quoteRepo) {
        this.userRepo = userRepo;
        this.postRepo = postRepo;
        this.quoteRepo = quoteRepo;
    }
    async validateProvider(providerId) {
        const provider = await this.userRepo.findByIdProvider(providerId);
        if (!provider) {
            throw new common_1.ForbiddenException('Only workers can create bids');
        }
        return provider;
    }
    async validatePostForQuote(postId, providerId) {
        const post = await this.postRepo.findById(postId);
        if (!post) {
            throw new common_1.NotFoundException('Not found post');
        }
        if (!post.isOpen()) {
            throw new common_1.BadRequestException('Post is closed, no bidding possible');
        }
        const existingQuote = await this.quoteRepo.findOne({
            where: {
                postId,
                providerId,
                deletedAt: (0, typeorm_1.IsNull)(),
                status: (0, typeorm_1.Not)(quote_status_enum_1.QuoteStatus.CANCELLED),
            },
        });
        if (existingQuote) {
            throw new common_1.ConflictException('You have already bid on this post');
        }
        return post;
    }
    validatePrice(price, postBudget) {
        if (price <= 0) {
            throw new common_1.BadRequestException('Price must be greater than 0');
        }
        if (postBudget && price > postBudget * 1.5) {
            throw new common_1.BadRequestException('The offer price exceeded 150% of the customer is budget');
        }
    }
    validateQuoteOwnership(quote, providerId) {
        if (!quote.belongsTo(providerId)) {
            throw new common_1.ForbiddenException('You do not have permission to perform this action');
        }
    }
    validatePostOwnership(post, customerId) {
        if (!post.belongsTo(customerId)) {
            throw new common_1.ForbiddenException('You do not have permission to perform this action.');
        }
    }
    validateQuoteCanEdit(quote) {
        if (!quote.canEdit()) {
            throw new common_1.BadRequestException('Cannot edit a quote that has been processed or deleted');
        }
    }
    validateQuoteCanCancel(quote) {
        if (!quote.canCancel()) {
            throw new common_1.BadRequestException('This quote cannot be canceled.');
        }
    }
    validateQuoteIsPending(quote) {
        if (!quote.isPending()) {
            throw new common_1.BadRequestException('Quote is not pending');
        }
    }
    validatePostIsOpen(post) {
        if (!post.isOpen()) {
            throw new common_1.BadRequestException('Post closed');
        }
    }
    validateQuoteAccess(quote, userId) {
        const isOwner = quote.belongsTo(userId);
        const isPostOwner = quote.post.belongsTo(userId);
        if (!isOwner && !isPostOwner) {
            throw new common_1.ForbiddenException('You do not have permission to view this quote');
        }
    }
};
exports.QuoteValidationService = QuoteValidationService;
exports.QuoteValidationService = QuoteValidationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof user_repository_1.UserRepository !== "undefined" && user_repository_1.UserRepository) === "function" ? _a : Object, typeof (_b = typeof post_repository_1.PostRepository !== "undefined" && post_repository_1.PostRepository) === "function" ? _b : Object, typeof (_c = typeof quote_repository_1.QuoteRepository !== "undefined" && quote_repository_1.QuoteRepository) === "function" ? _c : Object])
], QuoteValidationService);


/***/ }),

/***/ "./src/modules/search/dtos/search.dto.ts":
/*!***********************************************!*\
  !*** ./src/modules/search/dtos/search.dto.ts ***!
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TradeSuggestResponseDto = exports.TradeSuggestQueryDto = exports.ProvinceSuggestResponseDto = exports.ByProvinceResponseDto = exports.ByProvinceQueryDto = exports.ProviderSearchResponseDto = exports.ProviderSearchResultDto = exports.ProviderSearchQueryDto = exports.PostSearchResponseDto = exports.PostSearchResultDto = exports.PostSearchQueryDto = exports.GlobalSearchResponseDto = exports.GlobalSearchQueryDto = exports.TradeDto = exports.ProviderSortBy = exports.PostSortBy = exports.SortOrder = exports.SearchType = exports.VIETNAM_PROVINCES = void 0;
const post_status_enum_1 = __webpack_require__(/*! @/modules/posts/enums/post-status.enum */ "./src/modules/posts/enums/post-status.enum.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
exports.VIETNAM_PROVINCES = [
    'Hà Nội', 'TP. Hồ Chí Minh', 'Hải Phòng', 'Cần Thơ', 'Đà Nẵng',
    'Huế', 'Cao Bằng', 'Điện Biên', 'Lai Châu', 'Sơn La', 'Lạng Sơn',
    'Quảng Ninh', 'Thanh Hóa', 'Nghệ An', 'Hà Tĩnh', 'Tuyên Quang',
    'Lào Cai', 'Thái Nguyên', 'Phú Thọ', 'Bắc Ninh', 'Hưng Yên',
    'Ninh Bình', 'Quảng Trị', 'Quảng Ngãi', 'Gia Lai', 'Đắk Lắk',
    'Khánh Hòa', 'Lâm Đồng', 'Tây Ninh', 'Đồng Tháp', 'An Giang',
    'Vĩnh Long', 'Cà Mau',
];
var SearchType;
(function (SearchType) {
    SearchType["ALL"] = "all";
    SearchType["POST"] = "post";
    SearchType["PROVIDER"] = "provider";
})(SearchType || (exports.SearchType = SearchType = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder["ASC"] = "asc";
    SortOrder["DESC"] = "desc";
})(SortOrder || (exports.SortOrder = SortOrder = {}));
var PostSortBy;
(function (PostSortBy) {
    PostSortBy["CREATED_AT"] = "createdAt";
    PostSortBy["BUDGET"] = "budget";
    PostSortBy["DESIRED_TIME"] = "desiredTime";
})(PostSortBy || (exports.PostSortBy = PostSortBy = {}));
var ProviderSortBy;
(function (ProviderSortBy) {
    ProviderSortBy["DISPLAY_NAME"] = "displayName";
    ProviderSortBy["CREATED_AT"] = "createdAt";
})(ProviderSortBy || (exports.ProviderSortBy = ProviderSortBy = {}));
const slugArrayTransform = ({ value }) => {
    if (!value)
        return undefined;
    const arr = Array.isArray(value) ? value : [value];
    return arr
        .flatMap((v) => v.split(','))
        .map((s) => s.trim())
        .filter(Boolean);
};
class TradeDto {
}
exports.TradeDto = TradeDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'uuid-trade-1' }),
    __metadata("design:type", String)
], TradeDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Thợ điện' }),
    __metadata("design:type", String)
], TradeDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'tho-dien' }),
    __metadata("design:type", String)
], TradeDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Điện - Nước' }),
    __metadata("design:type", String)
], TradeDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '⚡' }),
    __metadata("design:type", String)
], TradeDto.prototype, "icon", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 5 }),
    __metadata("design:type", Number)
], TradeDto.prototype, "yearsExperience", void 0);
class GlobalSearchQueryDto {
    constructor() {
        this.type = SearchType.ALL;
        this.limit = 5;
    }
}
exports.GlobalSearchQueryDto = GlobalSearchQueryDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Từ khoá (1 ký tự trở lên). VD: "đ" → tất cả bài/thợ liên quan',
        example: 'điện',
        minLength: 1,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], GlobalSearchQueryDto.prototype, "q", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Phạm vi: all | post | provider',
        enum: SearchType,
        default: SearchType.ALL,
    }),
    (0, class_validator_1.IsEnum)(SearchType),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], GlobalSearchQueryDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Lọc theo tỉnh/thành (34 tỉnh)',
        enum: exports.VIETNAM_PROVINCES,
        example: 'Đà Nẵng',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof VietnamProvince !== "undefined" && VietnamProvince) === "function" ? _a : Object)
], GlobalSearchQueryDto.prototype, "province", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Số kết quả mỗi loại', example: 5, default: 5 }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(20),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], GlobalSearchQueryDto.prototype, "limit", void 0);
class GlobalSearchResponseDto {
}
exports.GlobalSearchResponseDto = GlobalSearchResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'điện' }),
    __metadata("design:type", String)
], GlobalSearchResponseDto.prototype, "query", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => PostSearchResultDto, isArray: true }),
    __metadata("design:type", Array)
], GlobalSearchResponseDto.prototype, "posts", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => ProviderSearchResultDto, isArray: true }),
    __metadata("design:type", Array)
], GlobalSearchResponseDto.prototype, "providers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 42 }),
    __metadata("design:type", Number)
], GlobalSearchResponseDto.prototype, "totalPosts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 8 }),
    __metadata("design:type", Number)
], GlobalSearchResponseDto.prototype, "totalProviders", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Thời gian xử lý (ms)', example: 18 }),
    __metadata("design:type", Number)
], GlobalSearchResponseDto.prototype, "took", void 0);
class PostSearchQueryDto {
    constructor() {
        this.sortBy = PostSortBy.CREATED_AT;
        this.order = SortOrder.DESC;
        this.limit = 10;
        this.offset = 0;
    }
}
exports.PostSearchQueryDto = PostSearchQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Tìm theo tiêu đề bài đăng (1 ký tự trở lên). ' +
            'Hỗ trợ không dấu: "sua dien" → "sửa điện".',
        example: 'sửa điện',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PostSearchQueryDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Lọc cứng theo tỉnh/thành — chọn từ 34 tỉnh',
        enum: exports.VIETNAM_PROVINCES,
        example: 'Đà Nẵng',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_b = typeof VietnamProvince !== "undefined" && VietnamProvince) === "function" ? _b : Object)
], PostSearchQueryDto.prototype, "province", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Lọc bài đăng theo ngành nghề liên quan. ' +
            'Tìm trong title + description của bài. ' +
            'VD: ?tradeSlugs=tho-dien → các bài đăng cần thợ điện. ' +
            'Nhiều nghề dùng repeat param hoặc phân cách phẩy.',
        type: [String],
        example: ['tho-dien'],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_transformer_1.Transform)(slugArrayTransform),
    __metadata("design:type", Array)
], PostSearchQueryDto.prototype, "tradeSlugs", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: post_status_enum_1.PostStatus, default: post_status_enum_1.PostStatus.OPEN }),
    (0, class_validator_1.IsEnum)(post_status_enum_1.PostStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_c = typeof post_status_enum_1.PostStatus !== "undefined" && post_status_enum_1.PostStatus) === "function" ? _c : Object)
], PostSearchQueryDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Ngân sách tối thiểu (VND)', example: 100000 }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], PostSearchQueryDto.prototype, "budgetMin", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Ngân sách tối đa (VND)', example: 5000000 }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], PostSearchQueryDto.prototype, "budgetMax", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: PostSortBy, default: PostSortBy.CREATED_AT }),
    (0, class_validator_1.IsEnum)(PostSortBy),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PostSearchQueryDto.prototype, "sortBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: SortOrder, default: SortOrder.DESC }),
    (0, class_validator_1.IsEnum)(SortOrder),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PostSearchQueryDto.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 10, default: 10 }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(50),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], PostSearchQueryDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 0, default: 0 }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], PostSearchQueryDto.prototype, "offset", void 0);
class PostSearchResultDto {
}
exports.PostSearchResultDto = PostSearchResultDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'uuid-123' }),
    __metadata("design:type", String)
], PostSearchResultDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Cần thợ sửa điện nước tại nhà' }),
    __metadata("design:type", String)
], PostSearchResultDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Quận Hải Châu, Đà Nẵng' }),
    __metadata("design:type", String)
], PostSearchResultDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Đà Nẵng' }),
    __metadata("design:type", String)
], PostSearchResultDto.prototype, "province", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: post_status_enum_1.PostStatus }),
    __metadata("design:type", typeof (_d = typeof post_status_enum_1.PostStatus !== "undefined" && post_status_enum_1.PostStatus) === "function" ? _d : Object)
], PostSearchResultDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 500000 }),
    __metadata("design:type", Number)
], PostSearchResultDto.prototype, "budget", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2025-11-20T10:00:00Z' }),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], PostSearchResultDto.prototype, "desiredTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'object',
        properties: {
            customerId: { type: 'string' },
            displayName: { type: 'string', nullable: true },
            avatarUrl: { type: 'string', nullable: true },
        },
    }),
    __metadata("design:type", Object)
], PostSearchResultDto.prototype, "customer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-11-13T10:00:00Z' }),
    __metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], PostSearchResultDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Tiêu đề với từ khoá bọc <em>...</em> để FE highlight',
        example: 'Cần thợ <em>sửa điện</em> nước tại nhà',
    }),
    __metadata("design:type", String)
], PostSearchResultDto.prototype, "highlight", void 0);
class PostSearchResponseDto {
}
exports.PostSearchResponseDto = PostSearchResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [PostSearchResultDto] }),
    __metadata("design:type", Array)
], PostSearchResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 42 }),
    __metadata("design:type", Number)
], PostSearchResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10 }),
    __metadata("design:type", Number)
], PostSearchResponseDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0 }),
    __metadata("design:type", Number)
], PostSearchResponseDto.prototype, "offset", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], PostSearchResponseDto.prototype, "hasMore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Thời gian xử lý (ms)', example: 12 }),
    __metadata("design:type", Number)
], PostSearchResponseDto.prototype, "took", void 0);
class ProviderSearchQueryDto {
    constructor() {
        this.sortBy = ProviderSortBy.CREATED_AT;
        this.order = SortOrder.DESC;
        this.limit = 20;
        this.offset = 0;
    }
}
exports.ProviderSearchQueryDto = ProviderSearchQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Tìm theo tên thợ (1 ký tự trở lên). ' +
            'Hỗ trợ không dấu: "M" → tất cả thợ có tên chứa "M" hoặc "m".',
        example: 'Minh',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProviderSearchQueryDto.prototype, "displayName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Lọc cứng theo tỉnh/thành — chọn từ 34 tỉnh',
        enum: exports.VIETNAM_PROVINCES,
        example: 'Hà Nội',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_g = typeof VietnamProvince !== "undefined" && VietnamProvince) === "function" ? _g : Object)
], ProviderSearchQueryDto.prototype, "province", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Lọc cứng theo slug nghề đã đăng ký (OR logic). ' +
            'Chỉ trả về thợ có ÍT NHẤT 1 nghề khớp. ' +
            'VD: ?tradeSlugs=tho-dien&tradeSlugs=tho-nuoc',
        type: [String],
        example: ['tho-dien'],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_transformer_1.Transform)(slugArrayTransform),
    __metadata("design:type", Array)
], ProviderSearchQueryDto.prototype, "tradeSlugs", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: ProviderSortBy, default: ProviderSortBy.CREATED_AT }),
    (0, class_validator_1.IsEnum)(ProviderSortBy),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProviderSearchQueryDto.prototype, "sortBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: SortOrder, default: SortOrder.DESC }),
    (0, class_validator_1.IsEnum)(SortOrder),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProviderSearchQueryDto.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 20, default: 20 }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(50),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ProviderSearchQueryDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 0, default: 0 }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ProviderSearchQueryDto.prototype, "offset", void 0);
class ProviderSearchResultDto {
}
exports.ProviderSearchResultDto = ProviderSearchResultDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'uuid-456' }),
    __metadata("design:type", String)
], ProviderSearchResultDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Thợ Điện Minh' }),
    __metadata("design:type", String)
], ProviderSearchResultDto.prototype, "displayName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://cdn.example.com/avatar.jpg' }),
    __metadata("design:type", String)
], ProviderSearchResultDto.prototype, "avatarUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Thợ điện 10 năm kinh nghiệm...' }),
    __metadata("design:type", String)
], ProviderSearchResultDto.prototype, "bio", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Quận 1, TP. Hồ Chí Minh' }),
    __metadata("design:type", String)
], ProviderSearchResultDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'TP. Hồ Chí Minh' }),
    __metadata("design:type", String)
], ProviderSearchResultDto.prototype, "province", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [TradeDto], description: 'Nghề của thợ kèm số năm kinh nghiệm' }),
    __metadata("design:type", Array)
], ProviderSearchResultDto.prototype, "trades", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], ProviderSearchResultDto.prototype, "isVerified", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-01-01T00:00:00Z' }),
    __metadata("design:type", typeof (_h = typeof Date !== "undefined" && Date) === "function" ? _h : Object)
], ProviderSearchResultDto.prototype, "memberSince", void 0);
class ProviderSearchResponseDto {
}
exports.ProviderSearchResponseDto = ProviderSearchResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ProviderSearchResultDto] }),
    __metadata("design:type", Array)
], ProviderSearchResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 18 }),
    __metadata("design:type", Number)
], ProviderSearchResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 20 }),
    __metadata("design:type", Number)
], ProviderSearchResponseDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0 }),
    __metadata("design:type", Number)
], ProviderSearchResponseDto.prototype, "offset", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], ProviderSearchResponseDto.prototype, "hasMore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Thời gian xử lý (ms)', example: 9 }),
    __metadata("design:type", Number)
], ProviderSearchResponseDto.prototype, "took", void 0);
class ByProvinceQueryDto {
    constructor() {
        this.postLimit = 10;
        this.providerLimit = 10;
    }
}
exports.ByProvinceQueryDto = ByProvinceQueryDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tỉnh/thành — chọn từ 34 tỉnh',
        enum: exports.VIETNAM_PROVINCES,
        example: 'Đà Nẵng',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", typeof (_j = typeof VietnamProvince !== "undefined" && VietnamProvince) === "function" ? _j : Object)
], ByProvinceQueryDto.prototype, "province", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Số bài đăng trả về', example: 10, default: 10 }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(50),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ByProvinceQueryDto.prototype, "postLimit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Số thợ trả về', example: 10, default: 10 }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(50),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ByProvinceQueryDto.prototype, "providerLimit", void 0);
class ByProvinceResponseDto {
}
exports.ByProvinceResponseDto = ByProvinceResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Đà Nẵng' }),
    __metadata("design:type", String)
], ByProvinceResponseDto.prototype, "province", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [PostSearchResultDto] }),
    __metadata("design:type", Array)
], ByProvinceResponseDto.prototype, "posts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 24 }),
    __metadata("design:type", Number)
], ByProvinceResponseDto.prototype, "totalPosts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ProviderSearchResultDto] }),
    __metadata("design:type", Array)
], ByProvinceResponseDto.prototype, "providers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 7 }),
    __metadata("design:type", Number)
], ByProvinceResponseDto.prototype, "totalProviders", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Thời gian xử lý (ms)', example: 15 }),
    __metadata("design:type", Number)
], ByProvinceResponseDto.prototype, "took", void 0);
class ProvinceSuggestResponseDto {
}
exports.ProvinceSuggestResponseDto = ProvinceSuggestResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], example: ['Đà Nẵng', 'Đắk Lắk'] }),
    __metadata("design:type", Array)
], ProvinceSuggestResponseDto.prototype, "provinces", void 0);
class TradeSuggestQueryDto {
}
exports.TradeSuggestQueryDto = TradeSuggestQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Lọc theo tên nghề (hỗ trợ không dấu). VD: "dien" → "Thợ điện"',
        example: 'dien',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TradeSuggestQueryDto.prototype, "q", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Lọc theo nhóm nghề', example: 'Điện - Nước' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TradeSuggestQueryDto.prototype, "category", void 0);
class TradeSuggestResponseDto {
}
exports.TradeSuggestResponseDto = TradeSuggestResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [TradeDto] }),
    __metadata("design:type", typeof (_k = typeof Array !== "undefined" && Array) === "function" ? _k : Object)
], TradeSuggestResponseDto.prototype, "trades", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        description: 'Tất cả nhóm nghề — dùng render filter tabs',
        example: ['Điện - Nước', 'Xây dựng', 'Nội thất'],
    }),
    __metadata("design:type", Array)
], TradeSuggestResponseDto.prototype, "categories", void 0);


/***/ }),

/***/ "./src/modules/search/repositories/search.repository.ts":
/*!**************************************************************!*\
  !*** ./src/modules/search/repositories/search.repository.ts ***!
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var SearchRepository_1;
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SearchRepository = void 0;
const user_role_enum_1 = __webpack_require__(/*! @/common/enums/user-role.enum */ "./src/common/enums/user-role.enum.ts");
const post_entity_1 = __webpack_require__(/*! @/modules/posts/entities/post.entity */ "./src/modules/posts/entities/post.entity.ts");
const post_status_enum_1 = __webpack_require__(/*! @/modules/posts/enums/post-status.enum */ "./src/modules/posts/enums/post-status.enum.ts");
const profile_entity_1 = __webpack_require__(/*! @/modules/profile/entities/profile.entity */ "./src/modules/profile/entities/profile.entity.ts");
const trade_entity_1 = __webpack_require__(/*! @/modules/profile/entities/trade.entity */ "./src/modules/profile/entities/trade.entity.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const search_dto_1 = __webpack_require__(/*! ../dtos/search.dto */ "./src/modules/search/dtos/search.dto.ts");
function escapeLikeParam(raw) {
    return raw
        .replace(/\\/g, '\\\\')
        .replace(/%/g, '\\%')
        .replace(/_/g, '\\_');
}
const ESCAPE_CLAUSE = "ESCAPE '\\\\'";
function escapeTradeNameCol(colSql) {
    return `regexp_replace(${colSql}, '([%_\\\\])', '\\\\\\1', 'g')`;
}
let SearchRepository = SearchRepository_1 = class SearchRepository {
    constructor(postRepo, profileRepo, tradeRepo) {
        this.postRepo = postRepo;
        this.profileRepo = profileRepo;
        this.tradeRepo = tradeRepo;
        this.logger = new common_1.Logger(SearchRepository_1.name);
    }
    async searchPosts(dto) {
        const qb = this.buildPostBaseQuery();
        qb.andWhere('post.status = :status', {
            status: dto.status ?? post_status_enum_1.PostStatus.OPEN,
        });
        if (dto.title?.trim()) {
            this.applyIlike(qb, 'post.title', dto.title.trim(), 'ptitle');
        }
        if (dto.province) {
            qb.andWhere('post.location ILIKE :pProvince', {
                pProvince: `%${dto.province}%`,
            });
        }
        if (dto.tradeSlugs?.length) {
            const escapedName = escapeTradeNameCol('_trFilter.name');
            qb.andWhere(`EXISTS (
                    SELECT 1
                    FROM   trades _trFilter
                    WHERE  _trFilter.slug      = ANY(:postTradeSlugs)
                      AND  _trFilter.is_active = true
                      AND  (
                               unaccent(post.title)
                                   ILIKE unaccent('%' || ${escapedName} || '%')
                                   ${ESCAPE_CLAUSE}
                            OR  post.title
                                   ILIKE '%' || ${escapedName} || '%'
                                   ${ESCAPE_CLAUSE}
                            OR  unaccent(post.description)
                                   ILIKE unaccent('%' || ${escapedName} || '%')
                                   ${ESCAPE_CLAUSE}
                            OR  post.description
                                   ILIKE '%' || ${escapedName} || '%'
                                   ${ESCAPE_CLAUSE}
                           )
                )`, { postTradeSlugs: dto.tradeSlugs });
        }
        if (dto.budgetMin !== undefined) {
            qb.andWhere('post.budget >= :budgetMin', { budgetMin: dto.budgetMin });
        }
        if (dto.budgetMax !== undefined) {
            qb.andWhere('post.budget <= :budgetMax', { budgetMax: dto.budgetMax });
        }
        const sortMap = {
            [search_dto_1.PostSortBy.CREATED_AT]: 'post.createdAt',
            [search_dto_1.PostSortBy.BUDGET]: 'post.budget',
            [search_dto_1.PostSortBy.DESIRED_TIME]: 'post.desiredTime',
        };
        qb
            .orderBy(sortMap[dto.sortBy ?? search_dto_1.PostSortBy.CREATED_AT], this.dir(dto.order))
            .take(dto.limit ?? 10)
            .skip(dto.offset ?? 0);
        const [rows, total] = await qb.getManyAndCount();
        return { rows, total };
    }
    async searchProviders(dto) {
        const qb = this.buildProviderBaseQuery();
        if (dto.displayName?.trim()) {
            this.applyIlike(qb, 'profile.displayName', dto.displayName.trim(), 'pname');
        }
        if (dto.province) {
            qb.andWhere('profile.address ILIKE :pprovince', {
                pprovince: `%${dto.province}%`,
            });
        }
        if (dto.tradeSlugs?.length) {
            qb.andWhere(`EXISTS (
                    SELECT 1
                    FROM   provider_trades _ppt
                    INNER JOIN trades      _ttr ON _ttr.id = _ppt.trade_id
                    WHERE  _ppt.provider_id = user.id
                      AND  _ttr.slug        = ANY(:provTradeSlugs)
                      AND  _ttr.is_active   = true
                )`, { provTradeSlugs: dto.tradeSlugs });
        }
        const sortMap = {
            [search_dto_1.ProviderSortBy.DISPLAY_NAME]: 'profile.displayName',
            [search_dto_1.ProviderSortBy.CREATED_AT]: 'user.createdAt',
        };
        qb
            .orderBy(sortMap[dto.sortBy ?? search_dto_1.ProviderSortBy.CREATED_AT], this.dir(dto.order))
            .take(dto.limit ?? 20)
            .skip(dto.offset ?? 0);
        const [rows, total] = await qb.getManyAndCount();
        return { rows: rows, total };
    }
    async searchByProvince(dto) {
        const [postResult, providerResult] = await Promise.all([
            this.searchPosts({
                province: dto.province,
                limit: dto.postLimit ?? 10,
                offset: 0,
                status: post_status_enum_1.PostStatus.OPEN,
            }),
            this.searchProviders({
                province: dto.province,
                limit: dto.providerLimit ?? 10,
                offset: 0,
            }),
        ]);
        return {
            posts: postResult.rows,
            totalPosts: postResult.total,
            providers: providerResult.rows,
            totalProviders: providerResult.total,
        };
    }
    async globalSearchPosts(keyword, province, limit = 5) {
        return this.searchPosts({
            title: keyword,
            province: province,
            limit,
            offset: 0,
            status: post_status_enum_1.PostStatus.OPEN,
        });
    }
    async globalSearchProviders(keyword, province, limit = 5) {
        const qb = this.buildProviderBaseQuery();
        if (province) {
            qb.andWhere('profile.address ILIKE :gprovince', {
                gprovince: `%${province}%`,
            });
        }
        const safeKw = escapeLikeParam(keyword);
        const escapedGtName = escapeTradeNameCol('_gt.name');
        qb.andWhere(new typeorm_2.Brackets((ob) => {
            ob
                .where(`unaccent(COALESCE(profile.displayName, '')) ILIKE unaccent(:glike) ${ESCAPE_CLAUSE}`, { glike: `%${safeKw}%` })
                .orWhere(`COALESCE(profile.displayName, '') ILIKE :graw ${ESCAPE_CLAUSE}`, { graw: `%${safeKw}%` })
                .orWhere(`EXISTS (
                            SELECT 1
                            FROM   provider_trades _gpt
                            INNER JOIN trades      _gt ON _gt.id = _gpt.trade_id
                            WHERE  _gpt.provider_id = user.id
                              AND  _gt.is_active     = true
                              AND  (
                                       unaccent(${escapedGtName})
                                           ILIKE unaccent(:gtLike) ${ESCAPE_CLAUSE}
                                    OR  ${escapedGtName}
                                           ILIKE :gtRaw ${ESCAPE_CLAUSE}
                                   )
                        )`, { gtLike: `%${keyword}%`, gtRaw: `%${keyword}%` });
        }));
        qb.orderBy('user.createdAt', 'DESC').take(limit).skip(0);
        const [rows, total] = await qb.getManyAndCount();
        return { rows: rows, total };
    }
    async findTrades(dto) {
        const qb = this.tradeRepo
            .createQueryBuilder('trade')
            .where('trade.isActive = true');
        if (dto.category) {
            qb.andWhere('trade.category = :tcat', { tcat: dto.category });
        }
        if (dto.q?.trim()) {
            this.applyIlike(qb, 'trade.name', dto.q.trim(), 'tname');
        }
        return qb
            .orderBy('trade.sortOrder', 'ASC')
            .addOrderBy('trade.name', 'ASC')
            .getMany();
    }
    async findDistinctTradeCategories() {
        const rows = await this.tradeRepo
            .createQueryBuilder('trade')
            .select('DISTINCT trade.category', 'category')
            .where('trade.isActive = true')
            .andWhere('trade.category IS NOT NULL')
            .orderBy('trade.category', 'ASC')
            .getRawMany();
        return rows.map((r) => r.category).filter(Boolean);
    }
    buildPostBaseQuery() {
        return this.postRepo
            .createQueryBuilder('post')
            .leftJoinAndSelect('post.customer', 'customer')
            .leftJoinAndSelect('customer.profile', 'profile')
            .where('post.deletedAt IS NULL');
    }
    buildProviderBaseQuery() {
        return this.profileRepo
            .createQueryBuilder('profile')
            .innerJoinAndSelect('profile.user', 'user')
            .leftJoinAndSelect('user.providerTrades', 'providerTrade')
            .leftJoinAndSelect('providerTrade.trade', 'trade', 'trade.isActive = true')
            .where('user.isActive = true')
            .andWhere('user.role = :urole', { urole: user_role_enum_1.UserRole.PROVIDER });
    }
    applyIlike(qb, column, keyword, prefix) {
        const pUnaccent = `${prefix}_u`;
        const pRaw = `${prefix}_r`;
        const safe = escapeLikeParam(keyword);
        qb.andWhere(new typeorm_2.Brackets((b) => {
            b
                .where(`unaccent(COALESCE(${column}, '')) ILIKE unaccent(:${pUnaccent}) ${ESCAPE_CLAUSE}`, { [pUnaccent]: `%${safe}%` })
                .orWhere(`COALESCE(${column}, '') ILIKE :${pRaw} ${ESCAPE_CLAUSE}`, { [pRaw]: `%${safe}%` });
        }));
    }
    dir(order) {
        return (order ?? search_dto_1.SortOrder.DESC).toUpperCase();
    }
};
exports.SearchRepository = SearchRepository;
exports.SearchRepository = SearchRepository = SearchRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.PostCustomer)),
    __param(1, (0, typeorm_1.InjectRepository)(profile_entity_1.Profile)),
    __param(2, (0, typeorm_1.InjectRepository)(trade_entity_1.Trade)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object])
], SearchRepository);


/***/ }),

/***/ "./src/modules/search/search.controller.ts":
/*!*************************************************!*\
  !*** ./src/modules/search/search.controller.ts ***!
  \*************************************************/
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SearchController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const search_dto_1 = __webpack_require__(/*! ./dtos/search.dto */ "./src/modules/search/dtos/search.dto.ts");
const search_service_1 = __webpack_require__(/*! ./services/search.service */ "./src/modules/search/services/search.service.ts");
let SearchController = class SearchController {
    constructor(searchService) {
        this.searchService = searchService;
    }
    async globalSearch(query) {
        return this.searchService.globalSearch(query);
    }
    async searchPosts(query) {
        return this.searchService.searchPosts(query);
    }
    async searchProviders(query) {
        return this.searchService.searchProviders(query);
    }
    async searchByProvince(query) {
        return this.searchService.searchByProvince(query);
    }
    async suggestProvinces(q) {
        return this.searchService.suggestProvinces(q);
    }
    async suggestTrades(query) {
        return this.searchService.suggestTrades(query);
    }
};
exports.SearchController = SearchController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Global search — tìm cả bài đăng lẫn thợ',
        description: 'Tìm đồng thời bài đăng và thợ trong 1 request. ' +
            'Dùng cho search bar header/homepage. ' +
            'Chỉ cần 1 ký tự. Hỗ trợ lọc province và giới hạn type.',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, type: search_dto_1.GlobalSearchResponseDto }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof search_dto_1.GlobalSearchQueryDto !== "undefined" && search_dto_1.GlobalSearchQueryDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], SearchController.prototype, "globalSearch", null);
__decorate([
    (0, common_1.Get)('posts'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Tìm kiếm bài đăng',
        description: 'Tìm bài đăng theo:\n' +
            '  • title — 1 ký tự trở lên, hỗ trợ không dấu\n' +
            '  • province — lọc cứng 34 tỉnh/thành\n' +
            '  • tradeSlugs — lọc bài đăng liên quan đến ngành nghề\n' +
            '  • budgetMin / budgetMax — khoảng ngân sách\n' +
            '  • sortBy / order — sắp xếp\n' +
            'Mặc định chỉ trả về bài OPEN.',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, type: search_dto_1.PostSearchResponseDto }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof search_dto_1.PostSearchQueryDto !== "undefined" && search_dto_1.PostSearchQueryDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], SearchController.prototype, "searchPosts", null);
__decorate([
    (0, common_1.Get)('providers'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Tìm kiếm thợ (Provider)',
        description: 'Tìm thợ theo:\n' +
            '  • displayName — 1 ký tự trở lên, hỗ trợ không dấu\n' +
            '  • province — lọc cứng 34 tỉnh/thành\n' +
            '  • tradeSlugs — lọc cứng theo nghề đã đăng ký (OR logic)\n' +
            'Kết quả luôn kèm danh sách nghề + số năm kinh nghiệm.',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, type: search_dto_1.ProviderSearchResponseDto }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof search_dto_1.ProviderSearchQueryDto !== "undefined" && search_dto_1.ProviderSearchQueryDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], SearchController.prototype, "searchProviders", null);
__decorate([
    (0, common_1.Get)('by-province'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Lọc theo tỉnh/thành — trả về cả bài đăng lẫn thợ',
        description: 'Lọc cứng theo 1 tỉnh/thành trong 34 tỉnh được hỗ trợ. ' +
            'Trả về bài đăng (OPEN) và thợ đang hoạt động tại tỉnh đó trong 1 request. ' +
            'Dùng cho trang "Xem dịch vụ theo khu vực".',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, type: search_dto_1.ByProvinceResponseDto }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof search_dto_1.ByProvinceQueryDto !== "undefined" && search_dto_1.ByProvinceQueryDto) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], SearchController.prototype, "searchByProvince", null);
__decorate([
    (0, common_1.Get)('provinces'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Danh sách tỉnh/thành (autocomplete)',
        description: 'Trả về 34 tỉnh/thành, lọc theo q nếu có. ' +
            'Không truyền q → trả về đủ 34. Dùng cho dropdown/autocomplete.',
    }),
    (0, swagger_1.ApiQuery)({ name: 'q', required: false, example: 'Đà' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, type: search_dto_1.ProvinceSuggestResponseDto }),
    __param(0, (0, common_1.Query)('q')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], SearchController.prototype, "suggestProvinces", null);
__decorate([
    (0, common_1.Get)('trades'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Danh mục nghề nghiệp (catalog + autocomplete)',
        description: 'Trả về danh sách nghề đang hoạt động + nhóm nghề. ' +
            'Lọc theo tên (q, hỗ trợ không dấu) hoặc nhóm (category). ' +
            'Dùng slug từ response làm tradeSlugs ở /search/providers hoặc /search/posts.',
    }),
    (0, swagger_1.ApiQuery)({ name: 'q', required: false, example: 'dien' }),
    (0, swagger_1.ApiQuery)({ name: 'category', required: false, example: 'Điện - Nước' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, type: search_dto_1.TradeSuggestResponseDto }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_l = typeof search_dto_1.TradeSuggestQueryDto !== "undefined" && search_dto_1.TradeSuggestQueryDto) === "function" ? _l : Object]),
    __metadata("design:returntype", typeof (_m = typeof Promise !== "undefined" && Promise) === "function" ? _m : Object)
], SearchController.prototype, "suggestTrades", null);
exports.SearchController = SearchController = __decorate([
    (0, swagger_1.ApiTags)('Search'),
    (0, common_1.Controller)('search'),
    __metadata("design:paramtypes", [typeof (_a = typeof search_service_1.SearchService !== "undefined" && search_service_1.SearchService) === "function" ? _a : Object])
], SearchController);


/***/ }),

/***/ "./src/modules/search/search.module.ts":
/*!*********************************************!*\
  !*** ./src/modules/search/search.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SearchModule = void 0;
const post_entity_1 = __webpack_require__(/*! @/modules/posts/entities/post.entity */ "./src/modules/posts/entities/post.entity.ts");
const profile_entity_1 = __webpack_require__(/*! @/modules/profile/entities/profile.entity */ "./src/modules/profile/entities/profile.entity.ts");
const providertrade_entity_1 = __webpack_require__(/*! @/modules/profile/entities/providertrade.entity */ "./src/modules/profile/entities/providertrade.entity.ts");
const trade_entity_1 = __webpack_require__(/*! @/modules/profile/entities/trade.entity */ "./src/modules/profile/entities/trade.entity.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const search_controller_1 = __webpack_require__(/*! ./search.controller */ "./src/modules/search/search.controller.ts");
const search_repository_1 = __webpack_require__(/*! ./repositories/search.repository */ "./src/modules/search/repositories/search.repository.ts");
const search_mapper_service_1 = __webpack_require__(/*! ./services/search mapper.service */ "./src/modules/search/services/search mapper.service.ts");
const search_service_1 = __webpack_require__(/*! ./services/search.service */ "./src/modules/search/services/search.service.ts");
let SearchModule = class SearchModule {
};
exports.SearchModule = SearchModule;
exports.SearchModule = SearchModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([post_entity_1.PostCustomer, profile_entity_1.Profile, trade_entity_1.Trade, providertrade_entity_1.ProviderTrade]),
        ],
        controllers: [search_controller_1.SearchController],
        providers: [search_service_1.SearchService, search_repository_1.SearchRepository, search_mapper_service_1.SearchMapperService],
        exports: [search_service_1.SearchService],
    })
], SearchModule);


/***/ }),

/***/ "./src/modules/search/services/search mapper.service.ts":
/*!**************************************************************!*\
  !*** ./src/modules/search/services/search mapper.service.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SearchMapperService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const search_dto_1 = __webpack_require__(/*! ../dtos/search.dto */ "./src/modules/search/dtos/search.dto.ts");
let SearchMapperService = class SearchMapperService {
    toPostResult(post, keyword) {
        const profile = post.customer?.profile;
        return {
            id: post.id,
            title: post.title,
            location: post.location,
            province: this.extractProvince(post.location),
            status: post.status,
            budget: post.budget != null ? Number(post.budget) : undefined,
            desiredTime: post.desiredTime,
            customer: {
                customerId: post.customerId,
                displayName: profile?.displayName ?? null,
                avatarUrl: profile?.avatarUrl ?? null,
            },
            createdAt: post.createdAt,
            highlight: keyword?.trim()
                ? this.buildHighlight(post.title, keyword.trim())
                : undefined,
        };
    }
    toProviderResult(row) {
        return {
            id: row.user.id,
            displayName: row.displayName,
            avatarUrl: row.avatarUrl,
            bio: row.bio ? this.truncate(row.bio, 120) : undefined,
            address: row.address,
            province: this.extractProvince(row.address),
            trades: this.mapTrades(row.providerTrades ?? []),
            isVerified: row.user.isVerified ?? false,
            memberSince: row.user.createdAt,
        };
    }
    toTradeDto(trade, yearsExperience) {
        return {
            id: trade.id,
            name: trade.name,
            slug: trade.slug,
            category: trade.category,
            icon: trade.icon,
            yearsExperience: yearsExperience ?? undefined,
        };
    }
    extractProvince(location) {
        if (!location?.trim())
            return undefined;
        const norm = location.trim();
        const lower = norm.toLowerCase();
        const matched = search_dto_1.VIETNAM_PROVINCES.find((p) => lower.includes(p.toLowerCase()));
        if (matched)
            return matched;
        const last = norm.split(',').pop()?.trim();
        return last || undefined;
    }
    buildHighlight(text, keyword) {
        const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const highlighted = text.replace(new RegExp(`(${escaped})`, 'gi'), '<em>$1</em>');
        return this.truncate(highlighted, 200);
    }
    mapTrades(providerTrades) {
        return providerTrades
            .filter((pt) => pt.trade?.isActive !== false)
            .sort((a, b) => (a.trade?.sortOrder ?? 0) - (b.trade?.sortOrder ?? 0))
            .map((pt) => this.toTradeDto(pt.trade, pt.yearsExperience ?? undefined));
    }
    truncate(str, max) {
        return str.length <= max ? str : `${str.slice(0, max - 1)}…`;
    }
};
exports.SearchMapperService = SearchMapperService;
exports.SearchMapperService = SearchMapperService = __decorate([
    (0, common_1.Injectable)()
], SearchMapperService);


/***/ }),

/***/ "./src/modules/search/services/search.service.ts":
/*!*******************************************************!*\
  !*** ./src/modules/search/services/search.service.ts ***!
  \*******************************************************/
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
var SearchService_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SearchService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const search_dto_1 = __webpack_require__(/*! ../dtos/search.dto */ "./src/modules/search/dtos/search.dto.ts");
const search_repository_1 = __webpack_require__(/*! ../repositories/search.repository */ "./src/modules/search/repositories/search.repository.ts");
const search_mapper_service_1 = __webpack_require__(/*! ./search mapper.service */ "./src/modules/search/services/search mapper.service.ts");
let SearchService = SearchService_1 = class SearchService {
    constructor(repo, mapper) {
        this.repo = repo;
        this.mapper = mapper;
        this.logger = new common_1.Logger(SearchService_1.name);
    }
    async globalSearch(dto) {
        const t0 = Date.now();
        const { q, type = search_dto_1.SearchType.ALL, province, limit = 5 } = dto;
        this.logger.log(`[global] q="${q}" type=${type} province=${province ?? '-'}`);
        const doPost = type === search_dto_1.SearchType.ALL || type === search_dto_1.SearchType.POST;
        const doProvider = type === search_dto_1.SearchType.ALL || type === search_dto_1.SearchType.PROVIDER;
        const [postRes, provRes] = await Promise.all([
            doPost
                ? this.repo.globalSearchPosts(q, province, limit)
                : Promise.resolve({ rows: [], total: 0 }),
            doProvider
                ? this.repo.globalSearchProviders(q, province, limit)
                : Promise.resolve({ rows: [], total: 0 }),
        ]);
        return {
            query: q,
            posts: doPost ? postRes.rows.map((p) => this.mapper.toPostResult(p, q)) : undefined,
            providers: doProvider ? provRes.rows.map((p) => this.mapper.toProviderResult(p)) : undefined,
            totalPosts: postRes.total,
            totalProviders: provRes.total,
            took: Date.now() - t0,
        };
    }
    async searchPosts(dto) {
        const t0 = Date.now();
        const limit = dto.limit ?? 10;
        const offset = dto.offset ?? 0;
        this.logger.log(`[posts] title="${dto.title ?? ''}" province="${dto.province ?? ''}" ` +
            `trades=[${(dto.tradeSlugs ?? []).join(',')}] ` +
            `budget=[${dto.budgetMin ?? '*'},${dto.budgetMax ?? '*'}]`);
        const { rows, total } = await this.repo.searchPosts(dto);
        return {
            data: rows.map((p) => this.mapper.toPostResult(p, dto.title)),
            total,
            limit,
            offset,
            hasMore: offset + rows.length < total,
            took: Date.now() - t0,
        };
    }
    async searchProviders(dto) {
        const t0 = Date.now();
        const limit = dto.limit ?? 20;
        const offset = dto.offset ?? 0;
        this.logger.log(`[providers] name="${dto.displayName ?? ''}" ` +
            `province="${dto.province ?? ''}" ` +
            `trades=[${(dto.tradeSlugs ?? []).join(',')}]`);
        const { rows, total } = await this.repo.searchProviders(dto);
        return {
            data: rows.map((p) => this.mapper.toProviderResult(p)),
            total,
            limit,
            offset,
            hasMore: offset + rows.length < total,
            took: Date.now() - t0,
        };
    }
    async searchByProvince(dto) {
        const t0 = Date.now();
        this.logger.log(`[by-province] province="${dto.province}"`);
        const { posts, totalPosts, providers, totalProviders } = await this.repo.searchByProvince(dto);
        return {
            province: dto.province,
            posts: posts.map((p) => this.mapper.toPostResult(p)),
            totalPosts,
            providers: providers.map((p) => this.mapper.toProviderResult(p)),
            totalProviders,
            took: Date.now() - t0,
        };
    }
    suggestProvinces(q) {
        if (!q?.trim())
            return { provinces: [...search_dto_1.VIETNAM_PROVINCES] };
        const kw = q.trim().toLowerCase();
        return {
            provinces: search_dto_1.VIETNAM_PROVINCES.filter((p) => p.toLowerCase().includes(kw)),
        };
    }
    async suggestTrades(dto) {
        const [trades, categories] = await Promise.all([
            this.repo.findTrades(dto),
            this.repo.findDistinctTradeCategories(),
        ]);
        return {
            trades: trades.map((t) => this.mapper.toTradeDto(t)),
            categories,
        };
    }
};
exports.SearchService = SearchService;
exports.SearchService = SearchService = SearchService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof search_repository_1.SearchRepository !== "undefined" && search_repository_1.SearchRepository) === "function" ? _a : Object, typeof (_b = typeof search_mapper_service_1.SearchMapperService !== "undefined" && search_mapper_service_1.SearchMapperService) === "function" ? _b : Object])
], SearchService);


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
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const user_role_enum_1 = __webpack_require__(/*! @/common/enums/user-role.enum */ "./src/common/enums/user-role.enum.ts");
const refresh_token_entity_1 = __webpack_require__(/*! @/modules/auth/entities/refresh-token.entity */ "./src/modules/auth/entities/refresh-token.entity.ts");
const profile_entity_1 = __webpack_require__(/*! @/modules/profile/entities/profile.entity */ "./src/modules/profile/entities/profile.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let User = class User {
    constructor() {
        this.isVerified = false;
        this.isActive = true;
        this.failedLoginAttempts = 0;
    }
    isAdmin() {
        return this.role === user_role_enum_1.UserRole.ADMIN;
    }
    isCustomer() {
        return this.role === user_role_enum_1.UserRole.CUSTOMER;
    }
    isProvider() {
        return this.role === user_role_enum_1.UserRole.PROVIDER;
    }
    isAccountLocked() {
        if (!this.accountLockedUntil)
            return false;
        return new Date() < this.accountLockedUntil;
    }
    canLogin() {
        return this.isActive &&
            !this.isAccountLocked() &&
            this.deletedAt === null;
    }
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 255,
        nullable: true,
        comment: 'User email for authentication'
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 20,
        nullable: true,
        comment: 'User phone for authentication'
    }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'password_hash',
        length: 255,
        nullable: true,
        select: false,
        comment: 'Hashed password - never select by default'
    }),
    __metadata("design:type", String)
], User.prototype, "passwordHash", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: user_role_enum_1.UserRole,
        default: user_role_enum_1.UserRole.CUSTOMER,
        comment: 'User role for authorization and access control'
    }),
    __metadata("design:type", typeof (_a = typeof user_role_enum_1.UserRole !== "undefined" && user_role_enum_1.UserRole) === "function" ? _a : Object)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'is_verified',
        default: false,
        comment: 'Email/Phone verification status'
    }),
    __metadata("design:type", Boolean)
], User.prototype, "isVerified", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'is_active',
        default: true,
        comment: 'Account active status (can be deactivated by user or admin)'
    }),
    __metadata("design:type", Boolean)
], User.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'last_login_at',
        type: 'timestamp with time zone',
        nullable: true,
        comment: 'Last successful login timestamp'
    }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], User.prototype, "lastLoginAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'failed_login_attempts',
        type: 'int',
        default: 0,
        comment: 'Counter for failed login attempts (for security)'
    }),
    __metadata("design:type", Number)
], User.prototype, "failedLoginAttempts", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'account_locked_until',
        type: 'timestamp with time zone',
        nullable: true,
        comment: 'Temporary account lock timestamp (after too many failed attempts)'
    }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], User.prototype, "accountLockedUntil", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamp with time zone'
    }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamp with time zone'
    }),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        name: 'deleted_at',
        type: 'timestamp with time zone'
    }),
    __metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], User.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => profile_entity_1.Profile, profile => profile.user, {
        cascade: true,
        eager: false
    }),
    __metadata("design:type", typeof (_g = typeof profile_entity_1.Profile !== "undefined" && profile_entity_1.Profile) === "function" ? _g : Object)
], User.prototype, "profile", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => refresh_token_entity_1.RefreshToken, rt => rt.user, {
        cascade: true
    }),
    __metadata("design:type", Array)
], User.prototype, "refreshTokens", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)('users'),
    (0, typeorm_1.Index)(['email'], { unique: true, where: 'deleted_at IS NULL' }),
    (0, typeorm_1.Index)(['phone'], { unique: true, where: 'deleted_at IS NULL AND phone IS NOT NULL' }),
    (0, typeorm_1.Index)(['role', 'deletedAt']),
    (0, typeorm_1.Index)(['isActive', 'deletedAt']),
    (0, typeorm_1.Index)(['createdAt'])
], User);


/***/ }),

/***/ "./src/modules/users/mapper/user.mapper.ts":
/*!*************************************************!*\
  !*** ./src/modules/users/mapper/user.mapper.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toUser = toUser;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
function toUser(user) {
    if (!user?.id || !user?.email || !user?.role) {
        throw new common_1.BadRequestException({
            code: 'INVALID_USER_DATA',
            message: 'User data is incomplete',
        });
    }
    return {
        id: user.id,
        email: user.email,
        phone: user.phone,
        role: user.role,
        isVerified: user.isVerified,
        isActive: user.isActive,
        createdAt: user.createdAt,
    };
}


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
const user_role_enum_1 = __webpack_require__(/*! @/common/enums/user-role.enum */ "./src/common/enums/user-role.enum.ts");
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
            select: ['id', 'email', 'phone', 'role', 'passwordHash'],
        });
    }
    async findById(id, manager) {
        return await this.getRepository(manager).findOne({ where: { id } });
    }
    async findByIdProvider(id, manager) {
        return await this.getRepository(manager).findOne({ where: { id, role: user_role_enum_1.UserRole.PROVIDER, isActive: true } });
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

/***/ "@nestjs/event-emitter":
/*!****************************************!*\
  !*** external "@nestjs/event-emitter" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/event-emitter");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/platform-express":
/*!*******************************************!*\
  !*** external "@nestjs/platform-express" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),

/***/ "@nestjs/platform-socket.io":
/*!*********************************************!*\
  !*** external "@nestjs/platform-socket.io" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@nestjs/platform-socket.io");

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

/***/ "@nestjs/websockets":
/*!*************************************!*\
  !*** external "@nestjs/websockets" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@nestjs/websockets");

/***/ }),

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

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

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("socket.io");

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

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

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