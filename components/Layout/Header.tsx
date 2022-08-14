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
import { useSession } from "next-auth/react";
import Image from "next/image";
import { emptyUser } from "../../data/const";

const Header: NextPage = () => {
  const COMPANY = process.env.NEXT_PUBLIC_COMPANY;
  const { data: session, status } = useSession();
  const { toggleNav } = useContext(NavContext);
  const { user } = useContext(UserContext);
  const isGuest = user.username === undefined && status !== "authenticated";

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
        {session?.user?.image && (
          <li className={styles.userImage}>
            <Image
              layout="fill"
              width={32}
              height={32}
              src={session.user?.image || emptyUser}
              alt="user image"
            />
          </li>
        )}
        <li className={styles.login}>
          {isGuest ? <LoginBtn /> : <LogoutBtn />}
        </li>
      </ul>
    </div>
  );
};

export default Header;
