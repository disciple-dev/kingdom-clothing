import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartVisible: false,
  setIsCartVisible: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const contextValue = { isCartVisible, setIsCartVisible };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
