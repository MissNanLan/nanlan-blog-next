import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: '用户名', example: 'John Doe' })
  @IsString()
  @MinLength(2, { message: '用户名至少2个字符' })
  @MaxLength(20, { message: '用户名最多20个字符' })
  name: string;

  @ApiProperty({ description: '邮箱', example: 'john@example.com' })
  @IsEmail({}, { message: '请输入有效的邮箱地址' })
  email: string;

  @ApiProperty({ description: '密码', example: '123456' })
  @IsString()
  password: string;
}
