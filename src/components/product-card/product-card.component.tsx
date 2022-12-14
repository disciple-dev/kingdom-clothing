import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.actions";
import { selectCartItems } from "../../store/cart/cart.selectors";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  AddToCartButton,
  ProductCardContainer,
  ProductCardFooter,
  ProductPrice,
  ProductTitle,
} from "./product-card.styles";

export interface Product {
  name: string;
  imageUrl: string;
  price: number;
}

export interface ProductCardParams {
  product: Product;
}

const ProductCard = ({ product }: ProductCardParams) => {
  const dispath = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const { name, imageUrl, price } = product;

  const addToCart = (product: Product) =>
    dispath(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <ProductCardFooter>
        <ProductTitle>{name}</ProductTitle>
        <ProductPrice>${price}</ProductPrice>
      </ProductCardFooter>
      <AddToCartButton
        template={BUTTON_TYPE_CLASSES.inverted}
        label="Add to Cart"
        onClick={() => addToCart(product)}
      />
    </ProductCardContainer>
  );
};

export default ProductCard;
