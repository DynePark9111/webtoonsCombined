import type { NextPage } from "next";
import Image from "next/image";
import Introduction from "../components/Introduction";
import { sampleWebtoons } from "../data/arrays";
import styles from "../styles/Pages/History.module.scss";
import { NewtoonProps } from "../types/types";

const History: NextPage = () => {
  sampleWebtoons;

  return (
    <div className={styles.History}>
      <Introduction
        title="시청 기록"
        subtitle="시청 기록은 설정에서 삭제 가능합니다."
        src="/images/explore.svg"
      />
      <section>
        {sampleWebtoons ? (
          sampleWebtoons.map((webtoon) => (
            <Watched key={webtoon._id} webtoon={webtoon} />
          ))
        ) : (
          <div>목록에 웹툰이 없습니다.</div>
        )}
      </section>
    </div>
  );
};

export default History;

const Watched: NextPage<NewtoonProps> = ({ webtoon }) => {
  return (
    <div className={styles.Watched}>
      <Image width={83} height={90} src={webtoon.image} alt={webtoon.title} />
      <div className={styles.data}>
        <div className={styles.title}>{webtoon.title}</div>
        <div className={styles.episodeTitle}>{webtoon.episodeTitle}</div>
        <div className={styles.platform}>{webtoon.platform}</div>
      </div>
    </div>
  );
};
