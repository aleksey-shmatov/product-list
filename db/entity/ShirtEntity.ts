import { Check, Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';

export enum ShirtColor {
  white = 'white',
  grey = 'grey',
  blue = 'blue',
}

const shirtColors = Object.values(ShirtColor) as ShirtColor[];

@Entity({ name: 'shirt' })
@Check(`"size" > 0`)
export class ShirtEntity {
  @PrimaryColumn({
    nullable: false,
  })
  id: number;

  @Column({
    type: 'enum',
    enum: shirtColors,
    nullable: false,
  })
  color: ShirtColor;

  @Column({
    nullable: false,
  })
  size: number;

  @OneToOne('ProductEntity', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id' })
  product: unknown;
}
