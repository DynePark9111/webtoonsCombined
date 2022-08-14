import axios from "axios";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext } from "react";
import useSWR from "swr";
import Introduction from "../components/Commons/Introduction";
import Cards from "../components/New/Cards";
import { UserContext } from "../context/userContext";
import styles from "../styles/Pages/Watchlist.module.scss";

const Watchlist: NextPage = () => {
  const route = useRouter();
  const { user } = useContext(UserContext);
  const { list } = route.query;
  const URL = process.env.NEXT_PUBLIC_URL;
  const isWL = list === "WL";
  const path = isWL ? "watchlater" : "liked";
  const fetcher = async () => {
    const res = await axios.get(`${URL}/new/${path}`, {
      withCredentials: true,
    });
    return res.data;
  };
  const { data, error } = useSWR(`/new/${path}`, fetcher);
  const isGuest = user.username === undefined;

  return (
    <div className={styles.Watchlist}>
      <Introduction
        title={isWL ? "나중에 볼 웹툰" : "좋아요 표시한 웹툰"}
        src={isWL ? "/images/account2.svg" : "/images/account.svg"}
      />
      <section>
        {isGuest && <h1>로그인이 필요한 서비스 입니다.</h1>}
        {!isGuest && data?.length === 0 && (
          <h1>아직 목록에 웹툰이 없습니다.</h1>
        )}
        {!isGuest && data?.length !== 0 && (
          <>
            <h1>최신웹툰</h1>
            <Cards webtoons={data} />
          </>
        )}
      </section>
    </div>
  );
};

export default Watchlist;
