import "./App.scss";
import CategoryList from "./components/categories-list/category-list.component";
import categories from "./categories.json";

const App = () => {
  return <CategoryList categories={categories} />;
};

export default App;
