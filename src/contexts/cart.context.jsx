import { createContext, useReducer } from "react";
import { createAction } from "../services/reducer/reducer.utils";

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

const INIITAL_STATE = {
  isCartVisible: false,
  cartItems: [],
  numerOfItemsInCart: 0,
  cartTotal: 0,
};

export const CartActionTypes = {
  UPDATE_CART_ITEMS: "UPDATE_CART_ITEMS",
  SET_IS_CART_VISIBLE: "SET_IS_CART_VISIBLE",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CartActionTypes.UPDATE_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CartActionTypes.SET_IS_CART_VISIBLE:
      return {
        ...state,
        isCartVisible: payload,
      };
    default:
      throw new Error(`Invalid action: ${action}`);
  }
};

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
  const [
    { isCartVisible, cartItems, numerOfItemsInCart, cartTotal },
    dispatch,
  ] = useReducer(cartReducer, INIITAL_STATE);

  const updateCartItemsReducer = (cartItems) => {
    const numerOfItemsInCart = getNumberOfCartItems(cartItems);
    const cartTotal = calculateCartTotal(cartItems);
    dispatch(
      createAction(CartActionTypes.UPDATE_CART_ITEMS, {
        cartItems,
        numerOfItemsInCart,
        cartTotal,
      })
    );
  };

  const addItemToCart = (item) => {
    const updatedCartItems = addToCart(cartItems, item);
    updateCartItemsReducer(updatedCartItems);
  };

  const removeItemFromCart = (item) => {
    const updatedCartItems = updateItemQuantity(cartItems, item, -1);
    updateCartItemsReducer(updatedCartItems);
  };

  const removeProductFromCart = (item) => {
    const updatedCartItems = removeProduct(cartItems, item);
    updateCartItemsReducer(updatedCartItems);
  };

  const setIsCartVisible = (open = !isCartVisible) =>
    dispatch(createAction(CartActionTypes.SET_IS_CART_VISIBLE, open));

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
