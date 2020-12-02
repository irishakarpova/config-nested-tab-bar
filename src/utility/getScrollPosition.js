import { useState, useEffect } from 'react';

function getScrollPosition() {
  const position = window.pageYOffset;
  return position;
}

export default function useScrollPosition() {
  const [scrollPosition, setSrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll(){
      setSrollPosition(getScrollPosition());
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  })

  return scrollPosition;
}

