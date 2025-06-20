import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(private auth: AuthService) {}

  canActivate(ctx: ExecutionContext): boolean {
    const req = ctx.switchToHttp().getRequest();
    const auth = req.headers.authorization as string;
    if (!auth?.startsWith('Bearer ')) throw new UnauthorizedException();
    const token = auth.split(' ')[1];
    const payload = this.auth.validate(token);
    if (!payload) throw new UnauthorizedException();
    req.user = payload;
    return true;
  }
}
