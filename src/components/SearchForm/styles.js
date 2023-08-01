import { styled } from "styled-components";

export const Container = styled.div`
  width: 30rem;
  min-height: 5rem;
  padding: 0.5rem;
  gap: 0.75rem;

  display: flex;

  background: var(--white-color);
  border: 0.2rem solid var(--gray-color-2);
  border-radius: 1.3rem;

  @media (max-width: 32.5rem) {
    flex: 1;
  }

  input {
    flex: 1;
    border: 0;
    outline: 0;
    font-size: 1.5rem;
    padding: 0 0.4rem;
  }

  button {
    flex-basis: 4.5rem;
    border: 0;
    border-radius: 0.7rem;
    background: var(--brand-color-1);

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &.search-done {
      background: var(--negative-color);
    }

    svg {
      color: var(--white-color);
      font-size: 1.25rem;
    }
  }
`;
