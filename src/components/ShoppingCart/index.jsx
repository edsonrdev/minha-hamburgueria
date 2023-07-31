import { Container } from "./styles";
import { FaTrash } from "react-icons/fa";

export const ShoppingCart = () => {
  return (
    <Container>
      <main>
        <ul>
          <li>
            <img src="https://i.imgur.com/soOUeeW.png" alt="X-Búrguer" />
            <span className="product-name">X-Búrguer</span>
            <FaTrash />
          </li>
          <li>
            <img src="https://i.imgur.com/YuIbfCi.png" alt="X-Búrguer" />
            <span className="product-name">X-Búrguer</span>
            <FaTrash />
          </li>
          <li>
            <img src="https://i.imgur.com/KC2ihEN.png" alt="X-Búrguer" />
            <span className="product-name">X-Búrguer</span>
            <FaTrash />
          </li>
          <li>
            <img src="https://i.imgur.com/iNkD4Pq.png" alt="X-Búrguer" />
            <span className="product-name">X-Búrguer</span>
            <FaTrash />
          </li>
        </ul>
      </main>
      <footer></footer>
    </Container>
  );
};
