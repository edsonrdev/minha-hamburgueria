import { ProductsProvider } from "./products";
import { ModalProvider } from "./modal";

export const Providers = ({ children }) => (
  <ProductsProvider>
    <ModalProvider>{children}</ModalProvider>
  </ProductsProvider>
);
