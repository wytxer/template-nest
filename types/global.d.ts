import { UserInfoVo } from '@vos/user.vo'

declare global {
  namespace Express {
    interface Request {
      user: UserInfoVo
      platform: string
      version: string
    }
  }
}
