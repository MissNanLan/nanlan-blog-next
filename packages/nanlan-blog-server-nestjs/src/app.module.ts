import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { PrismaModule } from './prisma/prisma.module';
import { PostsModule } from './posts/posts.module';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { TagsModule } from './tags/tags.module';
import { CategoriesModule } from './categories/categories.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    PrismaModule,
    PostsModule,
    TagsModule,
    CategoriesModule,
    UserModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
