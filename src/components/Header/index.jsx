import { Container } from "./styles";
import { ShoppingCartIcon } from "../ShoppingCartIcon";
import { SearchForm } from "../SearchForm";

export const Header = () => {
  return (
    <Container>
      <div className="container">
        <h1>
          Minha <span>Hamburgueria</span>
        </h1>

        <div className="search-section">
          <ShoppingCartIcon />

          <SearchForm />
        </div>
      </div>
    </Container>
  );
};
