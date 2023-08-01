import { useContext } from "react";
import { ModalContext } from "./providers/modal";

import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { Modal } from "./components/Modal";
import { ShoppingCart } from "./components/ShoppingCart";

export const App = () => {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  document.body.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen === true) {
      setIsOpen(false);
    }
  });

  return (
    <div>
      <Header />
      <ProductList />

      {isOpen && (
        <Modal title="Carrinho de compras">
          <ShoppingCart />
        </Modal>
      )}
    </div>
  );
};
