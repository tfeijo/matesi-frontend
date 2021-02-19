import styled from 'styled-components';

import { container } from '../../../styles/shared';
import waveTop from '../../../assets/wave-top.svg';
import waveBottom from '../../../assets/wave-bottom.svg';

export const Container = styled.div`
  ${container}
  height: 100vh;
  padding-top: 7.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
    padding-top: 9.6rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    background-image: url(${waveTop});
    background-repeat: no-repeat;
    background-position: top;
    background-size: contain;
    width: 100%;
    height: 100%;
    z-index: -999999;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      width: 70%;
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    background-image: url(${waveBottom});
    background-repeat: no-repeat;
    background-position: bottom left;
    background-size: contain;
    width: 80%;
    height: 100%;
    z-index: -999999;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      width: 35%;
    }
  }
`;

export const Content = styled.div`
  h1 {
    font: var(--font-display-1);
    color: ${({ theme }) => theme.colors.red_base};
    margin-top: 5rem;
  }

  h2 {
    font: var(--font-subheading-2);
    font-size: 2rem;
    font-size: clamp(2rem, 5vw, 2.4rem);
    margin: 3.2rem 0 2rem;
    max-width: 56rem;
  }

  p {
    font: var(--font-paragraph-big);
    max-width: 56rem;
  }
`;

export const Logo = styled.img`
  width: 25.6rem;
`;

export const Illustration = styled.div`
  position: relative;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: initial;
  }

  img {
    position: absolute;
    bottom: 2rem;
    right: 0;
    width: clamp(150px, 70%, 350px);
    z-index: -99998;

    @media screen and (max-height: 660px) {
      display: none;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      width: clamp(300px, 100%, 500px);
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      width: clamp(400px, 20vw, 600px);
      bottom: unset;
      top: 24rem;
    }
  }
`;
