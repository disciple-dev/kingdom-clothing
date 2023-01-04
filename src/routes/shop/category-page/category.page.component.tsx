import {
  CategoryContainer,
  CategoryTitle,
  PageContainer,
} from "./category.page.styles";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../../../components/product-card/product-card.component";
import { useSelector } from "react-redux";
import {
  getCategories,
  selectIsCategoriesLoading,
} from "../../../store/categories/categories.selectors";
import { Spinner } from "../../../components/spinner/spinner.component";

interface ICategoryRouteParam {
  category: string;
}

const CategoryPage = () => {
  const { category } = useParams<
    keyof ICategoryRouteParam
  >() as ICategoryRouteParam;

  const isLoading = useSelector(selectIsCategoriesLoading);
  const categories = useSelector(getCategories);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <PageContainer>
      <section>
        <CategoryTitle>{category}</CategoryTitle>
        {isLoading ? (
          <Spinner />
        ) : (
          <CategoryContainer>
            {products &&
              products.map((product) => {
                return <ProductCard product={product} key={product.id} />;
              })}
          </CategoryContainer>
        )}
      </section>
    </PageContainer>
  );
};

export default CategoryPage;
