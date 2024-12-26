import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../common/entities/base.entity';

export class TagEntity extends BaseEntity {
  @ApiProperty({ description: '标签名' })
  name: string;
}
