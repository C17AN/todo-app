import { LAYOUT_ID } from "@/constants/ui";
import cx from "classnames";
import { HTMLAttributes, ReactNode } from "react";

import style from "./Layout.module.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const LayoutWithoutBottomNavigation = ({ children, ...rest }: Props) => {
  return (
    <div {...rest} className={cx(style.layout, rest.className)} id={LAYOUT_ID}>
      {children}
    </div>
  );
};

export default LayoutWithoutBottomNavigation;
