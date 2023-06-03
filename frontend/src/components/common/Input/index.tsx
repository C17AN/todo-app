import { HTMLAttributes } from "react";
import style from "./Input.module.scss";
import classNames from "classnames";
import Text from "../Text";
import colors from "material-colors";

const cx = classNames.bind(style);

interface Props extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
}

const Input = ({ label, error, ...rest }: Props) => {
  const errorClassName = error && "input-error";
  return (
    <>
      {label && (
        <Text
          typography="sm"
          as="p"
          fontWeight="bold"
          color={colors.grey[700]}
          className={cx("input-label")}
        >
          {label}
        </Text>
      )}
      <input className={cx("input", errorClassName)} {...rest} />
    </>
  );
};

export default Input;
