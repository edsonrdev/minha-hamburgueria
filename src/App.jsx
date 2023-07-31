import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { Modal } from "./components/Modal";
import { ShoppingCart } from "./components/ShoppingCart";

export const App = () => {
  return (
    <div>
      <Header />
      <ProductList />
      <Modal title="Carrinho de compras">
        <ShoppingCart />
      </Modal>
    </div>
  );
};
