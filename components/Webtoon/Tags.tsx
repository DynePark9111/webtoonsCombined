import type { NextPage } from "next";
import Link from "next/link";
import { webtoonP } from "../../types/types";
import styles from "../../styles/Webtoon/Tags.module.scss";

const Tags: NextPage<webtoonP> = ({ webtoon }) => {
  return (
    <ul className={styles.Tags}>
      <Link href={`/webtoons?platform=${webtoon.platform}`}>
        <li>{webtoon.platform}</li>
      </Link>
      <Link href={`/webtoons?category=${webtoon.category}`}>
        <li title="바로가기">{webtoon.category}</li>
      </Link>
      {webtoon.genre.map((i) => (
        <Link key={i} href={`/webtoons?genre=${i}`}>
          <li>{i}</li>
        </Link>
      ))}
      {webtoon.author.map((i) => (
        <Link key={i} href={`/search/${i}`}>
          <li>{i}</li>
        </Link>
      ))}
    </ul>
  );
};
export default Tags;
