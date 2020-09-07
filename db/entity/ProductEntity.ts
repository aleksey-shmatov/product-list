import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { PantsEntity } from './PantsEntity';
import { ProductType, productTypes } from './ProductType';
import { ShirtEntity } from './ShirtEntity';

@Entity({ name: 'product' })
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({
    type: 'enum',
    enum: productTypes,
    nullable: false,
  })
  type: ProductType;

  @OneToOne('PantsEntity', 'product')
  pants: PantsEntity;

  @OneToOne('ShirtEntity', 'product')
  shirt: ShirtEntity;
}
