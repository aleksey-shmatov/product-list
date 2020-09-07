import { ProductList, PRODUCTS_QUERY } from 'components/ProductList';
import { initializeApollo } from 'lib/apolloClient';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

export default function Cart(): JSX.Element {
  return (
    <div className="container">
      <Head>
        <title>Products</title>
      </Head>
      <div className="page-title">
        <h1 className="page-title__header">List of products</h1>
        <Link href="/add" as="/add">
          <a className="page-title__action">Add product</a>
        </Link>
      </div>
      <ProductList />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: PRODUCTS_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};
