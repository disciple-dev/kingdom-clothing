import { createReducer } from "@reduxjs/toolkit";
import { setCartIsVisible, setCartItems } from "./cart.actions";

const INIITAL_STATE = {
  isCartVisible: false,
  cartItems: [],
};

export const cartReducer = createReducer(INIITAL_STATE, (builder) => {
  builder
    .addCase(setCartIsVisible, (state, action) => {
      state.isCartVisible = !state.isCartVisible;
    })
    .addCase(setCartItems, (state, action) => {
      console.log("setcartitems reducer action", action);
      state.cartItems = action.payload;
    })
    .addDefaultCase((state, action) => {});
});
