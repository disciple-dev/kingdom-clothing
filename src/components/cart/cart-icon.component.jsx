import {
  CartItemContainer,
  ShoppingIcon,
  ItemCount,
} from "./cart-icon.styles.jsx";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = ({ onClick }) => {
  const { isCartVisible, setIsCartVisible, numerOfItemsInCart } =
    useContext(CartContext);

  const toggleIsCartVisible = () => setIsCartVisible(!isCartVisible);

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
