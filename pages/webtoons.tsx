import axios from "axios";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import FilterYoutubeStyle from "../components/Commons/FilterYoutubeStyle";
import CardsLink from "../components/New/CardsLink";
import { capitalize, fetcherInfinite } from "../lib/functions";
import styles from "../styles/Pages/Webtoons.module.scss";
import useSWRInfinite from "swr/infinite";

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
  const URL = process.env.NEXT_PUBLIC_URL;
  const fullURL = `${URL}/webtoon?category=${category}&genre=${filterCategory.genre}&platform=${filterCategory.platform}`;
  const getKey = (pageIndex: number, previousPageData: any) => {
    if (pageIndex === 0) return `${fullURL}&page=1`;
    if (pageIndex + 1 > previousPageData.pages) return null;
    return `${fullURL}&page=${pageIndex + 1}`;
  };

  const { data, setSize, error } = useSWRInfinite(getKey, fetcherInfinite);
  const webtoons = data ? data.map((item) => item.webtoons).flat() : [];
  const isLast = data && data[data.length - 1].meta?.nextPage === undefined;
  const onNextBtn = () => {
    setSize((prev) => prev + 1);
  };

  return (
    <div className={styles.Webtoons}>
      <h2>{capitalize(category)} Webtoons</h2>
      <FilterYoutubeStyle
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
      <div className={styles.wrapper} id={isOpen ? styles.open : ""}>
        <CardsLink webtoons={webtoons} />
        <section>
          {isLast ? (
            <div className={styles.noMore}>결과가 더 이상 없습니다.</div>
          ) : (
            <button className={styles.more} onClick={onNextBtn}>
              + 더보기
            </button>
          )}
          {error && <div>에러가 발생했습니다</div>}
        </section>
      </div>
    </div>
  );
};

export default Webtoons;
