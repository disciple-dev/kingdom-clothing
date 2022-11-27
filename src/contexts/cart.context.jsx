import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  isCartVisible: false,
  setIsCartVisible: () => {},
  cartItems: [],
  numerOfItemsInCart: 0,
  addItemToCart: () => {},
});

const addToCart = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );

  console.info("found item", existingCartItem);

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const getNumberOfCartItems = (cartItems) =>
  cartItems.reduce((total, item) => {
    return (total += item.quantity);
  }, 0);

export const CartProvider = ({ children }) => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [numerOfItemsInCart, setNumerOfItemsInCart] = useState(0);

  useEffect(() => {
    setNumerOfItemsInCart(getNumberOfCartItems(cartItems));
  }, [cartItems]);

  const addItemToCart = (item) => {
    setCartItems(addToCart(cartItems, item));
  };

  const contextValue = {
    addItemToCart,
    cartItems,
    numerOfItemsInCart,
    isCartVisible,
    setIsCartVisible,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
