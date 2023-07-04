import { Priority, Todo } from "@/models/Todo";
import colors from "material-colors";
import { useMemo } from "react";

export const usePriorityChipMetadata = (priority?: Priority) => {
  if (priority) {
    const getChipMetadata: (priority: Todo["priority"]) => {
      color: string;
      backgroundColor: string;
      text: string;
    } | null = (priority) => {
      if (!priority) return null;
      switch (priority) {
        case Priority.매우_낮음:
          return {
            backgroundColor: colors.amber[300],
            color: colors.white,
            text: "매우 낮음",
          };
        case Priority.낮음:
          return {
            backgroundColor: colors.cyan[300],
            color: colors.white,
            text: "낮음",
          };
        default:
          return null;
      }
    };

    const chipMetadata = useMemo(() => getChipMetadata(priority), [priority]);
    return chipMetadata;
  }
  return null;
};
