import "./host.css";
import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../api";
import { requireAuth } from "../utils";

export async function loader({ request }) {
  await requireAuth( request );
  return getHostVans();
}

function HostVans() {
  const listedVans = useLoaderData();

  const allHostVans = listedVans.map((van, index) => {
    return (
      <Link className="vans-listing" key={index} to={van.id}>
        <img src={van.imageUrl} alt="" />
        <div className="listing-info">
          <h2>{van.name}</h2>
          <p>${van.price} / day</p>
        </div>
      </Link>
    );
  });

  return (
    <div className="host-vans-container">
      <h1>Your Listed Vans</h1>

      <div className="all-listed-vans">{allHostVans}</div>
    </div>
  );
}

export default HostVans;
