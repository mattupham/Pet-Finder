import React from "react";

const SearchParams = () => {
  const location = "Seattle, WA";
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input id="location" value={location} placeholder="Location"></input>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
