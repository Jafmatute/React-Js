import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {
  const [state, setState] = useState({
    counter: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter, counter2 } = state;

  return (
    <>
      <h1>Counter {counter}</h1>
      <h1>Counter2 {counter2}</h1>
      <hr />

      <button
        className='btn btn-primary'
        onClick={() => {
          setState({ ...state, counter: counter + 1 });
        }}
      >
        {' '}
        +1{' '}
      </button>
    </>
  );
};

export default CounterApp;
