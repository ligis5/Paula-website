import "./Product.css";
import { useNavigate } from "react-router-dom";
import { useBasket } from "../../content/basket/useBasket";

const Product = ({ product, mėginukas, words }) => {
  // words is passed down from Produktai.jsx and contains the language-specific text
  const navigate = useNavigate();
  const { basketItems, addToBasket } = useBasket();
  const mėginukasItem = mėginukas ? mėginukas(product) : null;

  const handleClick = () => {
    navigate(`/produktai/${product.id}`);
  };

  const existing = basketItems.find((i) => i.name === product.name);
  const quantity = existing ? existing.quantity : 0;
  const existingMėginukas = mėginukasItem
    ? basketItems.find((i) => i.name === mėginukasItem.name)
    : null;
  const mėginukasQuantity = existingMėginukas ? existingMėginukas.quantity : 0;

  const changeQuantity = (item, currentQuantity, delta) => (event) => {
    event.stopPropagation();
    const newQty = Math.max(0, currentQuantity + delta);
    addToBasket(item.name, newQty, item.price);
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
          <div
            className="mėginukas-container"
            onClick={(e) => e.stopPropagation()}
          >
            {mėginukasItem ? (
              <div className="mėginukas-item">
                <span className="mėginukas-name">
                  {mėginukasItem.name}
                  {" - "}
                  {words && words.productCardText}
                </span>
                <div className="mėginukas-actions">
                  <span className="mėginukas-price">
                    {mėginukasItem.price}€
                  </span>
                  <span className="bottle-size">{mėginukasItem.size}</span>
                  <div className="qty-controls mėginukas-qty-controls">
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={changeQuantity(
                        mėginukasItem,
                        mėginukasQuantity,
                        -1,
                      )}
                    >
                      -1
                    </button>
                    <span className="qty-value">{mėginukasQuantity}</span>
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={changeQuantity(
                        mėginukasItem,
                        mėginukasQuantity,
                        1,
                      )}
                    >
                      +1
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className="product-detail-footer">
            <span className="product-detail-price">{product.price}€</span>
            <div className="cart-controls">
              <span id="text" className="cart-label">
                {words && words.productCardText2}
              </span>
              <div className="qty-controls">
                <button
                  type="button"
                  className="qty-btn"
                  onClick={changeQuantity(product, quantity, -1)}
                >
                  -1
                </button>
                <span className="qty-value">{quantity}</span>
                <button
                  type="button"
                  className="qty-btn"
                  onClick={changeQuantity(product, quantity, 1)}
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
