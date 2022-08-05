import type { NextPage } from "next";
import styles from "../../styles/Pages/authpage/FindPassword.module.scss";

const FindPassword: NextPage = () => {
  const COMPANY = process.env.NEXT_PUBLIC_COMPANY || "Webtoons Combined";
  return (
    <div className={styles.FindPassword}>
      <h1>{COMPANY}</h1>
      <h2>findPW</h2>
    </div>
  );
};

export default FindPassword;
