import { useContext } from "react";
import { CartProductsContext } from "../../providers/cartProducts";

import { Container } from "./styles";
import { FaTrash } from "react-icons/fa";

export const ShoppingCart = () => {
  const { cartProducts } = useContext(CartProductsContext);

  return (
    <Container>
      {cartProducts.length ? (
        <>
          <main>
            <ul>
              {cartProducts.map((product) => (
                <li key={product.id}>
                  <img src={product.img} alt={product.name} />
                  <span className="product-name">{product.name}</span>
                  <FaTrash />
                </li>
              ))}
            </ul>
          </main>
          <footer>
            <div className="section-total">
              <span className="total-label">Total:</span>
              <span className="total-value">R$ 50.00</span>
            </div>

            <button>Remover todos</button>
          </footer>
        </>
      ) : (
        ""
      )}
    </Container>
  );
};
