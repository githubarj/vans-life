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
import VansDetails, {
  loader as vansDetailsLoader,
} from "./Components/Vans/VansDetails";
import Layout from "./Components/Layout";
import Dashboard, {
  loader as dashboardLoader,
} from "./Components/Host/Dashboard";
import Income from "./Components/Host/Income";
import Reviews from "./Components/Host/Reviews";
import HostLayout from "./Components/Host/HostLayout";
import HostVans, { loader as hostVansLoader } from "./Components/Host/HostVans";
import ListingLayout, {
  loader as listingLayoutLoader,
} from "./Components/Host/ListingLayout";
import Details from "./Components/Host/Listing/Details";
import Photos from "./Components/Host/Listing/Photos";
import Pricing from "./Components/Host/Listing/Pricing";
import PageNotFound from "./Components/PageNotFound";
import Error from "./Components/Error";
import Login, {
  loader as loginLoader,
  action as logInAction,
} from "./Components/LogIn/LogIn";
import { requireAuth } from "./Components/utils";

// const loader = () => {
//   return null;
// };

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} path="/">
      <Route index element={<Home />} />
      <Route
        path="logIn"
        element={<Login />}
        loader={loginLoader}
        action={logInAction}
      />
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route
        path="vans/:id"
        element={<VansDetails />}
        loader={vansDetailsLoader}
        errorElement={<Error />}
      />
      <Route
        path="host"
        element={<HostLayout />}
        loader={async ({ request }) => await requireAuth(request)}
      >
        <Route index element={<Dashboard />} loader={dashboardLoader} />
        <Route
          path="income"
          element={<Income />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="listings"
          element={<HostVans />}
          loader={hostVansLoader}
          errorElement={<Error />}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="listings/:id"
          element={<ListingLayout />}
          errorElement={<Error />}
          loader={listingLayoutLoader}
        >
          <Route
            index
            element={<Details />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="photos"
            element={<Photos />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="pricing"
            element={<Pricing />}
            loader={async ({ request }) => await requireAuth(request)}
          />
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
