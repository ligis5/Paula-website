import "./Pradžia.css";
import BG1 from "../../content/3.jpeg";

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
        <h1 id="logo-1" className="logo-text">
          O'LÀ
        </h1>
        <h2 id="logo-2" className="logo-text">
          FRAGRANCES
        </h2>
      </div>
    </div>
  );
};

export default Pradžia;
