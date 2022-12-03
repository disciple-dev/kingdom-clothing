import {
  CategoryContainer,
  CategoryTitle,
  PageContainer,
} from "./category.page.styles";

import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ProductCard from "../../../components/product-card/product-card.component";
import { CategoriesContext } from "../../../contexts/categories.context";

const CategoryPage = () => {
  const { category } = useParams();
  const { categories } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <PageContainer>
      <section>
        <CategoryTitle>{category}</CategoryTitle>
        <CategoryContainer>
          {products &&
            products.map((product) => {
              return <ProductCard product={product} key={product.id} />;
            })}
        </CategoryContainer>
      </section>
    </PageContainer>
  );
};

export default CategoryPage;
