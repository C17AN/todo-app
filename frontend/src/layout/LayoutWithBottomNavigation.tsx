import { ReactNode } from "react";
import BottomNavigation from "@/components/common/BottomNavigation";
import style from "./Layout.module.scss";
import className from "classnames/bind";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { LAYOUT_ID } from "@/constants/ui";

const cx = className.bind(style);

interface Props extends HTMLMotionProps<"div"> {
  children?: ReactNode;
}

const LayoutWithBottomNavigation = ({ children, ...rest }: Props) => {
  return (
    <AnimatePresence>
      <motion.div className={cx("layout")} id={LAYOUT_ID} {...rest}>
        {children}
      </motion.div>
      <BottomNavigation />
    </AnimatePresence>
  );
};

export default LayoutWithBottomNavigation;
