import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UserModule, 
    JwtModule.register({
    global: true,
    secret: process.env.SECRETY_KEY || '',
    signOptions: { expiresIn: '3600s' },
  }),],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
