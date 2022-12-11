import { useSelector } from "react-redux";
import { getCategories } from "../../store/categories/categories.selectors";
import CategoryPreview from "../category-preview/category-preview.component";

const CategoriesPreview = () => {
  const categories = useSelector(getCategories);
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
