import type { NextPage } from "next";
import styles from "../../styles/Skeletons/Skeletons.module.scss";
import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";

const SkeletonCard: NextPage = () => {
  return (
    <div className={styles.skeletonWrapper}>
      <div className={styles.SkeletonCard}>
        <div className={styles.image}>
          <Shimmer />
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
