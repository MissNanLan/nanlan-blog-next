import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCategoryDto {
  @IsString()
  @ApiProperty({ description: '分类名字', example: '前端' })
  name: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCategoryDto)
  @ApiProperty({
    description: '子分类列表',
    required: false,
    type: [CreateCategoryDto],
  })
  children?: CreateCategoryDto[];
}
