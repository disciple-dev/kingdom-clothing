import styled from "styled-components";

export const CheckoutPageMain = styled.main`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
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

  span {
    text-transform: capitalize;
    width: 23%;

    &:last-child {
      width: 8%;
    }
  }
`;

export const CheckoutItemsList = styled.ul`
  padding: 0;
  width: 100%;
`;

export const CheckoutTotal = styled.h2`
  margin-top: 30px;
  margin-left: auto;
  font-size: 2rem;
  position: sticky;
`;
