import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import "../server";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Vans, { loader as vansLoader } from "./Components/Vans/Vans";
import VansDetails from "./Components/Vans/VansDetails";
import Layout from "./Components/Layout";
import Dashboard from "./Components/Host/Dashboard";
import Income from "./Components/Host/Income";
import Reviews from "./Components/Host/Reviews";
import HostLayout from "./Components/Host/HostLayout";
import HostVans from "./Components/Host/HostVans";
import ListingLayout from "./Components/Host/ListingLayout";
import Details from "./Components/Host/Listing/Details";
import Photos from "./Components/Host/Listing/Photos";
import Pricing from "./Components/Host/Listing/Pricing";
import PageNotFound from "./Components/PageNotFound";
import Error from "./Components/Error";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} path="/" >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route path="vans/:id" element={<VansDetails />} />
      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="listings" element={<HostVans />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="listings/:id" element={<ListingLayout />}>
          <Route index element={<Details />} />
          <Route path="photos" element={<Photos />} />
          <Route path="pricing" element={<Pricing />} />
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
