import styled, { css } from 'styled-components';

type Props = {
  hasError?: boolean;
  isDisabled?: boolean;
};

export const Container = styled.div<Props>`
  ${({ hasError, isDisabled }) => css`
    & + & {
      margin-top: 1.6rem;
    }

    opacity: ${isDisabled ? '0.6' : '1'};

    label,
    > span {
      display: inline-block;
    }

    label {
      margin-bottom: 0.8rem;
      color: var(--color-label);
    }

    > span {
      color: var(--color-placeholder);
      font: var(--font-body-small);
    }

    input,
    textarea {
      width: 100%;
      outline: 0;
      border: 1px solid var(--color-line);
      background-color: var(--color-input-background);
      border-radius: var(--radius-medium);
      vertical-align: top;
      padding: 0.9rem 1.6rem;
      resize: vertical;
      margin-bottom: ${hasError ? '0.8rem' : '2.9rem'};
      transition: border-color 0.15s ease-in-out,
        background-color 0.15s ease-in-out;

      &::placeholder {
        color: var(--color-placeholder);
      }

      &:focus:not(:read-only) {
        box-shadow: 0 0 0 0.3rem var(--color-secondary-lighter);
        border-color: var(--color-secondary-default);
      }

      &:active:not(:disabled, :read-only),
      &:hover:not(:disabled, :read-only) {
        border-color: var(--color-secondary-default);
      }
    }

    ${hasError &&
    css`
      > span {
        color: var(--color-danger-default);
      }

      input,
      textarea {
        background-color: var(--color-danger-lightest);
        border-color: var(--color-danger-default);
      }
    `}
  `}
`;
