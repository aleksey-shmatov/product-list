import { Check, Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'pants' })
@Check(`"width" > 0 AND "length" > 0 AND "color" <> ''`)
export class PantsEntity {
  @PrimaryColumn({ nullable: false })
  id: number;

  @Column({
    nullable: false,
  })
  color: string;

  @Column({
    nullable: false,
  })
  width: number;

  @Column({
    nullable: false,
  })
  length: number;

  @OneToOne('ProductEntity', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id' })
  product: unknown;
}
