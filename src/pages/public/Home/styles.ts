import styled, { css } from 'styled-components';

import homeBG from '../../../assets/home-bg.jpg';

import { container } from '../../../styles/shared';
import mediaQuery from '../../../utils/mediaQuery';

const containerWithVerticalPadding = css`
  ${container}
  padding-top: 7.2rem;
  padding-bottom: 7.2rem;

  ${mediaQuery.tabletPortraitUp} {
    padding-top: 12rem;
    padding-bottom: 12rem;
  }
`;

export const Hero = styled.section`
  min-height: 80vh;
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0) 97.76%
    ),
    url(${homeBG});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;

  > div {
    ${container}
  }

  h1 {
    max-width: 29.6rem;
    font: var(--font-display-medium-heavy);
    color: var(--color-off-white);
    margin-bottom: 6.4rem;
  }

  ${mediaQuery.tabletPortraitUp} {
    background-image: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.71) 13.61%,
        rgba(0, 0, 0, 0) 97.76%
      ),
      url(${homeBG});

    h1 {
      max-width: 61.4rem;
    }
  }
`;

export const Advantages = styled.section`
  background-color: var(--color-off-white);

  > div {
    ${containerWithVerticalPadding}
  }

  .card_container {
    display: flex;
    flex-direction: column;
    align-items: center;

    ${mediaQuery.tabletPortraitUp} {
      flex-direction: row;
      align-items: unset;
      justify-content: space-between;
    }
  }
`;

export const Courses = styled.section`
  ${containerWithVerticalPadding}

  .card_container {
    max-width: 75.2rem;
    margin: 0 auto;
  }
`;

export const Testimonials = styled.section`
  background-color: var(--color-off-white);

  > div {
    ${containerWithVerticalPadding}
  }

  .card_container {
    max-width: 75.2rem;
    margin: 0 auto;
  }
`;

export const Partners = styled.section`
  ${containerWithVerticalPadding};

  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3.2rem;
    justify-items: center;
    align-items: center;
    opacity: 0.4;

    ${mediaQuery.tabletLandscapeUp} {
      grid-template-columns: repeat(4, 1fr);

      img {
        width: auto;
      }
    }
  }

  img {
    max-height: 8rem;
    object-fit: contain;
  }
`;

export const Contact = styled.section`
  background-color: var(--color-off-white);

  > div {
    ${containerWithVerticalPadding}
  }

  .content_container {
    max-width: 36.8rem;
    margin: 0 auto;
  }

  .links {
    margin: 6.4rem auto;
    display: flex;
    justify-content: space-between;

    a {
      border-radius: var(--radius-x-large);
      padding: 1.2rem;
      border: none;

      svg {
        width: 4.8rem;
        height: 4.8rem;
      }
    }
  }

  p {
    text-align: center;
    font: var(--font-body-large);
  }
`;
