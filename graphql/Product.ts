import { ProductType } from 'db/entity/ProductType';
import { Field, ID, InterfaceType, registerEnumType } from 'type-graphql';

registerEnumType(ProductType, {
  name: 'ProductType',
});

@InterfaceType({
  resolveType: (value) => {
    if (value.type === 'shirt') {
      return 'Shirt';
    } else if (value.type === 'pants') {
      return 'Pants';
    } else {
      throw new Error(`Unknown entity type: ${value.type}`);
    }
  },
})
export abstract class Product {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field(() => ProductType)
  type: ProductType;
}
