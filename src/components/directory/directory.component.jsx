import DirectoryItem from "../directory-item/directory-item.component";
import {DirectoryContainer} from "./directory.styles.jsx";

const Directory = ({categories}) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => {
        return <DirectoryItem key={category.id} categroy={category} />;
      })}
    </DirectoryContainer>
  );
};

export default Directory;
