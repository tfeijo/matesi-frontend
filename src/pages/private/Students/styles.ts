import styled from 'styled-components';
import { container } from '../../../styles/shared';
import mediaQuery from '../../../utils/mediaQuery';

export const Container = styled.section`
  ${container}
  margin-top: 2.4rem;

  ${mediaQuery.tabletPortraitUp} {
    margin-top: 4.8rem;
  }

  ${mediaQuery.tabletLandscapeUp} {
    --grid-columns-table-style: 1.6fr 1.2fr 1.5fr 0.9fr;
    --grid-gap-table-style: 1.2rem;

    margin-top: 6.4rem;
  }
`;

export const Header = styled.header`
  background-color: var(--color-off-white);
  border-radius: var(--radius-x-large);
  box-shadow: var(--elevation-medium);

  .top-content {
    padding: 1.6rem;

    ${mediaQuery.tabletLandscapeUp} {
      padding: 2.4rem 2.4rem 3.2rem;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .list-header {
    display: none;

    ${mediaQuery.tabletLandscapeUp} {
      padding: 1.2rem 2.4rem;
      border-top: 0.1rem solid var(--color-line);

      display: grid;
      grid-template-columns: var(--grid-columns-table-style);
      grid-gap: var(--grid-gap-table-style);
      justify-items: start;

      button {
        display: flex;
        align-items: center;

        padding: 0;
        border: 0;
        background: transparent;
        transition: opacity 0.15s ease-in-out;

        &:hover {
          opacity: 0.6;
        }

        &:focus,
        &:active {
          outline: 0.3rem solid var(--color-placeholder);
        }

        svg {
          margin-left: 0.4rem;
          color: var(--color-label);
        }
      }

      button,
      p {
        font: var(--font-body-normal-heavy);
        color: var(--color-title-active);
      }
    }
  }

  h2 {
    font: var(--font-heading-small);
    color: var(--color-primary-default);
    margin-bottom: 2.4rem;

    ${mediaQuery.tabletLandscapeUp} {
      margin-bottom: 0;
      margin-right: 2.4rem;
      flex-shrink: 0;
    }
  }

  .dropdown {
    width: 100%;

    button {
      width: 100%;
    }
  }
`;

export const Filters = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaQuery.tabletLandscapeUp} {
    flex-direction: row;
    justify-content: flex-end;
  }

  .buttons {
    margin-bottom: 1.6rem;

    ${mediaQuery.tabletPortraitUp} {
      display: flex;

      > div {
        flex: 1;
      }
    }

    ${mediaQuery.tabletLandscapeUp} {
      margin-bottom: 0;
      margin-right: 0.8rem;
    }

    > div + div {
      margin-top: 1.6rem;

      ${mediaQuery.tabletPortraitUp} {
        margin-top: 0;
        margin-left: 1.6rem;
      }

      ${mediaQuery.tabletLandscapeUp} {
        margin-left: 0.8rem;
      }
    }
  }

  form {
    ${mediaQuery.tabletLandscapeUp} {
      max-width: 35rem;
    }

    .search-box {
      position: relative;

      input {
        margin-bottom: 0;
        padding-right: 4.4rem;
      }

      button {
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }
`;

export const List = styled.ul`
  margin-top: 1.6rem;
  margin-bottom: 3.2rem;

  ${mediaQuery.tabletPortraitUp} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.2rem;
  }

  ${mediaQuery.tabletLandscapeUp} {
    grid-template-columns: 1fr;
  }

  li {
    background-color: var(--color-off-white);
    border-radius: var(--radius-x-large);
    box-shadow: var(--elevation-medium);
    padding: 1.6rem;

    ${mediaQuery.phoneOnly} {
      & + li {
        margin-top: 1.6rem;
      }
    }

    ${mediaQuery.tabletLandscapeUp} {
      display: grid;
      grid-template-columns: var(--grid-columns-table-style);
      align-items: center;
      grid-gap: var(--grid-gap-table-style);
      padding: 1.2rem 2.4rem;
    }

    > * + * {
      margin-top: 1.2rem;

      ${mediaQuery.tabletLandscapeUp} {
        margin-top: 0;
      }
    }

    p {
      word-break: break-word;

      span {
        color: var(--color-label);

        ${mediaQuery.tabletLandscapeUp} {
          display: none;
        }
      }
    }
  }
`;

export const Courses = styled.div`
  font-size: 0;

  svg {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    box-shadow: var(--elevation-small);
    border: 0.2rem solid var(--color-off-white);

    & + svg {
      margin-left: 1.2rem;
    }
  }
`;

export const Footer = styled.footer`
  margin-bottom: 4.8rem;

  p {
    color: var(--color-placeholder);
    text-align: center;
    margin-bottom: 1.6rem;
  }

  ${mediaQuery.tabletPortraitUp} {
    margin-bottom: 7.2rem;
  }

  ${mediaQuery.tabletLandscapeUp} {
    margin-bottom: 9.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      margin-bottom: 0;
      margin-left: 2.4rem;
    }
  }
`;
