export const randomEpisode = (array) => {
  if (array !== undefined) {
    const randomPosition = Math.floor(Math.random() * array.length);
    return array[randomPosition];
  }
};
