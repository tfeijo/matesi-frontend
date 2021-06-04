import styled, { css } from 'styled-components';
import { container } from '../../../styles/shared';
import mediaQuery from '../../../utils/mediaQuery';

/* TYPES */
type MemberProps = {
  isSelected?: boolean;
};

/* STYLES */
export const Container = styled.main`
  padding-top: 4.8rem;

  ${mediaQuery.tabletPortraitUp} {
    padding-top: 8rem;
  }

  .hide {
    display: none;
  }
`;

export const Hero = styled.section`
  ${container}
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .message {
    max-width: 46.6rem;
    margin-bottom: 6.4rem;

    h1 {
      font: var(--font-display-medium-heavy);
      color: var(--color-title-active);
    }

    p {
      margin: 2rem 0 1.6rem;
      font: var(--font-body-large);

      strong {
        font: var(--font-body-large-heavy);
        color: var(--color-primary-default);
      }
    }

    small {
      font: var(--font-body-small);
      color: var(--color-placeholder);
    }
  }

  ${mediaQuery.custom(768)} {
    flex-direction: row;

    .message {
      max-width: 30rem;
      margin-bottom: unset;
      margin-right: 1.6rem;

      p {
        margin: 3.2rem 0 1.6rem;
      }
    }
  }

  ${mediaQuery.custom(800)} {
    .message {
      max-width: 37rem;
      margin: 6.4rem 1.6rem 0 0;
    }
  }

  ${mediaQuery.tabletLandscapeUp} {
    .message {
      max-width: 46.6rem;
    }
  }
`;

export const Team = styled.div`
  position: relative;
  min-height: 44rem;

  ${mediaQuery.custom(480)} {
    width: 44rem;
    margin: 0 auto;
  }

  ${mediaQuery.custom(768)} {
    margin: unset;
  }

  ${mediaQuery.custom(800)} {
    width: 48rem;
    height: 48rem;
  }

  &::before {
    position: absolute;
    content: '';

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30rem;
    height: 30rem;
    border: 0.2rem solid var(--color-secondary-light);
    border-radius: 50%;
    opacity: 0.5;

    ${mediaQuery.tabletPortraitUp} {
      width: 33.5rem;
      height: 33.5rem;
    }
  }
`;

const heading_x_small = 'var(--font-heading-x-small)';
const body_normal_heavy = 'var(--font-body-normal-heavy)';

export const Member = styled.div<MemberProps>`
  ${({ isSelected }) => css`
    --member-transition-values: 500ms ease;

    position: absolute;
    transition: transform var(--member-transition-values);

    &:nth-child(1) {
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    &:nth-child(2) {
      left: 5%;
      transform: ${isSelected ? 'translateX(-10%)' : 'initial'};
      bottom: 5%;

      ${mediaQuery.tabletPortraitUp} {
        left: 12%;
        transform: ${isSelected ? 'translateX(-15%)' : 'initial'};
        bottom: 10%;
      }

      ${mediaQuery.phoneOnly} {
        .legend {
          right: unset;
          left: 10%;
          max-width: 16rem;
        }
      }
    }

    &:nth-child(3) {
      right: 5%;
      transform: ${isSelected ? 'translateX(10%)' : 'initial'};
      bottom: 5%;

      ${mediaQuery.tabletPortraitUp} {
        right: 12%;
        transform: ${isSelected ? 'translateX(15%)' : 'initial'};
        bottom: 10%;
      }
    }

    img {
      display: block;
      max-width: ${isSelected ? 'min(40vw, 18rem)' : 'min(28vw, 12rem)'};
      border-radius: ${`var(--radius-${isSelected ? 'x-large' : 'medium'})`};
      transition: max-width var(--member-transition-values);

      ${mediaQuery.tabletPortraitUp} {
        max-width: ${isSelected ? '16rem' : '10rem'};
      }

      ${mediaQuery.custom(768)} {
        flex-direction: row;

        .message {
          max-width: 27.2rem;
          margin-bottom: 6.4rem;
        }
      }
    }

    .legend {
      background-color: var(--color-off-white);
      border-radius: ${`var(--radius-${isSelected ? 'x-large' : 'medium'})`};
      box-shadow: var(--elevation-large);
      padding: 0.8rem 1.6rem;
      text-align: center;
      z-index: 1;

      position: absolute;
      right: 1.2rem;
      bottom: -1.6rem;
      transform: ${isSelected ? 'translate(-0.8rem, 1.6rem)' : 'initial'};

      width: max-content;
      transition: var(--member-transition-values);
      transition-property: transform, border-radius;

      ${mediaQuery.tabletPortraitUp} {
        right: 2.4rem;
        bottom: -1.6rem;
        transform: ${isSelected ? 'translate(-0.8rem, 1.6rem)' : 'initial'};
      }

      p {
        font: ${isSelected ? heading_x_small : body_normal_heavy};
        color: var(--color-title-active);
        transition: font var(--member-transition-values);
      }

      .animate-job {
        --job-transition: 1s cubic-bezier(0.05, 0.53, 0.52, 0.97);
        --job-transition-slower: 1.5s cubic-bezier(0.05, 0.53, 0.52, 0.97);
        --job-delay: 300ms;

        --job-showing: max-width var(--job-transition-slower),
          max-height var(--job-transition) var(--job-delay);

        --job-hiding: max-width var(--job-transition) var(--job-delay),
          max-height var(--job-transition);

        max-width: ${isSelected ? '40rem' : '0'};
        max-height: ${isSelected ? '5rem' : '0'};
        overflow: hidden;
        transition: ${isSelected ? 'var(--job-showing)' : 'var(--job-hiding)'};

        span {
          display: block;
        }
      }
    }

    button.trigger {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: transparent;
      border: 0;
      color: transparent;
    }
  `}
`;
