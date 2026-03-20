import styled from 'styled-components';

export const Label = styled.label`
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  svg {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    border: 0.3rem solid var(--color-off-white);
    background: var(--color-off-white);
    box-shadow: var(--elevation-large);
    filter: saturate(0);
    transition: filter 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  p {
    margin-top: 0.8rem;
    color: var(--color-body);
    transition: color 0.15s ease-in-out;
  }

  input {
    display: none;
  }

  input:checked {
    & ~ svg {
      filter: saturate(1);
      box-shadow: var(--elevation-large),
        0 0 0 0.3rem var(--color-primary-default);
    }

    & ~ p {
      color: var(--color-primary-default);
    }
  }
`;
