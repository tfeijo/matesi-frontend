import styled, { css } from 'styled-components';

type ContainerProps = {
  isDisabled: boolean;
  hasError: boolean;
};

export const Container = styled.div<ContainerProps>`
  ${({ isDisabled, hasError }) => css`
    .checkbox {
      display: inline-flex;
      align-items: center;
      opacity: ${isDisabled ? '0.5' : '1'};
      cursor: pointer;

      &__label {
        color: var(--color-label);
        margin-left: 0.8rem;
      }

      &__control {
        display: inline-flex;
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 0.4rem;
        border: 0.1rem solid var(--color-line);
        background-color: var(--color-input-background);
        transform: translateY(-0.05rem);
        transition: background-color 0.15s, border-color 0.15s;

        svg {
          opacity: 0;
        }
      }

      ${hasError &&
      /* eslint-disable */ css`
      /* eslint-enable */
        &__control {
          border-color: var(--color-danger-default);
        }

        &__label {
          color: var(--color-danger-default);
        }
      `}

      &:hover .checkbox__control {
        background-color: var(--color-line);
      }

      &:hover input:checked + .checkbox__control {
        background-color: var(--color-primary-dark);
        border-color: var(--color-primary-dark);
      }

      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;

        &:focus + .checkbox__control {
          box-shadow: 0 0 0 0.3rem var(--color-primary-light);
        }

        &:checked + .checkbox__control {
          background-color: var(--color-primary-default);
          border-color: var(--color-primary-default);

          svg {
            color: var(--color-off-white);
            opacity: 1;
          }
        }
      }
    }

    > span {
      display: block;
      color: var(--color-danger-default);
    }
  `}
`;
