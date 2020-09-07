import { Min, MinLength } from 'class-validator';
import { Field, Int, ObjectType } from 'type-graphql';
import { Product } from './Product';

@ObjectType({ implements: Product })
export class Pants extends Product {
  @Field()
  @MinLength(1)
  color: string;

  @Field(() => Int)
  @Min(1)
  width: number;

  @Field(() => Int)
  @Min(1)
  length: number;
}
