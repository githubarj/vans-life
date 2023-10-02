import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Vans from "./Components/Vans/Vans";
import "../server";
import VansDetails from "./Components/Vans/VansDetails";
import Layout from "./Components/Layout";



function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VansDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
