import { ReactNode } from "react";
import style from "./Modal.module.scss";
import classNames from "classnames/bind";
import Button from "../Button";
import styled from "@emotion/styled";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { useDisableScrollOnModalOpen } from "@/components/hooks/useDisableScrollOnModalOpen";

const cx = classNames.bind(style);

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
  confirmButton?: ReactNode;
};

const backdropVariants: Variants = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  },
  close: {
    opacity: 0,
  },
};

const modalVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
    },
  },
  close: {
    opacity: 0,
    y: 20,
  },
};

const Modal = ({ open, onClose, title, children, confirmButton }: Props) => {
  useDisableScrollOnModalOpen(open);

  return (
    <>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              variants={backdropVariants}
              initial="initial"
              animate="open"
              exit="close"
              className={cx("backdrop")}
              onClick={onClose}
            />
            <div className={cx("modal-container")}>
              <motion.div
                variants={modalVariants}
                initial="initial"
                animate="open"
                exit="close"
                className={cx("modal")}
              >
                {title && <h4 className={cx("modal-title")}>{title}</h4>}
                {children}
                {confirmButton ? (
                  <ConfirmButton size="small" onClick={() => {}}>
                    확인
                  </ConfirmButton>
                ) : null}
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const ConfirmButton = styled(Button)`
  display: block;
  margin-top: 12px;
  margin-left: auto;
`;

export default Modal;
