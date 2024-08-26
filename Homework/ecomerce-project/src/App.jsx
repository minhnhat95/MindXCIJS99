import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Sizefilter from "./components/Sizefilter/Sizefilter";
import Productlist from "./components/Productlist/Produclist";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Header />
      <div style={{ margin: "0px 80px 0 80px", display: "flex" }}>
        <Sizefilter />
        <Productlist />
      </div>
    </div>
  );
}

export default App;
