import { Injectable } from '@nestjs/common'
import { Gender, IConstValue } from '@domains/index'

@Injectable()
export class CommonService {
  /**
   * 性别列表
   */
  genders: () => IConstValue[] = Gender.values
}
