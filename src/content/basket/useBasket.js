import { createContext, useContext, useState } from "react";

const BasketContext = createContext();

/**
 * Provider component that wraps your app to provide basket state
 */
export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([]);

  const addToBasket = (productName, quantity, price) => {
    setBasketItems((prev) => {
      const existingItem = prev.find((item) => item.name === productName);
      // remove when quantity is zero or less
      if (quantity <= 0) {
        return prev.filter((item) => item.name !== productName);
      }
      if (existingItem) {
        return prev.map((item) =>
          item.name === productName
            ? { name: item.name, quantity: quantity, price: price }
            : item,
        );
      }
      // add new item when quantity > 0 and not existing
      return [...prev, { name: productName, quantity, price: price }];
    });
  };

  return (
    <BasketContext.Provider value={{ basketItems, addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

/**
 * Custom hook to use basket state from context
 */
export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket must be used within BasketProvider");
  }
  return context;
};
