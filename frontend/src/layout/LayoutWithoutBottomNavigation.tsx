import { LAYOUT_ID } from "@/constants/ui";
import className from "classnames/bind";
import { HTMLMotionProps, motion } from "framer-motion";
import { ReactNode } from "react";

import style from "./Layout.module.scss";

const cx = className.bind(style);

interface Props extends HTMLMotionProps<"div"> {
  children?: ReactNode;
}

const LayoutWithoutBottomNavigation = ({ children, ...rest }: Props) => {
  return (
    <motion.div className={cx("layout")} id={LAYOUT_ID} {...rest}>
      {children}
    </motion.div>
  );
};

export default LayoutWithoutBottomNavigation;
