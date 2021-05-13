import React from "react";
import { Store } from "../store/appBarStore";
import { MouseEvent } from "react";

const GetTime = (store: Store) => {
  let screenY: number;

  const handleMouseMove = (event: globalThis.MouseEvent) => {
    screenY = event.screenY;
  };

  React.useEffect(() => {
    document.onmousemove = handleMouseMove;
  });

  let closeTimeout: ReturnType<typeof setTimeout>;

  const onMouseOut = () => {
    clearTimeout(closeTimeout);
    closeTimeout = setTimeout(() => {
      if (screenY > 255) {
        store.toggleDrawer("top", false);
      }
    }, 100);
  };

  return onMouseOut;
};

export default GetTime;
