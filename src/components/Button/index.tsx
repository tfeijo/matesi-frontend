import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Link, LinkProps } from 'react-router-dom';

import { CustomButton, TCustomButton } from './styles';

type THTMLButton = ButtonHTMLAttributes<HTMLButtonElement>;

type THTMLAnchor = AnchorHTMLAttributes<HTMLAnchorElement>;

type TIcon = React.ComponentType<IconBaseProps>;

type IconProps =
  | { iconOnly?: false; icon?: TIcon; children?: React.ReactNode }
  | { iconOnly: true; icon: TIcon; children?: never };

type Props<L, E> = TCustomButton & IconProps & { asLink?: L; external?: E };

type ButtonProps = THTMLButton & Props<false, false>;
type InternalLinkProps = LinkProps & Props<true, false>;
type ExternalLinkProps = THTMLAnchor & Props<true, true>;

function Button({
  asLink,
  external,
  color = 'primary',
  variant = 'fill',
  size = 'medium',
  block,
  iconOnly,
  icon: Icon,
  type = 'button',
  children,
  ...rest
}: ButtonProps | InternalLinkProps | ExternalLinkProps) {
  const linkType = external ? 'a' : Link;
  const as = asLink ? linkType : 'button';

  const externalLinkProps = {
    target: '_blank',
    rel: 'noreferrer noopener',
  };

  let extraProps;

  if (asLink) {
    if (external) extraProps = { ...externalLinkProps };
  } else extraProps = { type };

  return (
    <CustomButton
      as={as}
      color={color}
      variant={variant}
      size={size}
      iconOnly={iconOnly}
      block={block}
      {...extraProps}
      {...rest}
    >
      {iconOnly ?? children}
      {Icon && <Icon size={24} />}
    </CustomButton>
  );
}

export default Button;
