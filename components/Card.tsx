import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Card.module.scss";
import { CardProps } from "../types/types";

const Card: NextPage<CardProps> = ({ webtoon }) => {
  return (
    <div className={styles.Card}>
      <div className={styles.wrapper}>
        <a href={`https://comic.naver.com${webtoon.episodeLink}`}>
          <div className={styles.img_wrapper}>
            <Image
              layout="intrinsic"
              width={220}
              height={250}
              alt={webtoon.title}
              src={webtoon.image}
            />
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
    </div>
  );
};

export default Card;
