import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import appConfig from 'src/config/index.config';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: 'secret',//appConfig().jwtsecretkey,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, UsersService],
  controllers: [AuthController]
})
export class AuthModule {}
