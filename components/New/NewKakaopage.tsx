import type { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/New/NewKakaopage.module.scss";
import { SampleCardProps, SampleNewProps } from "../../types/types";
import EllipsisButton from "../Commons/EllipsisButton";

const NewKakaopage: NextPage<SampleNewProps> = ({ webtoons }) => {
  return (
    <div className={styles.NewKakaopage}>
      {webtoons.map((webtoon) => {
        return (
          <div className={styles.webtoon} key={webtoon.title}>
            <CardKakaopage webtoon={webtoon} />
          </div>
        );
      })}
    </div>
  );
};

export default NewKakaopage;

const CardKakaopage: NextPage<SampleCardProps> = ({ webtoon }) => {
  return (
    <div className={styles.CardKP}>
      <div className={styles.image}>
        <Image
          src={"/sample/sample_kp.png"}
          width={240}
          height={240}
          alt="webtoon cover image"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.new}>new</div>
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
