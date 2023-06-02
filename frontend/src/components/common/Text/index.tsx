import { ReactNode } from "react";
import style from "./Text.module.scss";

type Props = {
  typography: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "sm";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "li" | "p" | "span" | "div";
  children: ReactNode;
  color?: string;
  className?: string;
  id?: string;
};

const Text = ({
  typography,
  color,
  className,
  id,
  children,
  as = "div",
}: Props) => {
  switch (as) {
    case "h1":
      return (
        <h1
          className={`${style[`text-${typography}`]} ${className}`}
          id={id}
          style={{ color }}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={`${style[`text-${typography}`]} ${className}`}
          id={id}
          style={{ color }}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={`${style[`text-${typography}`]} ${className}`}
          id={id}
          style={{ color }}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={`${style[`text-${typography}`]} ${className}`}
          id={id}
          style={{ color }}
        >
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={`${style[`text-${typography}`]} ${className}`}
          id={id}
          style={{ color }}
        >
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6
          className={`${style[`text-${typography}`]} ${className}`}
          id={id}
          style={{ color }}
        >
          {children}
        </h6>
      );
    case "p":
      return (
        <p
          className={`${style[`text-${typography}`]} ${className}`}
          id={id}
          style={{ color }}
        >
          {children}
        </p>
      );
    case "span":
      return (
        <span
          className={`${style[`text-${typography}`]} ${className}`}
          id={id}
          style={{ color }}
        >
          {children}
        </span>
      );
    case "li":
      return (
        <li
          className={`${style[`text-${typography}`]} ${className}`}
          id={id}
          style={{ color }}
        >
          {children}
        </li>
      );
    default:
      return (
        <div
          className={`${style[`text-${typography}`]} ${className}`}
          id={id}
          style={{ color }}
        >
          {children}
        </div>
      );
  }
};

export default Text;
