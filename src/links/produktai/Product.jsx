import "./Product.css";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/produktai/${product.id}`);
  };

  return (
    <div
      className="product-card"
      onClick={handleClick}
      style={{
        backgroundImage: `url(${product.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="product-info">
        <h3 id="text" className="product-name">
          {product.name}
        </h3>
        <p id="text" className="product-description">
          {product.description}
        </p>
        <p id="text" className="product-price">
          {product.price}€
        </p>
      </div>
    </div>
  );
};

export default Product;
