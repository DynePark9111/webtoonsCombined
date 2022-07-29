import type { NextPage } from "next";
import Link from "next/link";
import { IoPersonCircleOutline } from "react-icons/io5";
import styles from "../../styles/Layout/LoginBtn.module.scss";

const LoginBtn: NextPage = () => {
  return (
    <Link href="/login">
      <button className={styles.LoginBtn}>
        <IoPersonCircleOutline />
        <span>로그인</span>
      </button>
    </Link>
  );
};

export default LoginBtn;
