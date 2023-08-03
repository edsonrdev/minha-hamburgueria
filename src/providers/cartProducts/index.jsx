import { useState, createContext } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const CartProductsContext = createContext();

export const CartProductsProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const handleAddToCart = (productToAdd) => {
    const productHasIntoCart = cartProducts.find(
      (product) => product === productToAdd
    );

    if (!productHasIntoCart) {
      setCartProducts([...cartProducts, productToAdd]);
    } else {
      toast.error("Este produto já foi adicionado ao carrinho!");
    }
  };

  const handleRemoveProduct = (productToRemove) => {
    const newCartProducts = cartProducts.filter(
      (product) => product !== productToRemove
    );

    setCartProducts(newCartProducts);
  };

  const handleRemoveAllProducts = () => {
    setCartProducts([]);
  };

  return (
    <CartProductsContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        handleAddToCart,
        handleRemoveAllProducts,
        handleRemoveProduct,
      }}
    >
      {children}
    </CartProductsContext.Provider>
  );
};
