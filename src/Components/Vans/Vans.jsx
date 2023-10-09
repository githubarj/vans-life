import "./vans.css";
import { filters } from "../../Data/vans";
import SingleVan from "./SingleVan";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { getVans } from "../api";

export function loader() {
  return getVans();
}

function Vans() {
  const vans = useLoaderData();

  const [searchParams, setSearchParams] = useSearchParams();
  const searchFilters = searchParams.get("type");

  const vansList = searchFilters
    ? vans.filter((item) => item.type === searchFilters)
    : vans;

  const vansArray = vansList.map((item) => (
    <SingleVan
      key={item.id}
      {...item}
      searchParams={searchParams}
      searchFilters={searchFilters}
    />
  ));

  function handFilters(key, value) {
    setSearchParams((prevParams) => {
      value === null ? prevParams.delete(key) : prevParams.set(key, value);
      return prevParams;
    });
  }

  const filtersArrray = filters.map((item, index) => (
    <button
      key={index}
      className={`filters-text filter-buttons ${item.name.toLowerCase()} 
      ${searchFilters === item.name.toLowerCase() ? "selected" : null} 
      `}
      onClick={() => handFilters("type", item.name.toLowerCase())}
    >
      {item.name}
    </button>
  ));

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <div className="vans-container">
      <div className="vans-header">
        <h1 className="heading-medium">Explore our van options</h1>
        <div className="filtering">
          <div className="filter-array"> {filtersArrray}</div>
          {searchFilters && (
            <button
              className="filters-text clear-filters"
              onClick={() => handFilters("type", null)}
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>
      <div className="vans-cards">{vansArray}</div>
    </div>
  );
}

export default Vans;
