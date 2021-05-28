import React, { useEffect, useRef, useState } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';

import { useField } from '@unform/core';

import { Container } from './styles';

import 'react-datepicker/dist/react-datepicker.css';

interface Props extends Omit<ReactDatePickerProps, 'onChange'> {
  name: string;
  label?: string;
  containerClassName?: string;
}

const DatePicker: React.FC<Props> = ({
  name,
  label,
  dateFormat = 'dd/MM/yyy',
  containerClassName,
  isClearable = true,
  ...rest
}) => {
  const datepickerRef = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [date, setDate] = useState(defaultValue || null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: 'props.selected',
      clearValue: (ref: any) => {
        ref.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container hasError={!!error} className={containerClassName}>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <ReactDatePicker
        ref={datepickerRef}
        selected={date}
        onChange={setDate}
        id={fieldName}
        dateFormat={dateFormat}
        isClearable={isClearable}
        autoComplete="off"
        {...rest}
      />

      {error && <span>{error}</span>}
    </Container>
  );
};

export default DatePicker;
