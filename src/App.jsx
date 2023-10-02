import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Vans from "./Components/Vans/Vans";
import Footer from "./Components/Footer/Footer";
import "../server";
import VansDetails from "./Components/Vans/VansDetails";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VansDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
