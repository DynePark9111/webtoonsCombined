import type { NextPage } from "next";
import Image from "next/image";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import styles from "../../styles/New/Card.module.scss";
import { NewtoonProps } from "../../types/types";
import EllipsisButton from "../Commons/EllipsisButton";
import Iframe from "./Iframe";

const Card: NextPage<NewtoonProps> = ({ webtoon }) => {
  const { user } = useContext(UserContext);
  const [isIframeOpen, setIsIframeOpen] = useState(false);
  const bookmark = user.bookmark?.includes(webtoon._id);
  const later = user.watchLater?.includes(webtoon._id);
  const trash = user.likedWebtoon?.includes(webtoon._id);
  return (
    <div
      className={styles.Card}
      id={`${bookmark && !later ? styles.bookmark : ""}${
        !bookmark && later ? styles.later : ""
      }${bookmark && later ? styles.both : ""}${trash ? styles.trash : ""}`}
      title="보러가기"
    >
      {/* <a
        href={`https://comic.naver.com${webtoon.episodeLink}`}
        target="_blank"
        rel="noopener noreferrer"
      > */}
      <div className={styles.image} onClick={() => setIsIframeOpen(true)}>
        <Image src={webtoon.image} layout="fill" alt={webtoon.title} />
        {trash && <div className={styles.trash} />}
      </div>
      {/* </a> */}
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.title} title={webtoon.title}>
            {webtoon.title}
          </div>
          <EllipsisButton webtoon_id={webtoon._id} />
        </div>
        <div className={styles.episode} title={webtoon.episodeTitle}>
          {webtoon.episodeTitle}
        </div>
      </div>
      {isIframeOpen && (
        <Iframe
          link={`https://comic.naver.com${webtoon.episodeLink}`}
          setIsIframeOpen={setIsIframeOpen}
        />
      )}
    </div>
  );
};

export default Card;
