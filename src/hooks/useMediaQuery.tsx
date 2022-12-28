import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string) => {
  const [match, setMatch] = useState<MediaQueryList | null>(null);

  useEffect(() => {
    function changeMatch() {
      const matches = window.matchMedia(query);
      setMatch(matches);
    }

    changeMatch();

    window.addEventListener('resize', changeMatch);

    return () => {
      window.removeEventListener('resize', changeMatch);
    };
  }, [query]);

  return match?.matches;
};
