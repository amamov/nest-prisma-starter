import { Module } from "@nestjs/common"
import { UsersController } from "./users.controller"
import { PassportModule } from "@nestjs/passport"
import { JwtModule } from "@nestjs/jwt"
import { JwtStrategy } from "./jwt/jwt.strategy"
import { UsersService } from "./users.service"
import { PrismaService } from "src/prisma.service"
import { ConfigService } from "@nestjs/config"

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: "jwt", session: true }),
    JwtModule.registerAsync({
      useFactory: (config: ConfigService) => {
        return {
          secret: config.get<string>("SECRET_KEY"),
          signOptions: { expiresIn: "1d" },
        }
      },
      inject: [ConfigService],
    }),
  ],
  providers: [JwtStrategy, UsersService, PrismaService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
