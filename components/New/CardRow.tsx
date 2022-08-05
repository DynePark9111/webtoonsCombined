import type { NextPage } from "next";
import styles from "../../styles/New/CardRow.module.scss";
import { HomeProps } from "../../types/types";
import SkeletonCard from "../Skeletons/SkeletonCard";
import Card from "./Card";

const CardRow: NextPage<HomeProps> = ({ webtoons }) => {
  return (
    <div className={styles.CardRow}>
      {webtoons
        ? webtoons.map((webtoon) => (
            <Card webtoon={webtoon} key={webtoon.title} />
          ))
        : Array(24)
            .fill(null)
            .map((_, i) => <SkeletonCard key={i} />)}
    </div>
  );
};

export default CardRow;
