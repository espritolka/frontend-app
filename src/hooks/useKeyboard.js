import {useEffect} from 'react';

export const useKeyboard = (onEnter) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.key === 'Enter' || event.keyCode === 13) && !event.shiftKey && onEnter) {
        event.preventDefault();
        onEnter();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return function cleanup() {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onEnter]);
};
