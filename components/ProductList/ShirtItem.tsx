import { Shirt, ShirtColor } from 'generated';
import { LabeledValue } from './LabeledValue';

type Props = {
  shirt: Shirt & { shirtColor?: ShirtColor };
};

export const ShirtItem: React.FunctionComponent<Props> = ({ shirt }: Props) => {
  return (
    <div className="properties">
      <div className="properties__item">
        <LabeledValue label="Type">{shirt.type}</LabeledValue>
      </div>
      <div className="properties__item properties__item--grow">
        <LabeledValue label="Name">{shirt.name}</LabeledValue>
      </div>
      <div className="properties__item">
        <LabeledValue label="Color">{shirt.shirtColor}</LabeledValue>
      </div>
      <div className="properties__item">
        <LabeledValue label="Size">{shirt.size}</LabeledValue>
      </div>
    </div>
  );
};
