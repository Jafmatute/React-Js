/** @format */

import React from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  //HandleAdd
  const handleAdd = (e) => {
    console.log(e);
  };

  return (
    <React.Fragment>
      <h1>CounterApp</h1>
      <h2>{value}</h2>

      <button onClick={handleAdd}>+1</button>
    </React.Fragment>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
