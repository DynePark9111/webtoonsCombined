import type { NextPage } from "next";
import styles from "../../styles/Skeletons/Skeletons.module.scss";
import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";

const SkeletonCard: NextPage = () => {
  return (
    <div className={styles.skeletonWrapper}>
      <div className={styles.SkeletonCard}>
        <Shimmer />
        <div className={styles.image}>
          <SkeletonElement type={styles.box} />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <SkeletonElement type={styles.line} />
          </div>
          <div className={styles.episode}>
            <SkeletonElement type={styles.line} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
