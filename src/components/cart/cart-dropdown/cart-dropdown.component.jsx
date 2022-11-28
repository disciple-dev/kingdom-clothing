import "./cart-dropdown.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../../contexts/cart.context";
import Button from "../../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { Link } from "react-router-dom";

const CartDropDown = () => {
  const { cartItems, setIsCartVisible } = useContext(CartContext);
  const hideCartDropdown = () => {
    setIsCartVisible(false);
  };
  return (
    <aside className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems?.length
          ? cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
          : "Cart is empty."}
      </div>
      <Link to="/checkout" onClick={() => hideCartDropdown()}>
        <Button>Go to checkout</Button>
      </Link>
    </aside>
  );
};

export default CartDropDown;
