import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CategoryEntity } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  // 构建树形结构并计算总数
  private buildTree = (items: any[], parentId: string | null = null): any[] => {
    const children = items.filter((item) => item.parentId === parentId);

    return children.map((item) => {
      // 递归获取子分类
      const subCategories = this.buildTree(items, item.id);

      // 计算当前分类及其所有子分类的文章总数
      const totalCount = subCategories.reduce(
        (sum, child) => sum + child.count,
        item._count.posts,
      );

      return {
        id: item.id,
        name: item.name,
        parentId: item.parentId,
        children: subCategories,
        count: totalCount,
      };
    });
  };

  private createCategoryWithChidlren = async (
    data: CreateCategoryDto,
    parentId?: string,
  ) => {
    const category = await this.prisma.category.create({
      data: {
        name: data.name,
        parentId,
      },
    });
    if (data.children?.length) {
      for (const child of data.children) {
        await this.createCategoryWithChidlren(child, category.id);
      }
    }
    return category;
  };

  @ApiOperation({ summary: '创建分类' })
  @ApiResponse({ status: 200, description: '创建分类', type: CategoryEntity })
  async create(createCategoryDto: CreateCategoryDto) {
    const category = await this.createCategoryWithChidlren(createCategoryDto);
    const fullCategory = await this.prisma.category.findUnique({
      where: { id: category.id },
      include: {
        children: {
          include: {
            children: true,
          },
        },
      },
    });

    return fullCategory;
  }

  @ApiOperation({ summary: '获取所有分类' })
  @ApiResponse({
    status: 200,
    description: '获取所有分类',
    type: [CategoryEntity],
  })
  async findAll() {
    const categories = await this.prisma.category.findMany({
      include: {
        _count: {
          select: {
            posts: true,
          },
        },
        children: true,
        parent: true,
      },
    });
    return this.buildTree(categories);
  }

  @ApiOperation({ summary: '获取分类' })
  @ApiResponse({
    status: 200,
    description: '获取分类',
    type: CategoryEntity,
  })
  async findOne(id: string) {
    // 先获取目标分类
    const categories = await this.prisma.category.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            posts: true,
          },
        },
        children: true,
        parent: true,
      },
    });
    // TODO: 返回数据结构不对
    return categories;
  }

  // @ApiOperation({ summary: '更新分类' })
  // @ApiResponse({
  //   status: 200,
  //   description: '更新分类',
  //   type: CategoryEntity,
  // })
  // async update(id: string, updateCategoryDto: UpdateCategoryDto) {
  //   return this.prisma.category.update({
  //     where: { id },
  //     data: updateCategoryDto,
  //   });
  // }

  @ApiOperation({ summary: '删除分类' })
  @ApiResponse({
    status: 200,
    description: '删除分类',
    type: CategoryEntity,
  })
  async remove(id: string) {
    return this.prisma.category.delete({
      where: { id },
    });
  }
}
