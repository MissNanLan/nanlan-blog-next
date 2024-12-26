import { Module } from '@nestjs/common';
import { PostsService } from './post.service';
import { PostController } from './post.controller';

@Module({
  controllers: [PostController],
  providers: [PostsService],
})
export class PostModule {}
