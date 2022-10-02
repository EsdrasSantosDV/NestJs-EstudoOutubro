import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CoursesModule } from './courses/courses.module';
import {TypeOrmModule} from "@nestjs/typeorm";


@Module({
  imports: [CoursesModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'esdras',
    password: 'Esdras@67',
    database: 'nest_typeorm_estudo',
    autoLoadEntities:true,
    synchronize:true,
  })],
  //VAI CARREGAR AUTOMATICMAENTE AS ENTIDADES E SICRONIZAR
  //EM PRODUÇÃO DEVERA RETIRAR O SYNCHRONIZE PRA NÃO PERDER OS DADOS
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
