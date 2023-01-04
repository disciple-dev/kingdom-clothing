import { createReducer } from "@reduxjs/toolkit";
import {
  fetchCategoriesFail,
  fetchCategoriesStart,
  fetchCategoriesSuccess,
} from "./categories.actions";
import { Category } from "./categories.types";

export interface ICategoriesReducerState {
  readonly categories: Category[];
  readonly loading: boolean;
  readonly error: Error | null;
}

export const INITIAL_STATE: ICategoriesReducerState = {
  categories: [],
  loading: false,
  error: null,
};

export const categoriesReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(fetchCategoriesStart, (state) => {
      state.loading = true;
    })
    .addCase(fetchCategoriesSuccess, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    })
    .addCase(fetchCategoriesFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});
