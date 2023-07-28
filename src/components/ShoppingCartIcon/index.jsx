import { Container } from "./styles";
import { FaShoppingCart } from "react-icons/fa";

export const ShoppingCartIcon = () => {
  return (
    <Container>
      <span className="quantity-products">0</span>
      <FaShoppingCart />
    </Container>
  );
};
