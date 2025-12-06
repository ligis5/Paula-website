import "./App.css";
import Pradžia from "./links/pradžia/Pradžia";
import Header from "./content/header/Header";
import SideBar from "./content/side-bar/SideBar";

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Pradžia />
    </div>
  );
}

export default App;
