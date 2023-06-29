import { useEffect } from "react";

export const useDisableScrollOnModalOpen = (open: boolean) => {
  useEffect(() => {
    const body = document.body;
    if (open) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "unset";
    }
  }, [open]);
};
