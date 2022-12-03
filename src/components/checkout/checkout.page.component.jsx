import {
  CheckoutPageMain,
  Title,
  CheckoutItemsListHeader,
  CheckoutItemsList,
  CheckoutTotal,
} from "./checkout.page.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../checkout-item/checkout-item.component";

const CheckoutPage = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

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
