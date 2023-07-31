import { ProductsProvider } from "./products";

export const Providers = ({ children }) => (
  <ProductsProvider>{children}</ProductsProvider>
);
