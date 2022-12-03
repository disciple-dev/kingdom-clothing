import {
  CategoryTitleLink,
  CategoryPreviewList,
  CategoryPreviewContainer,
} from "./category-preview.styles";
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ title, products }) => {
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
