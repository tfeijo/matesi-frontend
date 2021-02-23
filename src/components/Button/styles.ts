import { darken, lighten, transparentize } from 'polished';
import styled, { css } from 'styled-components';

interface IProps {
  size: 'normal' | 'large' | 'small';
  iconOnly: boolean;
}

export const CustomButton = styled.button<IProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font: var(--font-button);
  letter-spacing: 0.05rem;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radius};
  transition: background 0.3s ease;
  background: transparent;
  cursor: pointer;

  ${props =>
    props.iconOnly
      ? css`
          padding: 0.5625em;
        `
      : css`
          svg {
            margin-left: 4rem;
          }
        `}

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none;
  }

  ${props =>
    props.size === 'normal' &&
    !props.iconOnly &&
    css`
      padding: 0.5625em 1.5em;
    `}

  ${props =>
    props.size === 'large' &&
    !props.iconOnly &&
    css`
      padding: 0.875em 1.75em;
    `}

  ${props =>
    props.size === 'small' &&
    !props.iconOnly &&
    css`
      font-size: 1.4rem;
      padding: 0.5714em 1.1428em;

      svg {
        margin-left: 0.8rem;
        height: 20px;
        width: 20px;
      }
    `}

  &.primary {
    background-color: ${({ theme }) => theme.colors.red_base};
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      background-color: ${({ theme }) => darken(0.1, theme.colors.red_base)};
    }
  }

  &.secondary {
    background-color: ${({ theme }) => lighten(0.3, theme.colors.silver_base)};
    color: ${({ theme }) => darken(0.15, theme.colors.gray_base)};

    &:hover {
      background-color: ${({ theme }) =>
        lighten(0.2, theme.colors.silver_base)};
    }
  }

  &.outline-white {
    border-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      background-color: ${({ theme }) =>
        transparentize(0.7, theme.colors.white)};
    }
  }

  &.ghost-white {
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      background-color: ${({ theme }) =>
        transparentize(0.7, theme.colors.white)};
    }
  }

  &.ghost-yellow {
    color: ${({ theme }) => theme.colors.yellow_base};

    &:hover {
      background-color: ${({ theme }) =>
        transparentize(0.8, theme.colors.yellow_base)};
    }
  }

  &.ghost-red {
    color: ${({ theme }) => theme.colors.red_base};

    &:hover {
      background-color: ${({ theme }) =>
        transparentize(0.8, theme.colors.red_base)};
    }
  }
`;
