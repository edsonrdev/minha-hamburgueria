import { useState, useEffect, createContext, useContext } from "react";
import { api } from "../../services/api";
import { ProductsContext } from "../products";

export const FilteredProductsContext = createContext();

export const FilteredProductsProvider = ({ children }) => {
  const { products } = useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const filterProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase()) ||
      product.category.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <FilteredProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </FilteredProductsContext.Provider>
  );
};
