import { IsEmail, IsIn, IsString, MinLength } from 'class-validator';
import type { Role } from '../../common/decorators/roles.decorator';

export class RegisterDto {
  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @MinLength(4)
  password!: string;

  @IsIn(['soldier', 'commander'])
  role!: Role;
}
