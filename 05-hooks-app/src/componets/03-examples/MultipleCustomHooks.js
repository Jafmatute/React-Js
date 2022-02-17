import React from 'react';
import useFetch from '../../hooks/useFetch';

const MultipleCustomHooks = () => {
  const { data, loading, erro } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/1`
  );

  console.log(data);
  return (
    <>
      <h1>Custom Hooks</h1>
    </>
  );
};

export default MultipleCustomHooks;
