import {Column, Entity, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Course} from "./course.entity";

@Entity('tags')
export class Tag {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    //PRIMEIRO PARAMETRO E O ALVO, E O SEGUNDO E DE QUE FORMA
    //OBTEMOS A INFORMAÇÃO DO LADO INVERSO
    @ManyToMany(()=>Course,(course:Course)=>course.tags
    )
    courses:Course[];

}
