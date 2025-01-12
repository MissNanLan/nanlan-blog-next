import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches } from 'class-validator';
import { PaginationDto } from 'src/common/dto/pagination.dto';

export class FindPostByDateDto extends PaginationDto {
  @ApiProperty({ description: '日期 (YYYY-MM)' })
  @IsString()
  @Matches(/^\d{4}-\d{2}$/)
  date: string;
}
