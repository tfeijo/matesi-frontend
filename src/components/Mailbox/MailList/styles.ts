import styled, { css } from 'styled-components';
import { Form } from '@unform/web';
import mediaQuery from '../../../utils/mediaQuery';

export const Container = styled.div`
  ${mediaQuery.tabletLandscapeUp} {
    border-right: 0.1rem solid var(--color-line);
  }
`;

type SearchProps = {
  isSearching: boolean;
};

export const Header = styled.header<SearchProps>`
  width: 100%;
  padding: 1.2rem 1.6rem;
  border-bottom: 1px solid var(--color-line);

  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font: var(--font-heading-small);
    display: ${({ isSearching }) => (isSearching ? 'none' : 'initial')};
  }
`;

// eslint-disable-next-line
export const SearchForm = styled(Form) <SearchProps>`
  ${({ isSearching }) => css`
    display: flex;
    justify-content: space-between;

    width: ${isSearching ? '100%' : '4.4rem'};

    > div {
      position: relative;
      flex: 1;
      margin-left: 1.6rem;

      input {
        margin-bottom: 0;
        opacity: ${!isSearching && '0'};
      }

      button {
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  `};
`;

type ListItemProps = {
  isActive: boolean;
  isRead: boolean;
};

export const ListItem = styled.li<ListItemProps>`
  padding: 2rem 1.6rem;
  border-bottom: 0.1rem solid var(--color-line);
  position: relative;

  ${({ isRead }) =>
    !isRead &&
    css`
      &::before {
        display: none;
      }
    `}

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    width: 0.4rem;
    background-color: var(--color-secondary-default);
  }

  ${p =>
    p.isActive &&
    css`
      background-color: var(--color-off-white);
    `}

  h4 {
    font: var(--font-body-normal-heavy);
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    span:first-of-type {
      margin-right: 0.8rem;
    }

    span:last-of-type {
      font: var(--font-body-small);
      color: var(--color-label);
    }
  }

  p {
    margin-top: 0.8rem;
  }

  .info {
    margin-bottom: 1.6rem;
    position: relative;

    > button {
      position: absolute;
      top: -2rem;
      left: -1.6rem;
      width: calc(100% + 3.2rem);
      height: calc(100% + 3.6rem);

      color: transparent;
      background: transparent;
      border: 0;
      outline: 0;

      &:hover:before {
        background-color: var(--color-off-white);
      }

      &:focus:before {
        box-shadow: inset 0 0 0 0.3rem var(--color-placeholder);
      }

      &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: -5.6rem;
        left: 0;
        pointer-events: none;
        z-index: -1;
        transition: background-color 0.15s ease-in-out;
      }
    }
  }

  .extra-actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    &__buttons {
      flex: 1;
      text-align: right;

      button + button {
        margin-left: 1.2rem;
      }
    }
  }
`;
