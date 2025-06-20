import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('login')
  login(@Body() body: { username: string; password: string }) {
    const token = this.auth.authenticate(body);
    if (!token) throw new UnauthorizedException();
    return { access_token: token };
  }
}
