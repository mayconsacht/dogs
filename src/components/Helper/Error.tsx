type Props = {
  error: string | null;
};

const Error = ({ error }: Props) => {
  if (!error) return null;
  return (
    <p
      style={{
        color: '#f31',
        margin: '1rem 0',
        fontSize: '1rem',
        fontWeight: '200',
      }}
    >
      {error}
    </p>
  );
};

export default Error;
