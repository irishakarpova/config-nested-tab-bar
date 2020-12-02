import React from 'react';

export default function GetTime(store) {

    let screenY;
    const handleMouseMove = (e) => {
      screenY = e.screenY;
    }
  
    React.useEffect(() => {
      document.onmousemove = handleMouseMove;
    })
  
    let closeTimeout;
    
    const onMouseOut = (e) => {
      clearTimeout(closeTimeout);
      closeTimeout = setTimeout(() => {
          if (screenY > 255) {
            store.toggleDrawer('top', false)();
          }
      }, 100);
    }

    return onMouseOut;

}