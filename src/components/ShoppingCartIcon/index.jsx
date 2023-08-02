import { useContext } from "react";
import { ModalContext } from "../../providers/modal";
import { CartProductsContext } from "../../providers/cartProducts";

import { Container } from "./styles";
import { FaShoppingCart } from "react-icons/fa";

export const ShoppingCartIcon = () => {
  const { isOpen, setIsOpen } = useContext(ModalContext);
  const { cartProducts } = useContext(CartProductsContext);

  return (
    <Container onClick={() => setIsOpen(!isOpen)}>
      <span className="quantity-products">{cartProducts.length}</span>
      <FaShoppingCart />
    </Container>
  );
};
