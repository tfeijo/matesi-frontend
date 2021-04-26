import styled, { css } from 'styled-components';
import mediaQuery from '../../utils/mediaQuery';

const pageItemStyle = css`
  padding: 0.9rem 1.5rem;
  background-color: transparent;
  color: var(--color-primary-default);
  border: 0.1rem solid var(--color-primary-lighter);
  font: var(--font-body-normal);
  border-radius: var(--radius-medium);
  min-width: 4.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.nav`
  ul {
    display: flex;
    justify-content: center;
  }

  li {
    & + li {
      margin-left: 0.8rem;

      ${mediaQuery.tabletLandscapeUp} {
        margin-left: 0.4rem;
      }
    }

    &:first-child,
    &:last-child {
      button {
        padding: 1.1rem;
      }
    }

    span {
      ${pageItemStyle}
      letter-spacing: .1rem
    }

    button {
      ${pageItemStyle}
      outline: 0;
      transition: background-color 0.2s ease-in-out;

      &.active {
        background-color: var(--color-primary-default);
        border-color: var(--color-primary-default);
        color: var(--color-off-white);
        cursor: initial;
      }

      &:hover:not(.active) {
        background-color: var(--color-primary-lighter);
      }

      &:focus:not(.active) {
        box-shadow: 0 0 0 0.3rem var(--color-primary-light);
      }

      &:disabled:not(.active) {
        pointer-events: none;
        opacity: 0.3;
      }
    }
  }
`;
