import { CommonModule } from '@/common/common.module';
import { AppConfigModule } from '@/config/config.module';
import { TypeOrmDatabaseModule } from '@/database/typeorm.module';
import { AuthModule } from '@/modules/auth/auth.module';
import { PostsModule } from '@/modules/posts/posts.module';


import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
@Module({
  imports: [
    AppConfigModule,
    TypeOrmDatabaseModule,
    AuthModule,
    PostsModule,
    CommonModule,
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 10,
    }])

  ],
  controllers: [],
  providers: [],
})
export class AppModule { }