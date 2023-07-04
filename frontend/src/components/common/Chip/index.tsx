import cx from "classnames";
import React, { ReactNode } from "react";

import style from "./Chip.module.scss";

type Props = {
  children: ReactNode;
  className?: string;
  backgroundColor?: string;
  color?: string;
  type?: "primary";
};

const Chip = ({
  children,
  className,
  type = "primary",
  backgroundColor,
  color,
}: Props) => {
  const typeClassName = `chip-${type}`;

  return (
    <div
      className={cx(style.chip, style[typeClassName], "chip", className)}
      style={{ backgroundColor, color }}
    >
      {children}
    </div>
  );
};

export default Chip;
