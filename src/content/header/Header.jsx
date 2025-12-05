import "./Header.css";
import paulaLogo from "../../content/ola_logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={paulaLogo} alt="O'LÀ Fragrances Logo" className="logo-image" />
    </header>
  );
};

export default Header;
