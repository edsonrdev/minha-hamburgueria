import { styled } from "styled-components";

export const Container = styled.span`
  position: relative;
  cursor: pointer;
  margin-top: 1.1rem;

  span.quantity-products {
    position: absolute;
    top: -40%;
    right: -40%;

    color: var(--white-color) !important;
    font-size: 1.2rem;
    font-weight: 700;
    background: var(--brand-color-1);
    padding: 0.25rem 0.45rem;
    border-radius: 0.5rem;
  }

  svg {
    font-size: 2.4rem;
    color: var(--gray-color-3);
    vertical-align: middle;
  }
`;
