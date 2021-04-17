import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3.2rem;
  position: relative;

  width: 100%;

  > button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &.control-right {
      right: 0;
    }
  }
`;

type SlideProps = {
  numberOfSlides: number;
};

export const Slide = styled.div<SlideProps>`
  width: ${({ numberOfSlides }) =>
    numberOfSlides < 5 ? 'calc(100% - 12rem)' : '100%'};
  margin: 0 auto;

  .slide-items-container {
    padding-top: 0.3rem;
    display: flex;
    overflow-x: auto;

    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    --webkit-overflow-scrolling: touch;

    scrollbar-width: none;
    --ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .slide-item {
    flex: none;
    width: ${({ numberOfSlides }) => `calc(100% / ${numberOfSlides})`};
    scroll-snap-align: start;

    display: flex;
    justify-content: center;
  }
`;

export const FlagCheckbox = styled.label`
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  img {
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
    & ~ img {
      filter: saturate(1);
      box-shadow: var(--elevation-large),
        0 0 0 0.3rem var(--color-primary-default);
    }

    & ~ p {
      color: var(--color-primary-default);
    }
  }
`;
