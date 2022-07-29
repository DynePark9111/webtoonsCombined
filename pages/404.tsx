import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { IoChevronForwardSharp } from "react-icons/io5";
import styles from "../styles/Pages/NotFound.module.scss";

const NotFound: NextPage = () => {
  return (
    <div className={styles.NotFound}>
      <Image width={400} height={300} src="/images/404.svg" alt="not found" />
      <h1>페이지를 찾을 수 없습니다.</h1>
      <Link href="/">
        <h2 className={styles.link}>
          <span>홈으로 돌아가기</span>
          <IoChevronForwardSharp />
        </h2>
      </Link>
    </div>
  );
};

export default NotFound;
