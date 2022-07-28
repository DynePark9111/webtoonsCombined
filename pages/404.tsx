import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { IoChevronForwardSharp } from "react-icons/io5";
import styles from "../styles/Pages/NotFound.module.scss";

const NotFound: NextPage = () => {
  return (
    <div className={styles.NotFound}>
      <Image width={400} height={300} src="/images/404.svg" alt="not found" />
      <h2>문제가 발생하였습니다</h2>
      <h3>잠시 후 다시 시도해주세요</h3>
      <Link href="/">
        <div className={styles.link}>
          <span>홈으로 돌아가기</span>
          <IoChevronForwardSharp />
        </div>
      </Link>
    </div>
  );
};

export default NotFound;
