import type { NextPage } from "next";
import styles from "../../styles/Pages/authpage/FindPw.module.scss";

const FindPw: NextPage = () => {
  const COMPANY = process.env.NEXT_PUBLIC_COMPANY || "Webtoons Combined";
  return (
    <div className={styles.FindPw}>
      <h1>{COMPANY}</h1>
      <h2>findPW</h2>
    </div>
  );
};

export default FindPw;
