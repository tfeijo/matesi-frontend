import ReactModal from 'react-modal';
import styled from 'styled-components';

export const StyledReactModal = styled(ReactModal).attrs({
  overlayClassName: 'ReactModal__Overlay',
})`
  width: 100%;
  margin: 0 1.6rem;
  max-width: 44rem;

  background: var(--color-background);
  padding: 3.2rem 2.4rem;
  position: relative;
  border-radius: var(--radius-x-large);

  h3 {
    text-align: center;
    padding: 0 2.4rem;
    font: var(--font-heading-x-small);
  }

  div {
    margin-top: 3.2rem;
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    gap: 1.6rem;
  }

  .close-modal {
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;
  }
`;
