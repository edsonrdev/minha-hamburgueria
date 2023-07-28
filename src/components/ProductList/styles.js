import { styled } from "styled-components";

export const Container = styled.ul`
  margin-top: 2rem;

  .container {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    gap: 1.6rem;

    div {
      flex: 1;
      border: 1px solid;
    }
  }
`;
