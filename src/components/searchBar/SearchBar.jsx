import { useState } from "react";
import "./searchBar.scss";
import { Link, useNavigate } from "react-router-dom";

const types = ["buy", "rent"];

function SearchBar() {
  const navigate = useNavigate();

  const [query, setQuery] = useState({
    type: "buy",
    location: null,
    minPrice: null,
    maxPrice: null,
  });

  const searchProperties = (e) => {
    e.preventDefault();
    
    // Navigate to the list page
    if(query.location === null && query.minPrice === null && query.maxPrice === null) {
      return navigate("/list?type="+query.type)
    } else {
      navigate("/list?type="+query.type+"&location="+query.location+"&minPrice="+query.minPrice+"&maxPrice="+query.maxPrice);
    }
  }

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setQuery((prev) => ({ ...prev, type: type }))}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input
          type="text"
          name="location"
          placeholder="City Location"
          onChange={(e) => setQuery((prev) => ({ ...prev, location: e.target.value }))}
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
          onChange={(e) => setQuery((prev) => ({ ...prev, minPrice: e.target.value }))}
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
          onChange={(e) => setQuery((prev) => ({ ...prev, maxPrice: e.target.value }))}
        />
        <Link onClick={(e)=> searchProperties(e)}>
          <img src="/search.png" alt="" />
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;