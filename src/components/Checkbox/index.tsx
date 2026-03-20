import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import { MdCheck } from 'react-icons/md';
import { Container } from './style';

interface Props {
  name: string;
  label?: string;
  value?: string;
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & Props;

function Checkbox({
  name,
  label,
  value,
  disabled = false,
  ...rest
}: InputProps) {
  const { register, formState: { errors } } = useFormContext();
  const error = errors[name]?.message as string | undefined;

  return (
    <Container isDisabled={disabled} hasError={!!error}>
      <label htmlFor={name} key={name} className="checkbox">
        <input
          type="checkbox"
          {...register(name)}
          value={value}
          id={name}
          disabled={disabled}
          {...rest}
        />
        <span className="checkbox__control">
          <MdCheck size={14} />
        </span>

        <span className="checkbox__label">{label}</span>
      </label>

      {error && <span>{error}</span>}
    </Container>
  );
}

export default Checkbox;
