import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { fetchCategoriesAsync } from "../../store/categories/categories.actions";
import CategoriesPreview from "../../components/categories-preview/categories-preview.component";
import CategoryPage from "./category-page/category.page.component";

const Shop = () => {
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchCategoriesAsync(dispatch);
    // dispatch(fetchCategoriesAsync(dispatch));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path="/shop" />
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<CategoryPage />} />
    </Routes>
  );
};
export default Shop;
