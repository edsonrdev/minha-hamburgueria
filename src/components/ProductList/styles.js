import { styled } from "styled-components";

export const Container = styled.ul`
  margin-top: 2rem;

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1.6rem;
    padding-bottom: 1.2rem;

    @media (max-width: 32.5rem) {
      flex-wrap: nowrap;
      overflow-x: auto;
    }

    &:first-of-type {
      padding: 0 1.6rem;
    }

    &::-webkit-scrollbar {
      height: 1.4rem;
    }

    &::-webkit-scrollbar-track {
      background-color: var(--gray-color-2);
      border-radius: 4rem;
    }

    &::-webkit-scrollbar-thumb {
      border: 0.35rem solid var(--gray-color-2);
      background-color: var(--brand-color-1);
      border-radius: 4rem;

      box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
      border-radius: 100px;
    }

    h2.search-results-title {
      font-size: 2rem;
      margin-bottom: 1.8rem;
      font-weight: 400;

      span {
        font-weight: 700;
        color: var(--brand-color-2);
      }
    }
  }
`;
