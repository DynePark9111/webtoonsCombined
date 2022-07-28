import type { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/New/NewToon.module.scss";

import { NewtoonProps } from "../../types/types";

const NewToon: NextPage<NewtoonProps> = ({ webtoon }) => {
  return (
    <div className={styles.NewToon}>
      <a href={`https://comic.naver.com${webtoon.episodeLink}`}>
        <div className={styles.imgWrapper}>
          <Image layout="fill" alt={webtoon.title} src={webtoon.image} />
        </div>
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

export default NewToon;
