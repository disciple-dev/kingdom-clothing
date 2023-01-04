import { createReducer } from "@reduxjs/toolkit";
import { setCartIsVisible, setCartItems } from "./cart.actions";
import { CartItem } from "./cart.types";

export interface ICartReducerState {
  isCartVisible: boolean;
  cartItems: CartItem[];
}

const INIITAL_STATE: ICartReducerState = {
  isCartVisible: false,
  cartItems: [],
};

export const cartReducer = createReducer(INIITAL_STATE, (builder) => {
  builder
    .addCase(setCartIsVisible, (state) => {
      state.isCartVisible = !state.isCartVisible;
    })
    .addCase(setCartItems, (state, action) => {
      state.cartItems = action.payload;
    })
    .addDefaultCase(() => {});
});
