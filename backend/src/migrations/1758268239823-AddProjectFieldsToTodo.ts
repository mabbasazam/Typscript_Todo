import { MigrationInterface, QueryRunner } from "typeorm";

export class AddProjectFieldsToTodo1758268239823 implements MigrationInterface {
    name = 'AddProjectFieldsToTodo1758268239823'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`todos\` ADD \`projectName\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`todos\` ADD \`contact\` varchar(100) NULL`);
        await queryRunner.query(`ALTER TABLE \`todos\` ADD \`email\` varchar(150) NULL`);
        await queryRunner.query(`ALTER TABLE \`todos\` ADD \`name\` varchar(100) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`todos\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`todos\` DROP COLUMN \`email\``);
        await queryRunner.query(`ALTER TABLE \`todos\` DROP COLUMN \`contact\``);
        await queryRunner.query(`ALTER TABLE \`todos\` DROP COLUMN \`projectName\``);
    }

}
