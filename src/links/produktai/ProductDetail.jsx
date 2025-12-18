import "./ProductDetail.css";
import { useParams, useNavigate } from "react-router-dom";
import produktaiData from "./produktai-data";
import bgImage from "../../content/images/gallery/padaryta-foto-2.png";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  // Flatten the nested array structure and find the product
  const allProducts = produktaiData.flat();
  const product = allProducts.find((p) => p.id === productId);

  if (!product) {
    return (
      <div
        className="product-detail-container"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="product-detail-background-effects">
          <div className="product-detail-card">
            <h2>Produktas nerasta</h2>
            <button onClick={() => navigate("/produktai")}>
              Grįžti į produktus
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="product-detail-container"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="product-detail-background-effects">
        <div
          className="product-detail-card"
          style={{ borderColor: product.color }}
        >
          <div className="product-detail-content">
            <div className="product-detail-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-detail-info">
              <h1 className="product-detail-title">{product.name}</h1>
              <p className="product-detail-description">
                {product.description}
              </p>
              <p className="product-detail-description-secondary">
                {product.description2}
              </p>
              <div className="product-detail-about">
                <h3>Sudėtis:</h3>
                <p>{product.about}</p>
              </div>
              <div className="product-detail-footer">
                <span className="product-detail-price">{product.price}€</span>
                <button
                  className="product-detail-back-btn"
                  onClick={() => navigate("/produktai")}
                >
                  Grįžti
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
