import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserEntity } from './entities/user.entity';
import { LoggerUtil } from '../common/utils/logger.util';

@Injectable()
export class UsersService {
  private readonly logger = new LoggerUtil(UsersService.name);

  constructor(private prisma: PrismaService) { }

  async create(createUserDto: CreateUserDto) {
    try {
      this.logger.log(`开始创建用户: ${createUserDto.email}`);

      const existingEmail = await this.prisma.user.findUnique({
        where: { email: createUserDto.email },
      });

      if (existingEmail) {
        this.logger.warn(`邮箱已被注册: ${createUserDto.email}`);
        throw new BadRequestException('邮箱已被注册');
      }

      const user = await this.prisma.user.create({
        data: createUserDto,
        select: {
          id: true,
          name: true,
          email: true,
        },
      });

      this.logger.log(`用户创建成功: ${user.email}`);
      return user;
    } catch (error) {
      this.logger.error(`用户创建失败: ${createUserDto.email}`);
      throw new BadRequestException(error.response.message);
    }
  }

  async findAll(): Promise<UserEntity[]> {
    this.logger.debug('获取所有用户');
    return this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
  }

  async findOne(id: string): Promise<UserEntity> {
    this.logger.debug(`获取用户: ${id}`);
    try {
      const user = await this.prisma.user.findUnique({
        where: { id },
        select: {
          id: true,
          name: true,
          email: true,
        },
      });

      if (!user) {
        this.logger.error(`用户不存在: ${id}`);
        throw new BadRequestException('用户不存在');
      }
      this.logger.log(`用户获取成功: ${user.email}`);
      return user;
    } catch (error) {
      console.log('error', error);
      this.logger.error(`用户获取失败: ${id}`);
      throw new BadRequestException(error.response.message);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    this.logger.log(`更新用户: ${id}`);
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
  }

  async remove(id: string) {
    this.logger.log(`更新用户: ${id}`);
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
