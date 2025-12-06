import "./SideBar.css";
import facebookIcon from "../../content/f.svg";
import instagramIcon from "../../content/insta.svg";

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <a
        href="https://www.facebook.com/profile.php?id=615786347829793"
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
      <a href="#top" className="link-icon">
        <img
          src={instagramIcon}
          alt="Instagram"
          className="instagram-icon"
          id="icon"
        />
      </a>
    </div>
  );
};

export default SideBar;
