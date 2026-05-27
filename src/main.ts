import { AppModule } from '@/core/app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';
import { GlobalExceptionFilter } from './common/exceptions/index';

async function bootstrap() {
    // rawBody: true preserves the raw Buffer on req.rawBody for Stripe webhook
    // signature verification. The JSON body parser still runs for all other routes.
    const app = await NestFactory.create(AppModule, { rawBody: true });
    app.useWebSocketAdapter(new IoAdapter(app));
    app.use(cookieParser());
    const httpAdapterHost = app.get(HttpAdapterHost);
    app.useGlobalFilters(new GlobalExceptionFilter(httpAdapterHost));

    const configService = app.get(ConfigService);

    const corsOrigins = (configService.get<string>('CORS_ORIGIN') ?? '')
        .split(',')
        .map(s => s.trim())
        .filter(Boolean);

    app.enableCors({
        origin: [
            ...corsOrigins,
            'https://postmaxillary-variably-justa.ngrok-free.dev',
            'http://localhost:3001',
            'http://localhost:3000',
            'http://localhost:3002',
        ],
        credentials: true,
    });

    const apiPrefix = configService.get<string>('API_PREFIX', 'api/v1');
    app.setGlobalPrefix(apiPrefix);

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: false,
            transform: true,
        }),
    );

    const config = new DocumentBuilder()
        .setTitle('Service Matching API')
        .setDescription('API for service-matching platform')
        .setVersion('1.0')
        .addBearerAuth()
        .addServer(`/${apiPrefix}`)
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    const port = configService.get<number>('APP_PORT') ?? 3000;
    await app.listen(port);
}
bootstrap();
