import "./host.css";
import { Outlet, Link, NavLink } from "react-router-dom";
import { listingNavs } from "../../Data/NavItems";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ListingLayout() {
  const [vanInfo, setVanInfo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVanInfo(data.vans[0]));
  }, []);

  if (!vanInfo) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="listing-layout-container">
      <Link className="back-to-all" to=".." relative="path">
        <img src="/icons/Arrow 1.png" alt="" /> Back to all vans
      </Link>
      <div className="shared-header">
        <div className="shared-header-content">
          <img src={vanInfo.imageUrl} alt="" />
          <div className="shc-information">
            <button
              style={{
                background:
                  vanInfo.type == "rugged"
                    ? "#115E59"
                    : vanInfo.type == "luxury"
                    ? "#161616"
                    : "#E17654",
              }}
            >
              {vanInfo.type}
            </button>
            <h1>{vanInfo.name}</h1>
            <h2>
              ${vanInfo.price}
              <span>/day</span>
            </h2>
          </div>
        </div>
        <div className="shared-header-navs">
          {listingNavs.map((nav, index) => (
            <NavLink
              key={index}
              to={nav.link}
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {nav.name}
            </NavLink>
          ))}
        </div>
        <Outlet context={{ vanInfo }} />
      </div>
    </div>
  );
}

export default ListingLayout;
