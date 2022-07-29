import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { platformFilter } from "../data/arrays";
import styles from "../styles/Pages/New.module.scss";
import useFetchNewToon from "../Hooks/useFetchNewToon";
import NewNaver from "../components/New/NewNaver";
import NewKakao from "../components/New/NewKakao";
import NewKakaopage from "../components/New/NewKakaopage";
import Ribbon from "../components/Commons/Ribbon";
import FilterSlideStyle from "../components/Commons/FilterSlideStyle";

const New: NextPage = () => {
  const webtoons = [
    {
      title: "전지적인 독자가 대충 어떻게 됬다는 내용",
      episode: "전지적인 독자가 대충 어떻게 됬다는 내용",
      genre: ["로맨스", "코메디"],
    },
    {
      title: "Title2",
      episode: "episode1",
      genre: ["로맨스", "코메디"],
    },
    {
      title: "Title3",
      episode: "episode1",
      genre: ["로맨스", "코메디"],
    },
    {
      title: "Title123",
      episode: "episode1",
      genre: ["로맨스", "코메디"],
    },
    {
      title: "전지적인 독자가 대충 어떻게 됬다는 내용123",
      episode: "전지적인 독자가 대충 어떻게 됬다는 내용",
      genre: ["로맨스", "코메디"],
    },
    {
      title: "Title212341",
      episode: "episode1",
      genre: ["로맨스", "코메디"],
    },
    {
      title: "Title3141",
      episode: "episode1",
      genre: ["로맨스", "코메디"],
    },
    {
      title: "Title52125",
      episode: "episode1",
      genre: ["로맨스", "코메디"],
    },
  ];

  const [platform, setPlatform] = useState(0);
  const [page, setPage] = useState(1);
  const [data, loading, error] = useFetchNewToon(platform, page);

  useEffect(() => {
    setPage(1);
  }, [platform, page]);

  return (
    <div className={styles.New}>
      <Ribbon
        line1="모든 웹툰은 공식 홈페이지와 연결되어 있습니다."
        line2="공식 페이지로"
        href="/explore"
      />
      <div className={styles.wrapper}>
        <h2>최신웹툰</h2>
        <FilterSlideStyle
          array={platformFilter}
          selected={platform}
          setSelected={setPlatform}
        />
        {platform === 0 && <NewNaver webtoons={webtoons} />}
        {platform === 1 && <NewKakao webtoons={webtoons} />}
        {platform === 2 && <NewKakaopage webtoons={webtoons} />}
        <section>
          <button>+8개 더보기</button>
          <div className={styles.noMore}>결과가 더 이상 없습니다.</div>
        </section>
      </div>
    </div>
  );
};

export default New;
