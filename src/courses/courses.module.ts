import { Module } from '@nestjs/common';
import {CoursesController} from "./courses.controller";
import {CoursesService} from "./courses.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Course} from "./entities/course.entity";
import {Tag} from "./entities/tag.entity";

@Module({
    //COMO JA CONFIRAMOS O FOR ROOT, COMO VAMOS UTILIZAR
    //ALGO UQE JA ESTA CONFIGURADO NO FOR ROOT, UTILIZAMOS O
    //FOR FEATURE PASSANDO AS ENTIDADES
    imports:[TypeOrmModule.forFeature([Course,Tag])],
    controllers: [CoursesController],
    providers: [CoursesService],
})
export class CoursesModule {

}
