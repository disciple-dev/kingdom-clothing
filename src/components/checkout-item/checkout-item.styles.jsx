import styled from "styled-components";

export const CheckoutItemRow = styled.li`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Column = styled.span`
  width: 23%;
`;

export const QuantityColumn = styled(Column)`
  display: flex;Column
  align-items: center;

  .arrow {
    cursor: pointer;
  }

  .value {
    margin: 0 10px;
  }
`;
