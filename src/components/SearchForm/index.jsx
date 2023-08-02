import { useContext, useState } from "react";

import { Container } from "./styles";
import { FaSearch } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { toast } from "react-toastify";

import { ProductsContext } from "../../providers/products";
import { ProductNotFoundContext } from "../../providers/productNotFound";
import { FilteredProductsContext } from "../../providers/filteredProducts";
import { SearchTextContext } from "../../providers/searchText";

export const SearchForm = () => {
  const { products, setProducts } = useContext(ProductsContext);
  const { filteredProducts, setFilteredProducts } = useContext(
    FilteredProductsContext
  );
  const { productNotFound, setProductNotFound } = useContext(
    ProductNotFoundContext
  );
  const { searchText, setSearchText } = useContext(SearchTextContext);

  const [searchDone, setSearchDone] = useState(false);

  const handleSearchProducts = () => {
    if (!searchText) {
      toast.error("Informe nome ou categoria do produto...");
      setSearchDone(false);
      return false;
    }

    if (searchDone) {
      setSearchText("");
      setSearchDone(false);
      setFilteredProducts([]);
      setProductNotFound(false);
      return false;
    }

    const filteredProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase()) ||
        product.category.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredProducts(filteredProducts);

    if (!filteredProducts.length) {
      setProductNotFound(true);
    }

    setSearchDone(true);
  };

  return (
    <Container>
      <input
        autoFocus
        type="search"
        placeholder="Pesquisar produtos..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        disabled={searchDone && searchText ? true : false}
      />
      <button
        type="submit"
        onClick={handleSearchProducts}
        className={`${!searchDone ? "before-search" : "after-search"}`}
      >
        {!searchDone ? <FaSearch /> : <MdClose size={18} />}
      </button>
    </Container>
  );
};
