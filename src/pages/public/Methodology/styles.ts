import styled, { css, keyframes } from 'styled-components';

import { container } from '../../../styles/shared';
import mediaQuery from '../../../utils/mediaQuery';

/* Keyframes */
const moveUpDown = keyframes`
  from {
    transform: translateY(-8px);
  }

  to {
    transform: translateY(8px);
  }
`;

/* Mixin */
const absoluteFullSizeStyle = css`
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const Hero = styled.section`
  ${container}
  max-width: 75.2rem;
  text-align: center;
  margin-top: 6.4rem;
  margin-bottom: 16.4rem;

  h1 {
    font: var(--font-display-large-heavy);
  }

  p {
    font: var(--font-body-large);
    max-width: 45.8rem;
    margin: 2.4rem auto 11.6rem;

    strong {
      font: var(--font-body-large-heavy);
      color: var(--color-primary-default);
    }
  }

  svg {
    overflow: visible;

    #arrow {
      animation: ${moveUpDown} 0.8s infinite alternate-reverse linear;
    }
  }
`;

/*
  Generic component to the main content
  This component has common styles for all sections below
*/
const MainContentSectionStyles = styled.section`
  position: relative;

  &:before {
    ${absoluteFullSizeStyle}
  }

  .container {
    ${container}
    display: flex;

    ${mediaQuery.custom(700)} {
      > div {
        flex: 1;
      }
    }
  }

  .text-container {
    ${mediaQuery.custom(700)} {
      max-width: 36.8rem;
    }

    ${mediaQuery.custom(850)} {
      max-width: 46.4rem;
    }

    ${mediaQuery.tabletLandscapeUp} {
      max-width: 56rem;
    }

    h2 {
      font: var(--font-heading-large);
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: inherit;
      margin-bottom: 1rem;

      &::first-letter {
        font-size: 6.8rem;
      }
    }

    p {
      text-align: justify;
    }
  }

  .image-container {
    position: relative;
  }
`;

/*
  Main Content Sections
  These components must be created based on the generic component presented above
*/
export const Memorization = styled(MainContentSectionStyles)`
  ${mediaQuery.desktopUp} {
    z-index: -1;
    clip-path: polygon(0 -50%, 100% -50%, 100% 87%, 0% 100%);
  }

  &:before {
    background-color: var(--color-title-active);
    clip-path: polygon(0 13%, 100% 0%, 100% 87%, 0% 100%);
    z-index: -100;
  }

  .container {
    flex-direction: column-reverse;

    padding-top: 32vh;
    padding-bottom: 17rem;

    ${mediaQuery.custom(700)} {
      flex-direction: row;

      padding-top: 12rem;
      padding-bottom: 12rem;
    }

    ${mediaQuery.custom(1000)} {
      padding-top: 14rem;
      padding-bottom: 16rem;
    }
  }

  .text-container {
    color: var(--color-off-white);
  }

  .image-container {
    img {
      position: absolute;
      right: -1.6rem;
      bottom: 100%;
      width: min(63vw, 32rem);
    }

    ${mediaQuery.custom(700)} {
      img {
        bottom: 0;
        width: 90%;
      }
    }

    ${mediaQuery.custom(1000)} {
      position: unset;

      img {
        width: min(40vw, 55rem);
        right: 0;
        bottom: 20%;
      }
    }

    ${mediaQuery.desktopUp} {
      img {
        bottom: 5%;
      }
    }
  }
