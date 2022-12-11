import { createReducer } from "@reduxjs/toolkit";
import {
  fetchCategoriesFail,
  fetchCategoriesStart,
  fetchCategoriesSuccess,
} from "./categories.actions";

export const INITIAL_STATE = {
  categories: [],
  loading: false,
  error: null,
};

export const categoriesReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(fetchCategoriesStart, (state, action) => {
      state.loading = true;
    })
    .addCase(fetchCategoriesSuccess, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    })
    .addCase(fetchCategoriesFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addDefaultCase((state, action) => {});
});
