import "./shop.styles.scss";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <main className="products-container">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </main>
  );
};

export default Shop;
