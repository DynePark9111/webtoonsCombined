import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import FilterYoutubeStyle from "../components/FilterYoutubeStyle";
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

  return (
    <div className={styles.Result}>
      <h2>{search_query}에 대한 검색 결과.</h2>
      <FilterYoutubeStyle
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
      <section id={isOpen ? styles.open : ""}>
        <div>hi</div>
        <div className={styles.noMore}>결과가 더 이상 없습니다.</div>
        <button>+8개 더보기</button>
      </section>
    </div>
  );
};

export default Result;
