import "./Pradžia.css";
import BG1 from "../../content/3.jpeg";
import olaLogoName from "../../content/ola_logo_name.png";

const Pradžia = () => {
  return (
    <div
      className="pradžia-container"
      style={{
        backgroundImage: `url(${BG1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="pradžia-background-effects">
        <img src={olaLogoName} alt="Ola Logo Name" className="ola-logo-name" />
      </div>
    </div>
  );
};

export default Pradžia;
