/* eslint-disable no-param-reassign */
import { useField } from '@unform/core';
import { InputHTMLAttributes, useEffect, useRef } from 'react';
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
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => ref.current.checked,
      clearValue: ref => {
        ref.current.checked = defaultValue;
      },
      setValue: ref => {
        ref.current.checked = !ref.current.checked;
      },
    });
  }, [defaultValue, fieldName, registerField, value]);

  return (
    <Container isDisabled={disabled} hasError={!!error}>
      <label htmlFor={fieldName} key={fieldName} className="checkbox">
        <input
          type="checkbox"
          defaultChecked={defaultValue}
          ref={inputRef}
          value={value}
          id={fieldName}
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
