import Category from "../../components/categories/category.component";
import categories from "../../components/categoryData/categories";

const Home = () => {
  return (
    <Category categories={categories}></Category>
  );
};

export default Home;
