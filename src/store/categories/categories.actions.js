import { createAction } from "@reduxjs/toolkit";
import { CategoriesTypes } from "./categories.types";

export const setCategories = createAction(CategoriesTypes.SET_CATEGORIES);
