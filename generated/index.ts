export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: number;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddPantsInput = {
  color: Scalars['String'];
  length: Scalars['Int'];
  name: Scalars['String'];
  width: Scalars['Int'];
};

export type AddShirtInput = {
  color: ShirtColor;
  name: Scalars['String'];
  size: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addPants: Pants;
  addShirt: Shirt;
  removeProduct: Scalars['ID'];
};

export type MutationAddPantsArgs = {
  data: AddPantsInput;
};

export type MutationAddShirtArgs = {
  data: AddShirtInput;
};

export type MutationRemoveProductArgs = {
  id: Scalars['ID'];
};

export type Pants = Product & {
  __typename?: 'Pants';
  color: Scalars['String'];
  id: Scalars['ID'];
  length: Scalars['Int'];
  name: Scalars['String'];
  type: ProductType;
  width: Scalars['Int'];
};

export type Product = {
  id: Scalars['ID'];
  name: Scalars['String'];
  type: ProductType;
};

export enum ProductType {
  Pants = 'pants',
  Shirt = 'shirt',
}

export type Query = {
  __typename?: 'Query';
  products: Array<Product>;
};

export type Shirt = Product & {
  __typename?: 'Shirt';
  color: ShirtColor;
  id: Scalars['ID'];
  name: Scalars['String'];
  size: Scalars['Int'];
  type: ProductType;
};

export enum ShirtColor {
  Blue = 'blue',
  Grey = 'grey',
  White = 'white',
}

export type AddShirtMutationVariables = Exact<{
  input: AddShirtInput;
}>;

export type AddShirtMutation = { __typename?: 'Mutation' } & {
  addShirt: { __typename?: 'Shirt' } & Pick<Shirt, 'id' | 'name' | 'type' | 'color' | 'size'>;
};

export type ProductsQueryVariables = Exact<{ [key: string]: never }>;

export type ProductsQuery = { __typename?: 'Query' } & {
  products: Array<
    | ({ __typename?: 'Pants' } & Pick<Pants, 'color' | 'width' | 'length' | 'id' | 'name' | 'type'>)
    | ({ __typename?: 'Shirt' } & Pick<Shirt, 'size' | 'id' | 'name' | 'type'> & { shirtColor: Shirt['color'] })
  >;
};

export type RemoveProductMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type RemoveProductMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'removeProduct'>;
