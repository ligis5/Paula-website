import "./Produktai.css";
import { useCallback, useEffect, useRef, useState } from "react";
import Product from "./Product";
import produktaiData from "./produktai-data";
import bgImage from "../../content/images/gallery/padaryta-foto-2.png";
import { useBasket } from "../../content/basket/useBasket";
import arrowRight from "../../content/images/arrow-right.svg";
import arrowLeft from "../../content/images/arrow-left.svg";

const Produktai = ({ language }) => {
  const { addToBasket } = useBasket();
  const cardRowRefs = useRef([]);
  const [scrollHints, setScrollHints] = useState({});
  const [products, setProducts] = useState(produktaiData[language]);

  useEffect(() => {
    setProducts(produktaiData[language]);
  }, [language]);

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
  // Scroll the card row left or right by 70% of its width when the corresponding arrow is clicked, scroll snap type does the rest of the work to ensure it snaps to the nearest card.
  const scrollCards = useCallback((index, direction) => {
    const row = cardRowRefs.current[index];

    if (!row) {
      return;
    }

    row.scrollBy({
      left: row.clientWidth * 0.7 * direction,
      behavior: "smooth",
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

  const addSamplesToPerfumes = (product) => {
    let mėginukas = {};
    mėginukas = {
      id: `mėginukas-${product.id}`,
      name: `${product.name}`,
      price: 4.5,
      size: "3ml",
    };
    return mėginukas;
  };

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
            {products[2].productText}
          </h1>
          <p id="text" className="produktai-about">
            {products[2].productAboutText}
          </p>
          <div className="cards-scroll-wrapper">
            <img
              src={arrowLeft}
              alt="Arrow Left"
              className={`cards-scroll-arrow cards-scroll-arrow-left ${
                scrollHints[0]?.showLeft ? "" : "cards-scroll-arrow-hidden"
              }`}
              onClick={() => scrollCards(0, -1)}
            />
            <div
              className="cards-container"
              ref={(element) => {
                cardRowRefs.current[0] = element;
              }}
              onScroll={() => updateScrollHints(0)}
            >
              {products[1].map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  addToBasket={addToBasket}
                  mėginukas={addSamplesToPerfumes}
                  words={products[2]}
                />
              ))}
            </div>
            <img
              src={arrowRight}
              alt="Arrow Right"
              className={`cards-scroll-arrow cards-scroll-arrow-right ${
                scrollHints[0]?.showRight ? "" : "cards-scroll-arrow-hidden"
              }`}
              onClick={() => scrollCards(0, 1)}
            />
          </div>
        </>
        <>
          <h1 id="text" className="produktai-name">
            {products[2].productText}
          </h1>
          <p id="text" className="produktai-about">
            {language === "lithuanian"
              ? products[2].productAboutText
              : products[2].productAboutText}
          </p>
          <div className="cards-scroll-wrapper">
            <img
              src={arrowLeft}
              alt="Arrow Left"
              className={`cards-scroll-arrow cards-scroll-arrow-left ${
                scrollHints[1]?.showLeft ? "" : "cards-scroll-arrow-hidden"
              }`}
              onClick={() => scrollCards(1, -1)}
            />
            <div
              className="cards-container"
              ref={(element) => {
                cardRowRefs.current[1] = element;
              }}
              onScroll={() => updateScrollHints(1)}
            >
              {products[0].map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  addToBasket={addToBasket}
                  words={products[2]}
                />
              ))}
            </div>
            <img
              src={arrowRight}
              alt="Arrow Right"
              className={`cards-scroll-arrow cards-scroll-arrow-right ${
                scrollHints[1]?.showRight ? "" : "cards-scroll-arrow-hidden"
              }`}
              onClick={() => scrollCards(1, 1)}
            />
          </div>
        </>
      </div>
    </div>
  );
};

export default Produktai;
