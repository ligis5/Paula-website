import "./Footer.css";
import facebookIcon from "../../content/images/f.svg";
import instagramIcon from "../../content/images/insta.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-items">
        <a
          href="https://www.facebook.com/profile.php?id=61578634782979"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link-icon"
        >
          <img src={facebookIcon} alt="Facebook" className="footer-icon" />
        </a>
        <a
          href="https://www.instagram.com/ola_fragrances/"
          className="footer-link-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" className="footer-icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
