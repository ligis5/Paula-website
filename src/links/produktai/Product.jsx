import "./Product.css";
import { useNavigate } from "react-router-dom";
import { useBasket } from "../../content/basket/useBasket";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const { basketItems, addToBasket } = useBasket();

  const handleClick = () => {
    navigate(`/produktai/${product.id}`);
  };

  const existing = basketItems.find((i) => i.name === product.name);
  const quantity = existing ? existing.quantity : 0;

  const changeQuantity = (delta) => (event) => {
    event.stopPropagation();
    const newQty = Math.max(0, quantity + delta);
    addToBasket(product.name, newQty, product.price);
  };

  return (
    <div
      className="product-detail-card"
      onClick={handleClick}
      style={{ borderColor: product.color, margin: "2rem" }}
    >
      <div className="product-detail-content" style={{ height: "100%" }}>
        <div
          className="product-detail-image"
          style={{
            height: "fit-content",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{ height: "500px", minWidth: "250px", objectFit: "contain" }}
          />
        </div>
        <div
          className="product-detail-info"
          style={{
            height: "100%",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <h1 className="product-detail-title">{product.name}</h1>
          <p className="product-detail-description">{product.description}</p>
          <p className="product-detail-description-secondary">
            {product.description2}
          </p>
          <div className="product-detail-footer">
            <span className="product-detail-price">{product.price}€</span>
            <div className="cart-controls">
              <span id="text" className="cart-label">
                PRIDĖTI Į KREPŠELĮ:
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
    </div>
  );
};

export default Product;
