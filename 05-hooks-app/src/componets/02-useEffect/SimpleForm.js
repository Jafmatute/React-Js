import React, { useEffect, useState } from 'react';
import './effects.css';

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log('e');
  }, []);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };
  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className='form form-group'>
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='Nombre'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='email'
          className='form-control mt-2'
          placeholder='Email'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default SimpleForm;
