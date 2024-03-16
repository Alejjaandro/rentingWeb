import "./filter.scss";
import { useNavigate } from "react-router-dom";

function Filter({ filters }) {

  const navigate = useNavigate();

  const updateFilters = (newFilters) => {
    // Get the current search parameters from the URL
    const currentSearchParams = new URLSearchParams(location.search);

    // Update the search parameters with the new filters
    Object.keys(newFilters).forEach(key => {
      currentSearchParams.set(key, newFilters[key]);
    });

    // Update URL with the new search parameters without navigating away
    navigate(`?${currentSearchParams.toString()}`, { replace: true });
  };

  return (
    <div className="filter">
      <h1>
        Search results for <b>{filters.location === null ? "All" : filters.location}</b>
      </h1>

      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            defaultValue={filters.location === null ? "" : filters.location}
            placeholder="City Location"
            onChange={(e) => updateFilters({ location: e.target.value })}
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type" defaultValue={filters.type} onChange={(e) => updateFilters({ type: e.target.value })}>
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
            defaultValue={filters.minPrice === "null" ? "" : filters.minPrice}
            placeholder="All"
            onChange={(e) => updateFilters({ minPrice: e.target.value })}
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="text"
            id="maxPrice"
            name="maxPrice"
            defaultValue={filters.maxPrice === "null" ? "" : filters.maxPrice}
            placeholder="All"
            onChange={(e) => updateFilters({ maxPrice: e.target.value })}
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="All"
            defaultValue={filters.bedroom === null ? "" : filters.bedroom}
            onChange={(e) => updateFilters({ bedroom: e.target.value })}
          />
        </div>

      </div>
    </div>
  );
}

export default Filter;
