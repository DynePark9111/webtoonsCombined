import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Cards.module.scss";
import { webtoons } from "../types/types";
import Card from "./Card";

type CardsProps = {
  title: string;
  webtoons: webtoons[];
};

const Cards: NextPage<CardsProps> = ({ title, webtoons }) => {
  return (
    <div className={styles.Cards}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <Link href="/">전체보기</Link>
      </div>
      <div className={styles.cards}>
        {webtoons.map((webtoon: any) => {
          return <Card key={webtoon.title} webtoon={webtoon} />;
        })}
      </div>
    </div>
  );
};

export default Cards;
