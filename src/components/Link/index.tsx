import { IconBaseProps } from 'react-icons';
import { LinkProps } from 'react-router-dom';
import { StyledLink, TColor } from './styles';

interface Props extends LinkProps {
  icon?: React.ComponentType<IconBaseProps>;
  color?: TColor;
}

const CourseCard: React.FC<Props> = ({
  icon: Icon,
  color = 'primary',
  children,
  ...rest
}) => (
  <StyledLink color={color} {...rest}>
    {children}
    {Icon && <Icon size={24} />}
  </StyledLink>
);

export default CourseCard;
