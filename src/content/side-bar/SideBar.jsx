import "./SideBar.css";
import facebookIcon from "../../content/images/f.svg";
import instagramIcon from "../../content/images/insta.svg";
import paulaLogo from "../../content/images/ola_logo.png";

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <img src={paulaLogo} alt="O'LÀ Fragrances Logo" className="logo-image" />
      <div className="sidebar-items">
        <a
          href="https://www.facebook.com/profile.php?id=61578634782979"
          target="_blank"
          rel="noopener noreferrer"
          className="link-icon"
        >
          <img
            src={facebookIcon}
            alt="Facebook"
            className="facebook-icon"
            id="icon"
          />
        </a>
        <a
          href="https://www.instagram.com/ola_fragrances/"
          className="link-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={instagramIcon}
            alt="Instagram"
            className="instagram-icon"
            id="icon"
          />
        </a>
      </div>
    </div>
  );
};

export default SideBar;
