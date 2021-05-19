/* eslint-disable no-param-reassign */
import { useField } from '@unform/core';
import { InputHTMLAttributes, useEffect, useRef } from 'react';
import { Label } from './style';

import { ReactComponent as UsaFlag } from '../../../assets/flags/usa-square.svg';
import { ReactComponent as SpainFlag } from '../../../assets/flags/spain-square.svg';
import { ReactComponent as FranceFlag } from '../../../assets/flags/france-square.svg';
import { ReactComponent as KoreaFlag } from '../../../assets/flags/korea-square.svg';
import { ReactComponent as GermanyFlag } from '../../../assets/flags/germany-square.svg';

interface Props {
  course: keyof typeof COURSE_FLAG;
  label: string;
  name: string;
  value: string;
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & Props;

const COURSE_FLAG = {
  english: UsaFlag,
  spanish: SpainFlag,
  french: FranceFlag,
  korean: KoreaFlag,
  german: GermanyFlag,
};

function FlagCheckbox({ name, label, course, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  const FlagSVG = COURSE_FLAG[course];

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        if (ref.current.checked) return ref.current.value;
        return '';
      },
      clearValue: ref => {
        ref.current.checked = defaultValue;
      },
      setValue: ref => {
        ref.current.checked = !ref.current.checked;
      },
    });
  }, [defaultValue, fieldName, registerField]);

  return (
    <Label>
      <input
        type="checkbox"
        defaultChecked={defaultValue}
        ref={inputRef}
        id={fieldName}
        {...rest}
      />

      <FlagSVG />
      <p>{label}</p>
    </Label>
  );
}

export default FlagCheckbox;
