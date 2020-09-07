type Props = React.PropsWithChildren<{
  label: string;
}>;

export const LabeledValue: React.FunctionComponent<Props> = ({ label, children }: Props) => {
  return (
    <div className="labeled-value">
      <div className="labeled-value__label">{label}</div>
      <div className="labeled-value__content">{children}</div>
    </div>
  );
};
