import React from "react";
import "./SearchBar.css";
import Arrow from "../../assets/arrow.png";

function SearchBar() {
  return (
    <>
      <div classname="button-trip-container">
        <button className="one-way">One Way</button>
        <button className="round-trip">Round Trip</button>
      </div>
      <div className="search-bar-container">
        <div className="search-form-container">
          <div className="form-group form-1">
            <label htmlFor="from">From</label>
            <input
              type="text"
              name="search"
              className="form-control input"
              id="from"
              placeholder="Search place"
            />
          </div>
          <div className="arrow">
            <img src={Arrow} alt=""></img>
          </div>
          <div className="form-group form-1">
            <label htmlFor="from">From</label>
            <input
              type="text"
              name="search"
              className="form-control input"
              id="from"
              placeholder="Search place"
            />
          </div>
          <div className="form-group form-2">
            <label htmlFor="date">Departure Date</label>
            <input
              type="date"
              name="date"
              className="form-control input"
              id="date"
            />
          </div>
          <div className="form-group form-3">
            <label htmlFor="date">Return Date</label>
            <input
              type="date"
              name="date"
              className="form-control input"
              id="date"
            />
          </div>
          <div className="form-group form-4">
            <label htmlFor="passenger">Passenger</label>
            <input
              type="text"
              name="passenger"
              className="form-control input"
              id="passenger"
              placeholder="Select passenger"
            />
          </div>

          <button className="search-button">Search</button>
        </div>
        <div className="shadow-search"></div>
      </div>
    </>
  );
}

export default SearchBar;
