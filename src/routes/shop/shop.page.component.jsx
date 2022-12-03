import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../../components/categories-preview/categories-preview.component";
import CategoryPage from "./category-page/category.page.component";

const Shop = () => {
  return (
    <Routes>
      <Route path="/shop" />
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<CategoryPage />} />
    </Routes>
  );
};
export default Shop;
