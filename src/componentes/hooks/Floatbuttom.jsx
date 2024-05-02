import { useState, useEffect } from 'react';

function useFloatingButton(scrollPositionThreshold) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollPositionThreshold) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPositionThreshold]);

  return showButton;
}

export default useFloatingButton;