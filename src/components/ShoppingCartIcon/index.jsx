import { useContext } from "react";
import { ModalContext } from "../../providers/modal";

import { Container } from "./styles";
import { FaShoppingCart } from "react-icons/fa";

export const ShoppingCartIcon = () => {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  return (
    <Container onClick={() => setIsOpen(!isOpen)}>
      <span className="quantity-products">0</span>
      <FaShoppingCart />
    </Container>
  );
};
