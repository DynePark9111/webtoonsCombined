import type { NextPage } from "next";
import styles from "../styles/Header.module.scss";
import {
  IoAppsOutline,
  IoCloseSharp,
  IoEllipsisVerticalSharp,
  IoMenuSharp,
  IoSearchOutline,
} from "react-icons/io5";
import LoginBtn from "./LoginBtn";
import { useContext, useState } from "react";
import { NavContext } from "../context/navContext";
import Searchbox from "./Searchbox";

const Header: NextPage = () => {
  const COMPANY = process.env.NEXT_PUBLIC_COMPANY || "WebtoonsCombined";
  const { toggleNav } = useContext(NavContext);

  return (
    <div className={styles.Header}>
      <div className={styles.left}>
        <div className={styles.bars} onClick={() => toggleNav()}>
          <IoMenuSharp />
        </div>
        <div className={styles.logo}>{COMPANY}</div>
      </div>
      <Searchbox />
      <ul className={styles.right}>
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
