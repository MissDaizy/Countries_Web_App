import React, { useState } from "react";
import "../SearchBox.scss";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-box">
      <span>
        <input
          className="search-box__input"
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={handleChange}
        />
      </span>
    </div>
  );
};

export default SearchBox;
