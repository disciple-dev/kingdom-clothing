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
  seleectCartTotal,
} from "../../store/cart/cart.selectors";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(seleectCartTotal);

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
    </CheckoutPageMain>
  );
};

export default CheckoutPage;
