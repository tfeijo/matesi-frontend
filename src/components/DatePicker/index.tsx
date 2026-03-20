import React from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { useFormContext, Controller } from 'react-hook-form';

import { Container } from './styles';

import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  name: string;
  label?: string;
  containerClassName?: string;
  dateFormat?: string;
  isClearable?: boolean;
}

const DatePicker: React.FC<Props> = ({
  name,
  label,
  dateFormat = 'dd/MM/yyy',
  containerClassName,
  isClearable = true,
  ...rest
}) => {
  const { control, formState: { errors } } = useFormContext();
  const error = errors[name]?.message as string | undefined;

  return (
    <Container $hasError={!!error} className={containerClassName}>
      {label && <label htmlFor={name}>{label}</label>}

      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <ReactDatePicker
            selected={value || null}
            onChange={onChange}
            id={name}
            dateFormat={dateFormat}
            isClearable={isClearable}
            autoComplete="off"
            {...rest}
          />
        )}
      />

      {error && <span>{error}</span>}
    </Container>
  );
};

export default DatePicker;
