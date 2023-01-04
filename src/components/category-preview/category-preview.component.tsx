import {
  CategoryTitleLink,
  CategoryPreviewList,
  CategoryPreviewContainer,
} from "./category-preview.styles";
import ProductCard from "../product-card/product-card.component";
import { CategoryItem } from "../../store/categories/categories.types";

interface CategoryPreviewProps {
  title: string;
  products: CategoryItem[];
}

const CategoryPreview = ({ title, products }: CategoryPreviewProps) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryTitleLink to={`/shop/${title}`}>
          {title.toUpperCase()}
        </CategoryTitleLink>
      </h2>
      <CategoryPreviewList>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CategoryPreviewList>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
