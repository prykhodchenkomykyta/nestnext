import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todo/entities/todo.entity';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      type: "postgres",
      host: configService.get('DATABASE_HOST'),
      port: +configService.get('DATABASE_PORT'),
      username: configService.get('DATABASE_USER'),
      password: configService.get('DATABASE_PASSWORD'),
      database: configService.get('DATABASE_NAME'),
      synchronize: true,
      entities: [Todo],
    }),
    inject: [ConfigService]
  }), ConfigModule, ConfigModule.forRoot({ envFilePath: ['.env'] }), TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
