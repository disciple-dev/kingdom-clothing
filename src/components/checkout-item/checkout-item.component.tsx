import {
  CheckoutItemRow,
  DetailsContainer,
  ImageContainer,
  Name,
  QuantityColumn,
  QuantityControl,
  RemoveProductButton,
  FAIcon,
} from "./checkout-item.styles";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
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
      <DetailsContainer>
        <Name>{name}</Name>
        <div>${price}</div>
        <QuantityColumn>
          <FAIcon
            icon={faChevronLeft}
            className="arrow"
            onClick={() => dispatch(removeItemFromCart(cartItems, cartItem))}
          />
          <QuantityControl>{quantity}</QuantityControl>
          <FAIcon
            className="arrow"
            icon={faChevronRight}
            onClick={() => dispatch(addItemToCart(cartItems, cartItem))}
          />
        </QuantityColumn>
      </DetailsContainer>
      <RemoveProductButton
        template={BUTTON_TYPE_CLASSES.link}
        onClick={() => dispatch(removeProductFromCart(cartItems, cartItem))}
      >
        <FAIcon icon={faTimes} />
      </RemoveProductButton>
    </CheckoutItemRow>
  );
};

export default CheckoutItem;
