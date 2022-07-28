import type { NextPage } from "next";
import Introduction from "../components/Commons/Introduction";
import { sampleWebtoons } from "../data/arrays";
import styles from "../styles/Pages/Bookmark.module.scss";

const Bookmark: NextPage = () => {
  return (
    <div className={styles.Bookmark}>
      <Introduction title="북마크" src="/images/explore.svg" />
      <section>로그인이 필요한 서비스 입니다.</section>
    </div>
  );
};

export default Bookmark;
