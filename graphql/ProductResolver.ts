import { Min, MinLength } from 'class-validator';
import { PantsEntity } from 'db/entity/PantsEntity';
import { ProductEntity } from 'db/entity/ProductEntity';
import { ProductType } from 'db/entity/ProductType';
import { Arg, Field, ID, InputType, Int, Mutation, Query, Resolver } from 'type-graphql';
import { getConnection, getRepository } from 'typeorm';
import { ShirtColor, ShirtEntity } from '../db/entity/ShirtEntity';
import { Pants } from './Pants';
import { Product } from './Product';
import { Shirt } from './Shirt';

@InputType()
class AddShirtInput implements Partial<Shirt> {
  @Field()
  name: string;

  @Field(() => ShirtColor)
  color: ShirtColor;

  @Field(() => Int)
  @Min(1)
  size: number;
}

@InputType()
class AddPantsInput implements Partial<Pants> {
  @Field()
  name: string;

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

@Resolver(() => Product)
export class ProductResolver {
  @Query(() => [Product])
  async products(): Promise<Product[]> {
    const products = await getRepository(ProductEntity).find({
      relations: ['pants', 'shirt'],
    });

    const results = products.map((product) => {
      if (product.type === 'shirt') {
        return {
          id: product.id,
          name: product.name,
          type: product.type,
          color: product.shirt.color,
          size: product.shirt.size,
        };
      } else if (product.type === 'pants') {
        return {
          id: product.id,
          name: product.name,
          type: product.type,
          color: product.pants.color,
          width: product.pants.width,
          length: product.pants.length,
        };
      } else {
        throw new Error('Unknown product type');
      }
    });
    return results;
  }

  @Mutation(() => ID)
  async removeProduct(@Arg('id', () => ID) id: number): Promise<number> {
    await getRepository(ProductEntity).delete(id);
    return id;
  }

  @Mutation(() => Shirt)
  async addShirt(@Arg('data') shirtInput: AddShirtInput): Promise<Shirt> {
    return await getConnection().transaction(async (transactionalEntityManager) => {
      const product = new ProductEntity();
      product.name = shirtInput.name;
      product.type = ProductType.shirt;
      await transactionalEntityManager.save(product);

      const shirt = new ShirtEntity();
      shirt.id = product.id;
      shirt.color = shirtInput.color;
      shirt.size = shirtInput.size;

      await transactionalEntityManager.save(shirt);

      return {
        id: product.id,
        name: product.name,
        type: ProductType.shirt,
        color: shirt.color,
        size: shirt.size,
      };
    });
  }

  @Mutation(() => Pants)
  async addPants(@Arg('data') pantsInput: AddPantsInput): Promise<Pants> {
    return await getConnection().transaction(async (transactionalEntityManager) => {
      const product = new ProductEntity();
      product.name = pantsInput.name;
      product.type = ProductType.pants;
      await transactionalEntityManager.save(product);

      const pants = new PantsEntity();
      pants.id = product.id;
      pants.color = pantsInput.color;
      pants.width = pantsInput.width;
      pants.length = pantsInput.length;

      await transactionalEntityManager.save(pants);

      return {
        id: product.id,
        name: product.name,
        type: ProductType.pants,
        color: pants.color,
        width: pants.width,
        length: pants.length,
      };
    });
  }
}
