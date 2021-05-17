import { AnchorHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Link, LinkProps } from 'react-router-dom';
import { StyledLink, TColor } from './styles';

interface CustomProps<E> {
  icon?: React.ComponentType<IconBaseProps>;
  color?: TColor;
  external?: E;
}

type HTMLAnchor = AnchorHTMLAttributes<HTMLAnchorElement>;

type InternalLinkProps = LinkProps & CustomProps<false>;
type ExternalLinkProps = HTMLAnchor & CustomProps<true>;

const CourseCard: React.FC<InternalLinkProps | ExternalLinkProps> = ({
  icon: Icon,
  color = 'primary',
  external,
  children,
  ...rest
}) => {
  let props = {
    color,
    ...rest,
  };

  if (external) {
    props = {
      rel: 'noreferrer noopener',
      target: '_blank',
      ...props,
    };
  }

  return (
    <StyledLink as={external ? 'a' : Link} {...props}>
      {children}
      {Icon && <Icon size={24} />}
    </StyledLink>
  );
};

export default CourseCard;
