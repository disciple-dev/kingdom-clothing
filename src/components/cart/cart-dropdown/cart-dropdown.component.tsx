import {
  CartItems,
  CartDropdownContainer,
  EmptyCart,
  GoToCheckoutButton,
} from "./cart-dropdown.styles";
import CartItem from "../cart-item/cart-item.component";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../../store/cart/cart.selectors";
import { setCartIsVisible } from "../../../store/cart/cart.actions";

const CartDropDown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const hideCartDropdown = () => {
    dispatch(setCartIsVisible(false));
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems?.length ? (
          cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
        ) : (
          <EmptyCart>
            <FontAwesomeIcon icon={faFaceSadTear} size="2x" />
            Cart is empty.
          </EmptyCart>
        )}
      </CartItems>
      <Link to="/checkout" onClick={() => hideCartDropdown()}>
        <GoToCheckoutButton>Go to checkout</GoToCheckoutButton>
      </Link>
    </CartDropdownContainer>
  );
};

export default CartDropDown;
