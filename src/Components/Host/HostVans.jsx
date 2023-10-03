import "./host.css";
import { useNavigate } from "react-router-dom";

function HostVans() {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/host/listings/1`);
  }

  return (
    <div className="host-vans-container">
      <h1>Your Listed Vans</h1>

      <div className="all-listed-vans" onClick={handleClick}>
        <div className="vans-listing">
          <img src="/public/backgroundImages/Rectangle 162.png" alt="" />
          <div className="listing-info">
            <h2>Modest Explorer</h2>
            <p>$60 / day</p>
          </div>
        </div>
        <div className="vans-listing" onClick={handleClick}>
          <img src="/public/backgroundImages/Rectangle 162.png" alt="" />
          <div className="listing-info">
            <h2>Modest Explorer</h2>
            <p>$60 / day</p>
          </div>
        </div>
        <div className="vans-listing" onClick={handleClick}>
          <img src="/public/backgroundImages/Rectangle 162.png" alt="" />
          <div className="listing-info">
            <h2>Modest Explorer</h2>
            <p>$60 / day</p>
          </div>
        </div>
        <div className="vans-listing" onClick={handleClick}>
          <img src="/public/backgroundImages/Rectangle 162.png" alt="" />
          <div className="listing-info">
            <h2>Modest Explorer</h2>
            <p>$60 / day</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HostVans;
