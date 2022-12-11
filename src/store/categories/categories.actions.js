import { createAction } from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from "../../services/firebase";
import { CategoriesTypes } from "./categories.types";

// export const setCategories = createAction(CategoriesTypes.SET_CATEGORIES);
export const fetchCategoriesStart = createAction(
  CategoriesTypes.FETCH_CATEGORIES_START
);
export const fetchCategoriesSuccess = createAction(
  CategoriesTypes.FETCH_CATEGORIES_SUCCESS
);
export const fetchCategoriesFail = createAction(
  CategoriesTypes.FETCH_CATEGORIES_FAIL
);

export const fetchCategoriesAsync = async (dispatch) => {
  dispatch(fetchCategoriesStart);
  try {
    const categories = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categories));
  } catch (error) {
    dispatch(fetchCategoriesFail(error));
  }
};
