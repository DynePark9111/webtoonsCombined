import type { NextPage } from "next";
import Link from "next/link";
import { IoMailOutline } from "react-icons/io5";
import styles from "../../styles/Pages/auth/AuthPage.module.scss";

const AuthPage: NextPage = () => {
  return (
    <div className={styles.AuthPage}>
      <div className={styles.text}>
        신작부터 역대 인기 작품까지!
        <br /> 모든 웹툰을 이곳에서!
      </div>
      <Link href="/auth/login">
        <button>
          <IoMailOutline />
          <span>이메일로 로그인</span>
        </button>
      </Link>
      <div className={styles.signup}>
        <Link href="/auth/signup">이메일로 가입</Link>
        <Link href="/auth/social">소셜 계정으로 가입</Link>
      </div>
    </div>
  );
};

export default AuthPage;
