import "./Header.css";
import { Link } from "react-router-dom";
import paulaLogo from "../../content/images/ola_logo.png";
import hambuergerIcon from "./hamburger-menu.svg";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="header">
      <img src={paulaLogo} alt="O'LÀ Fragrances Logo" className="logo-image" />

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
            PRODUKTAI
          </h3>
        </Link>
        <Link to="/kontaktai" onClick={closeMenu}>
          <h3 id="text" className="category-item">
            KONTAKTAI
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default Header;
