import CategoryItem from "../category-item/category-item.component";
import "./category.styles.scss";

const Category = ({categories}) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} categroy={category} />;
      })}
    </div>
  );
};

export default Category;
