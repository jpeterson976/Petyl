import React, { useState, useEffect } from "react";

const SearchParams = () => {
  // First item is the string, second item is the updater function
  const [location, setLocation] = useState("Atlanta, GA"); // This is a hook

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeHolder="location"
            onChange={event => setLocation(event.target.value)} // weeny tiney function
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
