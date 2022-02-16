import React from 'react';
import UseCounter from '../../hooks/UseCounter';

import './counter.css';

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = UseCounter();

  return (
    <>
      <h1>Counter with hook: {state}</h1>
      <hr />

      <div>
        <button onClick={() => increment(2)} className='btn btn-primary'>
          +1
        </button>
        <button onClick={() => decrement(1)} className='btn btn-danger'>
          -1
        </button>
        <button onClick={reset} className='btn btn-warning'>
          reset
        </button>
      </div>
    </>
  );
};

export default CounterWithCustomHook;
