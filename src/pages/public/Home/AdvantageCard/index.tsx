import { Container } from './styles';

interface Props {
  iconSVG: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const AdvantageCard = ({ iconSVG: IconSVG, title, description }: Props) => (
  <Container>
    <IconSVG />
    <h3>{title}</h3>
    <p>{description}</p>
  </Container>
);

export default AdvantageCard;
