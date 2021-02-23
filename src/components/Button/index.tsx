import { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { CustomButton } from './styles';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline-white'
    | 'ghost-white'
    | 'ghost-yellow'
    | 'ghost-red';
  size?: 'normal' | 'large' | 'small';
  icon?: React.ComponentType<IconBaseProps>;
  iconOnly?: boolean;
}

const Button: React.FC<IProps> = ({
  variant = 'primary',
  size = 'normal',
  icon: Icon,
  children,
  iconOnly = false,
  ...rest
}) => {
  return (
    <CustomButton className={variant} size={size} iconOnly={iconOnly} {...rest}>
      {!iconOnly && children} {Icon && <Icon size={24} />}
    </CustomButton>
  );
};

export default Button;
