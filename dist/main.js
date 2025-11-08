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

/***/ "./src/common/filters/http-exception.filter.ts":
/*!*****************************************************!*\
  !*** ./src/common/filters/http-exception.filter.ts ***!
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
var GlobalHttpExceptionFilter_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlobalHttpExceptionFilter = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
let GlobalHttpExceptionFilter = GlobalHttpExceptionFilter_1 = class GlobalHttpExceptionFilter {
    constructor(httpAdapterHost) {
        this.httpAdapterHost = httpAdapterHost;
        this.logger = new common_1.Logger(GlobalHttpExceptionFilter_1.name);
    }
    catch(exception, host) {
        const { httpAdapter } = this.httpAdapterHost;
        const ctx = host.switchToHttp();
        const request = ctx.getRequest?.() ?? null;
        const url = request?.url ?? '';
        const method = request?.method ?? '';
        let status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let exceptionResponse = { message: 'Internal server error' };
        if (exception instanceof common_1.HttpException) {
            status = exception.getStatus();
            exceptionResponse = exception.getResponse();
        }
        else if (exception instanceof Error) {
            exceptionResponse = { message: exception.message };
        }
        let code = 'UNKNOWN_ERROR';
        let message = 'Something went wrong';
        if (typeof exceptionResponse === 'string') {
            message = exceptionResponse;
        }
        else if (Array.isArray(exceptionResponse)) {
            message = exceptionResponse.join(', ');
        }
        else if (typeof exceptionResponse === 'object' && exceptionResponse !== null) {
            const respObj = exceptionResponse;
            code = respObj.code ?? respObj.error ?? code;
            const rawMsg = respObj.message;
            if (!rawMsg) {
                if (exception instanceof Error && exception.message)
                    message = exception.message;
            }
            else if (typeof rawMsg === 'string') {
                message = rawMsg;
            }
            else if (Array.isArray(rawMsg)) {
                message = rawMsg.join(', ');
            }
            else if (typeof rawMsg === 'object') {
                if ('message' in rawMsg && typeof rawMsg.message === 'string') {
                    message = rawMsg.message;
                }
                else {
                    try {
                        message = JSON.stringify(rawMsg);
                    }
                    catch {
                        message = String(rawMsg);
                    }
                }
            }
            else {
                message = String(rawMsg);
            }
        }
        if (!code || code === 'UNKNOWN_ERROR') {
            code = common_1.HttpStatus[status] ? common_1.HttpStatus[status].toString() : `HTTP_${status}`;
        }
        this.logger.error(`HTTP ${status} ${method} ${url} - ${message}`, (exception instanceof Error && exception.stack) || JSON.stringify(exception));
        const responseBody = {
            success: false,
            statusCode: status,
            code,
            message,
            path: url,
            timestamp: new Date().toISOString(),
        };
        if (process.env.NODE_ENV !== 'production' && exception instanceof Error) {
            responseBody['stack'] = exception.stack;
        }
        httpAdapter.reply(ctx.getResponse(), responseBody, status);
    }
};
exports.GlobalHttpExceptionFilter = GlobalHttpExceptionFilter;
exports.GlobalHttpExceptionFilter = GlobalHttpExceptionFilter = GlobalHttpExceptionFilter_1 = __decorate([
    (0, common_1.Catch)(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.HttpAdapterHost !== "undefined" && core_1.HttpAdapterHost) === "function" ? _a : Object])
], GlobalHttpExceptionFilter);


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
    port: parseInt(process.env.DATABASE_PORT || '5432'),
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
    port: parseInt(process.env.REDIS_PORT || '6379'),
    password: process.env.REDIS_PASSWORD || undefined,
    ttl: parseInt(process.env.REDIS_TTL || '3600'),
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
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_module_1.AppConfigModule,
            typeorm_module_1.TypeOrmDatabaseModule,
            auth_module_1.AuthModule,
            common_module_1.CommonModule
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
const http_exception_filter_1 = __webpack_require__(/*! ./common/filters/http-exception.filter */ "./src/common/filters/http-exception.filter.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((0, cookie_parser_1.default)());
    const httpAdapterHost = app.get(core_1.HttpAdapterHost);
    app.useGlobalFilters(new http_exception_filter_1.GlobalHttpExceptionFilter(httpAdapterHost));
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const auth_service_1 = __webpack_require__(/*! ../auth/services/auth.service */ "./src/modules/auth/services/auth.service.ts");
const user_entity_1 = __webpack_require__(/*! ../users/entities/user.entity */ "./src/modules/users/entities/user.entity.ts");
const auth_controller_1 = __webpack_require__(/*! ./controllers/auth.controller */ "./src/modules/auth/controllers/auth.controller.ts");
const refresh_token_entity_1 = __webpack_require__(/*! ./entities/refresh-token.entity */ "./src/modules/auth/entities/refresh-token.entity.ts");
const refresh_token_repository_1 = __webpack_require__(/*! ./repositories/refresh-token.repository */ "./src/modules/auth/repositories/refresh-token.repository.ts");
const user_repository_1 = __webpack_require__(/*! ./repositories/user.repository */ "./src/modules/auth/repositories/user.repository.ts");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, refresh_token_entity_1.RefreshToken])],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, user_repository_1.UserRepository, refresh_token_repository_1.RefreshTokenRepository],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);


