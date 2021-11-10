import React from "react";

const SearchBox = ({ searchChange, searchField }) => {
  return (
    <div className="pa2 tc">
      <h1>ROBOFRIENDS SEARCHBOX</h1>
      <input
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
