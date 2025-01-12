import { Injectable } from '@nestjs/common';
import { LoggerUtil } from 'src/common/utils/logger.util';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { FindPostDto } from './dto/request/find-post-by-all.dto';
import { FindPostByDateDto } from './dto/request/find-post-by-date.dto';
import {
  postSelect,
  findManyWithPagination,
  buildCategoryTree,
} from './utils/post.utils';
import { FindPostByTagDto } from './dto/request/find-post-by-tag.dto';
import { FindPostByCategoryDto } from './dto/request/find-post-by-category.dto';

@Injectable()
export class PostsService {
  private readonly logger = new LoggerUtil(PostsService.name);

  constructor(private prisma: PrismaService) {}

  async findAll(params: FindPostDto) {
    const { cursor, limit, orderBy, keyword } = params;

    return findManyWithPagination({
      prisma: this.prisma,
      where: keyword
        ? {
            OR: [
              { title: { contains: keyword, mode: 'insensitive' } },
              { content: { contains: keyword, mode: 'insensitive' } },
              { description: { contains: keyword, mode: 'insensitive' } },
            ],
          }
        : undefined,
      cursor,
      limit,
      orderBy,
      shouldBuildCategoryTree: true,
    });
  }

  async create(createPostDto: CreatePostDto) {
    this.logger.debug('Creating post...');
    const post = await this.prisma.post.create({
      data: {
        title: createPostDto.title,
        description: createPostDto.description,
        content: createPostDto.content,
        author: {
          connect: { id: createPostDto.authorId },
        },
        categories: {
          connect: createPostDto.categoryIds.map((id) => ({ id })),
        },
        tags: {
          connect: createPostDto.tagIds.map((id) => ({ id })),
        },
      },
      select: postSelect,
    });

    if (post) {
      post.categories = buildCategoryTree(post.categories);
    }

    return post;
  }

  async findOne(id: string) {
    this.logger.debug(`finding post data...current id:, ${id}`);
    const post = await this.prisma.post.findUnique({
      where: { id },
      select: postSelect,
    });

    if (post) {
      post.categories = buildCategoryTree(post.categories);
    }

    return post;
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

  async getPostByDate(params: FindPostByDateDto) {
    const { date, cursor, limit, orderBy } = params;
    const [year, month] = date.split('-').map(Number);

    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);

    return findManyWithPagination({
      prisma: this.prisma,
      where: {
        createdAt: {
          gte: startDate,
          lte: endDate,
        },
      },
      cursor,
      limit,
      orderBy,
    });
  }

  async getPostByCategoryId(params: FindPostByCategoryDto) {
    const { cursor, limit, orderBy, categoryId } = params;
    const category = await this.prisma.category.findUnique({
      where: { id: categoryId },
      select: { parentId: true },
    });

    return findManyWithPagination({
      prisma: this.prisma,
      where: {
        categories: {
          some: !category?.parentId
            ? {
                OR: [{ id: categoryId }, { parentId: categoryId }],
              }
            : {
                id: categoryId,
              },
        },
      },
      cursor,
      limit,
      orderBy,
    });
  }

  async getPostByTagId(params: FindPostByTagDto) {
    const { cursor, limit, orderBy, tagId } = params;

    return findManyWithPagination({
      prisma: this.prisma,
      where: {
        tags: {
          some: { id: tagId },
        },
      },
      cursor,
      limit,
      orderBy,
    });
  }
}
