import "./vans.css"
import { Link } from "react-router-dom"

function VansDetails() {
  return (
    <div className="van-details-container">
      <Link to="/vans" className="vans-back">
        <img src="/icons/Arrow 1.png" alt="" /> <p >Back to all vans</p>
      </Link>
      <div className="details-content">
        <img
          src="/backgroundImages/Rectangle 162.png"
          alt=""
          className="details-image"
        />
        <div className="content-information">
          <button className="type-button">Simple</button>
          <div className="text-information">
            <h1>Modest Explorer</h1>
            <h2>
              $60 <span className="per-day">/day</span>{" "}
            </h2>
            <p>
              The Modest Explorer is a van designed to get you out of the house
              and into nature. This beauty is equipped with solar panels, a
              composting toilet, a water tank and kitchenette. The idea is that
              you can pack up your home and escape for a weekend or even longer!
            </p>
          </div>
          <button className="rent-action">Rent this van</button>
        </div>
      </div>
    </div>
  );
}

export default VansDetails