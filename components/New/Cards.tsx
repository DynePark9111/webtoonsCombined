import type { NextPage } from "next";
import styles from "../../styles/New/Cards.module.scss";
import { CardsProps } from "../../types/types";
import SkeletonCard from "../Skeletons/SkeletonCard";
import Card from "./Card";

const Cards: NextPage<CardsProps> = ({ webtoons }) => {
  return (
    <div className={styles.Cards}>
      {webtoons?.length > 0
        ? webtoons.map((webtoon) => (
            <Card webtoon={webtoon} key={webtoon.title} />
          ))
        : Array(24)
            .fill(null)
            .map((_, i) => <SkeletonCard key={i} />)}
    </div>
  );
};

export default Cards;
