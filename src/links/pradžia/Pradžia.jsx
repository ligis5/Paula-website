import "./Pradžia.css";
import olaLogoName from "../../content/images/ola_logo_name.png";
import bgImage from "../../content/images/gallery/padaryta-foto-2.png";

const Pradžia = () => {
  return (
    <div
      className="pradžia-container"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="pradžia-background-effects">
        <div className="logo-container">
          <img
            src={olaLogoName}
            alt="Ola Logo Name"
            className="ola-logo-name"
          />
        </div>
        <div className="about-container">
          <h3 id="text" className="about-ola-description">
            Kvapo menas liepsnoje ir ant odos
          </h3>
          <h3 id="text" className="about-ola-description-2">
            Rankų darbo žvakės ir kvepalai, įkvėpti garsių kūrėjų
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Pradžia;
