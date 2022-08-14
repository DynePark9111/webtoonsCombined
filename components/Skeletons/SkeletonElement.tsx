import type { NextPage } from "next";
import styles from "../../styles/Skeletons/Skeletons.module.scss";

type SkeletonElementProps = {
  type: string;
};

const SkeletonElement: NextPage<SkeletonElementProps> = ({ type }) => {
  return <div className={type} />;
};

export default SkeletonElement;
