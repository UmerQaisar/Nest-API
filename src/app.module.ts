import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.entity';

@Module({
  controllers: [AppController],
  imports: [UserModule, PostModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'postgres',
      database: 'nest_api',
      entities: [User],
      synchronize: true,
    }),
  ],
})
export class AppModule{

}