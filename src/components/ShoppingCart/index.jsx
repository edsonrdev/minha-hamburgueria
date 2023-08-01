import { Container } from "./styles";
import { FaTrash } from "react-icons/fa";

export const ShoppingCart = () => {
  return (
    <Container>
      <main>
        <ul>
          <li>
            <img src="https://i.imgur.com/Vng6VzV.png" alt="Hamburguer" />
            <span className="product-name">Hamburguer</span>
            <FaTrash />
          </li>
          <li>
            <img src="https://i.imgur.com/eEzZzcF.png" alt="Big Kenzie" />
            <span className="product-name">Big Kenzie</span>
            <FaTrash />
          </li>
          <li>
            <img src="https://i.imgur.com/YuIbfCi.png" alt="Fanta Guaraná" />
            <span className="product-name">Fanta Guaraná</span>
            <FaTrash />
          </li>
          <li>
            <img src="https://i.imgur.com/soOUeeW.png" alt="X-Búrguer" />
            <span className="product-name">X-Búrguer</span>
            <FaTrash />
          </li>
        </ul>
      </main>
      <footer>
        <div className="section-total">
          <span className="total-label">Total:</span>
          <span className="total-value">R$ 50.00</span>
        </div>

        <button>Remover todos</button>
      </footer>
    </Container>
  );
};
