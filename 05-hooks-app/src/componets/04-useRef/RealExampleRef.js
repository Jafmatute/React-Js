import React, { useState } from 'react';
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';

const RealExampleRef = () => {
  const [show, setshow] = useState(false);

  const showHide = () => {
    setshow(!show);
  };
  return (
    <>
      <h1>RealExampleRef</h1>

      {show && <MultipleCustomHooks />}
      <hr />
      <button onClick={showHide} className='btn btn-primary'>
        show / hide
      </button>
    </>
  );
};

export default RealExampleRef;
