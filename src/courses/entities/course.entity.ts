import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Tag} from "./tag.entity";


@Entity('courses')
export class Course{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    description:string;

    //IDENTIFICA O LADO PRINCIPAL DA RELAÇÃO
    //NÃO VOU PRECISAR CRIAR UM CRUD PRAS TAGS, PQ NO CRUD DOS CURSOS
    //JA ADICONO AS TAGS DESSE CURSO
    @JoinTable()
    //TYPE COM QUEM VAI RELACIONAR
    @ManyToMany(()=>Tag,(tag)=>tag.courses,{
        cascade: true,})
    tags:Tag[];
}