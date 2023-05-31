import React, { ReactNode } from "react";
import style from "./Modal.module.scss";

type Props = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ open, onClose, children }: Props) => {
  return (
    <div className={style["backdrop"]}>
      <div>{children}</div>
    </div>
  );
};

export default Modal;
