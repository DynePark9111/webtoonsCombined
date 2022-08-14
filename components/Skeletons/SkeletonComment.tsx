import type { NextPage } from "next";
import styles from "../../styles/Skeletons/Skeletons.module.scss";
import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";

const SkeletonComment: NextPage = () => {
  return (
    <div className={styles.skeletonWrapper}>
      <div className={styles.SkeletonComment}>
        <Shimmer />
        <div className={styles.profileImage}>
          <SkeletonElement type={styles.circle} />
        </div>
        <div className={styles.commentBox}>
          <div className={styles.UserAndDate}>
            <SkeletonElement type={styles.textLong} />
          </div>
          <div className={styles.CommentText}>
            <div className={styles.message}>
              <SkeletonElement type={styles.paragraph} />
            </div>
            <div className={styles.more}>
              <SkeletonElement type={styles.text} />
            </div>
          </div>
        </div>
        <div className={styles.ellipsis}>
          <SkeletonElement type={styles.svg} />
        </div>
      </div>
    </div>
  );
};

export default SkeletonComment;
