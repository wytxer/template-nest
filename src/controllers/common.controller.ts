import { Controller, Get } from '@nestjs/common'
import { ApiTags, ApiOperation } from '@nestjs/swagger'
import { CommonService } from '@services/common.service'
import { IConstValue } from '@domains/index'

@ApiTags('Common')
@Controller({
  path: 'common',
  version: '1'
})
export class CommonController {
  constructor(private readonly commonService: CommonService) {}

  @ApiOperation({
    summary: '获取性别列表'
  })
  @Get('genders')
  genders(): IConstValue[] {
    return this.commonService.genders()
  }
}
