import type { NextPage } from "next";
import { useState } from "react";
import Filter from "../components/Filter";
import { platformFilter } from "../data/arrays";
import styles from "../styles/New.module.scss";

const New: NextPage = () => {
  const [platform, setplatform] = useState(["전체"]);
  return (
    <div className={styles.New}>
      <Filter
        array={platformFilter}
        selected={platform}
        setSelected={setplatform}
      />
    </div>
  );
};

export default New;
