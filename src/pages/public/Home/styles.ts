import { darken, lighten } from 'polished';
import styled, { css, keyframes } from 'styled-components';
import { container, titleUnderlined } from '../../../styles/shared';
import watermarkHeroHome from '../../../assets/watermark-hero-home.svg';
import quotationMarkLeft from '../../../assets/quotation-mark-left.svg';
import quotationMarkRight from '../../../assets/quotation-mark-right.svg';

export const Hero = styled.section`
  ${({ theme }) => css`
    ${container}
    margin-top: 3.2rem;
    margin-bottom: 8rem;

    h1 {
      font: var(--font-display-2);
      color: ${darken(0.15, theme.colors.gray_base)};
    }

    p {
      margin: 2rem 0 4rem;
    }

    img {
      display: none;
    }

    @media screen and (min-width: ${theme.breakpoints.md}) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 5.6rem;
      margin-bottom: 19rem;

      .headings {
        max-width: 40rem;
      }

      img {
        display: unset;
        width: min(400px, 100%);
        z-index: 1;
      }

      span {
        position: relative;

        &::before {
          content: '';
          position: absolute;
          top: -10%;
          right: 0;
          bottom: 0;
          left: -20%;
          z-index: -99999;
          background-image: url(${watermarkHeroHome});
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
        }
      }
    }

    @media screen and (min-width: ${theme.breakpoints.lg}) {
      margin-top: 7.2rem;

      .headings {
        max-width: 56rem;
      }

      img {
        width: min(550px, 100%);
      }
    }

    @media screen and (min-width: ${theme.breakpoints.xl}) {
      span::before {
        top: 0;
        right: -5%;
      }
    }
  `}
`;

export const Advantages = styled.section`
  ${container}
  margin-bottom: 8rem;

  h2 {
    ${titleUnderlined}

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      margin-bottom: 6.4rem;
    }
  }

  > div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      flex-wrap: nowrap;
      justify-content: space-between;
    }
  }

  .card {
    max-width: 30rem;
    text-align: center;

    &:not(:last-of-type) {
      margin-bottom: 7.2rem;

      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        margin-bottom: 0;
      }
    }

    h3 {
      font: var(--font-subheading-3);
      color: ${({ theme }) => darken(0.15, theme.colors.gray_base)};
      margin: 2rem 0 1.2rem;
    }
  }
`;

