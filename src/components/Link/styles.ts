import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export type TColor = 'primary' | 'secondary';

interface Props {
  color: TColor;
}

export const StyledLink = styled(Link)<Props>`
  display: inline-flex;
  align-items: center;

  font-weight: 600;
  border-radius: var(--radius-small);

  transition: color 0.2s;

  svg {
    margin-left: 0.8rem;
    transition: transform 0.2s;
  }

  ${({ color }) => css`
    color: var(--color-${color}-default);

    &:hover {
      color: var(--color-${color}-dark);

      svg {
        transform: translateX(0.4rem);
      }
    }

    &:active {
      color: var(--color-${color}-darker);

      svg {
        transform: translateX(0.4rem);
      }
    }

    &:disabled {
      opacity: 0.3;
    }

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 0.3rem var(--color-${color}-light);
    }
  `}
`;
