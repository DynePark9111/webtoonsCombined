import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import styles from "../../styles/New/CardLink.module.scss";
import { CardLinkProps } from "../../types/types";
import EllipsisButton from "../Commons/EllipsisButton";

const CardLink: NextPage<CardLinkProps> = ({ webtoon }) => {
  const { user } = useContext(UserContext);
  const bookmark = user.bookmark?.includes(webtoon._id);
  const later = user.watchLater?.includes(webtoon._id);
  const trash = user.likedWebtoon?.includes(webtoon._id);

  return (
    <div
      className={styles.CardLink}
      id={`${bookmark && !later ? styles.bookmark : ""}${
        !bookmark && later ? styles.later : ""
      }${bookmark && later ? styles.both : ""}${trash ? styles.trash : ""}`}
      title="보러가기"
    >
      <div className={styles.image}>
        <Link href={`/webtoon/${webtoon._id}`}>
          <Image
            src={webtoon.image}
            layout="fill"
            objectFit="contain"
            alt={webtoon.title}
          />
        </Link>
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
      </div>
    </div>
  );
};

export default CardLink;
