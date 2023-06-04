import { HTMLAttributes, ReactNode, forwardRef } from "react";
import cx from "classnames";
import style from "./TextArea.module.scss";

interface Props extends HTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: boolean;
  disabled?: boolean;
  className?: string;
  bottomText?: string | ReactNode;
}

const TextArea = forwardRef<any, Props>(
  ({ label, error, disabled, className, bottomText, ...rest }, ref) => {
    return (
      <>
        {label && <p className={style["input-label"]}>{label}</p>}
        <textarea
          ref={ref}
          className={cx(
            style.textarea,
            error && style["input-error"],
            className
          )}
          disabled={disabled}
          autoComplete="off"
          {...rest}
        />
        {bottomText &&
          (typeof bottomText === "string" ? <p>{bottomText}</p> : bottomText)}
      </>
    );
  }
);

export default TextArea;
