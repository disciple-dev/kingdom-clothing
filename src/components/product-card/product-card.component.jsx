import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  AddToCartButton,
  ProductCardContainer,
  ProductCardFooter,
  ProductPrice,
  ProductTitle,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  const { addItemToCart } = useContext(CartContext);

  const addToCart = (product) => addItemToCart(product);

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
