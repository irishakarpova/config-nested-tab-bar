import React from 'react';

const GetTime = store => {
  let screenY;

  const handleMouseMove = event => {
    screenY = event.screenY;
  };

  React.useEffect(() => {
    document.onmousemove = handleMouseMove;
  });
  let closeTimeout;

  const onMouseOut = () => {
    clearTimeout(closeTimeout);
    closeTimeout = setTimeout(() => {
      if (screenY > 255) {
        store.toggleDrawer('top', false);
      }
    }, 100);
  };

  return onMouseOut;
};

export default GetTime;