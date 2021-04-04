import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

import { ReactComponent as UsaFlag } from '../../../../assets/flags/usa.svg';
import { ReactComponent as SpainFlag } from '../../../../assets/flags/spain.svg';
import { ReactComponent as FranceFlag } from '../../../../assets/flags/france.svg';
import { ReactComponent as KoreaFlag } from '../../../../assets/flags/korea.svg';
import { ReactComponent as GermanyFlag } from '../../../../assets/flags/germany.svg';

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
}

const CourseCard = ({ course, title, inClass, description, linkTo }: Props) => {
  const FlagSVG = COURSE_FLAG[course];

  return (
    <Container>
      <FlagSVG />

      <div>
        <h3>{title}</h3>
        <Tag color="secondary">{inClass ? 'Presencial' : 'Online'}</Tag>
      </div>
      <p>{description}</p>

      <Link to={linkTo} icon={HiOutlineArrowNarrowRight}>
        Saiba mais
      </Link>
    </Container>
  );
};

export default CourseCard;
