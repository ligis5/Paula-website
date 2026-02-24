import "./Header.css";
import { Link } from "react-router-dom";
import paulaLogo from "../../content/images/ola_logo.png";
import hambuergerIcon from "./hamburger-menu.svg";
import { useEffect, useRef, useState } from "react";

const Header = ({ changeLanguage, language }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleOutsideClick = (event) => {
      const isSmallScreen = window.innerWidth <= 750;

      if (!isSmallScreen) {
        return;
      }

      if (headerRef.current && !headerRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <div className="header" ref={headerRef}>
      <Link to="/" onClick={closeMenu}>
        <img
          src={paulaLogo}
          alt="O'LÀ Fragrances Logo"
          className="logo-image"
        />
      </Link>

      <button
        className="hamburger-btn"
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-label="Toggle menu"
      >
        <img src={hambuergerIcon} alt="Menu" className="hamburger-icon" />
      </button>

      <div className={`header-categories ${menuOpen ? "open" : ""}`}>
        <Link to="/produktai" onClick={closeMenu}>
          <h3 id="text" className="category-item">
            {language === "lithuanian" ? "Produktai" : "Products"}
          </h3>
        </Link>
        <Link to="/kontaktai" onClick={closeMenu}>
          <h3 id="text" className="category-item">
            {language === "lithuanian" ? "Kontaktai" : "Contacts"}
          </h3>
        </Link>
        <div className="language-selector">
          <button
            className={`language-btn ${
              language === "lithuanian" ? "active" : ""
            }`}
            onClick={() => {
              changeLanguage("lithuanian");
              closeMenu();
            }}
            aria-pressed={language === "lithuanian"}
          >
            LT
          </button>
          <button
            className={`language-btn ${language === "english" ? "active" : ""}`}
            onClick={() => {
              changeLanguage("english");
              closeMenu();
            }}
            aria-pressed={language === "english"}
          >
            EN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
