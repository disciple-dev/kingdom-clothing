import styled from "styled-components";
import Button from "../button/button.component";

interface IBackgroundImageProps {
  url: string;
}

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${({ url }: IBackgroundImageProps) => url});
`;

export const CategoryBodyContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

export const CategoryContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    ${BackgroundImage} {
      @media screen and (prefers-reduced-motion: no-preference) {
        transform: scale(1.1);
        transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }
    }

    ${CategoryBodyContainer} {
      opacity: 0.9;
    }
  }

  &.large {
    height: 380px;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

export const CategoryTitle = styled.h2`
  font-weight: bold;
  margin: 0 6px 0;
  font-size: 22px;
  color: #4a4a4a;
`;

export const ShopNowButton = styled(Button)`
  font-weight: lighter;
  font-size: 16px;
`;
