import { useEffect, useState } from "react";

type Screen = {
  width: number;
  height: number;
};

export const useScreenSize = (): Screen | null => {
  const [screenSize, setScreenSize] = useState<Screen | null>({
    height: null,
    width: null,
  });

  useEffect(() => {
    if (!document) return;
    setScreenSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  return screenSize;
};
