import { useFormContext } from 'react-hook-form';

import { Container } from './styles';

interface Props<T> {
  name: string;
  label?: string;
  multiline?: T;
}

type InputProps = JSX.IntrinsicElements['input'] & Props<false>;
type TextAreaProps = JSX.IntrinsicElements['textarea'] & Props<true>;

function Input({
  label,
  multiline = false,
  disabled,
  name,
  ...rest
}: InputProps | TextAreaProps) {
  const { register, formState: { errors } } = useFormContext();
  const error = errors[name]?.message as string | undefined;
  const registration = register(name);

  const props = {
    ...rest,
    ...registration,
    id: name,
    'aria-label': name,
    disabled,
  };

  return (
    <Container $hasError={!!error} $isDisabled={disabled}>
      {label && <label htmlFor={name}>{label}</label>}

      {multiline ? (
        <textarea {...(props as any)} />
      ) : (
        <input {...(props as any)} />
      )}

      {error && <span>{error}</span>}
    </Container>
  );
}

export default Input;
