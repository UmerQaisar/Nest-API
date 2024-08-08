import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';

@Module({
  controllers: [AppController],
  imports: [UserModule, PostModule],
})
export class AppModule{

}