/** @format */

export const getGif = async (categoria) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    categoria
  )}&limit=10&api_key=YAdYJxPGMmsk51wppqHMVWOuGMjlxYLz`;
  const rsp = await fetch(url);
  const { data } = await rsp.json();

  const gits = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gits;
};
