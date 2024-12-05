import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateAdminDto } from './dtos/create-admin.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/role.guard';
import { HasRoles } from '../auth/has-role.decorator';
import { ERole } from '../auth/interface/role.enum';
import { UserDto } from './dtos/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @HasRoles(ERole.ROLE_ADMIN)
  @Post('admin')
  async createAdmin(@Body() createAdminDto: CreateAdminDto) {
    return this.userService.createAdmin(createAdminDto);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @HasRoles(ERole.ROLE_ADMIN)
  @Get('admins')
  @HttpCode(HttpStatus.OK)
  async findAllAdmins(): Promise<UserDto[]> {
    return this.userService.findAllAdmins();
  }

  @UseGuards(AuthGuard('jwt'),RolesGuard)
  @HasRoles(ERole.ROLE_ADMIN)
  @Get('clients')
  async findAllClients(): Promise<UserDto[]> {
    return this.userService.findAllClients();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('my-infos')
  async getMyInfo(@Request() req: any): Promise<UserDto> {
    return this.userService.findClientById(req.user.id);
  }
}
