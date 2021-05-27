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

    span {
      font: var(--font-body-normal);
      color: var(--color-label);
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

    button + button {
      margin-left: 1.6rem;
    }
  }
`;