/***/ }),

/***/ "./src/modules/auth/controllers/auth.controller.ts":
/*!*********************************************************!*\
  !*** ./src/modules/auth/controllers/auth.controller.ts ***!
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const error_response_dto_1 = __webpack_require__(/*! @/common/dtos/error-response.dto */ "./src/common/dtos/error-response.dto.ts");
const jwt_service_1 = __webpack_require__(/*! @/common/services/jwt.service */ "./src/common/services/jwt.service.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const auth_service_1 = __webpack_require__(/*! ../services/auth.service */ "./src/modules/auth/services/auth.service.ts");
const login_response_dto_1 = __webpack_require__(/*! ../dtos/login-response.dto */ "./src/modules/auth/dtos/login-response.dto.ts");
const login_dto_1 = __webpack_require__(/*! ../dtos/login.dto */ "./src/modules/auth/dtos/login.dto.ts");
const register_response_dto_1 = __webpack_require__(/*! ../dtos/register-response.dto */ "./src/modules/auth/dtos/register-response.dto.ts");
const register_dto_1 = __webpack_require__(/*! ../dtos/register.dto */ "./src/modules/auth/dtos/register.dto.ts");
let AuthController = class AuthController {
    constructor(authService, jwtService) {
        this.authService = authService;
        this.jwtService = jwtService;
    }
    async register(registerDto) {
        const result = await this.authService.register(registerDto);
        return {
            success: true,
            message: 'Register successful',
            data: result
        };
    }
    async login(loginDto, res) {
        const result = await this.authService.login(loginDto);
        res.cookie('refreshToken', result.refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
            path: '/',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        return {
            success: true,
            message: 'Login successful',
            data: {
                accessToken: result.accessToken,
                user: result.user,
            },
        };
    }
    async refresh(req, res) {
        const refreshToken = req.cookies?.refreshToken;
        if (!refreshToken)
            throw new common_1.UnauthorizedException('Refresh token not found');
        const payload = this.jwtService.verifyRefreshToken(refreshToken);
        const isValidRefreshToken = await this.authService.validateRefreshToken(payload.id, refreshToken);
        if (!isValidRefreshToken) {
            throw new common_1.UnauthorizedException('Invalid or expired refresh token');
        }
        const newAccessToken = this.jwtService.generateAccessToken(payload);
        const newRefreshToken = this.jwtService.generateRefreshToken(payload);
        await this.authService.updateRefreshToken(payload.id, refreshToken, newRefreshToken);
        res.cookie('refreshToken', newRefreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
            path: '/',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        return {
            success: true,
            message: 'Token refreshed successfully',
            data: {
                accessToken: newAccessToken,
            },
        };
    }
    async logout(req, res) {
        const refreshToken = req.cookies?.refreshToken;
        if (!refreshToken) {
            throw new common_1.UnauthorizedException('Refresh token not found');
        }
        const payload = this.jwtService.verifyRefreshToken(refreshToken);
        await this.authService.revokeRefreshToken(payload.id, refreshToken);
        res.clearCookie('refreshToken', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
            path: '/',
        });
        return {
            success: true,
            message: 'Logout successful',
        };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('register'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: 'Register a new student',
        description: 'Register a new account using email and password.',
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Register successful',
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
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof register_dto_1.RegisterDto !== "undefined" && register_dto_1.RegisterDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Login a student',
        description: 'Authenticate student and return JWT tokens.',
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
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof login_dto_1.LoginDto !== "undefined" && login_dto_1.LoginDto) === "function" ? _d : Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('refresh'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Refresh access token',
        description: 'Generate new access token using refresh token from cookies.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Token refreshed successfully',
        type: login_response_dto_1.LoginResponseDto,
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Invalid or expired refresh token',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Logout a user',
        description: 'Clear refresh token cookie to logout.',
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Invalid or missing token',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object, typeof (_b = typeof jwt_service_1.JwtService !== "undefined" && jwt_service_1.JwtService) === "function" ? _b : Object])
], AuthController);


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
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class RegisterDto {
}
exports.RegisterDto = RegisterDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "fullName", void 0);


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
    (0, typeorm_1.Column)({ type: 'timestamp with time zone', name: 'expires_at' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], RefreshToken.prototype, "expiresAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], RefreshToken.prototype, "createdAt", void 0);
exports.RefreshToken = RefreshToken = __decorate([
    (0, typeorm_1.Entity)('refresh_tokens'),
    (0, typeorm_1.Unique)(['tokenHash']),
    (0, typeorm_1.Index)('idx_refresh_expires', ['expiresAt'])
], RefreshToken);


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefreshTokenRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const refresh_token_entity_1 = __webpack_require__(/*! ../entities/refresh-token.entity */ "./src/modules/auth/entities/refresh-token.entity.ts");
let RefreshTokenRepository = class RefreshTokenRepository {
    constructor(repo) {
        this.repo = repo;
    }
    async findByUserId(userId) {
        return this.repo.find({
            where: { userId },
            order: { createdAt: 'DESC' },
        });
    }
    async findOldestByUserId(userId) {
        return this.repo.find({
            where: { userId },
            order: { createdAt: 'ASC' },
        });
    }
    async saveToken(userId, tokenHash, expiresAt) {
        const entity = this.repo.create({ userId, tokenHash, expiresAt });
        await this.repo.save(entity);
    }
    async deleteById(id) {
        await this.repo.delete(id);
    }
    async deleteOldest(userId) {
        const tokens = await this.findOldestByUserId(userId);
        if (tokens.length >= 5) {
            await this.repo.delete(tokens[0].id);
        }
    }
};
exports.RefreshTokenRepository = RefreshTokenRepository;
exports.RefreshTokenRepository = RefreshTokenRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(refresh_token_entity_1.RefreshToken)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], RefreshTokenRepository);


/***/ }),

