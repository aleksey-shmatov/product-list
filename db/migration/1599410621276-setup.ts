import { MigrationInterface, QueryRunner } from 'typeorm';

export class setup1599410621276 implements MigrationInterface {
  name = 'setup1599410621276';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "CREATE TABLE `shirt` (`id` int NOT NULL, `color` enum ('white', 'grey', 'blue') NOT NULL, `size` int NOT NULL, UNIQUE INDEX `REL_591d83a26bbe27e76ebea6147b` (`id`), PRIMARY KEY (`id`)) ENGINE=InnoDB",
    );
    await queryRunner.query(
      "CREATE TABLE `product` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `type` enum ('shirt', 'pants') NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB",
    );
    await queryRunner.query(
      'CREATE TABLE `pants` (`id` int NOT NULL, `color` varchar(255) NOT NULL, `width` int NOT NULL, `length` int NOT NULL, UNIQUE INDEX `REL_ce1ef67a4a10b064d9deccc6c1` (`id`), PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'ALTER TABLE `shirt` ADD CONSTRAINT `FK_591d83a26bbe27e76ebea6147b7` FOREIGN KEY (`id`) REFERENCES `product`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `pants` ADD CONSTRAINT `FK_ce1ef67a4a10b064d9deccc6c1a` FOREIGN KEY (`id`) REFERENCES `product`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION',
    );

    /*
        For some reason code below does not work for MySQL
        https://github.com/typeorm/typeorm/issues/6103
        await queryRunner.createCheckConstraint('shirt', new TableCheck({
          name: 'positive_size',
          expression: `"size" > 0`
        }));
    */

    queryRunner.query('ALTER TABLE `shirt` ADD CHECK (size>0);');
    queryRunner.query("ALTER TABLE `pants` ADD CHECK (width>0 AND length>0 AND color <> '');");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `pants` DROP FOREIGN KEY `FK_ce1ef67a4a10b064d9deccc6c1a`');
    await queryRunner.query('ALTER TABLE `shirt` DROP FOREIGN KEY `FK_591d83a26bbe27e76ebea6147b7`');
    await queryRunner.query('DROP INDEX `REL_ce1ef67a4a10b064d9deccc6c1` ON `pants`');
    await queryRunner.query('DROP TABLE `pants`');
    await queryRunner.query('DROP TABLE `product`');
    await queryRunner.query('DROP INDEX `REL_591d83a26bbe27e76ebea6147b` ON `shirt`');
    await queryRunner.query('DROP TABLE `shirt`');
  }
}
