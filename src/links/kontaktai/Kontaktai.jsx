import "./Kontaktai.css";
import BG3 from "../../content/images/sweet-cherry.jpeg";

const Kontaktai = () => {
  return (
    <div
      className="kontaktai-container"
      style={{
        backgroundImage: `url(${BG3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="kontaktai-background-effects">
        <h1 id="text" className="kontaktai-name">
          Kontaktai
        </h1>
        <p id="text" className="kontaktai-about">
          Susisiekite su mumis dėl bet kokių klausimų.
        </p>
      </div>
    </div>
  );
};

export default Kontaktai;
