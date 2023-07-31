import { Container } from "./styles";
import { ProductCard } from "../ProductCard";

import { useContext } from "react";
import { ProductsContext } from "../../providers/products";

export const ProductList = () => {
  const { products } = useContext(ProductsContext);

  return (
    <Container>
      <div className="container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
};
