import "./host.css";
import { Await, Link, defer, useLoaderData } from "react-router-dom";
import { getHostVans } from "../api";
import { requireAuth } from "../utils";
import { Suspense } from "react";

export async function loader({ request }) {
  await requireAuth(request);
  return defer({ vans: getHostVans() });
}

function HostVans() {
  const listedVansPromise = useLoaderData();

  return (
    <div className="host-vans-container">
      <h1>Your Listed Vans</h1>

      <div className="all-listed-vans">
        <Suspense fallback={<h1>Loading...</h1>}>
          <Await resolve={listedVansPromise.vans}>
            {(listedVans) => {
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
              return allHostVans;
            }}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}

export default HostVans;
