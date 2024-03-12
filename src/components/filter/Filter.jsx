import { useState } from "react";
import "./filter.scss";

function Filter({type, location, minPrice, maxPrice}) {

  // const [filters, setFilters] = useState({type: type, location: location, minPrice: minPrice, maxPrice: maxPrice});
  // console.log(filters);

  return (
    <div className="filter">
      <h1>
        Search results for <b>{location === null ? "All" : location}</b>
      </h1>

      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            defaultValue={location === null ? "" : location}
            placeholder="City Location"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type" defaultValue={type}>
            <option value="">All</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="">All</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            defaultValue={minPrice === null ? "" : minPrice}
            placeholder="All"
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="text"
            id="maxPrice"
            name="maxPrice"
            defaultValue={maxPrice === null ? "" : maxPrice}
            placeholder="All"
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="All"
          />
        </div>

        <button>
          <img src="/search.png" alt="" />
        </button>

      </div>
    </div>
  );
}

export default Filter;
