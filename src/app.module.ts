import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfig from 'src/config/index.config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
      load: [appConfig]
    }),
    AuthModule, UsersModule
  ],
})
export class AppModule {}
