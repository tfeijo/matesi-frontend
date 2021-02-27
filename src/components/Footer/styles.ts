import { darken, lighten } from 'polished';
import styled from 'styled-components';
import { container } from '../../styles/shared';

export const Container = styled.footer`
  background: ${({ theme }) => darken(0.15, theme.colors.red_base)};
`;

export const ContentContainer = styled.div`
  ${container}
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

export const TopContent = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    justify-content: space-between;
    gap: 9.6rem;
  }

  .cta-content {
    img {
      width: 20rem;
    }

    > div {
      display: flex;
      align-items: center;
      margin-top: 3.2rem;
      margin-bottom: 3.2rem;

      button + button {
        margin-left: 1rem;
      }
    }
  }

  .sitemap {
    margin-top: 4.8rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 4rem;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      margin-top: 0;
      grid-template-columns: repeat(3, min-content);
      gap: 8rem;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      gap: 9.6rem;
    }

    h3 {
      font: var(--font-paragraph-bold);
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.white};
    }

    ul li {
      list-style: none;
      padding: 0.4rem 0;

      a {
        width: 100%;
        display: inline-block;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white};
        transition: opacity 0.2s;

        &:hover {
          opacity: 0.5;
        }

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
          width: unset;
          padding: initial;
        }
      }
    }
  }
`;

export const Divider = styled.hr`
  height: 2px;
  width: 100%;
  border: 0;
  background-color: ${({ theme }) => darken(0.2, theme.colors.red_base)};
`;

export const BottomContent = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    justify-content: space-between;
  }

  p {
    color: ${({ theme }) => lighten(0.1, theme.colors.silver_base)};
    font: var(--font-paragraph-small);
    margin-bottom: 1.6rem;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      margin-bottom: 0;
    }
  }
`;
