import type { IConstValue } from '../interfaces'

/**
 * 性别枚举
 */
export enum GenderEnum {
  unknown = 'UNKNOWN',
  male = 'MALE',
  female = 'FEMALE'
}
export class Gender {
  /**
   * 性别列表
   * @returns
   */
  static values(): IConstValue[] {
    return [
      {
        label: '未知',
        value: GenderEnum.unknown
      },
      {
        label: '男',
        value: GenderEnum.male
      },
      {
        label: '女',
        value: GenderEnum.female
      }
    ]
  }
  /**
   * 根据枚举值获取标签名称
   * @param value
   * @returns
   */
  static getLabelByValue(value: string): string {
    return Gender.values().find((item) => item.value === value)?.label
  }
  /**
   * 将枚举转换成注释
   * @returns
   */
  static toComment(): string {
    return `性别枚举，${Gender.values()
      .map((item) => `${item.value}：${item.label}`)
      .join('，')}`
  }
}

/**
 * 排序方式枚举
 */
export enum SortOrderEnum {
  desc = 'DESC',
  asc = 'ASC'
}

/**
 * 客户端来源枚举
 */
export enum ClientSourceEnum {
  wechatApp = 'WECHAT_APP'
}
export class ClientSource {
  /**
   * 客户端来源列表
   * @returns
   */
  static values(): IConstValue[] {
    return [
      {
        label: '微信小程序',
        value: ClientSourceEnum.wechatApp
      }
    ]
  }
  /**
   * 根据枚举值获取标签名称
   * @param value
   * @returns
   */
  static getLabelByValue(value: string): string {
    return ClientSource.values().find((item) => item.value === value)?.label
  }
  /**
   * 将枚举转换成注释
   * @returns
   */
  static toComment(): string {
    return `客户端来源，${ClientSource.values()
      .map((item) => `${item.value}：${item.label}`)
      .join('，')}`
  }
}
