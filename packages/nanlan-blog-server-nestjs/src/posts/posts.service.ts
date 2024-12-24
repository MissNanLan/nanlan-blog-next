import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  private readonly logger = new Logger(PostsService.name);

  constructor(private prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto) {
    this.logger.debug('Creating post with data:', createPostDto);

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
          ...(createPostDto.categoryId?.length > 0 && {
            categories: {
              connect: createPostDto.categoryId.map((id) => ({ id })),
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

      this.logger.debug('Created post:', post);
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
    console.log('✅ finding post data...current id:', id);
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
