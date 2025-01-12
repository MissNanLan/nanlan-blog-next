import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PostsService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {
  ApiOperation,
  ApiOkResponse,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { PostEntity } from './entity/post.entity';
import { PaginatedPostsEntity } from './entity/paginated-posts.entity';
import { FindPostByDateDto } from './dto/request/find-post-by-date.dto';
import { FindPostDto } from './dto/request/find-post-by-all.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';

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
  async findAll(@Query() query: FindPostDto) {
    return this.postsService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: '获取文章' })
  @ApiOkResponse({ type: PaginatedPostsEntity })
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
  @ApiOkResponse({ type: PaginatedPostsEntity })
  @ApiParam({ name: 'date', description: '日期 (YYYY-MM)', example: '2024-03' })
  async getPostByDate(
    @Param('date') dateParam: FindPostByDateDto['date'],
    @Query() query: PaginationDto,
  ) {
    return this.postsService.getPostByDate({
      ...query,
      date: dateParam,
    });
  }

  @Get('category/:id')
  @ApiOperation({ summary: '获取指定分类的文章' })
  @ApiOkResponse({ type: PaginatedPostsEntity })
  @ApiParam({ name: 'id', description: '分类ID' })
  @ApiQuery({ type: PaginationDto })
  async getByCategoryId(
    @Param('id') id: string,
    @Query() query: PaginationDto,
  ) {
    return this.postsService.getPostByCategoryId({
      ...query,
      categoryId: id,
    });
  }

  @Get('tag/:id')
  @ApiOperation({ summary: '获取指定标签的文章' })
  @ApiOkResponse({ type: PaginatedPostsEntity })
  @ApiParam({ name: 'id', description: '标签ID' })
  @ApiQuery({ type: PaginationDto })
  async getByTagId(@Param('id') id: string, @Query() query: PaginationDto) {
    return this.postsService.getPostByTagId({
      tagId: id,
      ...query,
    });
  }
}
