import { ApiProperty } from '@nestjs/swagger'

/**
 * 分页结构接口文档
 */
export class CommonPaginationVo {
  @ApiProperty({ description: '当前分页', example: 1 })
  currentPage: number

  @ApiProperty({ description: '分页条数', example: 10 })
  pageSize: number

  @ApiProperty({ description: '总条数', example: 1 })
  totalSize: number

  @ApiProperty({ description: '数据', example: [] })
  rows: any[]
}

/**
 * 标识为字符串的枚举值接口文档
 */
export class CommonConstValueVo {
  @ApiProperty({ description: '标签 id', example: 'id' })
  value: string

  @ApiProperty({ description: '标签名称', example: '名称' })
  label: string
}

/**
 * 标识为数字的枚举值接口文档
 */
export class CommonConstValueNumberVo {
  @ApiProperty({ description: '标签 id', example: 1 })
  value: number

  @ApiProperty({ description: '标签名称', example: '名称' })
  label: string
}

/**
 * 通用的文件结构
 */
export class CommonFileVo {
  @ApiProperty({ description: '文件名称', example: '文件名.png' })
  fileName: string

  @ApiProperty({
    description: '文件路径',
    example: 'http://resource.bszhct.com/66d68198-8b90-4fbb-88e5-9b04f9637bf8.png'
  })
  filePath: string
}
