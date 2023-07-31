import { Container } from "./styles";

export const ProductCard = ({ product }) => {
  return (
    <Container key={product.id}>
      <header
        style={{
          backgroundColor: `var(--gray-color-2)`,
          backgroundImage: `url("${product.img}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
        className={`${
          product.name === "Milkshake Ovomaltine" ? "milkshake" : ""
        }`}
      ></header>

      <main>
        <h2>{product.name}</h2>
        <span className="category">{product.category}</span>
        <span className="price">R$ {product.price.toFixed(2)}</span>
        <button>Adicionar</button>
      </main>
    </Container>
  );
};
