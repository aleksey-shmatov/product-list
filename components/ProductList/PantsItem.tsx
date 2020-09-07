import { Pants } from 'generated';
import { LabeledValue } from './LabeledValue';

type Props = {
  pants: Pants;
};

export const PantsItem: React.FunctionComponent<Props> = ({ pants }: Props) => {
  return (
    <div className="properties">
      <div className="properties__item">
        <LabeledValue label="Type">{pants.type}</LabeledValue>
      </div>
      <div className="properties__item properties__item--grow">
        <LabeledValue label="Name">{pants.name}</LabeledValue>
      </div>
      <div className="properties__item">
        <LabeledValue label="Color">{pants.color}</LabeledValue>
      </div>
      <div className="properties__item">
        <LabeledValue label="Width x Length">
          {pants.width}x{pants.length}
        </LabeledValue>
      </div>
    </div>
  );
};
