import {
  CartItemContainer,
  ShoppingIcon,
  ItemCount,
} from "./cart-icon.styles.jsx";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartCount,
  selectIsCartVisible,
} from "../../store/cart/cart.selectors.js";
import { setCartIsVisible } from "../../store/cart/cart.actions.js";

const CartIcon = ({ onClick }) => {
  const dispatch = useDispatch();
  const isCartVisible = useSelector(selectIsCartVisible);
  const numerOfItemsInCart = useSelector(selectCartCount);

  const toggleIsCartVisible = () => dispatch(setCartIsVisible(!isCartVisible));

  return (
    <CartItemContainer
      className="cart-icon-container fa-layers fa-fw"
      onClick={toggleIsCartVisible}
    >
      <ShoppingIcon icon={faCartShopping} className="shopping-icon" />
      <ItemCount className="fa-layers-text fa-inverse">
        {numerOfItemsInCart}
      </ItemCount>
    </CartItemContainer>
  );
};

export default CartIcon;
