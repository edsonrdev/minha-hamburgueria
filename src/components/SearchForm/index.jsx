import { useContext, useState } from "react";
import { ProductsContext } from "../../providers/products";

import { Container } from "./styles";
import { FaSearch } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { toast } from "react-toastify";

export const SearchForm = () => {
  const { products, setProducts } = useContext(ProductsContext);

  const [searchText, setSearchText] = useState("");
  const [searchDone, setSearchDone] = useState(false);

  const handleSearchProducts = () => {
    if (!searchText && searchDone) {
      setSearchDone(false);
    }

    if (!searchText) {
      toast.error("Informe nome ou categoria do produto...");
      return false;
    }

    const filteredProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase()) ||
        product.category.toLowerCase().includes(searchText.toLowerCase())
    );

    if (filteredProducts.length) {
      setProducts(filteredProducts);
    }

    // setSearchText("");
    setSearchDone(true);
  };

  return (
    <Container>
      <input
        type="search"
        placeholder="Pesquisar produtos..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        type="submit"
        onClick={handleSearchProducts}
        className={`${searchDone ? "search-done" : ""}`}
      >
        {!searchDone ? <FaSearch /> : <MdClose size={18} />}
      </button>
    </Container>
  );
};
