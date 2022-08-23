import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainer } from "./directory.styles.jsx";
import categories from "../categoryData/categories";

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => {
        return <DirectoryItem key={category.id} categroy={category} />;
      })}
    </DirectoryContainer>
  );
};

export default Directory;
