import axios from "axios";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from "swr";
import FilterYoutubeStyle from "../components/Commons/FilterYoutubeStyle";
import Cards from "../components/New/Cards";
import CardsLink from "../components/New/CardsLink";
import { capitalize } from "../lib/functions";
import styles from "../styles/Pages/Webtoons.module.scss";

const Webtoons: NextPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const [isOpen, setIsOpen] = useState(false);
  const [filterCategory, setFilterCategory] = useState({
    uploaded: "전체",
    platform: "전체",
    genre: "전체",
    day: "전체",
    orderBy: "관련성",
    page: 1,
  });
  const URL = process.env.NEXT_PUBLIC_URL || "http://localhost:3001";
  const fullURL = `${URL}/webtoon?category=${category}&genre=${filterCategory.genre}&platform=${filterCategory.platform}`;
  const fetcher = async () => {
    const res = await axios.get(fullURL);
    return res.data;
  };
  const { data, error } = useSWR(fullURL, fetcher);
  return (
    <div className={styles.Webtoons}>
      <h2>{capitalize(category)} Webtoons</h2>
      <FilterYoutubeStyle
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
      <section id={isOpen ? styles.open : ""}>
        <CardsLink webtoons={data?.webtoons} />
        <div className={styles.noMore}>결과가 더 이상 없습니다.</div>
        <button>+ 더보기</button>
      </section>
    </div>
  );
};

export default Webtoons;
