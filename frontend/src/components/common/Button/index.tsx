import { PropsWithChildren } from "react";
import style from "./Button.module.scss";
import cx from "classnames";
import { Variants, motion } from "framer-motion";
import colors from "material-colors";

interface Props {
  size?: "tiny" | "small" | "medium" | "large" | "cta";
  type?: "primary" | "disabled";
  className?: string;
  onClick: () => void;
}

const variants: Variants = {
  hover: {
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
    scale: 0.992,
    backgroundColor: colors.indigo["400"],
  },
};

const Button = ({
  children,
  className,
  type = "primary",
  size = "medium",
  onClick,
}: PropsWithChildren<Props>) => {
  const buttonSize = `button-${size}`;
  const buttonType = `button-${type}`;

  return (
    <motion.button
      variants={variants}
      whileHover={"hover"}
      className={cx(
        style.button,
        style[buttonSize],
        style[buttonType],
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;
