import type { NextPage } from "next";
import Link from "next/link";
import styles from "../../styles/New/NewToons.module.scss";
import { NewToonsProps } from "../../types/types";
import NewtToon from "./NewToon";

const NewToons: NextPage<NewToonsProps> = ({ title, webtoons }) => {
  return (
    <div className={styles.NewToons}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <Link href="/">전체보기</Link>
      </div>
      <div className={styles.newToons}>
        {webtoons?.map((webtoon: any) => {
          return <NewtToon key={webtoon.title} webtoon={webtoon} />;
        })}
      </div>
    </div>
  );
};

export default NewToons;
