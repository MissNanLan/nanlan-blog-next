import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { LoggerUtil } from 'src/common/utils/logger.util';

@Injectable()
export class PostsService {
  private readonly logger = new LoggerUtil(PostsService.name);

  constructor(private prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto) {
    this.logger.debug('Creating post...');
    try {
      // 尝试创建文章
      const post = await this.prisma.post.create({
        data: {
          title: createPostDto.title,
          description: createPostDto.description,
          content: createPostDto.content,
          author: {
            connect: { id: createPostDto.authorId },
          },
          // 只在有值时添加关系
          ...(createPostDto.categoryIds?.length > 0 && {
            categories: {
              connect: createPostDto.categoryIds.map((id) => ({ id })),
            },
          }),
          ...(createPostDto.tagIds?.length > 0 && {
            tags: {
              connect: createPostDto.tagIds.map((id) => ({ id })),
            },
          }),
        },
        include: {
          categories: true,
          tags: true,
          author: true,
        },
      });
      return post;
    } catch (error) {
      this.logger.error('Error creating post:', error);
      throw error;
    }
  }

  async findAll() {
    return this.prisma.post.findMany({
      include: {
        categories: false,
        tags: false,
        author: false,
      },
    });
  }

  async findOne(id: string) {
    this.logger.debug(`finding post data...current id:, ${id}`);
    return this.prisma.post.findUnique({
      where: { id },
      include: {
        categories: true,
        tags: true,
        author: true,
      },
    });
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    return this.prisma.post.update({
      where: { id },
      data: updatePostDto,
      include: {
        categories: true,
        tags: true,
        author: true,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.post.delete({
      where: { id },
    });
  }
}
