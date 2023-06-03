import { ReactNode } from "react";
import BottomNavigation from "@/components/common/BottomNavigation";
import style from "./Layout.module.scss";
import className from "classnames/bind";
import { LAYOUT_ID } from "@/constants/ui";

const cx = className.bind(style);

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className={cx("layout")} id={LAYOUT_ID}>
        {children}
      </div>
      <BottomNavigation />
    </>
  );
};

export default Layout;
