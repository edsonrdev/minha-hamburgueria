import { styled } from "styled-components";

export const Container = styled.ul`
  min-width: 35rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    height: 27rem;

    /* background: red; */
    overflow: auto;

    &::-webkit-scrollbar {
      width: 1rem;
    }

    &::-webkit-scrollbar-track {
      background-color: var(--gray-color-2);
      border-radius: 4rem;
    }

    &::-webkit-scrollbar-thumb {
      border: 0.3rem solid var(--gray-color-2);
      background-color: var(--brand-color-1);
      border-radius: 1rem;

      box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
      border-radius: 100px;
    }

    img {
      width: 7rem;
      border-radius: 0.4rem;
      background: var(--gray-color-2);
    }

    li {
      position: relative;

      display: flex;
      gap: 1.25rem;
      list-style: none;
      padding: 1rem;
      margin-right: 1.5rem;
      border: 0.1rem solid var(--gray-color-2);

      transition: background 0.3s ease-in-out;

      &:hover {
        background: var(--gray-color-1);
      }

      .product-name {
        font-weight: 600;
        font-size: 1.5rem;
      }
    }

    svg {
      position: absolute;
      top: 1.25rem;
      right: 1.25rem;

      color: var(--gray-color-3);
      font-size: 1.5rem;

      cursor: pointer;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: var(--negative-color);
      }
    }
  }
`;
