import type { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/New/Card.module.scss";
import { NewtoonProps } from "../../types/types";
import EllipsisButton from "../Commons/EllipsisButton";

const Card: NextPage<NewtoonProps> = ({ webtoon }) => {
  const bookmark = ["해귀", "구주"];
  const trash = ["이별학", "필생기"];
  return (
    <div
      className={styles.Card}
      id={`${bookmark.includes(webtoon.title) ? styles.bookmark : ""}${
        trash.includes(webtoon.title) ? styles.trash : ""
      }`}
      title="보러가기"
    >
      <a
        href={`https://comic.naver.com${webtoon.episodeLink}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.image}>
          <Image src={webtoon.image} layout="fill" alt={webtoon.title} />
          {trash.includes(webtoon.title) && <div className={styles.trash} />}
        </div>
      </a>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.title} title={webtoon.title}>
            {webtoon.title}
          </div>
          <EllipsisButton />
        </div>
        <div className={styles.episode} title={webtoon.episodeTitle}>
          {webtoon.episodeTitle}
        </div>
      </div>
    </div>
  );
};

export default Card;
