import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryEntity } from './entities/category.entity';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @ApiOperation({ summary: '创建分类' })
  @ApiOkResponse({ type: CategoryEntity })
  create(@Body() createCategoryDto: CreateCategoryDto) {
    console.log('createCategoryDto', createCategoryDto);
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  @ApiOperation({ summary: '获取所有分类' })
  @ApiResponse({
    status: 200,
    description: '获取所有分类',
    type: [CategoryEntity],
  })
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取分类' })
  @ApiResponse({
    status: 200,
    description: '获取分类',
    type: CategoryEntity,
  })
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新分类' })
  @ApiResponse({
    status: 200,
    description: '更新分类',
    type: CategoryEntity,
  })
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除分类' })
  @ApiResponse({
    status: 200,
    description: '删除分类',
    type: CategoryEntity,
  })
  remove(@Param('id') id: string) {
    return this.categoryService.remove(id);
  }
}
