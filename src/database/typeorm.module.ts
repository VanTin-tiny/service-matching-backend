import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DATABASE_HOST', 'localhost'),
        port: config.get<number>('DATABASE_PORT', 5432),
        username: config.get<string>('DATABASE_USERNAME', 'postgres'),
        password: config.get<string>('DATABASE_PASSWORD', 'password'),
        database: config.get<string>('DATABASE_NAME', 'service_matching'),
        autoLoadEntities: true,
        synchronize: true,
        logging: process.env.NODE_ENV === 'development',

        ssl: config.get<boolean>('DATABASE_SSL') || false,
      }),
    }),
  ],
})
export class TypeOrmDatabaseModule {}
