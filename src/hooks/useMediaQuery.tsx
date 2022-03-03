import { useEffect, useState } from "react";

export const useMediaQuery = (media: string) => {
  const [match, setMatch] = useState<boolean>();

  useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);

      setMatch(matches);
    }

    window.addEventListener("resize", changeMatch);

    return () => {
      window.removeEventListener("resize", changeMatch);
    };
  }, [media]);

  return match;
};
