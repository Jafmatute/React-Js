/** @format */

import { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({ defaultCategorias = [] }) => {
  // const categoriasList = ["One Punch"];

  const [categorias, setCategorias] = useState(defaultCategorias);

  const handleAdd = () => {
    // setCategorias([...categorias, "one push"]);
    setCategorias((cats) => [...cats, 'one puch']);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategorias={setCategorias} />
      <hr />

      <ol>
        {categorias.map((categoria) => (
          <GifGrid key={categoria} categoria={categoria} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
