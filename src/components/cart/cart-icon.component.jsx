import "./cart-icon.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = ({ onClick }) => {
  const { isCartVisible, setIsCartVisible } = useContext(CartContext);

  const toggleIsCartVisible = () => setIsCartVisible(!isCartVisible);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartVisible}>
      <FontAwesomeIcon icon={faCartShopping} className="shopping-icon" />
      <span className="item-count"></span>
    </div>
  );
};

export default CartIcon;
