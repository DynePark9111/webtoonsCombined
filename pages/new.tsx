import type { NextPage } from "next";
import { useState } from "react";
import Filter from "../components/Filter";
import { filterArray } from "../data/arrays";
import styles from "../styles/New.module.scss";

const New: NextPage = () => {
  const [filter, setFilter] = useState([0]);
  return (
    <div className={styles.New}>
      <Filter array={filterArray} selected={filter} setSelected={setFilter} />
    </div>
  );
};

export default New;
