import "./vans.css";
import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function VansDetails() {
  const params = useParams();
  const location = useLocation();

  const queries = location.state?.search || "";
  const [details, setDetails] = useState({});
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data.vans));
  }, [params.id]);

  console.log(location);

  return (
    <div>
      {details && (
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
      )}
    </div>
  );
}

export default VansDetails;
