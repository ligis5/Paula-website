import "./Product.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);

  const handleClick = () => {
    navigate(`/produktai/${product.id}`);
  };

  const changeQuantity = (delta) => (event) => {
    event.stopPropagation();
    setQuantity((prev) => Math.max(0, prev + delta));
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <div className="image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info" style={{ backgroundColor: product.color }}>
        <h3 id="text" className="product-name">
          {product.name}
        </h3>
        <p className="product-description">{product.description}</p>
        <div className="product-bottom">
          <p id="text" className="product-price">
            {product.price}€
          </p>
          <div className="cart-controls">
            <span id="text" className="cart-label">
              Pridėti į krepšelį
            </span>
            <div className="qty-controls">
              <button
                type="button"
                className="qty-btn"
                onClick={changeQuantity(-1)}
              >
                -1
              </button>
              <span className="qty-value">{quantity}</span>
              <button
                type="button"
                className="qty-btn"
                onClick={changeQuantity(1)}
              >
                +1
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
