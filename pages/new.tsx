import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { platformFilter } from "../data/arrays";
import styles from "../styles/Pages/New.module.scss";
import Cards from "../components/New/Cards";
import Filter from "../components/Commons/Filter";
import useSWRInfinite from "swr/infinite";
import { fetcherInfinite } from "../lib/functions";

const New: NextPage = () => {
  const [platform, setPlatform] = useState(["전체"]);
  const URL = process.env.NEXT_PUBLIC_URL;

  const getKey = (pageIndex: number, previousPageData: any) => {
    if (pageIndex === 0) return `${URL}/new?&page=1&platform=${platform}`;
    if (pageIndex + 1 > previousPageData.pages) return null;
    return `${URL}/new?&page=${pageIndex + 1}&platform=${platform}`;
  };

  const { data, setSize, error } = useSWRInfinite(getKey, fetcherInfinite);
  const webtoons = data ? data.map((item) => item.webtoons).flat() : [];
  const isLast = data && data[data.length - 1].meta?.nextPage === undefined;
  const onNextBtn = () => {
    setSize((prev) => prev + 1);
  };

  useEffect(() => {
    const infiniteScroll = () => {
      const scrolled = document.documentElement.scrollTop + window.innerHeight;
      const height = document.documentElement.scrollHeight;
      Math.floor(scrolled) === height && setSize((prev) => prev + 1);
    };
    window.addEventListener("scroll", infiniteScroll);
    return () => {
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [setSize]);

  return (
    <div className={styles.New}>
      <Filter
        array={platformFilter}
        selected={platform}
        setSelected={setPlatform}
      />
      <div className={styles.wrapper}>
        <Cards webtoons={webtoons} />
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

export default New;