/***/ "./src/modules/auth/repositories/user.repository.ts":
/*!**********************************************************!*\
  !*** ./src/modules/auth/repositories/user.repository.ts ***!
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ../../users/entities/user.entity */ "./src/modules/users/entities/user.entity.ts");
let UserRepository = class UserRepository {
    constructor(repo) {
        this.repo = repo;
    }
    async findByEmail(email) {
        return this.repo.findOne({ where: { email } });
    }
    async findByPhone(phone) {
        return this.repo.findOne({ where: { phone } });
    }
    async findByIdentifier(identifier) {
        return this.repo.findOne({
            where: [
                { email: identifier.toLowerCase() },
                { phone: identifier },
            ],
            select: ['id', 'email', 'phone', 'fullName', 'role', 'passwordHash'],
        });
    }
    async createUser(data) {
        const entity = this.repo.create(data);
        return this.repo.save(entity);
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UserRepository);


/***/ }),

/***/ "./src/modules/auth/services/auth.service.ts":
/*!***************************************************!*\
  !*** ./src/modules/auth/services/auth.service.ts ***!
  \***************************************************/
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const jwt_service_1 = __webpack_require__(/*! @/common/services/jwt.service */ "./src/common/services/jwt.service.ts");
const user_to_jwt_payload_mapper_1 = __webpack_require__(/*! @/modules/auth/mappers/user-to-jwt-payload.mapper */ "./src/modules/auth/mappers/user-to-jwt-payload.mapper.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const bcrypt = __importStar(__webpack_require__(/*! bcrypt */ "bcrypt"));
const refresh_token_repository_1 = __webpack_require__(/*! ../repositories/refresh-token.repository */ "./src/modules/auth/repositories/refresh-token.repository.ts");
const user_repository_1 = __webpack_require__(/*! ../repositories/user.repository */ "./src/modules/auth/repositories/user.repository.ts");
let AuthService = class AuthService {
    constructor(userRepo, jwtService, refreshTokenRepo) {
        this.userRepo = userRepo;
        this.jwtService = jwtService;
        this.refreshTokenRepo = refreshTokenRepo;
    }
    async register(data) {
        const existingEmailUser = await this.userRepo.findByEmail(data.email.toLowerCase());
        if (existingEmailUser) {
            throw new common_1.ConflictException({
                code: 'EMAIL_ALREADY_REGISTERED',
                message: 'Email already registered',
            });
        }
        const existingPhoneUser = await this.userRepo.findByPhone(data.phone);
        if (existingPhoneUser) {
            throw new common_1.ConflictException({
                code: 'PHONE_ALREADY_REGISTERED',
                message: 'Phone already registered',
            });
        }
        const passwordHash = await bcrypt.hash(data.password, 12);
        const user = await this.userRepo.createUser({
            email: data.email?.toLowerCase(),
            phone: data.phone,
            fullName: data.fullName,
            passwordHash,
        });
        const responseRegisterData = {
            id: user.id,
            email: user.email,
            phone: user.phone,
            fullName: user.fullName,
        };
        return responseRegisterData;
    }
    async login(data) {
        const user = await this.userRepo.findByIdentifier(data.identifier);
        if (!user)
            throw new common_1.UnauthorizedException({
                code: 'INVALID_CREDENTIALS',
                message: 'Invalid email or phone',
            });
        const isMatch = await bcrypt.compare(data.password, user.passwordHash);
        if (!isMatch)
            throw new common_1.UnauthorizedException({
                code: 'INVALID_CREDENTIALS',
                message: 'Invalid password',
            });
        const payload = (0, user_to_jwt_payload_mapper_1.toJwtPayload)(user);
        const accessToken = this.jwtService.generateAccessToken(payload);
        const refreshToken = this.jwtService.generateRefreshToken(payload);
        const tokenHash = await bcrypt.hash(refreshToken, 10);
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
        await this.refreshTokenRepo.deleteOldest(user.id);
        await this.refreshTokenRepo.saveToken(user.id, tokenHash, expiresAt);
        const responseLoginData = {
            accessToken,
            refreshToken,
            user: {
                id: user.id,
                email: user.email,
                phone: user.phone,
                name: user.fullName,
                role: user.role
            }
        };
        return responseLoginData;
    }
    async validateRefreshToken(userId, token) {
        const tokens = await this.refreshTokenRepo.findByUserId(userId);
        if (tokens.length === 0)
            return false;
        for (const rt of tokens) {
            const match = await bcrypt.compare(token, rt.tokenHash);
            const notExpired = rt.expiresAt > new Date();
            if (match && notExpired)
                return true;
        }
        return false;
    }
    async updateRefreshToken(userId, oldToken, newToken) {
        const tokens = await this.refreshTokenRepo.findByUserId(userId);
        for (const rt of tokens) {
            const match = await bcrypt.compare(oldToken, rt.tokenHash);
            if (match) {
                await this.refreshTokenRepo.deleteById(rt.id);
                break;
            }
        }
        const tokenHash = await bcrypt.hash(newToken, 10);
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
        await this.refreshTokenRepo.saveToken(userId, tokenHash, expiresAt);
    }
    async revokeRefreshToken(userId, refreshToken) {
        const tokens = await this.refreshTokenRepo.findByUserId(userId);
        for (const rt of tokens) {
            const isMatch = await bcrypt.compare(refreshToken, rt.tokenHash);
            if (isMatch) {
                await this.refreshTokenRepo.deleteById(rt.id);
                break;
            }
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof user_repository_1.UserRepository !== "undefined" && user_repository_1.UserRepository) === "function" ? _a : Object, typeof (_b = typeof jwt_service_1.JwtService !== "undefined" && jwt_service_1.JwtService) === "function" ? _b : Object, typeof (_c = typeof refresh_token_repository_1.RefreshTokenRepository !== "undefined" && refresh_token_repository_1.RefreshTokenRepository) === "function" ? _c : Object])
], AuthService);


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

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

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