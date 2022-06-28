import Category from "./components/categories/category.component";
import categories from "./components/categoryData/categories";

const App = () => {
  return (
    <Category categories={categories}></Category>
  );
};

export default App;
