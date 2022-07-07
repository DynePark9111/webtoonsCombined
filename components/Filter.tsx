import type { NextPage } from "next";
import styles from "../styles/Filter.module.scss";

const Filter: NextPage = () => {
  return (
    <div className={styles.Filter}>
      <button id={styles.selected}>전체</button>
      <button>음악</button>
      <button>실시간</button>
      <button>정원 관리</button>
      <button>자연</button>
      <button>요리</button>
      <button>최근에 업로드된 웹툰</button>
    </div>
  );
};

export default Filter;
