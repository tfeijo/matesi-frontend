import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  position: relative;
`;

export const Content = styled.div`
  background: var(--color-off-white);
  border: 0.1rem solid var(--color-line);
  border-radius: var(--radius-medium);
  box-shadow: var(--elevation-large);
  padding: 0.4rem 0;

  position: absolute;
  top: calc(100% + 0.4rem);
  left: 0;
  width: 100%;
  min-width: max-content;
  z-index: 100;
`;

export const DropdownItem = styled.div`
  line-height: 0;

  > * {
    display: inline-flex;
    align-items: center;
    padding: 0.8rem 2.4rem;
    border: 0;
    width: 100%;
    font: var(--font-body-normal);
    color: var(--color-body);
    background: transparent;
    transition: background-color 0.15s ease-in-out;

    &:hover {
      background: var(--color-secondary-lighter);
    }
  }
`;
