/** @format */

import React from "react";

export const GifGrid = ({ categoria }) => {
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

    console.log(gits);
  };

  getGif();
  return (
    <>
      <h4>{categoria} </h4>
    </>
  );
};

export default GifGrid;
