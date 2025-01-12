import { ApiProperty } from '@nestjs/swagger';
import { PostEntity } from './post.entity';

export class PageInfoEntity {
  @ApiProperty()
  hasNextPage: boolean;

  @ApiProperty({ nullable: true })
  nextCursor: string | null;
}

export class PaginatedPostsEntity {
  @ApiProperty({ type: [PostEntity] })
  items: PostEntity[];

  @ApiProperty()
  pageInfo: PageInfoEntity;
}
