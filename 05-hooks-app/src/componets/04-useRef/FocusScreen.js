import React, { useRef } from 'react';

const FocusScreen = () => {
  const inputRef = useRef();

  console.log(inputRef);

  const handleClick = () => {
    inputRef.current.select();
    // document.querySelector('input').select();
  };
  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        className='form form-control mb-3'
        placeholder='name'
      />
      <button className='btn btn-info' onClick={handleClick}>
        Focus
      </button>
    </>
  );
};

export default FocusScreen;
