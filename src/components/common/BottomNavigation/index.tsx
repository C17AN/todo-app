import React from "react";
import style from "./BottomNavigation.module.scss";
import className from "classnames/bind";
import { Link } from "react-router-dom";

const cx = className.bind(style);

type Props = {};

const BottomNavigation = (props: Props) => {
  return (
    <div className={cx("bottom-navigation")}>
      <Link to="/" className={cx("bottom-navigation-menu")}>
        <div>1</div>
      </Link>
      <Link to="/bookmark" className={cx("bottom-navigation-menu")}>
        <div>2</div>
      </Link>
    </div>
  );
};

export default BottomNavigation;
