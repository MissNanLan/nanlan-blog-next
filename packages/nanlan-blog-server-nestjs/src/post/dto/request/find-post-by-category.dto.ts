import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { PaginationDto } from 'src/common/dto/pagination.dto';

export class FindPostByCategoryDto extends PaginationDto {
  @ApiProperty({ description: '分类ID' })
  @IsString()
  categoryId: string;
}
