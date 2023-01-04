// import { CombinedState } from "redux";
import { createSelector } from "reselect";
import { ICategoriesReducerState } from "./categories.reducer";
import { ICategoryMap } from "./categories.types";
import { RootState } from "../configureStore";

// TODO: don't use any
const selectCategoryReducer = (state: RootState): ICategoriesReducerState =>
  state.categories;

const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const getCategories = createSelector([selectCategories], (categories) =>
  categories.reduce((acc, category): ICategoryMap => {
    const { title, items } = category;
    if (items) {
      acc[title.toLowerCase()] = items;
    }
    return acc;
  }, {} as ICategoryMap)
);

export const selectIsCategoriesLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.loading
);
