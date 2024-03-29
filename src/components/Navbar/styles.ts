import styled, { css } from 'styled-components';

import { container } from '../../styles/shared';
import mediaQuery from '../../utils/mediaQuery';

export const Header = styled.header`
  background-color: var(--color-secondary-default);
  box-shadow: var(--elevation-x-large);
  position: sticky;
  z-index: 1000;
  top: 0;
`;

export const Container = styled.div`
  ${container}
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  /* LOGO */
  > a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${mediaQuery.tabletLandscapeUp} {
    .nav-open {
      display: none;
    }
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: var(--color-dark-transparent-40);
  cursor: pointer;
`;

export const navbarLinkStyle = css`
  display: block;
  padding: 1rem;
  font: var(--font-body-normal-heavy);
  color: var(--color-off-white);
  border-radius: var(--radius-medium);
  transition: background-color 0.3s ease;

  ${mediaQuery.tabletLandscapeUp} {
    padding: 1rem 2rem;
  }

  &:hover {
    background-color: var(--color-light-transparent-20);
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.3rem var(--color-light-transparent-40);
  }
`;

export const NavMenu = styled.nav<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: min(100%, 30rem);
  background-color: var(--color-secondary-default);
  transition: transform 0.4s ease-in-out;

  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};

  ${mediaQuery.tabletLandscapeUp} {
    position: initial;
    transform: unset;
    width: unset;
  }

  .nav-close {
    position: absolute;
    top: 1rem;
    right: 1.6rem;

    ${mediaQuery.tabletLandscapeUp} {
      display: none;
    }
  }

  ul.main_nav {
    padding: 6.6rem 1.6rem 3.2rem;
    height: 100%;

    display: flex;
    flex-direction: column;

    ${mediaQuery.tabletLandscapeUp} {
      padding: 0;
      flex-direction: row;
    }

    > li {
      ${mediaQuery.tabletLandscapeUp} {
        & + li {
          margin-left: 0.8rem;
        }
      }

      > a:not(.enroll-button) {
        ${navbarLinkStyle}
      }
    }

    .enroll-button {
      width: 100%;
    }
  }
`;
