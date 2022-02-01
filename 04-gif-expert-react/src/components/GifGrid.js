/** @format */

import React, { useState, useEffect } from "react";
// import { getGif } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import GifGridItem from "./GifGridItem";

export const GifGrid = ({ categoria }) => {
  // const [images, setImages] = useState([]);

  const { loading } = useFetchGifs();

  // useEffect(() => {
  //   getGif(categoria).then(setImages);
  // }, [categoria]);

  return (
    <>
      <h3> {categoria} </h3>
      {loading ? "cargando" : "data"}
      {/* <div className="card-grid">
        <ol>
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </ol>
      </div> */}
    </>
  );
};

export default GifGrid;
