import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/WebtoonList.module.scss";

type t = {
  webtoons: any;
};

type CardProps = {
  webtoon: any;
};

const WebtoonList: NextPage<t> = ({ webtoons }) => {
  return (
    <ul className={styles.WebtoonsList}>
      {webtoons?.map((webtoon: any) => (
        <Link href={`/webtoon/${webtoon._id}`} key={webtoon._id}>
          <li className={styles.Webtoon}>
            <Card webtoon={webtoon} />
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default WebtoonList;

const Card: NextPage<CardProps> = ({ webtoon }) => {
  return (
    <>
      <figure>
        <img className={styles.cover} src={webtoon.image} alt={webtoon.title} />
        <figcaption className={styles.title} title={webtoon.title}>
          {webtoon.title}
        </figcaption>
        <figcaption className={styles.subtitle} title={webtoon.episodeTitle}>
          {webtoon.episodeTitle}
        </figcaption>
      </figure>
      <div className={styles.tag}>
        {/* {true && <Platform platform={webtoon.platform} />} */}
        {/* {true && (
          <div className={styles.update} title="오늘 업데이트">
            오늘
          </div>
        )} */}
      </div>
    </>
  );
};
