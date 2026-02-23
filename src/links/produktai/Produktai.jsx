import "./Produktai.css";
import { useCallback, useEffect, useRef, useState } from "react";
import Product from "./Product";
import produktaiData from "./produktai-data";
import bgImage from "../../content/images/gallery/padaryta-foto-2.png";
import { useBasket } from "../../content/basket/useBasket";
import arrowRight from "../../content/images/arrow-right.svg";
import arrowLeft from "../../content/images/arrow-left.svg";

const Produktai = () => {
  const { addToBasket } = useBasket();
  const cardRowRefs = useRef([]);
  const [scrollHints, setScrollHints] = useState({});

  const updateScrollHints = useCallback((index) => {
    const row = cardRowRefs.current[index];

    if (!row) {
      return;
    }
    // Hide arrow if the scroll is within 100px to the end
    const threshold = 100;
    const maxScrollLeft = row.scrollWidth - row.clientWidth;
    // Only show arrows if there's enough overflow to scroll
    const hasHorizontalOverflow = maxScrollLeft > threshold;

    // Show left arrow if we're scrolled more than 100px from the left, and right arrow if we're more than 100px from the right
    const nextHints = {
      showLeft: hasHorizontalOverflow && row.scrollLeft > threshold,
      showRight:
        hasHorizontalOverflow && row.scrollLeft < maxScrollLeft - threshold,
    };

    setScrollHints((prev) => {
      const currentHints = prev[index];

      if (
        currentHints?.showLeft === nextHints.showLeft &&
        currentHints?.showRight === nextHints.showRight
      ) {
        return prev;
      }

      return {
        ...prev,
        [index]: nextHints,
      };
    });
  }, []);

  useEffect(() => {
    const refreshAllHints = () => {
      cardRowRefs.current.forEach((row, index) => {
        if (row) {
          updateScrollHints(index);
        }
      });
    };

    const frame = requestAnimationFrame(refreshAllHints);
    window.addEventListener("resize", refreshAllHints);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", refreshAllHints);
    };
  }, [updateScrollHints]);

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
        <>
          <h1 id="text" className="produktai-name">
            Kvepalai
          </h1>
          <p id="text" className="produktai-about">
            Nišiniai kvepalai, įkvėpti garsiausių pasaulio aromatų, sukurti
            profesionalių parfumerių su ilgamete patirtimi ir meile savo amatui.
          </p>
          <div className="cards-scroll-wrapper">
            <img
              src={arrowLeft}
              alt="Arrow Left"
              className={`cards-scroll-arrow cards-scroll-arrow-left ${
                scrollHints[0]?.showLeft ? "" : "cards-scroll-arrow-hidden"
              }`}
            />
            <div
              className="cards-container"
              ref={(element) => {
                cardRowRefs.current[0] = element;
              }}
              onScroll={() => updateScrollHints(0)}
            >
              {produktaiData[1].map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  addToBasket={addToBasket}
                />
              ))}
            </div>
            <img
              src={arrowRight}
              alt="Arrow Right"
              className={`cards-scroll-arrow cards-scroll-arrow-right ${
                scrollHints[0]?.showRight ? "" : "cards-scroll-arrow-hidden"
              }`}
            />
          </div>
        </>
        <>
          <h1 id="text" className="produktai-name">
            Žvakės
          </h1>
          <p id="text" className="produktai-about">
            Liepsna ir kvapas – tobula harmonija jūsų namams.
          </p>
          <div className="cards-scroll-wrapper">
            <img
              src={arrowLeft}
              alt="Arrow Left"
              className={`cards-scroll-arrow cards-scroll-arrow-left ${
                scrollHints[1]?.showLeft ? "" : "cards-scroll-arrow-hidden"
              }`}
            />
            <div
              className="cards-container"
              ref={(element) => {
                cardRowRefs.current[1] = element;
              }}
              onScroll={() => updateScrollHints(1)}
            >
              {produktaiData[0].map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  addToBasket={addToBasket}
                />
              ))}
            </div>
            <img
              src={arrowRight}
              alt="Arrow Right"
              className={`cards-scroll-arrow cards-scroll-arrow-right ${
                scrollHints[1]?.showRight ? "" : "cards-scroll-arrow-hidden"
              }`}
            />
          </div>
        </>
      </div>
    </div>
  );
};

export default Produktai;
