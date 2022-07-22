import type { NextPage } from "next";
import Introduction from "../components/Introduction";
import LocalStorage from "../lib/localStorage";
import styles from "../styles/Settings.module.scss";

const Settings: NextPage = () => {
  const COMPANY = process.env.NEXT_PUBLIC_COMPANY || "WebtoonsCombined";

  return (
    <div className={styles.Settings}>
      <Introduction
        title="고급 설정"
        subtitle={`${COMPANY}를 원하는 대로 설정하기`}
        src="/images/settings.svg"
      />
      <section>
        <div>저장된 모든 기록</div>
        <button
          onClick={() => {
            LocalStorage.clearItem();
            alert("삭제되었습니다.");
          }}
        >
          지우기
        </button>
      </section>
      <section>
        <div>시청 기록</div>
        <button
          onClick={() => {
            LocalStorage.removeItem("history");
            alert("삭제되었습니다.");
          }}
        >
          지우기
        </button>
      </section>
      <section>
        <div>좋아요 표시한 웹툰</div>
        <button
          onClick={() => {
            LocalStorage.removeItem("liked");
            alert("삭제되었습니다.");
          }}
        >
          지우기
        </button>
      </section>
    </div>
  );
};

export default Settings;
