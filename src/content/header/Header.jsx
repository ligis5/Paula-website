import "./Header.css";
import { Link } from "react-router-dom";
import paulaLogo from "../../content/images/ola_logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={paulaLogo} alt="O'LÀ Fragrances Logo" className="logo-image" />
      <div className="header-categories">
        <Link to="/produktai">
          <h3 id="text" className="category-item">
            PRODUKTAI
          </h3>
        </Link>
        <Link to="/kontaktai">
          <h3 id="text" className="category-item">
            KONTAKTAI
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default Header;
