import { Min } from 'class-validator';
import { Field, Int, ObjectType, registerEnumType } from 'type-graphql';
import { ShirtColor } from '../db/entity/ShirtEntity';
import { Product } from './Product';

registerEnumType(ShirtColor, {
  name: 'ShirtColor',
});

@ObjectType({ implements: Product })
export class Shirt extends Product {
  @Field(() => ShirtColor)
  color: ShirtColor;

  @Field(() => Int)
  @Min(1)
  size: number;
}
