import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [AppController],
  imports: [UserModule, PostModule, AuthModule],
})
export class AppModule{

}