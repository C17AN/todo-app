import { HTMLAttributes } from "react";
import style from "./Checkbox.module.scss";

interface Props extends HTMLAttributes<HTMLInputElement> {}

const Checkbox = ({}: Props) => {
  return <input type="checkbox" className={style.checkbox} />;
};

export default Checkbox;
