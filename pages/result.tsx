import axios from "axios";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from "swr";
import FilterYoutubeStyle from "../components/Commons/FilterYoutubeStyle";
import CardsLink from "../components/New/CardsLink";
import styles from "../styles/Pages/Result.module.scss";

const Result: NextPage = () => {
  const [filterCategory, setFilterCategory] = useState({
    uploaded: "전체",
    platform: "전체",
    genre: "전체",
    day: "전체",
    orderBy: "관련성",
    page: 1,
  });
  const router = useRouter();
  const { search_query } = router.query;
  const [isOpen, setIsOpen] = useState(false);
  const URL = process.env.NEXT_PUBLIC_URL;
  const fetcher = async () => {
    const res = await axios.get(`${URL}/webtoon/search/${search_query}`);
    return res.data;
  };
  const { data } = useSWR(`/result?search_query=${search_query}`, fetcher);
  return (
    <div className={styles.Result}>
      <h2>&quot;{search_query}&quot;에 대한 검색 결과.</h2>
      <FilterYoutubeStyle
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
      <section id={isOpen ? styles.open : ""}>
        <h1>연재웹툰</h1>
        <CardsLink webtoons={data?.webtoon} />
        {data?.webtoon.length === 0 && (
          <div className={styles.noMore}>찾으시는 결과가 없습니다.</div>
        )}
        {/* <button className={styles.more}>+ 더보기</button> */}
      </section>
    </div>
  );
};

export default Result;
