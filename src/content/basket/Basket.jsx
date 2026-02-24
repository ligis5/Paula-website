import "./Basket.css";
import { useEffect, useState } from "react";
import { useBasket } from "./useBasket";
import ShopingCartClose from "../../content/images/shopping-cart-close.svg";
import ShopingCartOpen from "../../content/images/shopping-cart-open.svg";
import produktaiData from "../../links/produktai/produktai-data";

const Basket = ({ language }) => {
  const { basketItems, addToBasket } = useBasket();
  const [isBasketOpen, setIsBasketOpen] = useState(true);
  const allProducts = produktaiData[language].flat();
  const words = allProducts.slice(-1);
  // Calculate the grand total by summing up the total price of each item (unit price * quantity)
  const grandTotal = basketItems.reduce((sum, item) => {
    const unitPrice = Number(item.price) || 0;
    return sum + unitPrice * item.quantity;
  }, 0);

  useEffect(() => {
    if (basketItems.length === 0) {
      setIsBasketOpen(true);
    }
  }, [basketItems.length]);

  const changeQuantity = (name, delta) => {
    const existing = basketItems.find((i) => i.name === name);
    const newQty = Math.max(0, (existing ? existing.quantity : 0) + delta);
    addToBasket(name, newQty, existing ? existing.price : 0);
  };

  const removeItem = (name) => addToBasket(name, 0);

  if (basketItems.length === 0) {
    return null;
  }

  if (!isBasketOpen) {
    return (
      <button
        type="button"
        className="basket-toggle"
        onClick={() => setIsBasketOpen(true)}
        aria-label="Atidaryti krepšelį"
      >
        <img className="basket-icon" src={ShopingCartOpen} alt="Krepšelis" />
      </button>
    );
  }
  console.log("Basket items:", words);
  return (
    <div className="basket">
      <button
        type="button"
        className="basket-icon-button"
        onClick={() => setIsBasketOpen(false)}
        aria-label="Uždaryti krepšelį"
      >
        <img className="basket-icon" src={ShopingCartClose} alt="Uždaryti" />
      </button>
      <h2 className="basket-title">{words && words[0].basketText}</h2>
      {basketItems.length === 0 ? (
        <p className="basket-empty">Krepšelis tuščias</p>
      ) : (
        <>
          <div className="basket-items">
            {basketItems.map((item) => {
              const unitPrice = Number(item.price) || 0;
              const itemTotal = unitPrice * item.quantity;

              return (
                <div className="basket-card" key={item.name}>
                  <div className="card-info">
                    <div className="card-name">{item.name}</div>
                    <div className="card-qty">
                      {words && words[0].basketText2}:{" "}
                      <span className="qty-value">{item.quantity}</span>
                    </div>
                    <div className="card-total">
                      {words && words[0].basketText4}: €{itemTotal.toFixed(2)}
                    </div>
                  </div>
                  <div className="card-controls">
                    <button
                      id="basket-button"
                      className="qty-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        changeQuantity(item.name, -1, item.price);
                      }}
                    >
                      -
                    </button>
                    <button
                      id="basket-button"
                      className="qty-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        changeQuantity(item.name, 1, item.price);
                      }}
                    >
                      +
                    </button>
                    <button
                      className="remove-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeItem(item.name);
                      }}
                    >
                      {words && words[0].basketText3}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="basket-grand-total">
            {words && words[0].basketText5}: €{grandTotal.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

export default Basket;
