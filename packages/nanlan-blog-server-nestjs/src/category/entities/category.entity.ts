import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { BaseEntity } from 'src/common/entities/base.entity';

export class CategoryEntity extends BaseEntity {
  @ApiProperty({ description: '名字' })
  @IsNotEmpty()
  name: string;
}
