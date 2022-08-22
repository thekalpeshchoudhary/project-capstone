import Directory from "../../components/directory/directory.component";
import categories from "../../components/categoryData/categories";

const Home = () => {
  return (
    <Directory categories={categories}></Directory>
  );
};

export default Home;
