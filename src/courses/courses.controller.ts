import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res} from '@nestjs/common';
import {CoursesService} from "./courses.service";
import {CreateCourseDto} from "./dto/create-course.dto";
import {UptadeCourseDto} from "./dto/uptade-course.dto";
//ENDPOINT DA REQUISITION
// @ts-ignore
// @ts-ignore
@Controller('courses')
export class CoursesController {

    //O CONTAINER DE INJEÇÃO DE DEPENDENCIA JA FAZ ISSO PRA GENTE
    //READONLY PQ NÃO MUDAMOS NADA DO SERVIÇO, NÃO FAZEMOS O "OVERRIDE AQUI"
    constructor(private readonly coursesService:CoursesService) {
    }

    @Get()
    findAll(){
        return this.coursesService.findAll();
    }


    @Get(':id')
    findOne(@Param('id') id:string){
        return this.coursesService.findOne(id);
    }

    @Post()
    create(@Body() createCourseDto: CreateCourseDto)
    {
        return this.coursesService.create(createCourseDto);
    }

    //PATCH SO ATUALIZA UMA PARTE DO CONTEUDO ,PUT ATUALIZA TODO
    @Patch(':id')
    update(@Param('id') id:string,@Body()uptadeCourseDto:UptadeCourseDto)
    {
        return this.coursesService.uptade(id,uptadeCourseDto);
    }

    @Delete(':id')
    remove(@Param('id')id:string){
        return this.coursesService.delete(id);
    }


}
