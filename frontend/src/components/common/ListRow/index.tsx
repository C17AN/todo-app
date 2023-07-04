import cx from "classnames";
import { HTMLAttributes } from "react";

import style from "./ListRow.module.scss";

interface Props extends HTMLAttributes<HTMLLIElement> {
  title?: string;
  description?: string;
}

const ListRow = ({ title, description, ...rest }: Props) => {
  return (
    <li className={cx(style["list-row"])} {...rest}>
      <h3 className={cx(style["list-row-title"])}>{title}</h3>
      <div className={cx(style["list-row-description"])}>{description}</div>
    </li>
  );
};

export default ListRow;
