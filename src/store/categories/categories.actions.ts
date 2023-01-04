import { createAction, Dispatch } from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from "../../services/firebase";
import { CategoriesActionTypes, Category } from "./categories.types";

export const fetchCategoriesStart = createAction(
  CategoriesActionTypes.FETCH_CATEGORIES_START
);
export const fetchCategoriesSuccess = createAction<Category[]>(
  CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS
);
export const fetchCategoriesFail = createAction<Error>(
  CategoriesActionTypes.FETCH_CATEGORIES_FAIL
);

export const fetchCategoriesAsync = async (dispatch: Dispatch) => {
  dispatch(fetchCategoriesStart);
  try {
    const categories = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categories));
  } catch (error: any) {
    // TODO: don't use any
    dispatch(fetchCategoriesFail(error));
  }
};
