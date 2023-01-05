import {
  CheckoutPageMain,
  Title,
  CheckoutItemsListHeader,
  CheckoutItemsList,
  CheckoutTotal,
} from "./checkout.page.styles";
import CheckoutItem from "../checkout-item/checkout-item.component";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selectors";
import PaymentForm from "../forms/payment/payment.form.component";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutPageMain>
      <Title>Checkout</Title>
      <CheckoutItemsListHeader>
        <div style={{ width: "135px" }}>Product</div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <span>Description</span>
          <span>Price</span>
          <span>Quantity</span>
        </div>
        <span style={{ width: "40px" }}>Remove</span>
      </CheckoutItemsListHeader>
      <CheckoutItemsList>
        {cartItems.map((cartItem) => {
          return <CheckoutItem cartItem={cartItem} key={cartItem.id} />;
        })}
      </CheckoutItemsList>
      <CheckoutTotal>Total: ${cartTotal}</CheckoutTotal>
      <PaymentForm />
    </CheckoutPageMain>
  );
};

export default CheckoutPage;
