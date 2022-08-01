import type { NextPage } from "next";
import { sampleWebtoons } from "../../data/arrays";
import styles from "../../styles/New/CardRow.module.scss";
import SkeletonCard from "../Skeletons/SkeletonCard";
import Card from "./Card";

const CardRow: NextPage = () => {
  const webtoons = sampleWebtoons;
  return (
    <div className={styles.CardRow}>
      {webtoons.map((webtoon) => (
        <Card webtoon={webtoon} key={webtoon.title} />
      ))}
      {/* {Array(24)
        .fill(null)
        .map((_, i) => (
          <SkeletonCard key={i} />
        ))} */}
    </div>
  );
};

export default CardRow;
