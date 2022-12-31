import { useNavigate } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";

const CategoryPreview = ({ category, products }) => {
  const navigate = useNavigate();

  const goToCategory = () => navigate(`${category}`);

  return (
    <CategoryPreviewContainer>
      <h2>
        <Title onClick={goToCategory}>{category.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
