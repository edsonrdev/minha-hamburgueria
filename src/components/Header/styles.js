import { styled } from "styled-components";

export const Container = styled.header`
  background: var(--gray-color-1);

  h1 {
    color: var(--gray-color-5);
    font-weight: 900;
    font-size: 2.5rem;

    span {
      color: var(--brand-color-2);
      font-weight: 600;
      letter-spacing: 0;
      font-size: 2rem;
    }
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 8rem;
    /* border: 1px solid red; */
    position: relative;

    @media (max-width: 32.5rem) {
      padding: 2rem 1.6rem;
      gap: 1.6rem;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
    }
  }

  .search-section {
    display: flex;
    gap: 2.6rem;
    align-items: center;

    @media (max-width: 32.5rem) {
      flex: 1;
      width: 100%;
      justify-content: space-between;
    }
  }
`;
