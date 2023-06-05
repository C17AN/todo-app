import style from "./BottomNavigation.module.scss";
import className from "classnames/bind";
import { Link } from "react-router-dom";

const cx = className.bind(style);

type Props = {};

const BottomNavigation = (props: Props) => {
  return (
    <div className={cx("bottom-navigation")}>
      <Link to="/" className={cx("bottom-navigation-menu")}>
        <div>홈</div>
      </Link>
      <Link to="/calendar" className={cx("bottom-navigation-menu")}>
        <div>캘린더</div>
      </Link>
      <Link to="/bookmark" className={cx("bottom-navigation-menu")}>
        <div>북마크</div>
      </Link>
      <Link to="/profile" className={cx("bottom-navigation-menu")}>
        <div>프로필</div>
      </Link>
    </div>
  );
};

export default BottomNavigation;
