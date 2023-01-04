import { createAction } from "@reduxjs/toolkit";
import { CategoryItem } from "../categories/categories.types";
import { CartActionTypes, CartItem } from "./cart.types";

export const setCartItems = createAction<CartItem[]>(
  CartActionTypes.UPDATE_CART_ITEMS
);

export const setCartIsVisible = createAction<boolean>(
  CartActionTypes.SET_IS_CART_VISIBLE
);

export const addItemToCart = createAction(
  CartActionTypes.UPDATE_CART_ITEMS,
  (cartItems, item) => {
    const payload = addToCart(cartItems, item);
    return { payload };
  }
);

export const removeItemFromCart = createAction(
  CartActionTypes.UPDATE_CART_ITEMS,
  (cartItems, item) => {
    const payload = updateItemQuantity(cartItems, item, -1);
    return { payload };
  }
);

export const removeProductFromCart = createAction(
  CartActionTypes.UPDATE_CART_ITEMS,
  (cartItems, item) => {
    const payload = removeProduct(cartItems, item);
    return { payload };
  }
);

const addToCart = (cartItems: CartItem[], productToAdd: CategoryItem) => {
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

const updateItemQuantity = (
  cartItems: CartItem[],
  cartItem: CartItem,
  quantity: number
): CartItem[] => {
  return cartItems.reduce((items, item) => {
    // return item if not our target item
    if (item.id !== cartItem.id) return items.concat(item);
    // if quantity is zero, remove item completely
    if (item.quantity + quantity < 1 || quantity === 0) return items;

    return items.concat({ ...item, quantity: item.quantity + quantity });
  }, [] as CartItem[]);
};

const removeProduct = (cartItems: CartItem[], cartItem: CartItem) =>
  updateItemQuantity(cartItems, cartItem, 0);
