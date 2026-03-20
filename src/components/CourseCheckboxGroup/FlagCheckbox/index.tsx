import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import { Label } from './style';

import UsaFlag from '../../../assets/flags/usa-square.svg?react';
import SpainFlag from '../../../assets/flags/spain-square.svg?react';
import FranceFlag from '../../../assets/flags/france-square.svg?react';
import KoreaFlag from '../../../assets/flags/korea-square.svg?react';
import GermanyFlag from '../../../assets/flags/germany-square.svg?react';

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

function FlagCheckbox({ name, label, course, value, ...rest }: InputProps) {
  const { register } = useFormContext();

  const FlagSVG = COURSE_FLAG[course];

  return (
    <Label>
      <input
        type="checkbox"
        {...register(name)}
        value={value}
        id={name}
        {...rest}
      />

      <FlagSVG />
      <p>{label}</p>
    </Label>
  );
}

export default FlagCheckbox;
