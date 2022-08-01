import type { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/New/Card.module.scss";
import { NewtoonProps } from "../../types/types";
import EllipsisButton from "../Commons/EllipsisButton";

const Card: NextPage<NewtoonProps> = ({ webtoon }) => {
  return (
    <div className={styles.Card}>
      <div className={styles.image}>
        <Image
          src={"/sample/sample_kp.png"}
          layout="fill"
          alt="webtoon cover image"
        />
      </div>
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
