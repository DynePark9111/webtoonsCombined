import type { NextPage } from "next";
import styles from "../../styles/Skeletons/Skeletons.module.scss";
import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";

const SkeletonCardLink: NextPage = () => {
  return (
    <div className={styles.skeletonWrapper}>
      <div className={styles.SkeletonCardLink}>
        <Shimmer />
        <div className={styles.image}>
          <SkeletonElement type={styles.box} />
        </div>
        <SkeletonElement type={styles.line} />
      </div>
    </div>
  );
};

export default SkeletonCardLink;
