import { CategoryItem } from "../categories/categories.types";
export enum CartActionTypes {
  UPDATE_CART_ITEMS = "UPDATE_CART_ITEMS",
  SET_IS_CART_VISIBLE = "SET_IS_CART_VISIBLE",
  SET_CART_COUNT = "SET_CART_COUNT",
  SET_CART_TOTAL = "SET_CART_TOTAL",
}

export type CartItem = CategoryItem & {
  quantity: number;
};
