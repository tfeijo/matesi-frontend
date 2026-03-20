import styled from 'styled-components';
import { container } from '../../../../styles/shared';
import mediaQuery from '../../../../utils/mediaQuery';

export const Container = styled.div`
  --wave-height: 6rem;

  margin-top: 8rem;
  padding-top: var(--wave-height);
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--wave-height);
    background: var(--color-off-white);
    clip-path: polygon(0 0, 100% 75%, 100% 100%, 0% 100%);
  }

  ${mediaQuery.custom(700)} {
    margin-top: 2rem;

    --wave-height: 12rem;
  }

  ${mediaQuery.tabletLandscapeUp} {
    margin-top: 0;
    --wave-height: 18rem;
  }

  ${mediaQuery.desktopUp} {
    &:before {
      clip-path: polygon(0 0, 100% 100%, 100% 100%, 0% 100%);
    }
  }
`;

export const Section = styled.section`
  position: relative;

  &.desaturate:before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: white;
    z-index: 1;
    mix-blend-mode: saturation;
    pointer-events: none;
  }

  &:nth-child(2n + 1) {
    background: var(--color-off-white);
  }

  &:last-child {
    padding-bottom: 4.8rem;
  }

  > div {
    ${container}

    position: relative;

    .timeline {
      position: absolute;
      content: '';
      top: 0;
      bottom: 0;
      left: 2.4rem;
      width: 0.4rem;
      background: var(--color-primary-lighter);

      span {
        position: absolute;
        content: '';
        top: 50%;
        left: -0.6rem;
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        background: var(--color-primary-lighter);
        border: 0.1rem solid var(--color-primary-default);
      }
    }
  }

  .text-container {
    padding: 4.8rem 0 4.8rem 3.6rem;

    h2 {
      font: var(--font-heading-large);
      color: var(--color-primary-default);
      margin-bottom: 2rem;
    }
  }

  .image-container {
    display: none;
  }

  ${mediaQuery.custom(700)} {
    &:nth-child(2n + 2) {
      > div {
        flex-direction: row-reverse;

        .image-container {
          margin-left: unset;
          margin-right: 8rem;
        }
      }
    }

    > div {
      display: flex;
      align-items: center;

      .timeline {
        left: 50%;
        transform: translateX(-50%);
      }

      .image-container {
        margin-left: 8rem;
      }
    }

    .text-container,
    .image-container {
      flex: 1;
    }

    .text-container {
      max-width: 52.8rem;
      padding: 6.4rem 0 6.4rem;

      h2 {
        margin-bottom: 3.2rem;
      }
    }

    .image-container {
      min-width: 15rem;
      display: flex;
      justify-content: center;
      align-items: center;

      position: relative;

      &:before,
      &:after {
        position: absolute;
        content: '';
        border-radius: 50%;
        opacity: 0.35;
      }

      &:before {
        top: -10%;
        left: 25%;
        width: 12rem;
        height: 12rem;
        background: var(--color-primary-default);
      }

      &:after {
        top: 70%;
        left: 50%;
        width: 8rem;
        height: 8rem;
        background: var(--color-secondary-default);
      }

      img {
        max-width: 20rem;
        max-height: 20rem;
        margin: 0 3.2rem;
        border-radius: 50%;
        object-fit: cover;
        z-index: 1;
      }
    }

    &:nth-child(2n + 2) {
      .image-container {
        &:before {
          top: 40%;
          left: 20%;
        }

        &:after {
          top: 10%;
          left: 60%;
        }
      }
    }
  }
`;
