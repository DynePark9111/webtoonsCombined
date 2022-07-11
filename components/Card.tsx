import type { NextPage } from "next";
import styles from "../styles/Card.module.scss";
import { webtoons } from "../types/types";

type props = {
  webtoon: webtoons;
};

const Card: NextPage<props> = ({ webtoon }) => {
  return (
    <div className={styles.Card}>
      <a href={`https://comic.naver.com${webtoon.episodeLink}`}>
        <img alt={webtoon.title} src={webtoon.image} />
        <div className={styles.title}>{webtoon.title}</div>
        <div className={styles.episode}>{webtoon.episodeTitle}</div>
        {/* <div className={styles.platform}>{webtoon.platform}</div> */}
      </a>
    </div>
  );
};

export default Card;
