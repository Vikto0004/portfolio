import { useEffect } from 'react';

export function useNoScroll(active: boolean) {
  useEffect(() => {
    if (active) {
      document.documentElement.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
    }

    return () => {
      document.documentElement.classList.remove('no-scroll');
    };
  }, [active]);
}
