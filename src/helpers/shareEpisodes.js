export const shareEpisodes = (arrayPosicional, arrayIterado) => {
  const newArray = [...arrayPosicional, ...arrayIterado];
  const newSet = new Set(newArray);
  let episodiosCompartidos = newArray.length - newSet.size;
  return episodiosCompartidos;
};
