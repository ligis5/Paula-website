import "./Produktai.css";
import Product from "./Product";
import produktaiData from "./produktai-data";

const Produktai = () => {
  return (
    <div className="produktai-container">
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
  );
};

export default Produktai;
