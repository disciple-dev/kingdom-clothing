import "./checkout.page.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../checkout-item/checkout-item.component";

const CheckoutPage = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <main className="checkout-page">
      <h1>Checkout</h1>
      <div className="checkout-items-list-header">
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>
      <ul className="checkout-items-list">
        {cartItems.map((cartItem) => {
          return <CheckoutItem cartItem={cartItem} key={cartItem.id} />;
        })}
      </ul>
      <h2 className="total">Total: ${cartTotal}</h2>
    </main>
  );
};

export default CheckoutPage;
