import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsInt, IsEnum, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export enum OrderBy {
  ASC = 'asc',
  DESC = 'desc',
}

export class PaginationDto {
  @ApiPropertyOptional({ description: '游标（上一页最后一条记录的ID）' })
  @IsOptional()
  @IsString()
  cursor?: string;

  @ApiPropertyOptional({ description: '每页数量', minimum: 1, default: 10 })
  @IsOptional()
  @Transform(({ value }) => {
    console.log('value---', typeof value);
    return parseInt(value, 10);
  })
  @IsInt()
  @Min(1)
  limit?: number;

  @ApiPropertyOptional({
    description: '排序方向',
    enum: OrderBy,
    default: OrderBy.DESC,
  })
  @IsOptional()
  @IsEnum(OrderBy)
  orderBy?: OrderBy;
}
