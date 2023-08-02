import { useState, createContext } from "react";
import { api } from "../../services/api";

export const FilteredProductsContext = createContext();

export const FilteredProductsProvider = ({ children }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <FilteredProductsContext.Provider
      value={{ filteredProducts, setFilteredProducts }}
    >
      {children}
    </FilteredProductsContext.Provider>
  );
};
