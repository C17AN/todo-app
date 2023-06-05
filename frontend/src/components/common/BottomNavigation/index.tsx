import style from "./BottomNavigation.module.scss";
import className from "classnames/bind";
import { Link } from "react-router-dom";
import { HiOutlineHome } from "@react-icons/all-files/hi/HiOutlineHome";
import { HiOutlineCalendar } from "@react-icons/all-files/hi/HiOutlineCalendar";
import { HiOutlineBookmark } from "@react-icons/all-files/hi/HiOutlineBookmark";
import { HiOutlineCog } from "@react-icons/all-files/hi/HiOutlineCog";
import { Variants, motion } from "framer-motion";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import colors from "material-colors";

const cx = className.bind(style);

const variants: Variants = {
  hover: {
    backgroundColor: colors.grey[500],
  },
};

type Props = {};

const BottomNavigation = (props: Props) => {
  return (
    <div className={cx("bottom-navigation")}>
      <LinkWrapper>
        <Link to="/" className={cx("bottom-navigation-menu")}>
          <HiOutlineHome />
          <div className={cx("bottom-navigation-menu-text")}>홈</div>
        </Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link to="/calendar" className={cx("bottom-navigation-menu")}>
          <HiOutlineCalendar />
          <div className={cx("bottom-navigation-menu-text")}>캘린더</div>
        </Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link to="/bookmark" className={cx("bottom-navigation-menu")}>
          <HiOutlineBookmark />
          <div className={cx("bottom-navigation-menu-text")}>북마크</div>
        </Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link to="/profile" className={cx("bottom-navigation-menu")}>
          <HiOutlineCog />
          <div className={cx("bottom-navigation-menu-text")}>프로필</div>
        </Link>
      </LinkWrapper>
    </div>
  );
};

const LinkWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <LinkWrapperBody variants={variants} whileHover={"hover"}>
      {children}
    </LinkWrapperBody>
  );
};

const LinkWrapperBody = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 100%;
`;

export default BottomNavigation;
