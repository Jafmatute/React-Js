import React from 'react';
import UseForm from '../../hooks/UseForm';
import './effects.css';

const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = UseForm({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formValues);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>
      <hr />

      <div className='form form-group mb-4'>
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
        <input
          type='password'
          name='password'
          className='form-control mt-2'
          placeholder='Password'
          autoComplete='off'
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        Guardar
      </button>
    </form>
  );
};

export default FormWithCustomHook;
