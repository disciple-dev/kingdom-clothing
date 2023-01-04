import {
  BackgroundImage,
  CategoryBodyContainer,
  CategoryContainer,
  CategoryTitle,
  ShopNowButton,
} from "./category.styles";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useNavigate } from "react-router-dom";

interface PresetCategory {
  id: number;
  title: string;
  imageUrl: string;
  route: string;
}

interface CategoryItemProps {
  category: PresetCategory;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onContainerClickHandler = () => navigate(route);

  return (
    <CategoryContainer onClick={onContainerClickHandler}>
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
