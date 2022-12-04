import {
  CartItems,
  CartDropdownContainer,
  EmptyCart,
} from "./cart-dropdown.styles";
import { useContext } from "react";
import { CartContext } from "../../../contexts/cart.context";
import Button from "../../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";

const CartDropDown = () => {
  const { cartItems, setIsCartVisible } = useContext(CartContext);
  const hideCartDropdown = () => {
    setIsCartVisible(false);
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
        <Button>Go to checkout</Button>
      </Link>
    </CartDropdownContainer>
  );
};

export default CartDropDown;
