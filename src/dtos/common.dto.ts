import { IsInt, Min, IsOptional } from 'class-validator'
import { Type } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'

/**
 * 通用的分页接口参数
 */
export class CommonPaginationDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  @ApiProperty({ description: '当前分页', example: 1 })
  currentPage?: number = 1

  @IsOptional()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  @ApiProperty({ description: '分页条数', example: 10 })
  pageSize?: number = 10
}
