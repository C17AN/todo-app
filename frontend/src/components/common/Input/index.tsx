import { HTMLAttributes } from "react";
import style from "./Input.module.scss";
import classNames from "classnames";

const cx = classNames.bind(style);

interface Props extends HTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = ({ error, ...rest }: Props) => {
  const errorClassName = error && "input-error";
  return <input className={cx("input", errorClassName)} {...rest} />;
};

export default Input;
