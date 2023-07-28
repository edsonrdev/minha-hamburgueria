import { Container } from "./styles";
import { FaSearch } from "react-icons/fa";

export const SearchForm = () => {
  return (
    <Container>
      <input type="search" placeholder="Pesquisar produtos..." />
      <button type="submit">
        <FaSearch />
      </button>
    </Container>
  );
};
