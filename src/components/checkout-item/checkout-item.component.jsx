import "./checkout-item.styles.scss";
import Button from "../button/button.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;

  const { addItemToCart, removeItemFromCart, removeProductFromCart } =
    useContext(CartContext);

  return (
    <li className="checkout-item-row">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="arrow"
          onClick={() => removeItemFromCart(cartItem)}
        />
        <span className="value">{quantity}</span>
        <FontAwesomeIcon
          className="arrow"
          icon={faChevronRight}
          onClick={() => addItemToCart(cartItem)}
        />
      </span>
      <span className="price">${price}</span>
      <Button template="link" onClick={() => removeProductFromCart(cartItem)}>
        <FontAwesomeIcon icon={faTimes} />
      </Button>
    </li>
  );
};

export default CheckoutItem;
