import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { MdWarning } from 'react-icons/md';

import UsaFlag from '../../../../assets/flags/usa.svg?react';
import SpainFlag from '../../../../assets/flags/spain.svg?react';
import FranceFlag from '../../../../assets/flags/france.svg?react';
import KoreaFlag from '../../../../assets/flags/korea.svg?react';
import GermanyFlag from '../../../../assets/flags/germany.svg?react';

import Tag from '../../../../components/Tag';
import Link from '../../../../components/Link';

import { Container } from './styles';

const COURSE_FLAG = {
  english: UsaFlag,
  spanish: SpainFlag,
  french: FranceFlag,
  korean: KoreaFlag,
  german: GermanyFlag,
};

interface Props {
  course: keyof typeof COURSE_FLAG;
  title: string;
  inClass?: boolean;
  description: string;
  linkTo: string;
  disabled?: boolean;
  disabledMotivation?: string;
}

const CourseCard = ({
  course,
  title,
  inClass,
  description,
  linkTo,
  disabled = false,
  disabledMotivation,
}: Props) => {
  const FlagSVG = COURSE_FLAG[course];

  return (
    <Container $disabled={disabled}>
      <FlagSVG />

      <div>
        <h3>{title}</h3>
        <div className="tag-container">
          <Tag className="tag" color="secondary">
            { }
            {disabled ? 'Em breve' : inClass ? 'Presencial' : 'Online'}
            {disabledMotivation && <MdWarning />}
          </Tag>
          {disabledMotivation && (
            <span className="disabled-motivation">{disabledMotivation}</span>
          )}
        </div>
      </div>
      <p>{description}</p>

      <Link to={linkTo} icon={HiOutlineArrowNarrowRight}>
        Saiba mais
      </Link>
    </Container>
  );
};

export default CourseCard;
