import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { PaginationDto } from '../../../common/dto/pagination.dto';

export class FindPostByTagDto extends PaginationDto {
  @ApiProperty({ description: '标签ID' })
  @IsString()
  tagId: string;
}
