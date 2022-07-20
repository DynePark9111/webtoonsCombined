import type { NextPage } from "next";
import Introduction from "../components/Introduction";
import styles from "../styles/ReportHistory.module.scss";

const ReportHistory: NextPage = () => {
  return (
    <div className={styles.ReportHistory}>
      <Introduction
        title="신고 내역"
        subtitle="신고해 주셔서 감사합니다"
        src="/images/message.svg"
      />
      <section>제출한 신고가 없습니다.</section>
    </div>
  );
};

export default ReportHistory;
