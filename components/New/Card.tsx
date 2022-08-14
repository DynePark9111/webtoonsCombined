import type { NextPage } from "next";
import Image from "next/image";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import styles from "../../styles/New/Card.module.scss";
import { CardProps } from "../../types/types";
import EllipsisButton from "../Commons/EllipsisButton";
import Iframe from "./Iframe";

const Card: NextPage<CardProps> = ({ webtoon }) => {
  const { user } = useContext(UserContext);
  const [isIframeOpen, setIsIframeOpen] = useState(false);
  const bookmark = user.bookmark?.includes(webtoon._id);
  const later = user.watchLater?.includes(webtoon._id);
  const trash = user.likedWebtoon?.includes(webtoon._id);
  const kakaoImage = `https://dn-img-page.kakao.com/download/resource?kid=nqIyw/hyle1cqQmF/XAtxCKCex7GIN3lK2E1Usk&filename=th2`;
  return (
    <div
      className={styles.Card}
      id={`${bookmark && !later ? styles.bookmark : ""}${
        !bookmark && later ? styles.later : ""
      }${bookmark && later ? styles.both : ""}${trash ? styles.trash : ""}`}
      title="보러가기"
    >
      <div className={styles.image} onClick={() => setIsIframeOpen(true)}>
        <Image
          src={webtoon.platform !== "카카오페이지" ? webtoon.image : kakaoImage}
          layout="fill"
          objectFit="contain"
          alt={webtoon.title}
        />
        {trash && <div className={styles.trash} />}
      </div>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.title} title={webtoon.title}>
            {webtoon.title}
          </div>
          <div className={styles.ellipsis}>
            <EllipsisButton webtoon_id={webtoon._id} />
          </div>
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
