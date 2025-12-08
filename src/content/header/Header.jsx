import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
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
