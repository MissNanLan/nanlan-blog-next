import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ description: '文章标题', example: '文章标题' })
  @IsString()
  title: string;

  @ApiProperty({ description: '文章描述', example: '文章描述' })
  @IsString()
  description: string;

  @ApiProperty({ description: '文章内容', example: '文章内容' })
  @IsString()
  content: string;

  @ApiProperty({
    description: '分类路径ID数组，从根分类到子分类的顺序排列',
    example: ['前端开发ID', 'ReactID'],
  })
  @IsArray()
  categoryIds: string[];

  @ApiProperty({ description: '标签ID', example: ['tagId1', 'tagId2'] })
  @IsArray()
  tagIds: string[];

  @ApiProperty({ description: '作者ID', example: 'authorId' })
  @IsString()
  authorId: string;
}
