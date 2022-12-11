import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getCategoriesAndDocuments } from "../../services/firebase";
import { useDispatch } from "react-redux";
import { setCategories } from "../../store/categories/categories.actions";
import CategoriesPreview from "../../components/categories-preview/categories-preview.component";
import CategoryPage from "./category-page/category.page.component";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategories = async () => {
      const categories = await getCategoriesAndDocuments();
      dispatch(setCategories(categories));
    };
    getCategories();
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
