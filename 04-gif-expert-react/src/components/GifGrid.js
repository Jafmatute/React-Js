/** @format */

import React, { useState, useEffect } from "react";
import { getGif } from "../helpers/getGifs";
import GifGridItem from "./GifGridItem";

export const GifGrid = ({ categoria }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGif(categoria).then(setImages);
  }, [categoria]);

  return (
    <>
      <h3> {categoria} </h3>
      <div className="card-grid">
        <ol>
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </ol>
      </div>
    </>
  );
};

export default GifGrid;
