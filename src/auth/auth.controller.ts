import { Body, Controller, HttpCode, HttpStatus, Inject, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Prisma } from '@prisma/client';

@Controller('auth')
export class AuthController {

    @Inject()
    private readonly authService : AuthService;

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signup(@Body() body: Prisma.UserCreateInput) {
        return this.authService.signin(body);
    }

}
