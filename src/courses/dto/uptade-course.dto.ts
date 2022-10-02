import {PartialType} from "@nestjs/mapped-types";
import {CreateCourseDto} from "./create-course.dto";


//VAMOS VALIDAR PARTE DO QUE TEM NO CREATE COURSE DTO
//SERIA A MESMA COISA QUE COLOCAR TODOS OS ANOTATIONS DE VALIDAÇÃO E SEUS ATRIBUTOS
/*
   @IsString()
    readonly name:string;
    @IsString()
    readonly description:string;
    //EACH PRA OS FILHOS,CADA POSICAO NO ARRAY VAI SER VALIDADA
    @IsString({each:true})
    readonly tags:string[];

 */
export class UptadeCourseDto extends PartialType(CreateCourseDto) {

}
