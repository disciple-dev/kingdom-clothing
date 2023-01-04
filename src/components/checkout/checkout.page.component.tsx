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
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
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
