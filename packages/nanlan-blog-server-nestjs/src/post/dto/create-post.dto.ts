import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ description: '文章标题', example: '文章标题  ' })
  title: string;
  @ApiProperty({ description: '文章描述', example: '文章描述' })
  description: string;
  @ApiProperty({ description: '文章内容', example: '文章内容' })
  content: string;
  @ApiProperty({ description: '分类ID', example: ['676a5d946ba0442f9304ddc7'] })
  categoryIds: string[];
  @ApiProperty({ description: '标签ID', example: ['676a5d426ba0442f9304ddc3'] })
  tagIds: string[];
  @ApiProperty({ description: '作者ID', example: '676a54566ba0442f9304ddbc' })
  authorId: string;
}
