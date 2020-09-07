import { gql, useMutation, useQuery } from '@apollo/client';
import { ProductsQuery, RemoveProductMutation } from 'generated';
import { useCallback } from 'react';
import { ProductItem } from './ProductItem';

export const PRODUCTS_QUERY = gql`
  query Products {
    products {
      id
      name
      type
      ... on Shirt {
        shirtColor: color
        size
      }
      ... on Pants {
        color
        width
        length
      }
    }
  }
`;

export const REMOVE_PRODUCT_MUTATION = gql`
  mutation RemoveProduct($id: ID!) {
    removeProduct(id: $id)
  }
`;

export const ProductList: React.FunctionComponent = () => {
  const { data } = useQuery<ProductsQuery>(PRODUCTS_QUERY, {
    fetchPolicy: 'cache-only',
  });
  const [removeProduct] = useMutation<RemoveProductMutation>(REMOVE_PRODUCT_MUTATION);
  const handleRemoveProduct = useCallback((id: number) => {
    removeProduct({
      variables: {
        id,
      },
      optimisticResponse: {
        __typename: 'Mutation',
        removeProduct: id,
      },
      update: (proxy) => {
        const data = proxy.readQuery<ProductsQuery>({ query: PRODUCTS_QUERY });
        proxy.writeQuery({
          query: PRODUCTS_QUERY,
          data: {
            ...data,
            products: data.products.filter((product) => product.id !== id),
          },
        });
      },
    });
  }, []);
  const products = data && data.products;
  return (
    <ul className="product-list">
      {products &&
        products.map((product) => (
          <ProductItem key={product.id} product={product} onRemove={handleRemoveProduct}></ProductItem>
        ))}
    </ul>
  );
};
