import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Detail from "../../components/Webtoon2/Detail";
import Header from "../../components/Webtoon2/Header";
import Icons from "../../components/Webtoon2/Icons";
import Images from "../../components/Webtoon2/Images";
import Rating from "../../components/Webtoon2/Rating";
import Reccomendation from "../../components/Webtoon2/Reccomendation";
import Tabs from "../../components/Webtoon2/Tabs";
import styles from "../../styles/Webtoon2/Webtoon2.module.scss";

const Webtoon2: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [tab, setTab] = useState("평점");

  const webtoon = {
    id: 1,
    title: "왕의 딸로 태어났다고 합니다",
    category: "ongoing",
    platform: "Kakaopage",
    author: ["프로리", "IlIlIIll", "마젠타블랙", "김렉나", "비츄"],
    genre: ["액션", "로맨스", "판타지"],
    image:
      "https://dn-img-page.kakao.com/download/resource?kid=cvkAfb/hymrdQh7F1/ZF5Rsz2RR9NdGaZMAKb7yk&filename=th1",
    url: "https://page.kakao.com/home?seriesId=48211586",
    age: "전체",
    synopsis:
      "대충 줄거리.. 대충 줄거리.. 대충 줄거리.. 대충 줄거리.. 대충 줄거리.. 대충 줄거리.. 대충 줄거리.. 대충 줄거리.. 대충 줄거리.. 대충 줄거리..",
    days: ["일"],
    like: 10,
    dislike: 10,
    bookmark: 10,
    view: 10,
    firstEpisode: "https://page.kakao.com/home?seriesId=48211586",
    rating: 4.3,
    publisher: "REDICE STUDIO",
  };

  return (
    <div className={styles.Webtoon2}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <Images image={webtoon.image} />
          <Icons />
          <div className={styles.about}>
            <Header webtoon={webtoon} />
            <Detail webtoon={webtoon} />
          </div>
        </div>
        <div className={styles.bottom}>
          <Tabs tab={tab} setTab={setTab} />
          {tab === "평점" && <Rating webtoon={webtoon} />}
          {tab === "비슷한 작품" && <Reccomendation webtoon={webtoon} />}
        </div>
      </div>
    </div>
  );
};

export default Webtoon2;
