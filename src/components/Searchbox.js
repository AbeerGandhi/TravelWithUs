<<<<<<< HEAD
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
=======
import "./Searchbox.css";
// import {FontAwesomeIcon} from '@fortawesome/free-solid-svg-icons'
export const Searchbox = (props) => {
  return (
    <>
      <div className="sb-container">
        <div className="sbox">
          {/* <i className="fas fa-magnifying-glass"></i> */}
          {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
          <input
            type="search"
            placeholder="Search your destination"
            onChange={props.handleOnChange}
          />
        </div>
      </div>
    </>
  );
};
>>>>>>> defb7a09e09e770f55211b28e9858ffae47b6c88
