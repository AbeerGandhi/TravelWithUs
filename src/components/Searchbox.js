import React from "react";

export const Searchbox = ({ onChangeHandler, placeholder }) => (
  <div className="searchbox-container">
    <input
      type="text"
      onChange={onChangeHandler} // Set the change handler
      placeholder={placeholder}
    />
  </div>
);
