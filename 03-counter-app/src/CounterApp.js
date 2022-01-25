/** @format */

import React from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  return (
    <React.Fragment>
      <h1>CounterApp</h1>
      <h2>{value}</h2>
    </React.Fragment>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
