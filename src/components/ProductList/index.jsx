import { useContext } from "react";

import { Container } from "./styles";
import { ProductCard } from "../ProductCard";

import { ProductsContext } from "../../providers/products";
import { ProductNotFoundContext } from "../../providers/productNotFound";
import { SearchTextContext } from "../../providers/searchText";
import { FilteredProductsContext } from "../../providers/filteredProducts";

export const ProductList = () => {
  const { products } = useContext(ProductsContext);
  const { productNotFound } = useContext(ProductNotFoundContext);
  const { searchText } = useContext(SearchTextContext);
  const { filteredProducts } = useContext(FilteredProductsContext);

  const productsToRender = !filteredProducts.length
    ? products
    : filteredProducts;

  return (
    <Container>
      <div className="container">
        {productNotFound && (
          <h2 className="search-results-title">
            Sem resultados para: <span>{searchText}</span>
          </h2>
        )}
      </div>
      <div className="container">
        {productsToRender.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
};
