import cx from "classnames";
import { HTMLAttributes, ReactNode, forwardRef } from "react";

import style from "./Input.module.scss";

interface Props extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  disabled?: boolean;
  className?: string;
  bottomText?: string | ReactNode;
  children?: ReactNode;
}

const Input = forwardRef<any, Props>(
  (
    { label, error, disabled, className, bottomText, children, ...rest },
    ref
  ) => {
    return (
      <div className={cx(className)}>
        {label && <p className={style["input-label"]}>{label}</p>}
        {children ? (
          children
        ) : (
          <input
            ref={ref}
            className={cx(style.input, error && style["input-error"])}
            disabled={disabled}
            autoComplete="off"
            {...rest}
          />
        )}
        {bottomText &&
          (typeof bottomText === "string" ? (
            <p className={style["bottom-text"]}>{bottomText}</p>
          ) : (
            bottomText
          ))}
      </div>
    );
  }
);

export default Input;
