import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.style";

const categories = require("../../test_data/categories.json");

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
