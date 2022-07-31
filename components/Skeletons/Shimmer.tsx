import type { NextPage } from "next";
import styles from "../../styles/Skeletons/Skeletons.module.scss";

const Shimmer: NextPage = () => {
  return (
    <div className={styles.ShimmerWrapper}>
      <div className={styles.shimmer} />
    </div>
  );
};

export default Shimmer;
