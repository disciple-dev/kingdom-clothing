import { useContext } from "react";
import { CartContext } from "../../../contexts/cart.context";
import Button from "../../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  console.log({ cartItems });
  return (
    <aside className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems?.length
          ? cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
          : "Cart is empty."}
      </div>
      <Button>Go to checkout</Button>
    </aside>
  );
};

export default CartDropDown;
