import "./cart-icon.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = ({ onClick }) => {
  const { isCartVisible, setIsCartVisible, numerOfItemsInCart } =
    useContext(CartContext);

  const toggleIsCartVisible = () => setIsCartVisible(!isCartVisible);

  return (
    <div
      className="cart-icon-container fa-layers fa-fw"
      onClick={toggleIsCartVisible}
    >
      <FontAwesomeIcon icon={faCartShopping} className="shopping-icon" />
      <span className="item-count fa-layers-text fa-inverse">
        {numerOfItemsInCart}
      </span>
    </div>
  );
};

export default CartIcon;
