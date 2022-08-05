import type { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/New/NewKakao.module.scss";
import { SampleCardProps, SampleNewProps } from "../../types/types";
import EllipsisButton from "../Commons/EllipsisButton";

const NewKakao: NextPage<SampleNewProps> = ({ webtoons }) => {
  return (
    <div className={styles.NewKakao}>
      {webtoons.map((webtoon) => {
        return (
          <div className={styles.webtoon} key={webtoon.title}>
            <CardKaKao webtoon={webtoon} />
          </div>
        );
      })}
    </div>
  );
};

export default NewKakao;

const CardKaKao: NextPage<SampleCardProps> = ({ webtoon }) => {
  return (
    <div className={styles.CardKakao}>
      <div className={styles.image}>
        <Image
          src={"/sample/sample_kakao.webp"}
          width={248}
          height={520}
          alt="webtoon cover image"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.new}>new</div>
          <EllipsisButton webtoon_id={webtoon.title} />
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
