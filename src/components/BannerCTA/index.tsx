import Button from '../Button';
import { Background, Container } from './styles';

interface Props {
  message: string;
  secondaryAction?: {
    title: string;
    to: string;
  };
}

const BannerCTA = ({ message, secondaryAction }: Props) => (
  <Background>
    <Container>
      <h2>{message}</h2>

      <div>
        <Button asLink to="/matricular" size="large">
          Matrícule-se
        </Button>
        {secondaryAction && (
          <Button
            asLink
            to={secondaryAction.to}
            size="large"
            color="light"
            variant="outline"
          >
            {secondaryAction.title}
          </Button>
        )}
      </div>
    </Container>
  </Background>
);

export default BannerCTA;
