import { ReactNode, memo } from "react";

import style from "./Text.module.scss";

type Props = {
  typography:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "sm"
    | "section-title"
    | "section-description";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "li" | "p" | "span" | "div";
  fontWeight?:
    | "extrabold"
    | "bold"
    | "semibold"
    | "medium"
    | "regular"
    | "light";
  children: ReactNode;
  color?: string;
  className?: string;
  id?: string;
};

const Text = memo(
  ({
    typography,
    color,
    fontWeight,
    className,
    id,
    children,
    as = "div",
  }: Props) => {
    const fontWeightValue = () => {
      switch (fontWeight) {
        case "extrabold":
          return 800;
        case "bold":
          return 700;
        case "semibold":
          return 600;
        case "regular":
          return 400;
        case "light":
          return 300;
        default:
          return 400;
      }
    };

    switch (as) {
      case "h1":
        return (
          <h1
            className={`${style[`text-${typography}`]} ${className}`}
            id={id}
            style={{ color, fontWeight: fontWeightValue() }}
          >
            {children}
          </h1>
        );
      case "h2":
        return (
          <h2
            className={`${style[`text-${typography}`]} ${className}`}
            id={id}
            style={{ color, fontWeight: fontWeightValue() }}
          >
            {children}
          </h2>
        );
      case "h3":
        return (
          <h3
            className={`${style[`text-${typography}`]} ${className}`}
            id={id}
            style={{ color, fontWeight: fontWeightValue() }}
          >
            {children}
          </h3>
        );
      case "h4":
        return (
          <h4
            className={`${style[`text-${typography}`]} ${className}`}
            id={id}
            style={{ color, fontWeight: fontWeightValue() }}
          >
            {children}
          </h4>
        );
      case "h5":
        return (
          <h5
            className={`${style[`text-${typography}`]} ${className}`}
            id={id}
            style={{ color, fontWeight: fontWeightValue() }}
          >
            {children}
          </h5>
        );
      case "h6":
        return (
          <h6
            className={`${style[`text-${typography}`]} ${className}`}
            id={id}
            style={{ color, fontWeight: fontWeightValue() }}
          >
            {children}
          </h6>
        );
      case "p":
        return (
          <p
            className={`${style[`text-${typography}`]} ${className}`}
            id={id}
            style={{ color, fontWeight: fontWeightValue() }}
          >
            {children}
          </p>
        );
      case "span":
        return (
          <span
            className={`${style[`text-${typography}`]} ${className}`}
            id={id}
            style={{ color, fontWeight: fontWeightValue() }}
          >
            {children}
          </span>
        );
      case "li":
        return (
          <li
            className={`${style[`text-${typography}`]} ${className}`}
            id={id}
            style={{ color, fontWeight: fontWeightValue() }}
          >
            {children}
          </li>
        );
      default:
        return (
          <div
            className={`${style[`text-${typography}`]} ${className}`}
            id={id}
            style={{ color, fontWeight: fontWeightValue() }}
          >
            {children}
          </div>
        );
    }
  }
);

export default Text;
