import { useEffect, useState } from "react";
import "./host.css";
import { Link } from "react-router-dom";

function HostVans() {



  const [listedVans, setListedVans] = useState([]);
  useEffect(() => {
    fetch("/api/host/listings")
      .then((res) => res.json())
      .then((data) => setListedVans(data.vans));
  }, []);



  const allHostVans = listedVans.map((van, index) => {
    return (
      <Link className="vans-listing" key={index} to={`/host/listings/${van.id}`}>
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

      <div className="all-listed-vans" >
        {allHostVans}
      </div>
    </div>
  );
}

export default HostVans;
