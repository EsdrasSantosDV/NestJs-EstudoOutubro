import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res} from '@nestjs/common';
import {CoursesService} from "./courses.service";
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
    findAll(@Res() response){
        return response.status(200).send('Listagem de Cursos');
    }


    @Get(':id')
    findOne(@Param() params){
        return `Curso #${params.id}`;
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body() body)
    {
        return body;
    }

    //PATCH SO ATUALIZA UMA PARTE DO CONTEUDO ,PUT ATUALIZA TODO
    @Patch(':id')
    update(@Param('id') id:string,@Body() body)
    {
        return `Àtualizacao do Curso #${id}`;
    }

    @Delete(':id')
    remove(@Param() params){
        return `Exclusao do Curso #${params.id}`;
    }


}
