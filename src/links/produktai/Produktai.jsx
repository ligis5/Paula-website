import "./Produktai.css";
import Product from "./Product";
import produktaiData from "./produktai-data";
import bgImage from "../../content/images/gallery/padaryta-foto-2.png";
import Basket from "../../content/basket/Basket";
import { useBasket } from "../../content/basket/useBasket";

const Produktai = () => {
  const { basketItems, addToBasket } = useBasket();

  return (
    <div
      className="produktai-container"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Basket basketItems={basketItems} />
      <div className="produktai-background-effects">
        <>
          <h1 id="text" className="produktai-name">
            Kvepalai
          </h1>
          <p id="text" className="produktai-about">
            Unikalūs, rankų darbo kvepalai, sukurti iš aukščiausios kokybės
            ingredientų.
          </p>
          <div className="cards-container">
            {produktaiData[1].map((product) => (
              <Product
                key={product.id}
                product={product}
                addToBasket={addToBasket}
              />
            ))}
          </div>
        </>
        <>
          <h1 id="text" className="produktai-name">
            Žvakės
          </h1>
          <p id="text" className="produktai-about">
            Liepsna ir kvapas – tobula harmonija jūsų namams.
          </p>
          <div className="cards-container">
            {produktaiData[0].map((product) => (
              <Product
                key={product.id}
                product={product}
                addToBasket={addToBasket}
              />
            ))}
          </div>
        </>
      </div>
    </div>
  );
};

export default Produktai;
