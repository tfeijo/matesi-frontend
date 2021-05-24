import styled, { css } from 'styled-components';
import mediaQuery from '../../../utils/mediaQuery';
import { navbarLinkStyle } from '../styles';

export const Container = styled.div<{ isOpen: boolean }>`
  ${mediaQuery.tabletLandscapeUp} {
    position: relative;
  }

  .dropdown-trigger {
    ${navbarLinkStyle}
    border: none;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: transparent;

    svg {
      margin-left: 0.4rem;
      transition: transform 0.1s;

      ${({ isOpen }) =>
    /* eslint-disable */
    isOpen &&
    css`
        /* eslint-enable */
          transform: rotate(180deg);
        `};
    }
  }

  > ul {
    border-radius: var(--radius-medium);
    background-color: var(--color-secondary-dark);

    margin: 0.3rem 0;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

    ${mediaQuery.tabletLandscapeUp} {
      position: absolute;
      top: calc(100% + 0.4rem);
      left: 0;
      min-width: 15rem;
      padding: 0.8rem;
      box-shadow: var(--elevation-x-large);
    }

    li a {
      ${navbarLinkStyle}
    }
  }
`;
