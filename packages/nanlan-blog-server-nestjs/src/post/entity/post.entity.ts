import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../common/entities/base.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { CategoryEntity } from 'src/category/entities/category.entity';
import { TagEntity } from 'src/tag/entities/tag.entity';

export class PostEntity extends BaseEntity {
  @ApiProperty({ description: '文章标题' })
  title: string;

  @ApiProperty({ description: '文章内容' })
  content: string;

  @ApiProperty({ description: '作者' })
  author: UserEntity;

  @ApiProperty({ description: '分类' })
  categories: CategoryEntity[];

  @ApiProperty({ description: '标签' })
  tags: TagEntity[];
}