export const Courses = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.redish_gray};

    .container {
      ${container}
      width: min(100%, 752px);
      padding-top: 4.8rem;
      padding-bottom: 4.8rem;
    }

    h2 {
      ${titleUnderlined}
    }

    .card {
      display: flex;
      flex-direction: column;
      background-color: ${theme.colors.white};
      padding: 8rem 1.6rem 1.4rem;
      border-radius: 1rem;
      box-shadow: ${theme.shadow.center};
      text-align: center;
      position: relative;
      margin-top: 10rem;

      img {
        width: 150px;
        padding: 0.8rem;
        box-shadow: ${theme.shadow.center};
        background-color: ${theme.colors.white};
        border-radius: 1.6rem;
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50%, -50%);
      }

      h3 {
        font: var(--font-subheading-1);
        color: ${darken(0.15, theme.colors.gray_base)};
      }

      span {
        font: var(--font-paragraph-small);
        color: ${theme.colors.red_base};
        display: inline-block;
        padding: 0.2rem 0.8rem;
        border: 1px solid ${lighten(0.55, theme.colors.red_base)};
        border-radius: 6px;

        margin: 1.2rem 0;
      }

      a {
        color: ${theme.colors.red_base};
        text-transform: uppercase;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
        transition: color 0.2s;

        svg {
          margin-left: 0.8rem;
          margin-bottom: 0.5rem;
          transition: transform 0.2s;
        }

        &:hover {
          color: ${lighten(0.1, theme.colors.red_base)};

          svg {
            transform: translateX(4px);
          }
        }
      }
    }

    @media (min-width: ${theme.breakpoints.sm}) {
      .card {
        text-align: left;
        padding: 2.8rem;
        margin-top: 0;

        & + .card {
          margin-top: 4rem;
        }

        &:nth-child(odd) {
          margin-left: 8rem;
          padding-left: 10rem;

          img {
            left: 0;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }

        &:nth-child(even) {
          margin-right: 8rem;
          padding-right: 10rem;

          img {
            top: 50%;
            right: 0;
            left: unset;
            transform: translate(50%, -50%);
          }
        }

        .title-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        span {
          margin: 0;
        }

        a {
          display: inline-flex;
          margin-top: 2.4rem;
        }
      }
    }

    @media (min-width: ${theme.breakpoints.md})  {
      .card {
        text-align: left;
        padding: 2.8rem;
        margin-top: 0;

        & + .card {
          margin-top: 6.4rem;
        }

        img {
          width: 20rem;
        }

        &:nth-child(odd) {
          margin-left: 10rem;
          padding-left: 14rem;
        }

        &:nth-child(even) {
          margin-right: 10rem;
          padding-right: 14rem;

        }
     }
  `}
`;

export const Testimonials = styled.section`
  ${container}
  width: min(100%,752px);
  margin-top: 8rem;
  margin-bottom: 8rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 12rem;
    margin-bottom: 12rem;
  }

  h2 {
    ${titleUnderlined}
  }

  .carousel-item {
    min-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      flex-direction: row;
      align-items: flex-start;
    }

    .images {
      position: relative;
      display: inline-block;
    }

    .photo,
    .language {
      border: 3px solid ${({ theme }) => theme.colors.white};
      box-shadow: ${({ theme }) => theme.shadow.center};
      object-fit: cover;
    }

    .photo {
      width: 10rem;
      height: 10rem;
      border-radius: 1rem;
      display: block;

      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        width: 15rem;
        height: 15rem;
      }
    }

    .language {
      width: 4.2rem;
      height: 4.2rem;
      border-radius: 50%;

      position: absolute;
      bottom: 0;
      right: 0;
      transform: translate(30%, 30%);
    }

    .person {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 3.2rem;

      p {
        font: var(--font-subheading-3);
        font-size: 1.6rem;
        margin-top: 2rem;
        color: ${({ theme }) => darken(0.15, theme.colors.gray_base)};

        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
          font-size: 1.8rem;
        }
      }
    }

    p.phrase {
      margin: 0 auto;
      color: ${({ theme }) => darken(0.15, theme.colors.gray_base)};
      text-align: justify;
      max-width: 318px;
      padding: 0 12%;
      position: relative;

      &:before {
        position: absolute;
        content: url(${quotationMarkLeft});
        top: -10%;
        left: 0;
      }

      &:after {
        position: absolute;
        content: url(${quotationMarkRight});
        bottom: -10%;
        right: 0;
      }

      @media (min-width: 400px) {
        padding: 0;

        &:before {
          left: -32px;
        }

        &:after {
          right: -32px;
        }
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-top: 3.2rem;
      }
    }
  }
`;

const fadeAboutText = keyframes`
  from {
    opacity: 0;
    transform: translateY(50%)
  }

  to {
    opacity: 1;
    transform: translateY(0)
  }
`;

export const Teachers = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.redish_gray};
    padding: 12rem 0;

    .container {
      ${container}
    }

    h2 {
      ${titleUnderlined}
      margin-bottom: 4rem;
    }

    .teacher-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: calc(1.6rem + 2.8rem) 1.6rem;
      justify-items: center;
      margin-bottom: 2.8rem;

      @media (min-width: ${theme.breakpoints.sm}) {
        grid-template-columns: repeat(2, 1fr);
      }


      @media (min-width: ${theme.breakpoints.lg}) {
        grid-template-columns: repeat(4, 1fr);
      }

    }

    .teacher-item {
      position: relative;
      font-size: 0px;
      width: min(100%, 34.2rem);

      img {
        width: min(100%, 34.2rem);
        height: 27.4rem;
        padding: 0.6rem;
        border-radius: 0.6rem;
        background-color: ${theme.colors.white};
        box-shadow: ${theme.shadow.center};
        object-fit: cover;
      }

      .teacher-about {
        position: absolute;
        bottom: 0;
        left: 32px;
        width: calc(100% - 64px);
        height: calc(100% + 2.8rem);
        max-height: calc(5.6rem);
        transform: translate(0, 2.8rem);
        border-radius: 1rem;
        box-shadow: ${theme.shadow.down};
        background-color: ${theme.colors.white};
        padding: 1.6rem 2.4rem;

        transition: transform 0.35s, width 0.35s, max-height 0.35s;

        display: flex;
        flex-direction: column;
        align-items: center;

        strong {
          font: var(--font-paragraph-bold);
          color: ${theme.colors.red_base};
        }

        p {
          font: var(--font-paragraph);
          color: ${darken(0.1, theme.colors.gray_base)};
          margin-top: 2rem;
          display: none;

          opacity: 0;
          transform: translateY(-50%)

          transition: opacity 2s, transform 0.8s;
          animation-name: ${fadeAboutText};
          animation-delay: .2s;
          animation-duration: .3s;
          animation-fill-mode: forwards;
        }
      }

      &:hover,
      &:active {
        .teacher-about {
          transform: translate(-32px, 2.8rem);
          width: 100%;
          max-height: calc(100% + 5.6rem);
        }

        p {
          display: initial;
        }
      }
    }
  `}
`;

export const Partners = styled.section`
  ${container}
  padding-top: 8rem;
  padding-bottom: 8rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 12rem;
    padding-bottom: 12rem;
  }

  h2 {
    ${titleUnderlined}
    margin-bottom: 5.4rem;
  }

  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3.2rem;
    justify-items: center;
    align-items: center;
    opacity: 0.4;

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      grid-template-columns: repeat(4, 1fr);
    }

    img {
      width: 100%;
      max-height: 8rem;
      object-fit: contain;
    }
  }
`;

export const Contact = styled.section`
  background-color: ${({ theme }) => theme.colors.redish_gray};

  .container {
    ${container}
    max-width: 40rem;
    padding-top: 8rem;
    padding-bottom: 8rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      padding-top: 12rem;
      padding-bottom: 12rem;
    }

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin: 4rem 0;

      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        margin: 6.4rem 0;
      }

      button {
        border-radius: 1.6rem;
        padding: 1rem;

        svg {
          width: 52px;
          height: 52px;
        }
      }
    }
  }

  h2 {
    ${titleUnderlined}
    margin-bottom: 5.4rem;
  }

  p {
    color: ${({ theme }) => darken(0.15, theme.colors.gray_base)};
    font: var(--font-paragraph-big);
    text-align: center;

    a {
      color: ${({ theme }) => theme.colors.red_base};
      text-decoration: none;
    }
  }
`;
