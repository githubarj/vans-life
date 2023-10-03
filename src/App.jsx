import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Vans from "./Components/Vans/Vans";
import "../server";
import VansDetails from "./Components/Vans/VansDetails";
import Layout from "./Components/Layout";
import Dashboard from "./Components/Host/Dashboard";
import Income from "./Components/Host/Income";
import Reviews from "./Components/Host/Reviews";
import HostLayout from "./Components/Host/HostLayout";
import HostVans from "./Components/Host/HostVans";
import IndividualListing from "./Components/Host/IndividualListing";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VansDetails />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="listings" element={<HostVans />} />
            <Route path="listings/:id" element={<IndividualListing />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
