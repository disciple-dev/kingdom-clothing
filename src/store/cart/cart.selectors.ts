import { createSelector } from "reselect";
import { RootState } from "../configureStore";
import { ICartReducerState } from "./cart.reducer";

const selectCartReducer = (state: RootState): ICartReducerState => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartVisible = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartVisible
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, item) => {
    return (total += item.quantity);
  }, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0)
);
