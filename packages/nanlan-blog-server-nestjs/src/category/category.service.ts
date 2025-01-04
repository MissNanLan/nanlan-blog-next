import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
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

  @ApiOperation({ summary: '创建分类' })
  @ApiResponse({ status: 200, description: '创建分类', type: CategoryEntity })
  async create(createCategoryDto: CreateCategoryDto) {
    try {
      // 如果有父分类ID，先检查父分类是否存在
      if (createCategoryDto.parentId) {
        const parentExists = await this.prisma.category.findUnique({
          where: { id: createCategoryDto.parentId },
        });
        if (!parentExists) {
          throw new Error('父分类不存在');
        }
      }

      const category = await this.prisma.category.create({
        data: createCategoryDto,
      });

      return this.buildTree([category]);
    } catch (error) {
      throw new Error(`创建分类失败: ${error.message}`);
    }
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
      },
    });
    return categories;
  }

  @ApiOperation({ summary: '更新分类' })
  @ApiResponse({
    status: 200,
    description: '更新分类',
    type: CategoryEntity,
  })
  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.prisma.category.update({
      where: { id },
      data: updateCategoryDto,
    });
  }

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
