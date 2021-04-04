import { ReactComponent as UsaFlag } from '../../../../assets/flags/usa-square.svg';
import { ReactComponent as SpainFlag } from '../../../../assets/flags/spain-square.svg';
import { ReactComponent as FranceFlag } from '../../../../assets/flags/france-square.svg';
import { ReactComponent as KoreaFlag } from '../../../../assets/flags/korea-square.svg';
import { ReactComponent as GermanyFlag } from '../../../../assets/flags/germany-square.svg';

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
