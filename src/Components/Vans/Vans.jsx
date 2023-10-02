import "./vans.css";
import { filters } from "../../Data/vans";
import SingleVan from "./SingleVan";
import { useEffect } from "react";
import { useState } from "react";
function Vans() {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const filtersArrray = filters.map((item, index) => (
    <button className="filters-text filter-buttons " key={index}>
      {item}
    </button>
  ));

  const vansArray = vans.map((item) => <SingleVan key={item.id} {...item} />);

  return (
    <div className="vans-container">
      <div className="vans-header">
        <h1 className="heading-medium">Explore our van options</h1>
        <div className="filtering">
          <div className="filter-array"> {filtersArrray}</div>
          <p className="filters-text clear-filters">Clear Filters</p>
        </div>
      </div>
      <div className="vans-cards">{vansArray}</div>
    </div>
  );
}

export default Vans;
