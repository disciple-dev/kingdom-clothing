export enum CategoriesActionTypes {
  FETCH_CATEGORIES_START = "categories/FETCH_CATEGORIES_START",
  FETCH_CATEGORIES_SUCCESS = "categories/FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_FAIL = "categories/FETCH_CATEGORIES_FAIL",
}

export interface CategoryItem {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}

export interface Category {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
  route: string;
}

export interface ICategoryMap {
  [key: string]: CategoryItem[];
}
