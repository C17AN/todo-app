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
  disabled?: boolean;
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
  disabled,
}: PropsWithChildren<Props>) => {
  const buttonSize = `button-${size}`;
  const buttonType = `button-${type}`;

  const handleClick = () => {
    if (disabled) return;
    onClick();
  };

  return (
    <motion.button
      variants={variants}
      whileHover={!disabled ? "hover" : undefined}
      className={cx(
        style.button,
        style[buttonSize],
        style[buttonType],
        className
      )}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;
