import "./Basket.css";
import { useEffect } from "react";
import { useBasket } from "./useBasket";

const Basket = () => {
  const { basketItems } = useBasket();
  useEffect(() => {
    console.log(basketItems);
  }, [basketItems]);
  return (
    <div className="basket">
      <h1>Krepselis</h1>
      {/* <p>{basketItems}</p> */}
    </div>
  );
};
export default Basket;
