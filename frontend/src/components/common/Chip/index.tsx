import React, { ReactNode } from "react";
import style from "./Chip.module.scss";

type Props = {
  children: ReactNode;
};

const Chip = ({ children }: Props) => {
  return <div className={style.chip}>{children}</div>;
};

export default Chip;
