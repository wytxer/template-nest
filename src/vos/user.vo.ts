import { PickType } from '@nestjs/swagger'
import { UserEntity } from '@entities/index'

/**
 * 用户信息
 */
export class UserInfoVo extends PickType(UserEntity, ['id', 'nickname', 'avatarUrl', 'phone']) {}
