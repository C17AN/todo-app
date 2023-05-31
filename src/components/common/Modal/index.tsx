import { ReactNode } from "react";
import style from "./Modal.module.scss";
import classNames from "classnames/bind";
import Button from "../Button";
import styled from "@emotion/styled";

const cx = classNames.bind(style);

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
  confirmButton?: ReactNode;
};

const Modal = ({ open, onClose, title, children, confirmButton }: Props) => {
  return (
    <div className={cx("backdrop")} onClick={onClose}>
      <div className={cx("modal")}>
        {title && <h4 className={cx("modal-title")}>{title}</h4>}
        {children}
        {confirmButton ? <ConfirmButton>확인</ConfirmButton> : null}
      </div>
    </div>
  );
};

const ConfirmButton = styled(Button)`
  margin-top: 12px;
`;

export default Modal;
