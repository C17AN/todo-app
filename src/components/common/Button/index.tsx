import { HTMLAttributes } from "react";
import style from "./Button.module.scss";
import classNames from "classnames/bind";
import { Variants, motion } from "framer-motion";
import colors from "material-colors";

const cx = classNames.bind(style);

interface Props extends HTMLAttributes<HTMLButtonElement> {
  size?: "tiny" | "small" | "medium" | "large" | "cta";
  type?: "primary" | "disabled";
}

const variants: Variants = {
  hover: {
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
    scale: 0.992,
    backgroundColor: colors.teal["400"],
  },
};

const Button = ({ children, type = "primary", size = "medium" }: Props) => {
  const buttonSize = `button-${size}`;
  const buttonType = `button-${type}`;

  return (
    <motion.button
      variants={variants}
      whileHover={"hover"}
      className={cx("button", buttonSize, buttonType)}
    >
      {children}
    </motion.button>
  );
};

export default Button;
