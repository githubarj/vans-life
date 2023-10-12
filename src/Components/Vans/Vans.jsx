import "./vans.css";
import { filters } from "../../Data/vans";
import SingleVan from "./SingleVan";
import { Await, defer, useLoaderData, useSearchParams } from "react-router-dom";
import { getVans } from "../api";
import { Suspense } from "react";

export function loader() {
  return defer({ vans: getVans() });
}

function Vans() {
  const vansPromiseObject = useLoaderData();

  const renderVans = (
    <Await resolve={vansPromiseObject.vans}> 
      {(vans) => {
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

        return <div className="vans-cards">{vansArray}</div>;
      }}
    </Await>
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const searchFilters = searchParams.get("type");

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
      <Suspense fallback= {<h1>Loading Vans...</h1>} >{renderVans}</Suspense>
    </div>
  );
}

export default Vans;
