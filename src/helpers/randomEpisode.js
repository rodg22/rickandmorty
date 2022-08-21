export const randomEpisode = (array) => {
  const randomPosition = Math.floor(Math.random() * array.length);
  return array[randomPosition];
};
