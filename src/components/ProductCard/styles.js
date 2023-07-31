import { styled } from "styled-components";

export const Container = styled.section`
  border: 0.2rem solid var(--gray-color-2);
  border-radius: 0.4rem;
  transition: border-color 0.25s ease-in-out;

  &:hover {
    border-color: var(--brand-color-1);

    button {
      background: var(--brand-color-1);
    }
  }

  @media (max-width: 120rem) {
    flex-basis: calc((100% - 4.8rem) / 4);
  }

  @media (max-width: 64rem) {
    flex-basis: calc((100% - 3.2rem) / 3);
  }

  @media (max-width: 45rem) {
    flex-basis: calc((100% - 1.6rem) / 2);
  }

  @media (max-width: 32.5rem) {
    flex: 1 0 27rem;
  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;

    background: url("https://i.imgur.com/Vng6VzV.png"), var(--gray-color-1);

    height: 17rem;
  }

  main {
    padding: 2rem 1.6rem;

    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    h2 {
      font-size: 1.6rem;
      font-weight: 900;
    }

    .category {
      color: var(--gray-color-3);
      font-size: 1.3rem;
      font-weight: 500;
    }

    .price {
      color: var(--brand-color-1);
      font-size: 1.6rem;
      font-weight: 700;
    }

    button {
      padding: 1rem;
      color: var(--white-color);
      font-weight: 500;
      letter-spacing: 0.05rem;
      border-radius: 0.5rem;
      background: var(--gray-color-3);
      border: 0;
      cursor: pointer;
      transition: background 0.25s ease-in-out;

      &:hover {
        background: var(--brand-color-1-hover);
      }
    }
  }
`;
