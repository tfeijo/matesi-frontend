import styled from 'styled-components';

export const ConfirmMessageContainer = styled.div`
  border: 0.1rem solid var(--color-line);
  border-radius: var(--radius-x-large);
  padding: 1.6rem;
  margin-top: 3.2rem;
  margin-bottom: 4.8rem;

  > h1 {
    font: var(--font-heading-x-small);

    span {
      color: var(--color-primary-default);
    }
  }

  > p {
    font: var(--font-body-large);
    color: var(--color-title-active);
    margin: 2.4rem 0;
  }

  form {
    input[type='date'] {
      resize: none;
    }

    .date-picker {
      margin-top: 1.6rem;
    }

    > button {
      margin-top: 4rem;
      display: flex;
      margin-left: auto;
    }
  }

  .course-selection {
    margin-bottom: 2.4rem;

    h2 {
      font: var(--font-body);
      color: var(--color-label);
      text-align: center;
    }

    span.courses-error {
      display: inline-block;
      margin-top: 1.6rem;
      font: var(--font-body-small);
      color: var(--color-danger-default);
    }
  }
`;
