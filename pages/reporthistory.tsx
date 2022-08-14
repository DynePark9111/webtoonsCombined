import type { NextPage } from "next";
import { useContext } from "react";
import Introduction from "../components/Commons/Introduction";
import { UserContext } from "../context/userContext";
import styles from "../styles/Pages/ReportHistory.module.scss";

const ReportHistory: NextPage = () => {
  const { user } = useContext(UserContext);
  const loggedIn = user.username !== undefined;
  const data = [""];

  return (
    <div className={styles.ReportHistory}>
      <Introduction
        title="신고 내역"
        subtitle="신고해 주셔서 감사합니다"
        src="/images/defense.svg"
      />
      {!loggedIn && (
        <section>
          <h1>로그인이 필요한 서비스 입니다.</h1>
        </section>
      )}
      {loggedIn && data?.length === 0 && (
        <section>
          <h1>아직 목록에 웹툰이 없습니다.</h1>
        </section>
      )}
    </div>
  );
};

export default ReportHistory;
