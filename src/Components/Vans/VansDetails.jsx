import "./vans.css";
import { Link } from "react-router-dom";
import { useLocation, useLoaderData } from "react-router-dom";
import { getVans } from "../api";

export function loader({ params }) {
  return getVans(params.id);
}

function VansDetails() {
  const location = useLocation();

  const queries = location.state?.search || "";
  const details = useLoaderData();

  return (
    <div>
      (
      <div className="van-details-container">
        <Link to={`..?${queries}`} className="vans-back" relative="path">
          <img src="/icons/Arrow 1.png" alt="" />
          <p>Back to {`${location.state.type || "all"}`} vans</p>
        </Link>
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
      </div>
      )
    </div>
  );
}

export default VansDetails;
