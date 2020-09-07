import { gql, useMutation } from '@apollo/client';
import { useCallback, useState } from 'react';
import { AddShirtInput, AddShirtMutation, ShirtColor } from 'generated';

type Props = {
  onDone: () => void;
};

export const ADD_SHIRT_MUTATION = gql`
  mutation AddShirt($input: AddShirtInput!) {
    addShirt(data: $input) {
      id
      name
      type
      color
      size
    }
  }
`;

export const AddShirt: React.FunctionComponent<Props> = ({ onDone }: Props) => {
  const [addShirt, { loading }] = useMutation<AddShirtMutation>(ADD_SHIRT_MUTATION);
  const [error, setError] = useState('');
  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      const formData = new FormData(event.target as HTMLFormElement);
      const input: AddShirtInput = {
        color: formData.get('color').toString() as ShirtColor,
        name: formData.get('name').toString(),
        size: parseInt(formData.get('size').toString(), 10),
      };
      event.preventDefault();
      try {
        await addShirt({
          variables: {
            input,
          },
        });
      } catch (e) {
        setError('Failed to add shirt');
        return;
      }
      onDone();
    },
    [onDone],
  );
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__fields">
          <label className="form__fields__label" htmlFor="name">
            Name:
          </label>
          <input id="name" name="name" />
          <label className="form__fields__label" htmlFor="color">
            Color:
          </label>
          <select id="color" name="color">
            {Object.values(ShirtColor).map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
          <label className="form__fields__label" htmlFor="size">
            Size:
          </label>
          <input id="size" name="size" min="1" type="number" />
        </div>
        {error && <div className="form__error">{error}</div>}
        <div className="form__actions">
          <button className="form__actions__item" disabled={loading} type="submit">
            Add
          </button>
          <button className="form__actions__item" disabled={loading} type="button" onClick={onDone}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
