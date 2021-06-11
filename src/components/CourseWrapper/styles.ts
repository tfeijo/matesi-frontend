import styled, { css } from 'styled-components';
import { container } from '../../styles/shared';
import { HeroProps } from './types';
import mediaQuery from '../../utils/mediaQuery';

export const Hero = styled.section<HeroProps>`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${p => p.backgroundUrl});
  background-position: center;
  background-size: cover;
  position: relative;
  margin-bottom: 5rem;

  &::after {
    position: absolute;
    content: '';
    background: var(--color-primary-default);
    bottom: 0;
    left: 0;
    right: 0;
    height: 10rem;
    transform: translateY(50%);
    clip-path: polygon(0 100%, 100% 0%, 100% 50%, 0 50%);
  }

  .container {
    width: min(100%, 78.4rem);
    padding: 6.4rem 1.6rem 8.8rem;
    text-align: center;
    margin: 0 auto;

    ${mediaQuery.tabletLandscapeUp} {
      padding: 9.6rem 1.6rem 11.4rem;
    }

    h1 {
      font: var(--font-display-medium-heavy);
      color: var(--color-off-white);
      margin-bottom: 6.4rem;
    }
  }
`;

const decorationStyle = css`
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  background: var(--color-off-white);
`;

export const Travels = styled.section`
  // 5rem -> Hero section wave height / 2
  margin-top: calc(9.6rem + 5rem);

  .travels {
    &__main {
      display: flex;
      flex-direction: column;
    }

    &__image {
      position: relative;
      font-size: 0;

      &::before {
        ${decorationStyle}
        clip-path: polygon(0 60%, 100% 20%, 100% 90%, 0% 100%);
      }

      img {
        margin-top: -1.6rem;
        clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
      }
    }

    &__message {
      ${container}
      margin-top: 3.2rem;
    }
  }

  ${mediaQuery.tabletPortraitUp} {
    margin-top: calc(18rem + 5rem);

    .travels {
      &__main {
        flex-direction: row;
        clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);

        > * {
          flex: 1;
        }

        position: relative;

        &::before {
          ${decorationStyle}
          clip-path: polygon(0 30%, 100% 0, 100% 90%, 0% 100%);
        }
      }

      &__image {
        position: relative;
        overflow: hidden;

        img {
          height: 100%;
          width: 100%;
          max-width: 67.7rem;
          display: block;
          margin-left: auto;
          object-fit: cover;
          margin-top: 3px;
          clip-path: unset;
          /* clip-path: polygon(0 0, 100% 0, 100% 95%, 0% 100%); */
        }
      }

      &__image {
        position: unset;

        &::before {
          display: none;
        }
      }

      &__message {
        width: unset;
        margin: 0;
        padding: 9.6rem 1.6rem 6.4rem 3.2rem;
        align-self: center;
      }
    }
  }

  ${mediaQuery.tabletLandscapeUp} {
    .travels {
      &__message {
        p {
          width: min(100%, 56rem);
          font: var(--font-body-large);
        }
      }
    }
  }
`;

export const About = styled.section`
  ${container}
  margin-top: 18rem;
  max-width: 56rem;

  display: flex;
  flex-direction: column-reverse;

  .summarized {
    background: var(--color-off-white);
    border-radius: var(--radius-x-large);
    box-shadow: var(--elevation-large);
    padding: 3.2rem;
    min-width: 28rem;

    p {
      display: grid;
      grid-template-columns: 1fr 1fr;
      font: var(--font-body-large-heavy);

      & + p {
        margin-top: 3.2rem;
      }

      span:last-child {
        justify-self: end;
        color: var(--color-primary-default);
      }
    }
  }

  .detailed {
    margin-top: 6.4rem;
    max-width: 56rem;

    p + p {
      margin-top: 3.2rem;
    }
  }

  ${mediaQuery.tabletLandscapeUp} {
    max-width: unset;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    .summarized {
      min-width: 35rem;
    }

    .detailed {
      margin-top: 0;
      margin-right: 3.2rem;
    }
  }
`;

export const Gallery = styled.section`
  ${container}
  margin-top: 18rem;
  margin-bottom: 18rem;

  > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    grid-template-rows: 25rem;
    gap: 1.6rem;
  }

  figure {
    position: relative;
    font-size: 0;

    img {
      padding: 0.6rem;
      background: var(--color-off-white);
      border-radius: var(--radius-x-large);
      box-shadow: var(--elevation-medium);
      width: 100%;
      height: 25rem;
      /* height: 100%; */
      object-fit: cover;
    }

    &::after {
      position: absolute;
      content: '';
      top: 0.6rem;
      right: 0.6rem;
      bottom: 0.6rem;
      left: 0.6rem;
      border-radius: var(--radius-large);
      opacity: 0;
      pointer-events: none;
      background: linear-gradient(
        var(--color-dark-transparent-20),
        var(--color-title-active)
      );

      transition: all 350ms;
    }

    .description {
      position: absolute;
      bottom: 1.6rem;
      left: 1.6rem;
      right: 1.6rem;
      transition: all 350ms;
      z-index: 1;
      transform: translateY(100%);
      opacity: 0;

      p {
        font: var(--font-body-normal);
        color: var(--color-off-white);
      }
    }

    &:hover {
      &::after {
        opacity: 1;
      }

      .description {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;
