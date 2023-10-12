import "./vans.css";
import { Await, Link, defer } from "react-router-dom";
import { useLocation, useLoaderData } from "react-router-dom";
import { getVans } from "../api";
import { Suspense } from "react";

export function loader({ params }) {
  return defer({ vanDetail: getVans(params.id) });
}

function VansDetails() {
  const location = useLocation();

  const queries = location.state?.search || "";

  const detailsPromise = useLoaderData();

  return (
    <div>
      (
      <div className="van-details-container">
        <Link to={`..?${queries}`} className="vans-back" relative="path">
          <img src="/icons/Arrow 1.png" alt="" />
          <p>Back to {`${location.state.type || "all"}`} vans</p>
        </Link>
        <Suspense fallback={<h1>Loaading van details ...</h1>}>
          <Await resolve={detailsPromise.vanDetail}>
            {(details) => (
              <div className="details-content">
                <img src={details.imageUrl} alt="" className="details-image" />
                <div className="content-information">
                  <button
                    className="type-button"
                    style={{
                      background:
                        details.type === "rugged"
                          ? "#115E59"
                          : details.type === "luxury"
                          ? "#161616"
                          : "#E17654",
                    }}
                  >
                    {details.type}
                  </button>
                  <div className="text-information">
                    <h1>{details.name}</h1>
                    <h2>
                      ${details.price}
                      <span className="per-day">/day</span>
                    </h2>
                    <p>{details.description}</p>
                  </div>
                  <button className="rent-action">Rent this van</button>
                </div>
              </div>
            )}
          </Await>
        </Suspense>
      </div>
      )
    </div>
  );
}

export default VansDetails;
