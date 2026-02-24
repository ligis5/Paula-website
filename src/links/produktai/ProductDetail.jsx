import "./ProductDetail.css";
import { useParams, useNavigate } from "react-router-dom";
import produktaiData from "./produktai-data";
import bgImage from "../../content/images/gallery/padaryta-foto-2.png";
import Product from "./Product";
import { useBasket } from "../../content/basket/useBasket";

const ProductDetail = ({ language }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToBasket } = useBasket();

  // Flatten the nested array structure and find the product
  const allProducts = produktaiData[language].flat();
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
            <h2
              style={{ textAlign: "center" }}
              className="product-detail-title"
            >
              {language === "lithuanian"
                ? "Produktas nerastas"
                : "Product not found"}
            </h2>
            <button
              onClick={() => navigate("/produktai")}
              className="product-detail-back-btn"
            >
              {language === "lithuanian"
                ? "Grįžti į produktus"
                : "Back to products"}
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
      <div
        className="product-detail-background-effects"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Product
          key={product.id}
          product={product}
          addToBasket={addToBasket}
          words={allProducts.slice(-1)}
        />
        <button
          className="product-detail-back-btn"
          onClick={() => navigate("/produktai")}
        >
          {language === "lithuanian" ? "Grįžti į prekes" : "Back to products"}
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
