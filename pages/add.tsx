import { AddProduct } from 'components/AddProduct';
import Head from 'next/head';

export default function AddItems(): JSX.Element {
  return (
    <div className="container">
      <Head>
        <title>Add product</title>
      </Head>
      <AddProduct />
    </div>
  );
}
