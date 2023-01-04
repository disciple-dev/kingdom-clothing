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
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  removeProductFromCart,
} from "../../store/cart/cart.actions";
import { selectCartItems } from "../../store/cart/cart.selectors";
import { CartItem } from "../../store/cart/cart.types";

export interface CheckoutItemPropse {
  cartItem: CartItem;
}

const CheckoutItem = ({ cartItem }: CheckoutItemPropse) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { imageUrl, name, price, quantity } = cartItem;

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
          onClick={() => dispatch(removeItemFromCart(cartItems, cartItem))}
        />
        <span className="value">{quantity}</span>
        <FontAwesomeIcon
          className="arrow"
          icon={faChevronRight}
          onClick={() => dispatch(addItemToCart(cartItems, cartItem))}
        />
      </QuantityColumn>
      <Column>${price}</Column>
      <Button
        template={BUTTON_TYPE_CLASSES.link}
        onClick={() => dispatch(removeProductFromCart(cartItems, cartItem))}
      >
        <FontAwesomeIcon icon={faTimes} />
      </Button>
    </CheckoutItemRow>
  );
};

export default CheckoutItem;
