import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CategoryEntity } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  @ApiOperation({ summary: '创建分类' })
  @ApiResponse({ status: 200, description: '创建分类', type: CategoryEntity })
  async create(createCategoryDto: CreateCategoryDto): Promise<CategoryEntity> {
    return this.prisma.category.create({
      data: createCategoryDto,
    });
  }

  @ApiOperation({ summary: '获取所有分类' })
  @ApiResponse({
    status: 200,
    description: '获取所有分类',
    type: [CategoryEntity],
  })
  async findAll(name?: string) {
    return this.prisma.category.findMany({
      where: { name: { contains: name } },
    });
  }

  @ApiOperation({ summary: '获取分类' })
  @ApiResponse({
    status: 200,
    description: '获取分类',
    type: CategoryEntity,
  })
  async findOne(id: string) {
    return this.prisma.category.findUnique({
      where: { id },
    });
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
