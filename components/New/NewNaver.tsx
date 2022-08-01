import type { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/New/NewNaver.module.scss";
import { SampleCardProps, SampleNewProps } from "../../types/types";
import EllipsisButton from "../Commons/EllipsisButton";

const NewNaver: NextPage<SampleNewProps> = ({ webtoons }) => {
  return (
    <div className={styles.NewNaver}>
      {webtoons.map((webtoon) => {
        return (
          <div className={styles.webtoon} key={webtoon.title}>
            <CardNaver webtoon={webtoon} />
          </div>
        );
      })}
    </div>
  );
};
export default NewNaver;

const CardNaver: NextPage<SampleCardProps> = ({ webtoon }) => {
  return (
    <div className={styles.CardNaver}>
      <div className={styles.image}>
        <Image
          src={"/sample/sample_naver.jpg"}
          width={126}
          height={135}
          alt="webtoon cover image"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.new}>New</div>
          <EllipsisButton />
        </div>
        <div className={styles.title} title={webtoon.title}>
          {webtoon.title}
        </div>
        <div className={styles.episode} title={webtoon.episode}>
          {webtoon.episode}
        </div>
      </div>
    </div>
  );
};
