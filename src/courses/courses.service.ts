import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {Course} from "./entities/course.entity";

@Injectable()
export class CoursesService {
    private courses:Course[]=[
        {
            id:1,
            name:"Fundamentos de matematica",
            description:"MATEMATICA APLICADA",
            tags:['node.js','nestjs','javascript'],
        },
    ];

    findAll()
    {
        return this.courses;
    }
    findOne(id:string)
    {
       const course= this.courses.find((course:Course)=> course.id ===Number(id));
       if(!course)
       {
           //PRIMEIRO PARAMETRO E  A MENSAGEM,
           throw new HttpException(`Course id ${id} Not Found`,HttpStatus.NOT_FOUND);
       }
       return course;
    }

    create(createCourseDto:any)
    {
        this.courses.push(createCourseDto);
    }

    uptade(id:string,uptadeCourseDto:any)
    {

        const indexCourse=this.courses.findIndex((course:Course)=>course.id===Number(id));
        this.courses[indexCourse]=uptadeCourseDto;

    }

    delete(id:string)
    {

        const indexCourse=this.courses.findIndex((course:Course)=>course.id===Number(id));
        if(indexCourse>=0)
        {
            //SPLICE EXCLUI
            this.courses.splice(indexCourse);
        }

    }






}
