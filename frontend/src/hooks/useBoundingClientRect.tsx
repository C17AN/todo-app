import { useEffect, useState } from "react";

export const useBoundingClientRect = () => {
  const [boundingClientRect, setBoundingClientRect] = useState<DOMRect | null>(
    null
  );

  useEffect(() => {
    if (!document) return;
    setBoundingClientRect(() => document.body.getBoundingClientRect());
  }, []);

  return boundingClientRect;
};
