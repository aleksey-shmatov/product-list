import { Pants, Product, Shirt } from 'generated';
import { ShirtItem } from './ShirtItem';
import { PantsItem } from './PantsItem';

type Props = {
  product: Product;
  onRemove: (id: number) => void;
};

export const ProductItem: React.FunctionComponent<Props> = ({ product, onRemove }: Props) => {
  return (
    <li className="product-list__item">
      {product.type === 'shirt' && <ShirtItem shirt={product as Shirt} />}
      {product.type === 'pants' && <PantsItem pants={product as Pants} />}
      <button className="product-list__item__action" onClick={() => onRemove(product.id)}>
        Delete
      </button>
    </li>
  );
};
