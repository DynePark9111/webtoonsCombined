import axios from "axios";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext } from "react";
import useSWR from "swr";
import Introduction from "../components/Commons/Introduction";
import CardRow from "../components/New/CardRow";
import { UserContext } from "../context/userContext";
import styles from "../styles/Pages/Watchlist.module.scss";

const Watchlist: NextPage = () => {
  const route = useRouter();
  const { list } = route.query;
  const URL = process.env.NEXT_PUBLIC_URL;
  const fetcher = async () => {
    const res = await axios.get(`${URL}/new/watchlater`, {
      withCredentials: true,
    });
    return res.data;
  };
  const { data, error } = useSWR("/new/watchlater", fetcher);
  return (
    <div className={styles.Watchlist}>
      <Introduction
        title={list === "WL" ? "나중에 볼 웹툰" : "좋아요 표시한 웹툰"}
        src={list === "WL" ? "/images/account2.svg" : "/images/account.svg"}
      />
      {data?.length === 0 ? (
        <section>
          <h1>아직 목록에 웹툰이 없습니다.</h1>
        </section>
      ) : (
        <section>
          <h1>최신웹툰</h1>
          <CardRow webtoons={data} />
        </section>
      )}
    </div>
  );
};

export default Watchlist;
