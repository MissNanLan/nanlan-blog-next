import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../common/entities/base.entity';

export class UserEntity extends BaseEntity {
  @ApiProperty({ description: '用户名' })
  name: string;

  @ApiProperty({ description: '邮箱' })
  email: string;
}
