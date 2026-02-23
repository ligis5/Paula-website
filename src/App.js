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

function App() {
  return (
    <div className="App">
      <Router>
        <BasketProvider>
          <Header />
          <Basket />
          <SideBar />
          <Routes>
            <Route path="/" element={<Pradžia />} />
            <Route path="/produktai" element={<Produktai />} />
            <Route path="/produktai/:productId" element={<ProductDetail />} />
            <Route path="/kontaktai" element={<Kontaktai />} />
          </Routes>
          <Footer />
        </BasketProvider>
      </Router>
    </div>
  );
}

export default App;
