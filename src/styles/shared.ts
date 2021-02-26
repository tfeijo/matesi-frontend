import { darken } from 'polished';
import { css } from 'styled-components';

export const container = css`
  width: min(100%, 1136px);
  padding: 0 16px;
  margin: 0 auto;
`;

export const titleUnderlined = css`
  font: var(--font-headline);
  color: ${({ theme }) => darken(0.15, theme.colors.gray_base)};
  text-align: center;
  position: relative;
  margin-bottom: calc(14px + 4rem);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: calc(14px + 6.4rem);
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 2px;
    background: ${({ theme }) => theme.colors.red_base};
  }
`;
