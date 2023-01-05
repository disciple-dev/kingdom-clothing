import styled from "styled-components";

import Button from "../../button/button.component";

export const PaymentFormContainer = styled.section`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: min(500px, 90%);
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 1.5rem;
`;
