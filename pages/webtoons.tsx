import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { capitalize } from "../lib/functions";
import styles from "../styles/Webtoons.module.scss";
import useFetchWebtoon from "../Hooks/useFetchWebtoon";
import FilterYoutubeStyle from "../components/FilterYoutubeStyle";

const Webtoons: NextPage = () => {
  const [filterCategory, setFilterCategory] = useState({
    uploaded: "전체",
    platform: "전체",
    genre: "전체",
    day: "전체",
    orderBy: "관련성",
    page: 1,
  });
  const router = useRouter();
  const { category } = router.query;
  const [isOpen, setIsOpen] = useState(false);

  // const [data, loading, error] = useFetchWebtoon(
  //   category,
  //   page,
  //   platform,
  //   genre
  // );
  // useEffect(() => {
  //   setPage(1);
  // }, [category, platform, genre]);

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
        <div className={styles.noMore}>결과가 더 이상 없습니다.</div>
        <button>+8개 더보기</button>
      </section>
    </div>
  );
};

export default Webtoons;
