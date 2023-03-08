import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'
import { UserInfoVo } from '@vos/user.vo'

@Injectable()
export class UserGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService, private readonly config: ConfigService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest()
    let token: string
    if (request.headers.platform === 'weapp') {
      token = request.headers[this.config.get('cookie.key')]
    } else {
      token = request.cookies[this.config.get('cookie.key')]
    }
    request.user = this.jwtService.decode(token) as UserInfoVo
    return true
  }
}
