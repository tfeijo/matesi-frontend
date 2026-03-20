import ReactModal from 'react-modal';
import styled from 'styled-components';

export const StyledReactModal = styled(ReactModal).attrs({
  overlayClassName: 'ReactModal__Overlay',
})`
  width: 100%;
  margin: 0 1.6rem;
  max-width: 56rem;

  .container {
    background: var(--color-background);
    padding: 3.2rem 2.4rem;
    position: relative;
    border-radius: var(--radius-x-large);
  }

  .margin-bottom {
    padding-top: 4.8rem;
  }

  .close-modal {
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;
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
