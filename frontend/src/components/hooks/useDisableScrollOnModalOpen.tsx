import { LAYOUT_ID } from "@/constants/ui";
import { useEffect } from "react";

export const useDisableScrollOnModalOpen = (open: boolean) => {
  useEffect(() => {
    const layout = document.getElementById(LAYOUT_ID);
    if (open) {
      if (layout) {
        layout.style.maxHeight = "100vh";
      }
    } else {
      if (layout) {
        layout.style.maxHeight = "100%";
      }
    }
  }, [open]);
};
