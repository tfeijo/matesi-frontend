import styled, { css } from 'styled-components';
import mediaQuery from '../../../utils/mediaQuery';

type TContainerProps = {
  isOpen: boolean;
};

export const Container = styled.div<TContainerProps>`
  background-color: var(--color-off-white);
  transition: transform 0.3s ease-in-out;

  ${mediaQuery.custom(899.99, 'max')} {
    ${({ isOpen }) =>
    /* eslint-disable */
    isOpen &&
    css`
    /* eslint-enable */
        transform: translateX(-100%);
      `}
  }
`;

export const BackButton = styled.button.attrs({
  type: 'button',
})`
  border: 0;
  border-bottom: 1px solid var(--color-line);
  padding: 1.6rem;
  background-color: var(--color-background);
  font: var(--font-body-normal);

  width: 100%;
  display: flex;
  align-items: center;

  ${mediaQuery.tabletLandscapeUp} {
    display: none;
  }

  svg {
    margin-right: 0.8rem;
  }
`;

export const Main = styled.div`
  padding: 2rem 1.6rem;
`;

export const Message = styled.div`
  margin-bottom: 3.2rem;

  h3 {
    font: var(--font-heading-small);
    color: var(--color-primary-default);
    margin-bottom: 2.4rem;
  }

  .about {
    h4 {
      font: var(--font-body-large-heavy);
      margin-bottom: 0.8rem;
    }

    span, small {
      font: var(--font-body-normal);
    }

    span {
      color: var(--color-body);

    }

    small {
      color: var(--color-label);
      display: block;
      margin-top: 0.8rem;
      text-transform: capitalize;
    }
  }

  p {
    margin-top: 2.4rem;

    &.message {
      white-space: pre-line;
    }
  }

  a {
    margin-top: 2.4rem;
  }
`;

export const Actions = styled.div`
  .buttons {
    margin-top: 3.2rem;

    display: grid;
    grid-auto-flow: row;
    grid-gap: 1.6rem;

    ${mediaQuery.custom(450)} {
      grid-auto-flow: column;
      justify-content: start;
    }
  }
`;

export const UserAlreadyRegisteredContainer = styled.p`
  margin-top: 6.4rem;
  padding: 3.2rem;
  border-radius: var(--radius-medium);
  border: 0.1rem solid var(--color-success-default);
  color: var(--color-success-default);
  background-color: var(--color-success-lightest);
  font: var(--font-heading-x-small);
  text-align: center;
`;
