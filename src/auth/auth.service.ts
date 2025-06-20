import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwt: JwtService) {}

  authenticate(user: { username: string; password: string }) {
    if (user.username === 'admin' && user.password === 'changeme') {
      return this.jwt.sign({ username: 'admin' });
    }
    return null;
  }

  validate(token: string) {
    try {
      return this.jwt.verify(token);
    } catch {
      return null;
    }
  }
}
