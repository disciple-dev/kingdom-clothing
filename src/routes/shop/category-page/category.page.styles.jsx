import styled from "styled-components";

export const PageContainer = styled.main`
  padding: 0 1.5rem;
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;

export const CategoryTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  text-transform: capitalize;
`;
