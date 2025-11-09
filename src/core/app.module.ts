import { CommonModule } from '@/common/common.module';
import { AppConfigModule } from '@/config/config.module';
import { TypeOrmDatabaseModule } from '@/database/typeorm.module';
import { AuthModule } from '@/modules/auth/auth.module';
import { PostModule } from '@/modules/posts/post.module';
import { Module } from '@nestjs/common';
@Module({
  imports: [
    AppConfigModule,
    TypeOrmDatabaseModule,
    AuthModule,
    PostModule,
    CommonModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }