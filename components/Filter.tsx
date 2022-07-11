import type { NextPage } from "next";
import styles from "../styles/Filter.module.scss";

const Filter: NextPage = () => {
  return (
    <div className={styles.Filter}>
      <button id={styles.selected}>전체</button>
      <button>로맨스</button>
      <button>드라마</button>
      <button>판타지</button>
      <button>액션</button>
      <button>무협</button>
      <button>최신</button>
    </div>
  );
};

export default Filter;
