import { GlobalStyles } from "./styles";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />

      <ProductList />
    </>
  );
};
