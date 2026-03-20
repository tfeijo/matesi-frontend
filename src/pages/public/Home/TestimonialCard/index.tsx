import UsaFlag from '../../../../assets/flags/usa-square.svg?react';
import SpainFlag from '../../../../assets/flags/spain-square.svg?react';
import FranceFlag from '../../../../assets/flags/france-square.svg?react';
import KoreaFlag from '../../../../assets/flags/korea-square.svg?react';
import GermanyFlag from '../../../../assets/flags/germany-square.svg?react';

import { Container, About, Message } from './styles';

const COURSE_FLAGS = {
  english: UsaFlag,
  spanish: SpainFlag,
  french: FranceFlag,
  korean: KoreaFlag,
  german: GermanyFlag,
};

interface Props {
  studentName: string;
  studentPhoto: string;
  course: keyof typeof COURSE_FLAGS;
  message: string;
}

const TestimonialCard = ({
  studentName,
  studentPhoto,
  course,
  message,
}: Props) => {
  const FlagSVG = COURSE_FLAGS[course];

  return (
    <Container>
      <About>
        <div>
          <img src={studentPhoto} alt={studentName} />
          <FlagSVG />
        </div>
        <p>{studentName}</p>
      </About>

      <Message>{message}</Message>
    </Container>
  );
};

export default TestimonialCard;
