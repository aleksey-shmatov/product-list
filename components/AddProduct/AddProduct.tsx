import { ProductType } from 'generated';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import { AddPants } from './AddPants';
import { AddShirt } from './AddShirt';

export const AddProduct: React.FunctionComponent = () => {
  const [productType, setProductType] = useState<ProductType>(null);
  const handleAddShirt = useCallback(() => {
    setProductType(ProductType.Shirt);
  }, []);
  const handleAddPants = useCallback(() => {
    setProductType(ProductType.Pants);
  }, []);
  const handleDone = useCallback(() => {
    setProductType(null);
  }, []);
  return (
    <div>
      <div className="page-title">
        <h1 className="page-title__header">Add new {productType || 'product'}</h1>
        <Link href="/" as="/">
          <a className="page-title__action">All products</a>
        </Link>
      </div>
      {productType === ProductType.Shirt && <AddShirt onDone={handleDone} />}
      {productType === ProductType.Pants && <AddPants onDone={handleDone} />}
      {!productType && (
        <div className="add-actions">
          <button className="add-actions__button" onClick={handleAddShirt}>
            Add Shirt
          </button>
          <button className="add-actions__button" onClick={handleAddPants}>
            Add Pants
          </button>
        </div>
      )}
    </div>
  );
};