`;

export const Assist = styled(MainContentSectionStyles)`
  .container {
    flex-direction: column-reverse;

    padding-top: min(19vh, 32rem);
    padding-bottom: min(28vh, 20rem);

    ${mediaQuery.custom(700)} {
      flex-direction: row-reverse;

      padding-top: 1rem;
      padding-bottom: 4rem;
    }

    ${mediaQuery.custom(1000)} {
      padding-bottom: 8rem;
    }
  }

  .text-container h2 {
    color: var(--color-title-active);
  }

  .image-container {
    .img-gradient-container {
      position: absolute;
      left: -1.6rem;
      bottom: -6rem;
      width: calc(100% + 3.2rem);
      height: max-content;
      z-index: -1;
    }

    ${mediaQuery.tabletPortraitUp} {
      .img-gradient-container {
        bottom: -12rem;
      }
    }

    ${mediaQuery.custom(700)} {
      .img-gradient-container {
        width: 100%;
        top: -6rem;

        &:before {
          ${absoluteFullSizeStyle}
          background-image: linear-gradient(
            320deg,
            var(--color-background) 25%,
            transparent 50%
          );
        }
      }
    }

    ${mediaQuery.custom(780)} {
      .img-gradient-container:before {
        background-image: linear-gradient(
          330deg,
          var(--color-background) 20%,
          transparent 50%
        );
      }
    }

    ${mediaQuery.custom(850)} {
      .img-gradient-container:before {
        background-image: linear-gradient(
          350deg,
          var(--color-background) 15%,
          transparent 30%
        );
      }
    }

    ${mediaQuery.custom(940)} {
      .img-gradient-container:before {
        position: unset;
      }
    }

    ${mediaQuery.custom(1000)} {
      .img-gradient-container {
        top: unset;
        bottom: -90%;
      }
    }

    ${mediaQuery.custom(1120)} {
      position: unset;

      .img-gradient-container {
        width: 45vw;
        top: unset;
        bottom: -60%;
      }
    }

    ${mediaQuery.custom(1500)} {
      .img-gradient-container {
        bottom: -75%;
      }
    }
  }
`;

export const Transmission = styled(MainContentSectionStyles)`
  z-index: 1;

  &:before {
    background-color: var(--color-secondary-default);
    clip-path: polygon(0 0, 100% 13%, 100% 100%, 0 100%);
    z-index: -2;
  }

  .container {
    flex-direction: column-reverse;

    padding-top: 9vh;
    padding-bottom: 12rem;

    ${mediaQuery.custom(700)} {
      flex-direction: row;

      padding-top: 6rem;
      padding-bottom: 10rem;
    }

    ${mediaQuery.tabletLandscapeUp} {
      padding-bottom: 12rem;
    }

    ${mediaQuery.desktopUp} {
      padding-top: 10rem;
      padding-bottom: 14rem;
    }
  }

  .text-container {
    color: var(--color-off-white);
  }

  .image-container {
    img {
      position: absolute;
      right: 0.8rem;
      bottom: -10rem;
      width: 63vw;
      max-width: 24rem;
      z-index: -3;

      ${mediaQuery.custom(700)} {
        bottom: -5.5rem;
        z-index: -1;
        width: calc(100% - 3.2rem);
        max-width: unset;
      }

      ${mediaQuery.custom(750)} {
        bottom: -16rem;
      }

      ${mediaQuery.custom(850)} {
        bottom: -20rem;
      }

      ${mediaQuery.tabletLandscapeUp} {
        bottom: -28rem;
        max-width: 32rem;
      }

      ${mediaQuery.custom(1000)} {
        max-width: 45rem;
      }

      ${mediaQuery.desktopUp} {
        right: -3.2rem;
      }
    }
  }
`;

export const Exercise = styled(MainContentSectionStyles)`
  z-index: 2;
  margin-top: -9rem;

  ${mediaQuery.tabletPortraitUp} {
    margin-top: -6rem;
  }

  ${mediaQuery.tabletLandscapeUp} {
    margin-top: -4rem;
  }

  clip-path: polygon(0 -50%, 100% -50%, 100% 100%, 0 90%);

  &:before {
    background-color: var(--color-title-active);
    clip-path: polygon(0 12%, 100% 0%, 100% 100%, 0 90%);
    z-index: -100;
  }

  .container {
    flex-direction: column-reverse;

    padding-top: 15vh;
    padding-bottom: 9rem;

    ${mediaQuery.custom(700)} {
      flex-direction: row-reverse;

      padding-top: 4rem;
      padding-bottom: 6rem;
    }

    ${mediaQuery.desktopUp} {
      padding-top: 6rem;
      padding-bottom: 8rem;
    }
  }

  .text-container {
    color: var(--color-off-white);
  }

  .image-container {
    img {
      position: absolute;
      bottom: -6rem;
      right: -1.6rem;
      width: 40vw;
      max-width: 16rem;
      transform: scaleX(-1);

      ${mediaQuery.tabletPortraitUp} {
        max-width: 18rem;
      }

      ${mediaQuery.custom(700)} {
        transform: unset;
        width: 80%;
        max-width: unset;
        left: -1.6rem;
        bottom: -16rem;
      }

      ${mediaQuery.custom(800)} {
        bottom: -20rem;
      }

      ${mediaQuery.tabletLandscapeUp} {
        width: 70%;
        top: -30%;
        left: 5%;
      }

      ${mediaQuery.desktopUp} {
        width: 60%;
        top: -40%;
        left: 5%;
      }
    }
  }
