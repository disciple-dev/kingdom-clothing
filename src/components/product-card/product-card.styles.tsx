import styled from "styled-components";
import Button from "../button/button.component";

export const ProductCardContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: max(350px, 25vh);
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
    opacity: 0.8;
    @media only screen and (max-width: 800px) {
      opacity: 1;
      height: 90%;
    }
  }
  &:hover {
    img {
      opacity: 1;
    }
  }

  button {
    opacity: 1;
    display: flex;
  }
`;

export const AddToCartButton = styled(Button)`
  width: 80%;
  position: absolute;
  z-index: 200;
  top: 255px;
  opacity: 0.8;
  @media only screen and (max-width: 800px) {
    opacity: 1;
  }
`;

export const ProductCardFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  @media only screen and (max-width: 800px) {
    position: absolute;
    top: 0;
    height: 4rem;
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.6);
    color: rgb(230, 230, 230);
    font-size: 1rem;
    justify-content: space-evenly;
    align-items: center;
  }

  .name {
  }

  .price {
    width: 10%;
  }
`;

export const ProductTitle = styled.h3`
  margin: 0;
`;

export const ProductPrice = styled.h4`
  /* width: 10%; */
  margin: 0;
`;
