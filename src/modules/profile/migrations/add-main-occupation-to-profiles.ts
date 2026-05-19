import { MigrationInterface, QueryRunner, TableColumn, TableIndex } from 'typeorm';

export class AddMainOccupationToProfiles1748000000000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'profiles',
            new TableColumn({
                name: 'main_occupation',
                type: 'varchar',
                length: '100',
                isNullable: true,
                comment: 'Primary freelance occupation slug (from fixed list)',
            }),
        );

        await queryRunner.createIndex(
            'profiles',
            new TableIndex({
                name: 'idx_profiles_main_occupation',
                columnNames: ['main_occupation'],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('profiles', 'idx_profiles_main_occupation');
        await queryRunner.dropColumn('profiles', 'main_occupation');
    }
}
