import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

// PartialType @nestjs/swagger 中导出，而不是 @nestjs/mapped-types
export class UpdateUserDto extends PartialType(CreateUserDto) {}
