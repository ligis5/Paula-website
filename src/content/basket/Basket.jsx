import "./Basket.css";
import { useEffect, useState } from "react";
import { useBasket } from "./useBasket";
import ShopingCartClose from "../../content/images/shopping-cart-close.svg";
import ShopingCartOpen from "../../content/images/shopping-cart-open.svg";

const Basket = () => {
  const { basketItems, addToBasket } = useBasket();
  const [isBasketOpen, setIsBasketOpen] = useState(true);
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
      <h2 className="basket-title">Krepšelis</h2>
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
                      Kiekis: <span className="qty-value">{item.quantity}</span>
                    </div>
                    <div className="card-total">
                      Iš viso: €{itemTotal.toFixed(2)}
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
                      Pašalinti
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="basket-grand-total">
            Bendra suma: €{grandTotal.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

export default Basket;
