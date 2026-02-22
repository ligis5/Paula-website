import "./ProductDetail.css";
import { useParams, useNavigate } from "react-router-dom";
import produktaiData from "./produktai-data";
import bgImage from "../../content/images/gallery/padaryta-foto-2.png";
import Product from "./Product";
import { useBasket } from "../../content/basket/useBasket";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToBasket } = useBasket();

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
        <Product key={product.id} product={product} addToBasket={addToBasket} />
        <button
          className="product-detail-back-btn"
          onClick={() => navigate("/produktai")}
        >
          Grįžti
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
