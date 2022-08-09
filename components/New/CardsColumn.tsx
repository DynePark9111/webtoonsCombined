import type { NextPage } from "next";
import styles from "../../styles/New/CardsColumn.module.scss";
import { CardsProps } from "../../types/types";
import SkeletonCard from "../Skeletons/SkeletonCard";
import CardLink from "./CardLink";

const CardsColumn: NextPage<CardsProps> = ({ webtoons }) => {
  return (
    <div className={styles.CardsColumn}>
      {webtoons?.length > 0
        ? webtoons.map((webtoon) => (
            <CardLink webtoon={webtoon} key={webtoon.title} />
          ))
        : Array(24)
            .fill(null)
            .map((_, i) => <SkeletonCard key={i} />)}
    </div>
  );
};

export default CardsColumn;
