import { useState, createContext } from "react";

export const ProductNotFoundContext = createContext();

export const ProductNotFoundProvider = ({ children }) => {
  const [productNotFound, setProductNotFound] = useState(false);

  return (
    <ProductNotFoundContext.Provider
      value={{ productNotFound, setProductNotFound }}
    >
      {children}
    </ProductNotFoundContext.Provider>
  );
};
