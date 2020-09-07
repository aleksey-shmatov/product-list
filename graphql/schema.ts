import { GraphQLSchema } from 'graphql';
import { buildSchema } from 'type-graphql';
import { Pants } from './Pants';
import { ProductResolver } from './ProductResolver';
import { Shirt } from './Shirt';

export const createSchema = async (): Promise<GraphQLSchema> => {
  return await buildSchema({
    resolvers: [ProductResolver],
    orphanedTypes: [Shirt, Pants],
  });
};
