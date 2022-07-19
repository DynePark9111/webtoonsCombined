import type { NextPage } from "next";
import styles from "../styles/Header.module.scss";
import {
  IoAppsOutline,
  IoEllipsisVerticalSharp,
  IoMenuSharp,
  IoSearchOutline,
} from "react-icons/io5";
import LoginBtn from "./LoginBtn";

type props = {
  navOpen: boolean;
  isNavOpen: (arg: boolean) => void;
};

const Header: NextPage<props> = ({ navOpen, isNavOpen }) => {
  return (
    <div className={styles.Header}>
      <div className={styles.left}>
        <div className={styles.bars} onClick={() => isNavOpen(!navOpen)}>
          <IoMenuSharp />
        </div>
        <div className={styles.logo}>WebtoonsCombined</div>
      </div>
      <div className={styles.searchbar}>
        <form>
          <div className={styles.searchIcon}>
            <IoSearchOutline />
          </div>
          <input type="text" placeholder="검색" />
        </form>
        <button className={styles.searchBtn}>
          <IoSearchOutline />
        </button>
      </div>
      <ul className={styles.icons}>
        <li className={styles.icon}>
          <IoAppsOutline />
        </li>
        <li className={styles.icon}>
          <IoEllipsisVerticalSharp />
        </li>
        <li className={styles.login}>
          <LoginBtn />
        </li>
      </ul>
    </div>
  );
};

export default Header;
