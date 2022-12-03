import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categories).map((categoryKey) => (
        <CategoryPreview
          key={categoryKey}
          title={categoryKey}
          products={categories[categoryKey]}
        />
      ))}
    </>
  );
};

export default CategoriesPreview;
