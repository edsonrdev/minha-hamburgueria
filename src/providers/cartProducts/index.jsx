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
      toast.success("Produto adicionado ao carrinho!");
    } else {
      toast.error("O produto já está no carrinho!");
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
