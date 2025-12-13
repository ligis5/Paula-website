import "./Produktai.css";
import Product from "./Product";
import produktaiData from "./produktai-data";
import bgImage from "../../content/images/gallery/padaryta-foto-2.png";

const Produktai = () => {
  return (
    <div
      className="produktai-container"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="produktai-background-effects">
        <h1 id="text" className="produktai-name">
          Žvakės
        </h1>
        <p id="text" className="produktai-about">
          Liepsna ir kvapas – tobula harmonija jūsų namams.
        </p>
        <div className="products-cards-container">
          {produktaiData.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Produktai;
