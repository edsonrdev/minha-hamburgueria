import { ProductsProvider } from "./products";
import { ModalProvider } from "./modal";
import { ProductNotFoundProvider } from "./productNotFound";
import { FilteredProductsProvider } from "./filteredProducts";
import { CartProductsProvider } from "./cartProducts";
import { SearchTextProvider } from "./searchText";

export const Providers = ({ children }) => (
  <SearchTextProvider>
    <ProductsProvider>
      <ModalProvider>
        <ProductNotFoundProvider>
          <CartProductsProvider>
            <FilteredProductsProvider>{children}</FilteredProductsProvider>
          </CartProductsProvider>
        </ProductNotFoundProvider>
      </ModalProvider>
    </ProductsProvider>
  </SearchTextProvider>
);
