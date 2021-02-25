import { darken, transparentize } from 'polished';
import styled, { css } from 'styled-components';
import { container } from '../../styles/shared';

export const Container = styled.header`
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: ${({ theme }) => theme.colors.red_base};
  position: sticky;
  top: 0;
  z-index: 99999999999;
`;

export const Content = styled.div`
  ${container}
  display: flex;
  align-items: center;
  justify-content: space-between;

  > a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Navigation = styled.div`
  button.nav-open,
  button.nav-close {
    width: 3.2rem;
    height: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white};
    background-color: transparent;
    border: none;
    border-radius: ${({ theme }) => theme.radius};
    transition: background 0.3s ease;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) =>
        transparentize(0.8, theme.colors.white)};
    }

    @media screen and (min-width: 850px) {
      display: none;
    }
  }
`;

export const NavMenu = styled.nav<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 9999999;
  background-color: ${({ theme }) => theme.colors.red_base};
  transform: translateX(-100%);
  transition: transform 0.4s ease;

  ${props =>
    props.isOpen &&
    css`
      transform: translateX(0);
    `}

  @media screen and (min-width: 850px) {
    transform: unset;
    position: unset;
  }

  button.nav-close {
    position: absolute;
    top: 1rem;
    right: 1.6rem;
  }

  ul {
    margin-top: 4rem;
    padding: 1.6rem;

    @media screen and (min-width: 850px) {
      margin-top: 0;
      display: flex;
      align-items: center;
      padding: 0;
    }

    li {
      list-style: none;

      a:not(.enroll-button) {
        display: block;
        padding: 1.6rem;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white};
        border-radius: ${({ theme }) => theme.radius};
        transition: background 0.3s ease;

        &:hover {
          background-color: ${({ theme }) =>
            transparentize(0.8, theme.colors.white)};
        }

        @media screen and (min-width: 850px) {
          padding: 0.5625em 1.5em;
        }
      }

      a.enroll-button {
        text-decoration: none;

        > button {
          width: 100%;
          height: 5.6rem;

          @media screen and (min-width: 850px) {
            width: unset;
            height: unset;
          }
        }
      }
    }
  }
`;

export const Dropdown = styled.div<{ isOpen: boolean }>`
  position: relative;

  > button {
    border: none;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: transparent;
    font: var(--font-paragraph);
    padding: 1.6rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.radius};
    transition: background 0.3s ease;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) =>
        transparentize(0.8, theme.colors.white)};
    }

    @media screen and (min-width: 850px) {
      width: unset;
      padding: 0.5625em 1.5em;
    }

    svg {
      margin-left: 0.4rem;
      transition: transform 0.3s ease;

      ${props =>
        props.isOpen &&
        css`
          transform: rotate(180deg);
        `}
    }
  }

  ul.dropdown-menu {
    margin-top: unset;
    background-color: ${({ theme }) => darken(0.1, theme.colors.red_base)};
    border-radius: ${({ theme }) => theme.radius};
    overflow: hidden;
    transition: max-height 0.3s;
    max-height: 100vh;
    padding: 0;

    @media screen and (min-width: 850px) {
      position: absolute;
      top: calc(100% + 0.5rem);
      left: 50%;
      width: 100%;
      transform: translateX(-50%);

      flex-direction: column;
      align-items: flex-start;

      li {
        width: 100%;
      }
    }

    ${props =>
      !props.isOpen &&
      css`
        max-height: 0px;
      `}
  }
`;
