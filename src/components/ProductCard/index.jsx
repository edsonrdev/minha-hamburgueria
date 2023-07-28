import { Container } from "./styles";

export const ProductCard = () => {
  return (
    <Container>
      <header>
        <img src="https://i.imgur.com/Vng6VzV.png" alt="Hambúrguer" />
      </header>

      <main>
        <h2>Hambúrguer</h2>
        <span className="category">Sanduíches</span>
        <span className="price">R$ 14.00</span>
        <button>Adicionar</button>
      </main>
    </Container>
  );
};
