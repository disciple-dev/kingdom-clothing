import { createReducer } from "@reduxjs/toolkit";
import { setCategories } from "./categories.actions";

export const INITIAL_STATE = {
  categories: [],
};

export const categoriesReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(setCategories, (state, action) => {
      state.categories = action.payload;
    })
    .addDefaultCase((state, action) => {});
});
