import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { PostModule } from './post/post.module';
import { TagModule } from './tag/tag.module';
import { CategoryModule } from './category/category.module';
import { UserModule } from './user/user.module';



@Module({
  imports: [PrismaModule, PostModule, TagModule, CategoryModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule { }

