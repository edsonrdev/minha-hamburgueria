import { styled } from "styled-components";

export const Container = styled.section`
  flex: 1 1 28rem;
  border: 0.2rem solid var(--gray-color-2);
  border-radius: 0.4rem;
  transition: border-color 0.3s ease-in-out;
  overflow: hidden;

  &:hover {
    border-color: var(--brand-color-1);
  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;

    background: var(--gray-color-1);
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
      letter-spacing: 0.1rem;
      background: var(--brand-color-1);
      border-radius: 0.5rem;
      border: 0;
      cursor: pointer;
    }
  }
`;
