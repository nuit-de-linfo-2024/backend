import {Body, Controller, HttpCode, HttpStatus, Post} from "@nestjs/common";
import {AuthService} from "./auth.service";
import {RegisterDto} from "./interface/register.dto";
import {JwtTokenDto} from "./interface/jwt-token.dto";
import {UserCreateDto, UserLoginDto} from "../user/dtos/user.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post('register')
    register(@Body() data: UserCreateDto): Promise<RegisterDto> {
        return this.authService.registerClient(data);
    }

    @Post('login')
    login(@Body() data: UserLoginDto): Promise<JwtTokenDto> {
        return this.authService.login(data);
    }
}
