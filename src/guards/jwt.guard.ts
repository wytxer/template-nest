import { Injectable, UnauthorizedException, ExecutionContext } from '@nestjs/common'
import { Request } from 'express'
import { AuthGuard } from '@nestjs/passport'
import { ConfigService } from '@nestjs/config'
import { Observable } from 'rxjs'

@Injectable()
export class JwtGuard extends AuthGuard('jwt') {
  constructor(private readonly config: ConfigService) {
    super()
  }

  handleRequest(error: string, user: any) {
    if (error || !user) {
      throw new UnauthorizedException('请登录后再操作')
    }
    return user
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest()
    const whitelist: string[] = this.config.get('server.authWhitelist')

    if (whitelist.find((url) => url === request.route.path)) {
      return true
    }
    return super.canActivate(context)
  }
}
