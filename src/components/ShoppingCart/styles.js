import { styled } from "styled-components";

export const Container = styled.ul`
  width: 100%;

  main.empty-cart {
    height: 25rem;

    display: flex;
    gap: 1.4rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 2rem;
      text-align: center;
      color: var(--gray-color-4);
      /* line-height: 2.7rem; */
    }

    p {
      font-size: 1.4rem;
    }
  }

  main:not(.empty-cart) {
    padding-bottom: 1.5rem;
    border-bottom: 0.1rem solid var(--gray-color-2);
  }

  ul {
    display: flex;
    flex-direction: column;
    /* gap: 1.25rem; */
    height: 25rem;

    /* padding-bottom: 1.25rem; */
    /* border-bottom: 0.1rem solid var(--gray-color-2); */

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
      border-bottom: 0;

      transition: background 0.3s ease-in-out;

      &:hover {
        background: var(--gray-color-1);
      }

      &:last-of-type {
        border-bottom: 0.1rem solid var(--gray-color-2);
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

  footer {
    display: flex;
    flex-direction: column;

    .section-total {
      display: flex;
      justify-content: space-between;

      padding: 1.6rem 0;

      font-size: 1.4rem;

      .total-label {
        font-weight: 600;
      }

      .total-value {
        font-weight: 400;
      }
    }

    button {
      padding: 1.8rem;
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
