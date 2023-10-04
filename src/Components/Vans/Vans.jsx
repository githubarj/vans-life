import "./vans.css";
import { filters } from "../../Data/vans";
import SingleVan from "./SingleVan";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
function Vans() {
  const [vans, setVans] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchFilters = searchParams.get("type");

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vansList = searchFilters
    ? vans.filter((item) => item.type === searchFilters)
    : vans;
  const vansArray = vansList.map((item) => (
    <SingleVan key={item.id} {...item} />
  ));

  const filtersArrray = filters.map((item, index) => (
    <Link key={index} to={item.link}>
      <button className="filters-text filter-buttons ">{item.name}</button>
    </Link>
  ));

  return (
    <div className="vans-container">
      <div className="vans-header">
        <h1 className="heading-medium">Explore our van options</h1>
        <div className="filtering">
          <div className="filter-array"> {filtersArrray}</div>
          <Link className="filters-text clear-filters" to=".">
            Clear Filters
          </Link>
        </div>
      </div>
      <div className="vans-cards">{vansArray}</div>
    </div>
  );
}

export default Vans;
