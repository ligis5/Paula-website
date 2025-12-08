import "./Produktai.css";
import Product from "./Product";
import produktaiData from "./produktai-data";

const Produktai = () => {
  return (
    <div className="produktai-container">
      <div className="produktai-background-effects">
        <h1 id="text" className="produktai-name">
          PRODUKTAI
        </h1>
        <p id="text" className="produktai-about">
          Čia rasite mūsų produktų sąrašą.
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
