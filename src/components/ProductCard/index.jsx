import { Container } from "./styles";

export const ProductCard = ({ product }) => {
  return (
    <Container key={product.id}>
      <header data-img={product.img}>
        {/* <img src={product.img} alt={product.name} /> */}
      </header>

      <main>
        <h2>{product.name}</h2>
        <span className="category">{product.category}</span>
        <span className="price">{product.price.toFixed(2)}</span>
        <button>Adicionar</button>
      </main>
    </Container>
  );
};
