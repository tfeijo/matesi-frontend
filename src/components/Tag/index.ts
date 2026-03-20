import styled, { css } from 'styled-components';

interface Props {
  color: 'primary' | 'secondary' | 'danger';
}

export default styled.span<Props>`
  display: flex;
  align-items: center;

  font: var(--font-body-small);
  display: inline-block;
  padding: 0.2rem 0.8rem;
  border-radius: var(--radius-medium);

  ${({ color }) => css`
    color: var(--color-${color}-default);
    border: 0.1rem solid var(--color-${color}-lighter);
  `}
`;
