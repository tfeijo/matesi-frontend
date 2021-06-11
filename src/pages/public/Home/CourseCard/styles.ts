import styled, { css } from 'styled-components';
import Tag from '../../../../components/Tag';
import mediaQuery from '../../../../utils/mediaQuery';

type ContainerProps = {
  disabled: boolean;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: var(--color-off-white);
  padding: 9rem 1.4rem 1.6rem;
  border-radius: var(--radius-x-large);
  box-shadow: var(--elevation-medium);
  position: relative;

  ${mediaQuery.phoneOnly} {
    &:first-of-type {
      margin-top: calc((11.5rem / 2) + 6.4rem);
    }

    & + & {
      margin-top: calc((11.5rem / 2) + 4rem);
    }
  }

  > svg {
    width: 15rem;
    height: auto;
    padding: 0.8rem;
    background-color: var(--color-off-white);
    border-radius: var(--radius-x-large);
    box-shadow: var(--elevation-large);

    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);

    ${mediaQuery.tabletPortraitUp} {
      width: 19.6rem;
    }
  }

  ${p =>
    p.disabled &&
    css`
      > svg {
        filter: saturate(0);
      }
    `}

  ${mediaQuery.tabletPortraitUp} {
    display: block;
    text-align: left;
    padding-top: 3.6rem;
    padding-bottom: 3.6rem;

    margin-top: 6.4rem;

    &:nth-child(odd) {
      margin-left: 9.6rem;
      padding-left: calc(9.6rem + 4rem);
      padding-right: 4rem;

      > svg {
        left: 0;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }

    &:nth-child(even) {
      margin-right: 9.6rem;
      padding-right: calc(9.6rem + 4rem);
      padding-left: 4rem;

      > svg {
        left: unset;
        top: 50%;
        right: 0;
        transform: translate(50%, -50%);
      }
    }
  }

  h3 {
    font: var(--font-heading-medium);
  }

  .tag-container {
    margin: 1.2rem 0;
    display: inline-block;
    position: relative;

    ${Tag} {
      display: inline-flex;
      align-items: center;

      svg {
        margin-left: 0.8rem;
        color: #ebeb21;
      }
    }

    &:hover .disabled-motivation {
      display: initial;
    }

    .disabled-motivation {
      position: absolute;
      bottom: calc(100% + 0.8rem);
      right: 50%;
      transform: translateX(50%);

      width: 25rem;
      background: #ffffe3;
      border: 0.1rem solid #ebeb21;
      color: #424208;
      border-radius: var(--radius-medium);
      box-shadow: var(--elevation-medium);
      padding: 0.8rem;
      font: var(--font-body-small);
      display: none;
    }
  }

  a {
    margin-top: 3.2rem;
    justify-content: center;

    ${mediaQuery.tabletPortraitUp} {
      justify-content: initial;
      margin-top: 2rem;
    }
  }

  ${mediaQuery.tabletPortraitUp} {
    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.2rem;

      .tag-container {
        margin: unset;

        .disabled-motivation {
          right: 0;
          transform: unset;
        }
      }
    }
  }
`;
