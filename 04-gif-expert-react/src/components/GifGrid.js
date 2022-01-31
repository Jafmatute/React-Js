/** @format */

import React, { useState, useEffect } from "react";
import GifGridItem from "./GifGridItem";

export const GifGrid = ({ categoria }) => {
  const [images, setImages] = useState([]);

  const getGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=kimetsu&limit=10&api_key=YAdYJxPGMmsk51wppqHMVWOuGMjlxYLz`;
    const rsp = await fetch(url);
    const { data } = await rsp.json();

    const gits = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });

    setImages(gits);
  };

  useEffect(() => {
    getGif();
  }, []);

  return (
    <>
      <ol>
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </ol>
    </>
  );
};

export default GifGrid;
