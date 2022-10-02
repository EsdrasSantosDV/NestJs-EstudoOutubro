import {HttpException, HttpStatus, Injectable, NotFoundException} from '@nestjs/common';
import {Course} from "./entities/course.entity";
import {getDataSourceToken, InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CreateCourseDto} from "./dto/create-course.dto";
import {create} from "domain";
import {UptadeCourseDto} from "./dto/uptade-course.dto";
import {Tag} from "./entities/tag.entity";

@Injectable()
export class CoursesService {

    //INJETA O REPOSITORY NO SERVIÇO, PODEMOS CRIAR TBM DE FORMA MANUAL
    constructor(
        @InjectRepository(Course) private readonly coursesrepository:Repository<Course>,
        //PRECISAMOS MANIPULAR TBM AS TAGS
        @InjectRepository(Tag) private readonly tagrepository:Repository<Tag>
    ) {
    }

    findAll()
    {
        //FIND SERIA O FIND ALL DO QUARKUS
        return this.coursesrepository.find({
            relations:['tags'],
        });
    }
    findOne(id:string)
    {
       const course= this.coursesrepository.findOne(id,{
           relations:['tags'],
       });
       if(!course)
       {
           //PRIMEIRO PARAMETRO E  A MENSAGEM,
           throw new NotFoundException(`Course id ${id} Not Found`);
       }
       return course;
    }

    async create(createCourseDto:CreateCourseDto)
    {
        //PRIMEIRO CRIA O OBJETO E DEPOIS SALVA
        //ESSE METODO SO VAI REOTRNAR QUANDO PROCESSAR TODAS AS PROMESSAS
        //TODAS AS TAGS QUE FORAM ENVIADAS VAI VERIFICAR UMA POR UMA E MANDNADO SEU NOME
        //E A CADA TAG ELE VAI VERIFICAR SE ESSA TAG EXISTE E SE NÃO EXISTIR ELA CRIA
        const tags=await Promise.all(
            createCourseDto.tags.map((name)=>this.preloadTagByName(name)),
        );
        const course=this.coursesrepository.create({
            ...createCourseDto,
            tags,//ESSE TAG VAI SER INCLUIDO PQ TALVEZ ALGUMA TAG NÃO TENHA SIDO ANTEIORMENTE CRIADA
        });
        console.log(course);
        return this.coursesrepository.save(course);
    }

    async uptade(id:string,uptadeCourseDto:UptadeCourseDto)
    {
        //verificar se existe uma tag
        const tags=uptadeCourseDto.tags && (
          await Promise.all(uptadeCourseDto.tags.map((name)=> this.preloadTagByName(name)),)
        );

        //SE ELE CONSEGUIR ENCONTRAR UM REGISTRO COM ESSE ID
        //E PREPARAR ESSES DADOS


        const course=await this.coursesrepository.preload({
          id:+id,
          ...uptadeCourseDto,
          tags,
        });

        if(!course)
        {
            throw new NotFoundException(`Course id ${id} Not Found`);
        }

        return this.coursesrepository.save(course);
    }

    async delete(id:string)
    {
        const course = await this.coursesrepository.findOne(id);
        if(!course)
        {
            throw new NotFoundException(`Course id ${id} Not Found`);
        }

        return this.coursesrepository.remove(course);
    }

    private async preloadTagByName(name:string):Promise<Tag>
    {
        const tag=await this.tagrepository.findOne({name});
        //SE JA EXISTE A TAG
        if(tag)
        {
            return tag;
        }
        //SE NÃO EXISTE CRIA ELA
        return this.tagrepository.create({name});

    }




}
