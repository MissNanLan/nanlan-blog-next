import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: '分类名字', example: '前端' })
  name: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: '父分类ID',
    required: false,
    example: '1234567890',
  })
  parentId?: string;
}
