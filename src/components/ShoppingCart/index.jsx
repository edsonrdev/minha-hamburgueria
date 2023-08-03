import { useContext } from "react";
import { CartProductsContext } from "../../providers/cartProducts";

import { Container } from "./styles";
import { FaTrash } from "react-icons/fa";
import { BiPlus } from "react-icons/bi";

export const ShoppingCart = () => {
  const { cartProducts, handleRemoveAllProducts, handleRemoveProduct } =
    useContext(CartProductsContext);

  const totalCartValue = cartProducts.reduce(
    (sum, product) => sum + product.price,
    0
  );

  return (
    <Container>
      {cartProducts.length ? (
        <>
          <main>
            <ul>
              {cartProducts.map((product) => (
                <li key={product.id}>
                  <img src={product.img} alt={product.name} />
                  <div className="product-info">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">
                      R$ {product.price.toFixed(2)}
                    </span>
                    <FaTrash onClick={() => handleRemoveProduct(product)} />
                  </div>
                </li>
              ))}
            </ul>
          </main>
          <footer>
            <div className="section-total">
              <span className="total-label">Total:</span>
              <span className="total-value">
                R$ {totalCartValue.toFixed(2)}
              </span>
            </div>

            <button onClick={handleRemoveAllProducts}>Remover todos</button>
          </footer>
        </>
      ) : (
        <main className="empty-cart">
          <h2>Seu carrinho está vazio</h2>

          <p>Adicione itens ao carrinho.</p>
        </main>
      )}
    </Container>
  );
};
