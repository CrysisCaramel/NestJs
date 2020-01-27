import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/user.controller';
import { UsersService } from './users/user.service';
import { NoteController } from './note/note.controller';
import { NoteService } from './note/note.service';
import { TagsController } from './tags/tags.controller';
import { TagsService } from './tags/tags.service';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'changeme',
      database: 'mydb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    })
  ],
  controllers: [AppController, UsersController, NoteController, TagsController],
  providers: [AppService, UsersService, NoteService, TagsService],
})
export class AppModule {}
