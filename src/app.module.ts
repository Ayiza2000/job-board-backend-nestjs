import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobsModule } from './jobs/jobs.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'sqlite', // change here
      database: 'dev.db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    JobsModule,
    AuthModule,
  ],
})
export class AppModule {}
