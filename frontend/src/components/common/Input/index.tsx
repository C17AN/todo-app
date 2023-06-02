import { HTMLAttributes } from "react";
import style from "./Input.module.scss";

interface Props extends HTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: Props) => {
  return <input {...rest} />;
};

export default Input;
