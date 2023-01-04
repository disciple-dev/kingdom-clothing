import styled from "styled-components";
import Button from "../button/button.component";

export const ProductCardContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
    opacity: 0.8;
  }
  &:hover {
    img {
    opacity: 1;
  }
  
  button {
  opacity: 1;
  display: flex;
  }
`;

export const AddToCartButton = styled(Button)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  opacity: 0.8;
`;

export const ProductCardFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  .name {
  }

  .price {
    width: 10%;
  }
`;

export const ProductTitle = styled.h3`
  width: 90%;
  margin-bottom: 15px;
`;

export const ProductPrice = styled.h4`
  width: 10%;
`;
