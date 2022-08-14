import type { NextPage } from "next";
import styles from "../../styles/New/CardsLink.module.scss";
import { CardsLinkProps } from "../../types/types";
import SkeletonCardLink from "../Skeletons/SkeletonCardLink";
import CardLink from "./CardLink";

const CardsLink: NextPage<CardsLinkProps> = ({ webtoons }) => {
  return (
    <div className={styles.CardsLink}>
      {webtoons !== undefined
        ? webtoons.map((webtoon) => (
            <CardLink webtoon={webtoon} key={webtoon.title} />
          ))
        : Array(24)
            .fill(null)
            .map((_, i) => <SkeletonCardLink key={i} />)}
    </div>
  );
};

export default CardsLink;
