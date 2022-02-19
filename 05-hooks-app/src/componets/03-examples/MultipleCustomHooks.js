import React from 'react';
import UseCounter from '../../hooks/UseCounter';
import useFetch from '../../hooks/useFetch';

const MultipleCustomHooks = () => {
  const { counter, increment } = UseCounter(1);

  const { data, loading, error } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {loading ? (
        <div className='alert alert-info text-center'>loading</div>
      ) : (
        <blockquote className='blockquote text-right'>
          <p className='mb-2'>{author}</p>
          <footer className='blockquote-footer'>{quote}</footer>
        </blockquote>
      )}

      <button className='btn btn-primary' onClick={increment}>
        Siguiente quote
      </button>
    </>
  );
};

export default MultipleCustomHooks;
