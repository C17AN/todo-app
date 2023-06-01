import { ReactNode } from "react";
import BottomNavigation from "@/components/common/BottomNavigation";
import style from "./Layout.module.scss";
import className from "classnames/bind";

const cx = className.bind(style);

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className={cx("layout")}>{children}</div>
      <BottomNavigation />
    </>
  );
};

export default Layout;
