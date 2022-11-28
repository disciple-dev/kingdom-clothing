import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  isCartVisible: false,
  setIsCartVisible: () => {},
  cartItems: [],
  numerOfItemsInCart: 0,
  cartTotal: 0,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  removeProductFromCart: () => {},
});

const addToCart = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const updateItemQuantity = (cartItems, cartItem, quantity) => {
  return cartItems.reduce((items, item) => {
    // return item if not our target item
    if (item.id !== cartItem.id) return items.concat(item);
    // if quantity is zero, remove item completely
    if (item.quantity + quantity < 1 || quantity === 0) return items;

    return items.concat({ ...item, quantity: item.quantity + quantity });
  }, []);
};

const removeProduct = (cartItems, cartItem) =>
  updateItemQuantity(cartItems, cartItem, 0);

const getNumberOfCartItems = (cartItems) =>
  cartItems.reduce((total, item) => {
    return (total += item.quantity);
  }, 0);

const calculateCartTotal = (cartItems) => {
  return cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
};

export const CartProvider = ({ children }) => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [numerOfItemsInCart, setNumerOfItemsInCart] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setNumerOfItemsInCart(getNumberOfCartItems(cartItems));
  }, [cartItems]);

  useEffect(() => {
    setCartTotal(calculateCartTotal(cartItems));
  }, [cartItems]);

  const addItemToCart = (item) => setCartItems(addToCart(cartItems, item));

  const removeItemFromCart = (item) =>
    setCartItems(updateItemQuantity(cartItems, item, -1));

  const removeProductFromCart = (item) =>
    setCartItems(removeProduct(cartItems, item));

  const contextValue = {
    addItemToCart,
    removeItemFromCart,
    removeProductFromCart,
    cartItems,
    numerOfItemsInCart,
    cartTotal,
    isCartVisible,
    setIsCartVisible,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