`;

export const Synergy = styled(MainContentSectionStyles)`
  z-index: 1;

  &:before {
    background-color: var(--color-background);
    clip-path: polygon(0 10%, 100% 0, 100% 100%, 0 100%);
    z-index: -2;
  }

  .container {
    flex-direction: column-reverse;

    margin-top: 32vh;
    padding-top: 7vh;
    padding-bottom: 8.5vh;

    ${mediaQuery.custom(700)} {
      flex-direction: row;

      margin-top: unset;
      padding-top: 2rem;
      padding-bottom: 8rem;
    }

    ${mediaQuery.custom(1000)} {
      padding-bottom: 12rem;
    }
  }

  .text-container h2 {
    color: var(--color-title-active);
  }

  .image-container {
    .overflow-x-hidden {
      overflow: hidden;
      position: absolute;
      top: -45vh;
      left: -1.6rem;
      right: -1.6rem;
      z-index: -101;

      ${mediaQuery.tabletPortraitUp} {
        top: -56vh;
      }

      ${mediaQuery.custom(700)} {
        z-index: unset;
        top: -4rem;
        right: -1.6rem;
        bottom: -8rem;
        left: -60%;
      }

      ${mediaQuery.custom(1000)} {
        left: 0;
        bottom: -12rem;
      }
    }

    img {
      width: 160vw;
      transform: translateX(-20%);

      ${mediaQuery.custom(700)} {
        transform: unset;
        display: block;
        margin-left: 12rem;
        width: 100%;
      }

      ${mediaQuery.custom(800)} {
        width: 80%;
        margin-left: 24rem;
      }

      ${mediaQuery.custom(1000)} {
        width: 120%;
        margin-left: unset;
      }

      ${mediaQuery.desktopUp} {
        width: 100%;
        margin-left: unset;
      }
    }
  }
`;

export const Importance = styled(MainContentSectionStyles)`
  z-index: 2;
  margin-top: -5rem;

  ${mediaQuery.tabletPortraitUp} {
    margin-top: -6rem;
  }

  ${mediaQuery.tabletLandscapeUp} {
    margin-top: -4rem;
  }

  &:before {
    background-color: var(--color-primary-dark);
    clip-path: polygon(0 6%, 100% 0, 100% 100%, 0 100%);
    z-index: -100;
  }

  .container {
    flex-direction: column;

    ${mediaQuery.custom(700)} {
      flex-direction: row-reverse;
    }
  }

  .text-container {
    color: var(--color-off-white);
    padding-top: 10vh;

    ${mediaQuery.custom(700)} {
      padding-top: 5vh;
      padding-bottom: 5vh;
    }

    ${mediaQuery.tabletLandscapeUp} {
      padding-bottom: 8rem;
    }
  }

  .image-container {
    img {
      display: block;
      margin: 2rem auto 0;
      width: 72%;

      ${mediaQuery.custom(700)} {
        margin: unset;
        position: absolute;
        bottom: 0;
        left: 50%;
        max-width: 25rem;
        transform: translateX(-50%);
      }

      ${mediaQuery.tabletLandscapeUp} {
        max-width: 28rem;
      }
    }
  }
`;
