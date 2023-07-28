import { Container } from "./styles";
import { ProductCard } from "../ProductCard";

export const ProductList = () => {
  return (
    <Container>
      <div className="container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </Container>
  );
};
