// import { Link } from "react-router-dom";
import Button from "../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const {
    // id,
    name,
    imageUrl,
    price,
  } = product;
  return (
    <section className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <h3 className="name">{name}</h3>
        <h4 className="price">{price}</h4>
      </div>
      {/* <Link to={`#${id}`}> */}
      <Button template="inverted" label="Add to Cart" />
      {/* </Link> */}
    </section>
  );
};

export default ProductCard;
