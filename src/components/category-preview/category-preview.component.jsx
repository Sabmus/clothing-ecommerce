import { useNavigate } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";

import "./category-preview.styles.scss";

const CategoryPreview = ({ category, products }) => {
  const navigate = useNavigate();

  const goTo = () => navigate(`${category}`);

  return (
    <div className="category-preview-container">
      <h2>
        <span className="title" onClick={goTo}>
          {category.toUpperCase()}
        </span>
      </h2>
      <div className="preview">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
