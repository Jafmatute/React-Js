import React from 'react';

const ShowIncrement = React.memo(({ increment }) => {
  console.log(`Me volví a generar`);

  return (
    <>
      <button onClick={() => increment(5)} className='btn btn-outline-primary'>
        Incrementar
      </button>
    </>
  );
});

export default ShowIncrement;
