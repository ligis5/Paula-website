import "./App.css";
import Pradžia from "./links/pradžia/Pradžia";
import Header from "./content/header/Header";
import SideBar from "./content/side-bar/SideBar";
import Footer from "./content/footer/Footer";
import Produktai from "./links/produktai/Produktai";
import ProductDetail from "./links/produktai/ProductDetail";
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
          <Route path="/produktai/:productId" element={<ProductDetail />} />
          <Route path="/kontaktai" element={<Kontaktai />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
