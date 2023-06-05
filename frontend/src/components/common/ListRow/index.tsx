import React, { HTMLAttributes } from "react";
import style from "./ListRow.module.scss";
import cx from "classnames";

interface Props extends HTMLAttributes<HTMLLIElement> {
  title?: string;
  description?: string;
}

const ListRow = ({ title, description }: Props) => {
  return (
    <li>
      <h3>{title}</h3>
      <div>{description}</div>
    </li>
  );
};

export default ListRow;
