export const viewQuery = () => {
  let minimalWidth = 915;
  let mediaQuery = window.matchMedia(`(min-width: ${minimalWidth}px)`);

  const responsiveContent = (mediaquery) => {
    if (mediaquery.matches) {
      //Lo que pasa en Desktop
      console.log("Desktop");
    } else {
      //Lo que pasa en Mobile
      console.log("Mobile");
    }
  };

  mediaQuery.addListener(responsiveContent);
  responsiveContent(mediaQuery);
};
