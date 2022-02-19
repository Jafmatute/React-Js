import React, { useLayoutEffect, useRef, useState } from 'react';
import UseCounter from '../../hooks/UseCounter';
import useFetch from '../../hooks/useFetch';

import './layaout.css';

const LayaoutEffect = () => {
  const { counter, increment } = UseCounter(1);

  const { data, loading, error } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!data && data[0];

  const refPtag = useRef(true);

  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    setBoxSize(refPtag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <>
      <h1>LayaoutEffect</h1>
      <hr />

      <blockquote className='blockquote text-right'>
        <p ref={refPtag} className='mb-0'>
          {quote}
        </p>
      </blockquote>

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>
      <button className='btn btn-primary' onClick={increment}>
        Siguiente quote
      </button>
    </>
  );
};

export default LayaoutEffect;
