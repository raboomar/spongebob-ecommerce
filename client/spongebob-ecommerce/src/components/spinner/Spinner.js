import React from "react";
import spinner from "../../assets/spinner.png";
import "./spinner.css";
const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="loading-spinner">
        <img src={spinner} alt="loading" />
      </div>
    </div>
  );
};

export default Spinner;
