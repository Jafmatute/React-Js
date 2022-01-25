/** @format */

import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 10 }) => {
  const [counter, setCounter] = useState(value); //[]

  //HandleAdd
  const handleAdd = (e) => {
    console.log(e);
    // setCounter(counter + 1);

    setCounter((c) => c + 1);
  };

  const handleReset = () => {
    setCounter(value);
  };
  const handleDecrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }

    return;
  };

  return (
    <React.Fragment>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrease}>-1</button>
    </React.Fragment>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
