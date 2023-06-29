import { useGetBoundingClientRect } from "@/hooks/useBoundingClientRect";
import { useDisableScrollOnModalOpen } from "@/hooks/useDisableScrollOnModalOpen";
import { useScreenSize } from "@/hooks/useScreenSize";
import styled from "@emotion/styled";
import { HiOutlineX } from "@react-icons/all-files/hi/HiOutlineX";
import classNames from "classnames/bind";
import { AnimatePresence, Variants, motion, useAnimate } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

import Button from "../Button";
import style from "./Modal.module.scss";

const cx = classNames.bind(style);

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
  confirmButton?: ReactNode;
  type?: "normal" | "full";
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
    y: 40,
    borderRadius: 8,
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

const Modal = ({
  open,
  onClose,
  title,
  children,
  confirmButton,
  type,
}: Props) => {
  useDisableScrollOnModalOpen(open);
  const fullModal = type === "full";
  const { width: screenWidth, height: screenHeight } = useScreenSize();

  return (
    <Portal>
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
            <motion.div className={cx("modal-container")} layout>
              {!fullModal ? (
                <motion.div
                  layoutId="default"
                  variants={modalVariants}
                  initial="initial"
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit="close"
                  className={cx("modal")}
                >
                  {fullModal && (
                    <HiOutlineX
                      className={cx("close-icon")}
                      onClick={onClose}
                    />
                  )}
                  {title && <h4 className={cx("modal-title")}>{title}</h4>}
                  {children}
                  {confirmButton ? (
                    <ConfirmButton size="small" onClick={() => {}}>
                      확인
                    </ConfirmButton>
                  ) : null}
                </motion.div>
              ) : (
                <motion.div
                  layoutId="full"
                  variants={modalVariants}
                  initial="initial"
                  animate={{
                    opacity: 1,
                    y: 0,
                    width: screenWidth,
                    height: screenHeight,
                    borderRadius: fullModal ? 0 : 8,
                  }}
                  exit="close"
                  className={cx("modal")}
                >
                  {fullModal && (
                    <HiOutlineX
                      className={cx("close-icon")}
                      onClick={onClose}
                    />
                  )}
                  {title && <h4 className={cx("modal-title")}>{title}</h4>}
                  {children}
                  {confirmButton ? (
                    <ConfirmButton size="small" onClick={() => {}}>
                      확인
                    </ConfirmButton>
                  ) : null}
                </motion.div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Portal>
  );
};

const ConfirmButton = styled(Button)`
  display: block;
  margin-top: 12px;
  margin-left: auto;
`;

const Portal = ({ children }: { children: ReactNode }) => {
  const el = document.getElementById("modal-root") as HTMLElement;
  return createPortal(children, el);
};

export default Modal;
