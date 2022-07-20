import type { NextPage } from "next";
import Introduction from "../components/Introduction";
import styles from "../styles/Settings.module.scss";

const Settings: NextPage = () => {
  return (
    <div className={styles.Settings}>
      <Introduction
        title="고급 설정"
        subtitle="WebtoonsCombined를 원하는 대로 설정하기"
        src="/images/settings.svg"
      />
      <section>
        <div>쿠키 지우기</div>
        <button onClick={() => alert("쿠키가 삭제되었습니다.")}>지우기</button>
      </section>
    </div>
  );
};

export default Settings;
