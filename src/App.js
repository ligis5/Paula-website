import "./App.css";
import Pradžia from "./links/pradžia/Pradžia";
import Header from "./content/header/Header";
import SideBar from "./content/side-bar/SideBar";
import Produktai from "./links/produktai/Produktai";
import Kontaktai from "./links/kontaktai/Kontaktai";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <SideBar />
        <Routes>
          <Route path="/" element={<Pradžia />} />
          <Route path="/produktai" element={<Produktai />} />
          <Route path="/kontaktai" element={<Kontaktai />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
