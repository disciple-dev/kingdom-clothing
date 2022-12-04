import {
  BackgroundImage,
  CategoryBodyContainer,
  CategoryContainer,
  CategoryTitle,
  ShopNowButton,
} from "./category.styles";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <CategoryContainer>
      <BackgroundImage url={imageUrl} />
      <CategoryBodyContainer>
        <CategoryTitle>{title}</CategoryTitle>
        <ShopNowButton template={BUTTON_TYPE_CLASSES.link}>
          Shop Now
        </ShopNowButton>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};

export default CategoryItem;
