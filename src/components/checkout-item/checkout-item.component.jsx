import {
  CheckoutItemRow,
  Column,
  ImageContainer,
  QuantityColumn,
} from "./checkout-item.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
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
    <CheckoutItemRow>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Column>{name}</Column>
      <QuantityColumn>
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
      </QuantityColumn>
      <Column>${price}</Column>
      <Button
        template={BUTTON_TYPE_CLASSES.link}
        onClick={() => removeProductFromCart(cartItem)}
      >
        <FontAwesomeIcon icon={faTimes} />
      </Button>
    </CheckoutItemRow>
  );
};

export default CheckoutItem;
