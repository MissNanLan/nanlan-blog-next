import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { LoggerUtil } from 'src/common/utils/logger.util';

@Injectable()
export class PostsService {
  private readonly logger = new LoggerUtil(PostsService.name);

  // 创建一个通用的 select 对象
  private readonly postSelect = {
    id: true,
    title: true,
    content: true,
    description: true,
    createdAt: true,
    updatedAt: true,
    readingTime: true,
    count: true,
    categories: {
      select: {
        id: true,
        name: true,
      },
    },
    tags: {
      select: {
        id: true,
        name: true,
      },
    },
    author: {
      select: {
        id: true,
        name: true,
        email: true,
      },
    },
  } as const;

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
        select: this.postSelect,
      });
      return post;
    } catch (error) {
      this.logger.error('Error creating post:', error);
      throw error;
    }
  }

  async findAll() {
    return this.prisma.post.findMany({
      select: this.postSelect,
    });
  }

  async findOne(id: string) {
    this.logger.debug(`finding post data...current id:, ${id}`);
    return this.prisma.post.findUnique({
      where: { id },
      select: this.postSelect,
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

  async findByDate(date: string) {
    const [year, month] = date.split('-').map(Number);

    // 创建当月的开始和结束日期
    const startDate = new Date(year, month - 1, 1); // month - 1 因为 JS 月份从 0 开始
    const endDate = new Date(year, month, 0); // 下个月的第 0 天就是当月最后一天

    this.logger.debug(`Searching posts between ${startDate} and ${endDate}`);

    return this.prisma.post.findMany({
      where: {
        createdAt: {
          gte: startDate,
          lte: endDate,
        },
      },
      select: this.postSelect,
    });
  }

  async getPostByCategoryId(categoryId: string) {
    const posts = await this.prisma.post.findMany({
      where: {
        categories: {
          some: {
            OR: [
              { id: categoryId }, // 直接匹配
              { parentId: categoryId }, // 子分类
            ],
          },
        },
      },
      select: this.postSelect,
    });
    return posts;
  }

  async getPostByTagId(tagId: string) {
    const posts = await this.prisma.post.findMany({
      where: {
        tags: {
          some: { id: tagId },
        },
      },
      select: this.postSelect,
    });
    return posts;
  }
}
