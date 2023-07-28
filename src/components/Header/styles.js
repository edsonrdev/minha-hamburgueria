import { styled } from "styled-components";

export const Container = styled.header`
  background: var(--gray-color-1);

  h1 {
    color: var(--gray-color-5);
    font-weight: 900;
    font-size: 2.5rem;
    letter-spacing: 0.05rem;

    span {
      color: var(--brand-color-2);
      font-weight: 500;
      letter-spacing: 0;
    }
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 7.5rem;
  }

  .search-section {
    display: flex;
    gap: 2.6rem;
    align-items: center;
  }
`;
