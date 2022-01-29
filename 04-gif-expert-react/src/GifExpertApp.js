/** @format */

import { useState } from "react";
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {
  const categoriasList = ["One Piece", "Kimetsu No yaiba", "shingeky"];

  const [categorias, setCategorias] = useState(categoriasList);

  const handleAdd = () => {
    // setCategorias([...categorias, "one push"]);
    setCategorias((cats) => [...categorias, "one puch"]);
  };
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory />
      <hr />

      <ol>
        {categorias.map((categoria) => {
          return <li key={categoria}>{categoria}</li>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
