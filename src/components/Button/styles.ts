import styled, { css } from 'styled-components';

export type TCustomButton = {
  color?: 'primary' | 'secondary' | 'danger' | 'neutral' | 'light';
  variant?: 'fill' | 'outline' | 'ghost';
  size?: 'large' | 'medium' | 'small';
  block?: boolean;
};

type TProps = TCustomButton & { iconOnly?: boolean };

type GetPaddingProps = Omit<TProps, 'variant'>;
type GetIconSizeProps = Pick<TProps, 'size'>;
type GetColorFunctionsProps = Pick<TProps, 'variant' | 'color'>;

function getPadding({ size, iconOnly }: GetPaddingProps) {
  if (iconOnly) {
    if (size === 'large') return '1.5rem';
    if (size === 'medium') return '.9rem';
    if (size === 'small') return '0.7rem';
  }

  if (size === 'large') return '1.9rem 3.9rem';
  if (size === 'medium') return '1.1rem 2.3rem';
  if (size === 'small') return '.7rem 1.5rem';

  return 'Invalid property';
}

function getIconSize({ size }: GetIconSizeProps) {
  if (size === 'large') return '2.8rem';
  if (size === 'medium') return '2.4rem';
  if (size === 'small') return '2rem';

  return 'Invalid property';
}

function getBackgroundColor({ variant, color }: GetColorFunctionsProps) {
  if (variant === 'fill') {
    if (color === 'primary') return 'var(--color-primary-default)';
    if (color === 'secondary') return 'var(--color-secondary-default)';
    if (color === 'danger') return 'var(--color-danger-default)';
    if (color === 'neutral') return 'var(--color-label)';
    if (color === 'light') return 'var(--color-off-white)';
  }

  return 'transparent';
}

function getBorderColor({ variant, color }: GetColorFunctionsProps) {
  if (variant === 'outline') {
    if (color === 'primary') return 'var(--color-primary-light)';
    if (color === 'secondary') return 'var(--color-secondary-light)';
    if (color === 'danger') return 'var(--color-danger-light)';
    if (color === 'neutral') return 'var(--color-line)';
    if (color === 'light') return 'var(--color-light-transparent-40)';
  }

  return 'transparent';
}

function getColor({ variant, color }: GetColorFunctionsProps) {
  if (color === 'light') {
    return variant === 'fill'
      ? 'var(--color-title-active)'
      : 'var(--color-off-white)';
  }

  return variant === 'fill'
    ? 'var(--color-off-white)'
    : getBackgroundColor({ variant: 'fill', color });
}

function getHoverBackground({ variant, color }: GetColorFunctionsProps) {
  if (variant === 'fill') {
    if (color === 'primary') return 'var(--color-primary-dark)';
    if (color === 'secondary') return 'var(--color-secondary-dark)';
    if (color === 'danger') return 'var(--color-danger-dark)';
    if (color === 'neutral') return 'var(--color-body)';
    if (color === 'light') return 'var(--color-line)';
  }

  if (color === 'primary') return 'var(--color-primary-lighter)';
  if (color === 'secondary') return 'var(--color-secondary-lighter)';
  if (color === 'danger') return 'var(--color-danger-lighter)';
  if (color === 'neutral') return 'var(--color-line)';
  if (color === 'light') return 'var(--color-light-transparent-20)';

  return 'Invalid property';
}

function getFocusRingColor({ color }: GetColorFunctionsProps) {
  if (color === 'primary') return 'var(--color-primary-light)';
  if (color === 'secondary') return 'var(--color-secondary-light)';
  if (color === 'danger') return 'var(--color-danger-light)';
  if (color === 'neutral') return 'var(--color-placeholder)';
  if (color === 'light') return 'var(--color-line)';

  return 'Invalid property';
}

function getActiveBackground({ variant, color }: GetColorFunctionsProps) {
  if (variant === 'fill') {
    if (color === 'primary') return 'var(--color-primary-darker)';
    if (color === 'secondary') return 'var(--color-secondary-darker)';
    if (color === 'danger') return 'var(--color-danger-darker)';
    if (color === 'neutral') return 'var(--color-title-active)';
    if (color === 'light') return 'var(--color-placeholder)';
  }

  if (color === 'primary') return 'var(--color-primary-light)';
  if (color === 'secondary') return 'var(--color-secondary-light)';
  if (color === 'danger') return 'var(--color-danger-light)';
  if (color === 'neutral') return 'var(--color-placeholder)';
  if (color === 'light') return 'var(--color-light-transparent-40)';

  return 'Invalid property';
}

export const CustomButton = styled.button<TProps>`
  ${({ size, iconOnly, block }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${block ? '100%' : 'initial'};

    background: transparent;
    border: 0.1rem solid transparent;
    font: var(--font-button);
    cursor: pointer;
    transition: background 0.2s ease-in-out;

    padding: ${getPadding};
    border-radius: var(--radius-${size});

    svg {
      height: ${size === 'small' ? '1.8rem' : '2rem'};
      width: ${size === 'small' ? '1.8rem' : '2rem'};

      margin-left: ${iconOnly ? 'unset' : '0.8rem;'};

      ${iconOnly &&
      css`
        height: ${getIconSize({ size })};
        width: ${getIconSize({ size })};
      `};
    }
  `}

  background-color: ${getBackgroundColor};
  border-color: ${getBorderColor};
  color: ${getColor};

  &:hover {
    background-color: ${getHoverBackground};
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.3rem ${getFocusRingColor};
  }

  &:active {
    background-color: ${getActiveBackground};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    pointer-events: none;
  }
`;
