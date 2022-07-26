import type { NextPage } from "next";
import { useContext } from "react";
import Introduction from "../components/Introduction";
import SlideSwitch from "../components/SlideSwitch";
import { AlertContext } from "../context/alertContext";
import { darkmodeContext } from "../context/darkmodeContext";
import LocalStorage from "../lib/localStorage";
import styles from "../styles/Settings.module.scss";

const Settings: NextPage = () => {
  const COMPANY = process.env.NEXT_PUBLIC_COMPANY || "WebtoonsCombined";
  const { addAlert } = useContext(AlertContext);
  const { isDark, toggleDarkmode } = useContext(darkmodeContext);

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
            addAlert("삭제 실패!", "error");
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
            addAlert("로그인이 필요한 서비스입니다", "warning");
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
            addAlert("삭제완료", "success");
          }}
        >
          지우기
        </button>
      </section>
      <section>
        <div>다크모드</div>
        <SlideSwitch isChecked={isDark} toggle={toggleDarkmode} />
      </section>
    </div>
  );
};

export default Settings;
