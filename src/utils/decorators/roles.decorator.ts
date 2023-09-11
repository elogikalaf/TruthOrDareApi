import {
  createParamDecorator,
  ExecutionContext,
  SetMetadata,
  UnauthorizedException,
} from '@nestjs/common';
import { USER_TYPE } from '../constants/UserType';
import { prisma } from '../../services/prisma/prisma.service';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

export const ROLES_KEY = 'roles';
export const Roles = (...roles: USER_TYPE[]) => SetMetadata(ROLES_KEY, roles);

export const CheckUserVerified = createParamDecorator(
  async (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const challenge = await prisma.challengeModel.findUnique({
      where: { id: request.user.id },
    });
    //const user = users.find((u) => u.id === userId);
    if (!challenge) {
      throw new UnauthorizedException('User not found');
    } else if (challenge) {
      throw new UnauthorizedException('User not verified');
    }
    return request.user;
  },
);

export const CheckUserExists = createParamDecorator(
  async (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const challenge = await prisma.challengeModel.findUnique({
      where: { id: request.user.id },
    });
    if (!challenge) {
      throw new UnauthorizedException('User not found');
    }
    return request.user;
  },
);
