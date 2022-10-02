import {MigrationInterface, QueryRunner} from "typeorm";

export class CourseRefactoring1664715036697 implements MigrationInterface {

    //VE COMO E AS QUERY DO DETERMINADO SGBD
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE courses RENAME COLUMN name TO course`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE courses RENAME COLUMN course TO name`,
        )
    }

}
