import type { NextPage } from "next";
import { useRouter } from "next/router";
import Introduction from "../components/Commons/Introduction";
import styles from "../styles/Pages/Watchlist.module.scss";

const Watchlist: NextPage = () => {
  const route = useRouter();
  const { list } = route.query;

  return (
    <div className={styles.Watchlist}>
      <Introduction
        title={list === "WL" ? "나중에 볼 웹툰" : "좋아요 표시한 웹툰"}
        src={list === "WL" ? "/images/account2.svg" : "/images/account.svg"}
      />
      <section>로그인이 필요한 서비스 입니다.</section>
    </div>
  );
};

export default Watchlist;
