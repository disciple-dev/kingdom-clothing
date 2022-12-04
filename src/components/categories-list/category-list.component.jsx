import { CategoriesContainer } from "./category-list.styles.jsx";
import CategoryItem from "../category-item/category.component";
import categories from "../../data/categories";

const Directory = () => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </CategoriesContainer>
  );
};

export default Directory;
