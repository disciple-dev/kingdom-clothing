import styled from "styled-components";

export const PageContainer = styled.main`
  /* padding: 0 1.5rem; */
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 0.5rem;
    column-gap: 0.5rem;
  }
`;

export const CategoryTitle = styled.h1`
  font-size: 28px;
  cursor: pointer;
  text-transform: capitalize;
`;
