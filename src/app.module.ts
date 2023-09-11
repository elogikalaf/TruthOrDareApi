import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { PrismaService } from './services/prisma/prisma.service';
import { RoleGuardService } from './services/role.guard/role.guard.service';
import { AuthGuardService } from './services/auth.guard/auth.guard.service';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env.development', '.env.production'],
      isGlobal: true,
    }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_KEY,
      signOptions: { expiresIn: '30d' },
    }),
    AuthModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuardService,
    },
  ],
})
export class AppModule {}
