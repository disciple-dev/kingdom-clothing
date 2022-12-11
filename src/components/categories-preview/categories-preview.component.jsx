import { useSelector } from "react-redux";
import {
  getCategories,
  selectIsCategoriesLoading,
} from "../../store/categories/categories.selectors";
import CategoryPreview from "../category-preview/category-preview.component";
import { Spinner } from "../spinner/spinner.component";

const CategoriesPreview = () => {
  const isLoading = useSelector(selectIsCategoriesLoading);
  const categories = useSelector(getCategories);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categories).map((categoryKey) => (
          <CategoryPreview
            key={categoryKey}
            title={categoryKey}
            products={categories[categoryKey]}
          />
        ))
      )}
    </>
  );
};

export default CategoriesPreview;
