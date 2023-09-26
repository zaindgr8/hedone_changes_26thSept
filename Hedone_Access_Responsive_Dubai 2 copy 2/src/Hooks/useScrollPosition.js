import { useState, useEffect } from 'react';

function useScrollPosition(threshold = 100) {
  const [scrollY, setScrollY] = useState(0);
  const [change, setChange] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (window.scrollY > threshold) {
        setChange(true);
      } else {
        setChange(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return { scrollY, change };
}

export default useScrollPosition;
