import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Cards from "../components/NewToons";
import Filter from "../components/Filter";
import { platformFilter } from "../data/arrays";
import styles from "../styles/New.module.scss";
import useFetchNewToon from "../Hooks/useFetchNewToon";

const New: NextPage = () => {
  const [platform, setplatform] = useState(["전체"]);
  const [page, setPage] = useState(1);
  const [data, loading, error] = useFetchNewToon(platform, page);

  useEffect(() => {
    setPage(1);
  }, [platform, page]);

  return (
    <div className={styles.New}>
      <Filter
        array={platformFilter}
        selected={platform}
        setSelected={setplatform}
      />
      <Cards title="New Webtoons" webtoons={data} />
    </div>
  );
};

export default New;
