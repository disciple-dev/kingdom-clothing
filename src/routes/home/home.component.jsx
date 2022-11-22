import CategoryList from "../../components/categories-list/category-list.component";
import categories from "../../components/categories-list/categories.json";

const Home = () => {
  return <CategoryList categories={categories} />;
};

export default Home;
