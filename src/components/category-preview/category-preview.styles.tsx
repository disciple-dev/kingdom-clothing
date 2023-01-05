import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CategoryTitleLink = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const CategoryPreviewList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(165px, 400px));
  column-gap: 20px;

  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 0.5rem;
  }
`;
