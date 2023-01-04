import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const CategoryTitleLink = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const CategoryPreviewList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;
