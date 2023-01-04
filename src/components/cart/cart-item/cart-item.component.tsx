import { CartItem as CartItemType } from "../../../store/cart/cart.types";
import {
  CartItemContainer,
  Image,
  ItemDetails,
  Name,
} from "./cart-item.styles";

export interface CartItemProps {
  cartItem: CartItemType;
}

const CartItem = ({ cartItem }: CartItemProps) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
