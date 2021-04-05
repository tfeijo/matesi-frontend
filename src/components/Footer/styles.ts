import styled, { css } from 'styled-components';

import { container } from '../../styles/shared';
import mediaQuery from '../../utils/mediaQuery';

const containerWithVerticalPadding = css`
  ${container}
  padding-top: 3.2rem;
  padding-bottom: 3.2rem;
`;

export const Background = styled.footer`
  background: var(--color-secondary-dark);
`;

export const MainContent = styled.div`
  ${containerWithVerticalPadding}

  ${mediaQuery.custom(800)} {
    display: flex;
    justify-content: space-between;

    padding-top: 4.8rem;
    padding-bottom: 4.8rem;
  }
`;

export const About = styled.div`
  div {
    display: flex;
    align-items: center;
    margin-top: 3.2rem;
    margin-bottom: 3.2rem;

    ${mediaQuery.tabletPortraitUp} {
      margin-top: 4rem;
      margin-bottom: 4rem;
    }

    a + a {
      margin-left: 2.4rem;
    }
  }
`;

export const Sitemap = styled.div`
  margin-top: 4.8rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  grid-gap: 4rem;

  ${mediaQuery.custom(800)} {
    margin-top: 0;
    grid-template-columns: repeat(3, max-content);
    gap: 6.4rem;
  }

  ${mediaQuery.tabletLandscapeUp} {
    gap: 9.6rem;
  }

  h3 {
    font: var(--font-body-normal-heavy);
    margin-bottom: 1.6rem;
    color: var(--color-off-white);
  }

  ul > li + li {
    margin-top: 0.2rem;

    ${mediaQuery.tabletLandscapeUp} {
      margin-top: 0.6rem;
    }
  }

  a {
    width: 100%;
    display: inline-block;
    padding: 0.4rem 0;
    color: var(--color-input-background);
    transition: opacity 0.2s;

    ${mediaQuery.tabletLandscapeUp} {
      display: initial;
      padding: 0;
    }

    &:hover {
      opacity: 0.5;
    }

    &:focus {
      border-radius: var(--radius-small);
      outline: 0;
      box-shadow: 0 0 0 0.3rem var(--color-placeholder);
    }
  }
`;

export const Divider = styled.hr`
  height: 0.2rem;
  width: 100%;
  border: 0;
  background-color: var(--color-secondary-darker);
`;

export const Copyright = styled.div`
  ${containerWithVerticalPadding};

  ${mediaQuery.tabletPortraitUp} {
    display: flex;
    justify-content: space-between;
  }

  p {
    font: var(--font-body-small);
    color: var(--color-placeholder);

    & + p {
      ${mediaQuery.phoneOnly} {
        margin-top: 1.6rem;
      }
    }
  }
`;
