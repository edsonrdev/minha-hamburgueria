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
    height: 24rem;

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

      .product-info {
        flex: 1;
        position: relative;

        display: flex;
        flex-direction: column;
        gap: 0.6rem;

        .product-name {
          font-weight: 700;
          font-size: 1.4rem;

          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 13.5rem;
        }

        .product-price {
          font-weight: 500;
          font-size: 1.2rem;
          color: var(--brand-color-1);
        }

        input {
          border: 0.1rem solid var(--gray-color-2);
          font-size: 1.2rem;
          width: 4rem;
          text-align: center;
          outline: none;
        }

        svg {
          position: absolute;
          top: 0;
          right: 0;

          color: var(--gray-color-3);
          font-size: 1.5rem;

          cursor: pointer;
          transition: color 0.3s ease-in-out;

          &:hover {
            color: var(--negative-color);
          }
        }
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
        font-weight: 700;
        font-size: 1.4rem;
      }

      .total-value {
        font-weight: 700;
        font-size: 1.4rem;
        color: var(--brand-color-1);
      }
    }

    button {
      padding: 1.8rem;
      color: var(--white-color);
      font-weight: 500;
      letter-spacing: 0.05rem;
      border-radius: 0.5rem;
      background: var(--brand-color-1);
      border: 0;
      cursor: pointer;
      transition: background 0.25s ease-in-out;

      &:hover {
        background: var(--brand-color-1-hover);
      }
    }
  }
`;
