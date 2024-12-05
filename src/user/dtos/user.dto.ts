import { ERole } from '../../auth/interface/role.enum';
import { Exclude, Expose } from 'class-transformer';

export class UserCreateDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export class UserLoginDto {
  email: string;

  password: string;
}

@Exclude()
export class UserDto {
  @Expose()
  id: number;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  email: string;

  @Expose()
  type: ERole;
}
