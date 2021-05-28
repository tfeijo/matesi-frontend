import styled, { css } from 'styled-components';

export const Container = styled.div<{ hasError: boolean }>`
  & + div {
    margin-top: 1rem;
  }

  label {
    display: block;
    margin-bottom: 6px;
    color: var(--color-label);
  }

  input {
    width: 100%;
    border-radius: var(--radius-medium);
    padding: 0.9rem 1.6rem;
    border: 1px solid var(--color-line);
    background-color: var(--color-input-background);
    transition: border-color 0.15s ease-in-out,
      background-color 0.15s ease-in-out;

    &:focus:not(:read-only) {
      box-shadow: 0 0 0 0.3rem var(--color-secondary-lighter);
      border-color: var(--color-secondary-default);
    }

    &:active:not(:disabled, :read-only),
    &:hover:not(:disabled, :read-only) {
      border-color: var(--color-secondary-default);
    }

    &:disabled {
      opacity: 0.6;
    }

    &::placeholder {
      color: var(--color-placeholder);
    }
  }

  .react-datepicker {
    font-size: 1em;

    &-wrapper {
      width: 100%;
      margin-bottom: ${p => (p.hasError ? '0.8rem' : '2.9rem')};
    }

    &__close-icon::after {
      background: var(--color-secondary-default);
    }

    &__header {
      padding-top: 0.8em;

      &__dropdown {
        padding: 0.8rem;

        select {
          padding: 0.4rem;
          font-size: 1.6rem;
          background: var(--color-input-background);
          border-color: var(--color-placeholder);
          border-radius: var(--radius-small);
        }
      }
    }

    &__month {
      margin: 0.4em 1em;
    }

    &__day-name,
    &__day {
      width: 1.9em;
      line-height: 1.9em;
      margin: 0.166em;
    }

    &__current-month {
      font-size: 1em;
    }

    &__navigation {
      top: 1em;
      line-height: 1.7em;
      border: 0.45em solid transparent;
    }

    &__navigation--previous {
      border-right-color: #ccc;
      left: 1em;
    }

    &__navigation--next {
      border-left-color: #ccc;
      right: 1em;
    }
  }

  > span {
    color: var(--color-placeholder);
    font: var(--font-body-small);
    display: inline-block;
  }

  /* STUṔID AND RIDICULOUS ESLINT AND PRETTIER IS COMPLETELY BUGGY AND LOST */
  /* IT'S BEING MESS AND IT IS SH**ING EVERYTHING */
  ${props =>
    /* eslint-disable prettier/prettier */
    props.hasError &&
    css`
        span {
          color: var(--color-danger-default);
        }

        input {
          background-color: var(--color-danger-lightest);
          border-color: var(--color-danger-default);
        }
      `}
`;
