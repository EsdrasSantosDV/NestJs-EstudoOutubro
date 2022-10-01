import {Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post, Res} from '@nestjs/common';
//ENDPOINT DA REQUISITION
// @ts-ignore
// @ts-ignore
@Controller('courses')
export class CoursesController {

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

    @Patch(':id')
    update(@Param('id') id:string,@Body() body)
    {
        return `Àtualizacao do Curso #${id}`;
    }



}
