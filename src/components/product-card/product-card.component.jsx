// import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  const { addItemToCart } = useContext(CartContext);

  const addToCart = (product) => addItemToCart(product);

  return (
    <section className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <h3 className="name">{name}</h3>
        <h4 className="price">${price}</h4>
      </div>
      <Button
        template="inverted"
        label="Add to Cart"
        onClick={() => addToCart(product)}
      />
    </section>
  );
};

export default ProductCard;
