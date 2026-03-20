import { RiLoader4Fill } from 'react-icons/ri';
import { Container } from './styles';

interface LoaderProps {
  size?: number;
  style?: React.CSSProperties;
}

export default function Loader({ size = 32, ...rest }: LoaderProps) {
  return (
    <Container {...rest}>
      <RiLoader4Fill size={size} />
    </Container>
  );
}
