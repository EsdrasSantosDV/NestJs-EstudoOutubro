import {IsString} from "class-validator";

export class CreateCourseDto {
    //COMO NÃO E MANIPULADO
    //ANOTATIONS DE VALIDACAO,COMO SE FOSSE O HIBERNATE VALIDATOR
    @IsString()
    readonly name:string;
    @IsString()
    readonly description:string;
    //EACH PRA OS FILHOS,CADA POSICAO NO ARRAY VAI SER VALIDADA
    @IsString({each:true})
    readonly tags:string[];
}
