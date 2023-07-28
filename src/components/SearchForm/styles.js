import { styled } from "styled-components";

export const Container = styled.form`
  width: 30rem;
  min-height: 5rem;
  padding: 0.5rem;
  gap: 0.75rem;

  display: flex;

  background: var(--white-color);
  border: 0.2rem solid var(--gray-color-2);
  border-radius: 1.3rem;

  input {
    flex: 1;
    border: 0;
    outline: 0;
    font-size: 1.5rem;
    padding: 0 0.4rem;
  }

  button {
    flex-basis: 4.5rem;
    background: var(--brand-color-1);
    border: 0;
    border-radius: 0.7rem;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: var(--white-color);
      font-size: 1.25rem;
    }
  }
`;
