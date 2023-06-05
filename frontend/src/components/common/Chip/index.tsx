import React, { ReactNode } from "react";
import style from "./Chip.module.scss";
import cx from "classnames";

type Props = {
  children: ReactNode;
  className?: string;
  type?: "primary";
};

const Chip = ({ children, className, type = "primary" }: Props) => {
  const typeClassName = `chip-${type}`;

  return (
    <div className={cx(style.chip, style[typeClassName], className)}>
      {children}
    </div>
  );
};

export default Chip;
