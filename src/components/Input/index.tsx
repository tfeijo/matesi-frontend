import { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

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
  const ref = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path: 'value',
      });
    }
  }, [fieldName, registerField]);

  const props = {
    ...rest,
    ref,
    id: name,
    name: fieldName,
    'aria-label': fieldName,
    defaultValue,
    disabled,
  };

  return (
    <Container hasError={!!error} isDisabled={disabled}>
      {label && <label htmlFor={name}>{label}</label>}

      {multiline ? (
        <textarea {...(props as TextAreaProps)} />
      ) : (
        <input {...(props as InputProps)} />
      )}

      {error && <span>{error}</span>}
    </Container>
  );
}

export default Input;
