import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostsService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiOperation, ApiOkResponse } from '@nestjs/swagger';
import { PostEntity } from './entity/post.entity';

@Controller('post')
export class PostController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @ApiOperation({ summary: '创建文章' })
  @ApiOkResponse({ type: PostEntity })
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  @ApiOperation({ summary: '获取所有文章' })
  @ApiOkResponse({ type: [PostEntity] })
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取文章' })
  @ApiOkResponse({ type: PostEntity })
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新文章' })
  @ApiOkResponse({ type: PostEntity })
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(id, updatePostDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除文章' })
  @ApiOkResponse({ type: PostEntity })
  remove(@Param('id') id: string) {
    return this.postsService.remove(id);
  }

  @Get('date/:date')
  @ApiOperation({ summary: '获取指定年月的文章' })
  @ApiOkResponse({ type: [PostEntity] })
  async getByDate(@Param('date') date: string) {
    return this.postsService.findByDate(date);
  }
}
