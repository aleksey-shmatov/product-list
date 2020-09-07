import { gql, useMutation } from '@apollo/client';
import { AddPantsInput, AddPantsMutation } from 'generated';
import { useCallback, useState } from 'react';

type Props = {
  onDone: () => void;
};

export const ADD_PANTS_MUTATION = gql`
  mutation AddPants($input: AddPantsInput!) {
    addPants(data: $input) {
      id
      name
      type
      color
      width
      length
    }
  }
`;

export const AddPants: React.FunctionComponent<Props> = ({ onDone }: Props) => {
  const [addPants, { loading }] = useMutation<AddPantsMutation>(ADD_PANTS_MUTATION);
  const [error, setError] = useState('');
  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      const formData = new FormData(event.target as HTMLFormElement);
      const input: AddPantsInput = {
        color: formData.get('color').toString(),
        name: formData.get('name').toString(),
        width: parseInt(formData.get('width').toString(), 10),
        length: parseInt(formData.get('length').toString(), 10),
      };
      event.preventDefault();
      try {
        await addPants({
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
          <input name="name" />
          <label className="form__fields__label" htmlFor="color">
            Color:
          </label>
          <input name="color" minLength={1} />
          <label className="form__fields__label" htmlFor="color">
            Width:
          </label>
          <input name="width" min={1} type="number" />
          <label className="form__fields__label" htmlFor="color">
            Length:
          </label>
          <input name="length" min={1} type="number" />
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
