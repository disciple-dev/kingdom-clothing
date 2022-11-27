import Button from "../../button/button.component";
import "./cart-dropdown.styles.scss";

const CartDropDown = () => {
  return (
    <aside className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button>Go to checkout</Button>
    </aside>
  );
};

export default CartDropDown;
