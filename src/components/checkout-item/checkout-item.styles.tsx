import styled from "styled-components";
import Button from "../button/button.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CheckoutItemRow = styled.li`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 0.5rem 0;
  font-size: 20px;
  align-items: center;
  justify-content: space-between;
  align-items: center;
`;

export const ImageContainer = styled.div`
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
    max-height: 10rem;
  }

  @media only screen and (max-width: 800px) {
    min-height: 20vh;

    img {
      height: 8rem;
      width: auto;
    }
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;

  @media only screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

export const Name = styled.span`
  @media only screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const Column = styled.span``;

export const FAIcon = styled(FontAwesomeIcon)``;

export const QuantityControl = styled.span`
  margin: 0 10px;
  position: relative;
  bottom: 2.5px;
`;

export const QuantityColumn = styled(Column)`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 800px) {
    width: 50%;
    display: flex;
    justify-content: space-around;

    ${FAIcon} {
      height: 2rem;
    }

    ${QuantityControl} {
      font-size: 2rem;
    }
  }

  .arrow {
    cursor: pointer;
  }

  .value {
    margin: 0 10px;
  }
`;

export const RemoveProductButton = styled(Button)`
  height: 100px;
  @media only screen and (max-width: 800px) {
    min-width: 60px;
  }
`;
