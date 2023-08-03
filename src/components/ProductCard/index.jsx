import { useContext } from "react";
import { CartProductsContext } from "../../providers/cartProducts";

import { Container } from "./styles";

export const ProductCard = ({ product }) => {
  const { cartProducts, handleAddToCart } = useContext(CartProductsContext);

  // console.log(cartProducts);

  return (
    <Container key={product.id}>
      <header
        style={{
          backgroundColor: `var(--gray-color-2)`,
          backgroundImage: `url("${product.img}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
        className={`${
          product.name === "Milkshake Ovomaltine" ? "milkshake" : ""
        }`}
      ></header>

      <main>
        <h2>{product.name}</h2>
        <span className="category">{product.category}</span>
        <span className="price">R$ {product.price.toFixed(2)}</span>
        <button onClick={() => handleAddToCart(product)}>Adicionar</button>
      </main>
    </Container>
  );
};
