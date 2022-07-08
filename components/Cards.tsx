import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Cards.module.scss";
import Card from "./Card";

type CardsProps = {
  title: string;
};

const Cards: NextPage<CardsProps> = ({ title }) => {
  return (
    <div className={styles.Cards}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <Link href="/">전체보기</Link>
      </div>
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Cards;
