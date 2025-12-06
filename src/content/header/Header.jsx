import "./Header.css";
import paulaLogo from "../../content/ola_logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={paulaLogo} alt="O'LÀ Fragrances Logo" className="logo-image" />
      <div className="header-categories">
        <a href="#produktai">
          <h3 id="text" className="category-item">
            PRODUKTAI
          </h3>
        </a>
        <a href="#kontaktai">
          <h3 id="text" className="category-item">
            KONTAKTAI
          </h3>
        </a>
      </div>
    </header>
  );
};

export default Header;
