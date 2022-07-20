import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Card1.module.scss";
import { NewtoonProps } from "../types/types";

const Card1: NextPage<NewtoonProps> = ({ webtoon }) => {
  return (
    <div className={styles.Card1}>
      <a href={`https://comic.naver.com${webtoon.episodeLink}`}>
        <Image
          width={100}
          height={120}
          alt={webtoon.title}
          src={webtoon.image}
        />
        <div className={styles.title} title={webtoon.title}>
          {webtoon.title}
        </div>
        <div className={styles.episode} title={webtoon.episodeTitle}>
          {webtoon.episodeTitle}
        </div>
        {/* <div className={styles.platform}>{webtoon.platform}</div> */}
      </a>
    </div>
  );
};

export default Card1;
