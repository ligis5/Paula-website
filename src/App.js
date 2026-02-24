import "./App.css";
import Pradžia from "./links/pradžia/Pradžia";
import Header from "./content/header/Header";
import SideBar from "./content/side-bar/SideBar";
import Basket from "./content/basket/Basket";
import Footer from "./content/footer/Footer";
import Produktai from "./links/produktai/Produktai";
import ProductDetail from "./links/produktai/ProductDetail";
import Kontaktai from "./links/kontaktai/Kontaktai";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { BasketProvider } from "./content/basket/useBasket";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("lithuanian");
  return (
    <div className="App">
      <Router>
        <BasketProvider>
          <Header changeLanguage={setLanguage} language={language} />
          <Basket language={language} />
          <SideBar />
          <Routes>
            <Route path="/" element={<Pradžia language={language} />} />
            <Route
              path="/produktai"
              element={<Produktai language={language} />}
            />
            <Route
              path="/produktai/:productId"
              element={<ProductDetail language={language} />}
            />
            <Route
              path="/kontaktai"
              element={<Kontaktai language={language} />}
            />
          </Routes>
          <Footer />
        </BasketProvider>
      </Router>
    </div>
  );
}

export default App;
