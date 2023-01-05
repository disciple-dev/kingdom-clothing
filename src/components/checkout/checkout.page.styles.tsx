import styled from "styled-components";

export const CheckoutPageMain = styled.main`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media only screen and (min-width: 801px) {
    width: 800px;
  }
`;

export const Title = styled.h1`
  width: 100%;
`;

export const CheckoutItemsListHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  @media only screen and (max-width: 800px) {
    display: none;
  }

  div {
    text-transform: capitalize;
    &:first-child {
      width: 100px;
      padding-right: 15px;
    }

    &:last-child {
      text-align: right;
    }
  }
`;

export const CheckoutItemsList = styled.ul`
  padding: 0;
  width: 100%;
`;

export const CheckoutTotal = styled.h2`
  margin: 30px 1em 0 auto;
  font-size: 2rem;
  position: sticky;
`;
