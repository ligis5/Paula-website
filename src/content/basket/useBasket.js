import { createContext, useContext, useState } from 'react';

const BasketContext = createContext();

/**
 * Provider component that wraps your app to provide basket state
 */
export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([]);

  const addToBasket = (productName, quantity) => {
    setBasketItems((prev) => {
      const existingItem = prev.find((item) => item.name === productName);
      if (existingItem) {
        return prev.map((item) =>
          item.name === productName
            ? { name: item.name, quantity: quantity }
            : item,
        );
      } else if (quantity > 0) {
        return [...prev, { name: productName, quantity }];
      } else {
        return prev.filter((item) => item.name !== productName);
      }
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
    throw new Error('useBasket must be used within BasketProvider');
  }
  return context;
};
