import { CategoriesContainer } from "./category-list.styles.jsx";
import CategoryItem from "../category-item/category.component";

const Directory = ({ categories }) => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </CategoriesContainer>
  );
};

export default Directory;
