import styled, { css, keyframes } from 'styled-components';
import mediaQuery from '../../../utils/mediaQuery';

type TNavMenu = {
  isOpen: boolean;
};

export const Container = styled.aside`
  position: sticky;
  top: 6.4rem;
  z-index: 1;
  width: 100%;
  background: var(--color-background);
  border-bottom: 1px solid var(--color-line);

  ${mediaQuery.custom(800)} {
    width: 24vw;
    min-width: 22rem;
    /* min-height: 100%; */
    border-right: 1px solid var(--color-line);
    border-bottom: none;
  }
`;

const linkStyle = css`
  padding: 2rem 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-body);
  border: 0.3rem solid transparent;
  outline: 0;
  transition: background-color 0.3s ease-in-out, border-color 0.15s ease-in-out;

  &:hover {
    background-color: var(--color-off-white);
  }

  &:focus,
  &:active {
    border-color: var(--color-label);
  }

  .right-content {
    display: flex;
    align-items: center;

    svg {
      margin-right: 1.2rem;
    }
  }
`;

export const MenuToggler = styled.button.attrs({
  type: 'button',
})`
  ${linkStyle}
  width: 100%;
  font: var(--font-body-normal-heavy);
  background-color: var(--color-off-white);

  ${mediaQuery.custom(800)} {
    display: none;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-100%)
  }
  to {
    transform: translateY(0)
  }
`;

export const NavMenu = styled.nav<TNavMenu>`
  background-color: var(--color-background);
  z-index: 2;
  box-shadow: var(--elevation-x-large);
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  animation: ${slideIn} 0.15s;

  ${MenuToggler} {
    background: transparent;
  }

  ${mediaQuery.custom(800)} {
    display: block;
    box-shadow: none;
    position: initial;
  }

  a {
    ${linkStyle}

    &.active {
      background-color: var(--color-off-white);
      color: var(--color-primary-default);
    }
  }
`;

export const Badge = styled.span`
  padding: 0 0.4rem;
  background-color: var(--color-primary-default);
  color: var(--color-off-white);
  font: var(--font-body-small-heavy);
  border-radius: var(--radius-medium);
`;
