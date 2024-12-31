import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { PrismaModule } from './prisma/prisma.module';
import { PostModule } from './post/post.module';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { TagModule } from './tag/tag.module';
import { CategoryModule } from './category/category.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PrismaModule, PostModule, TagModule, CategoryModule, UserModule],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
