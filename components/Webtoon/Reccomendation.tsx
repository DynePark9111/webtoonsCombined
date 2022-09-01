import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Webtoon/Reccomendation.module.scss";
import { webtoonP } from "../../types/types";

const Reccomendation: NextPage<webtoonP> = ({ webtoon }) => {
  return (
    <div className={styles.Reccomendation}>
      <Link href={`/webtoon/${webtoon.title}`}>
        <div className={styles.webtoon} title="보러가기">
          <div className={styles.webtoonWrap}>
            <Image
              layout="fill"
              src={webtoon.image}
              alt="오버로드 3기_thumbnail"
            />
          </div>
          <div className={styles.title} title={webtoon.title}>
            {webtoon.title}
          </div>
        </div>
      </Link>
      <Link href={`/webtoon/${webtoon.title}`}>
        <div className={styles.webtoon} title="보러가기">
          <div className={styles.webtoonWrap}>
            <Image
              layout="fill"
              src={webtoon.image}
              alt="오버로드 3기_thumbnail"
            />
          </div>
          <div className={styles.title} title={webtoon.title}>
            {webtoon.title}
          </div>
        </div>
      </Link>
      <Link href={`/webtoon/${webtoon.title}`}>
        <div className={styles.webtoon} title="보러가기">
          <div className={styles.webtoonWrap}>
            <Image
              layout="fill"
              src={webtoon.image}
              alt="오버로드 3기_thumbnail"
            />
          </div>
          <div className={styles.title} title={webtoon.title}>
            {webtoon.title}
          </div>
        </div>
      </Link>
      <Link href={`/webtoon/${webtoon.title}`}>
        <div className={styles.webtoon} title="보러가기">
          <div className={styles.webtoonWrap}>
            <Image
              layout="fill"
              src={webtoon.image}
              alt="오버로드 3기_thumbnail"
            />
          </div>
          <div className={styles.title} title={webtoon.title}>
            {webtoon.title}
          </div>
        </div>
      </Link>
      <Link href={`/webtoon/${webtoon.title}`}>
        <div className={styles.webtoon} title="보러가기">
          <div className={styles.webtoonWrap}>
            <Image
              layout="fill"
              src={webtoon.image}
              alt="오버로드 3기_thumbnail"
            />
          </div>
          <div className={styles.title} title={webtoon.title}>
            {webtoon.title}
          </div>
        </div>
      </Link>
      <Link href={`/webtoon/${webtoon.title}`}>
        <div className={styles.webtoon} title="보러가기">
          <div className={styles.webtoonWrap}>
            <Image
              layout="fill"
              src={webtoon.image}
              alt="오버로드 3기_thumbnail"
            />
          </div>
          <div className={styles.title} title={webtoon.title}>
            {webtoon.title}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Reccomendation;
