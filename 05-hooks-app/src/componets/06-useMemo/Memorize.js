import React, { useState } from 'react';
import UseCounter from '../../hooks/UseCounter';
import Small from './Small';

const Memorize = () => {
  const { counter, increment } = UseCounter();
  const [show, setShow] = useState(true);
  return (
    <>
      <h1>Memorize</h1>
      <hr />

      <h3>
        Counter:
        <Small value={counter} />
      </h3>

      <div className='d-flex'>
        <button onClick={increment} className='btn btn-primary mx-1'>
          +1
        </button>
        <button onClick={() => setShow(!show)} className='btn btn-warning'>
          show / Hide {JSON.stringify(show)}
        </button>
      </div>
    </>
  );
};

export default Memorize;
