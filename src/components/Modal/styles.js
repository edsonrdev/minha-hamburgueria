import { styled } from "styled-components";

export const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  min-height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.4);
`;

export const Content = styled.div`
  /* width: 32rem;
  height: 32rem; */

  background: var(--white-color);
  box-shadow: 0 0.5rem 0.8rem 0.15rem var(--gray-color-4);
  border-radius: 0.4rem;

  overflow: hidden;

  > header {
    position: relative;

    height: 5.5rem;
    padding: 1.4rem;

    display: flex;
    align-items: center;

    background: var(--brand-color-1);

    color: var(--white-color);
    font-size: 1.6rem;
    font-weight: 600;
    letter-spacing: 0.05rem;

    svg {
      position: absolute;
      top: 1.8rem;
      right: 1.4rem;
      opacity: 0.6;

      color: #fff;
      font-size: 2rem;

      cursor: pointer;

      transition: opacity 0.25s ease;

      &:hover {
        opacity: 1;
      }
    }
  }

  > main {
    padding: 1.4rem;
    font-size: 1.6rem;
  }
`;
