import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg)
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.6rem 0;

  svg {
    color: var(--color-secondary-default);
    animation: ${spin} 0.6s;
    animation-iteration-count: infinite;
  }
`;
