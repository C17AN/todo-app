import style from "./BottomNavigation.module.scss";
import className from "classnames/bind";
import { Link } from "react-router-dom";
import { HiOutlineHome } from "@react-icons/all-files/hi/HiOutlineHome";
import { HiOutlineCalendar } from "@react-icons/all-files/hi/HiOutlineCalendar";
import { HiOutlineBookmark } from "@react-icons/all-files/hi/HiOutlineBookmark";
import { HiOutlineCog } from "@react-icons/all-files/hi/HiOutlineCog";

const cx = className.bind(style);

type Props = {};

const BottomNavigation = (props: Props) => {
  return (
    <div className={cx("bottom-navigation")}>
      <Link to="/" className={cx("bottom-navigation-menu")}>
        <HiOutlineHome />
        <div className={cx("bottom-navigation-menu-text")}>홈</div>
      </Link>
      <Link to="/calendar" className={cx("bottom-navigation-menu")}>
        <HiOutlineCalendar />
        <div className={cx("bottom-navigation-menu-text")}>캘린더</div>
      </Link>
      <Link to="/bookmark" className={cx("bottom-navigation-menu")}>
        <HiOutlineBookmark />
        <div className={cx("bottom-navigation-menu-text")}>북마크</div>
      </Link>
      <Link to="/profile" className={cx("bottom-navigation-menu")}>
        <HiOutlineCog />
        <div className={cx("bottom-navigation-menu-text")}>프로필</div>
      </Link>
    </div>
  );
};

export default BottomNavigation;
