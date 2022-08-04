import type { NextPage } from "next";
import styles from "../../styles/Layout/Header.module.scss";
import {
  IoAppsOutline,
  IoEllipsisVerticalSharp,
  IoMenuSharp,
} from "react-icons/io5";
import LoginBtn from "./LoginBtn";
import { useContext } from "react";
import { NavContext } from "../../context/navContext";
import Searchbox from "./Searchbox";
import Link from "next/link";
import { UserContext } from "../../context/userContext";
import LogoutBtn from "./LogoutBtn";

const Header: NextPage = () => {
  const COMPANY = process.env.NEXT_PUBLIC_COMPANY || "WebtoonsCombined";
  const { toggleNav } = useContext(NavContext);
  const { user } = useContext(UserContext);
  return (
    <div className={styles.Header}>
      <div className={styles.left}>
        <div className={styles.bars} onClick={() => toggleNav()}>
          <IoMenuSharp />
        </div>
        <Link href="/">
          <div className={styles.logo} title={`${COMPANY} 홈으로`}>
            {COMPANY}
          </div>
        </Link>
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
          {user.userId === "" ? <LoginBtn /> : <LogoutBtn />}
        </li>
      </ul>
    </div>
  );
};

export default Header;
