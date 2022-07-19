import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import Filter from "../../components/Filter";
import { genreFilter, platformFilter } from "../../data/arrays";
import { capitalize } from "../../lib/functions";
import styles from "../../styles/Webtoons.module.scss";
import useFetchWebtoon from "../../Hooks/useFetchWebtoon";

const Webtoons: NextPage = () => {
  const [platform, setplatform] = useState(["전체"]);
  const [genre, setGenre] = useState(["전체"]);
  const router = useRouter();
  const [page, setPage] = useState(1);

  const { category } = router.query;
  const [data, loading, error] = useFetchWebtoon(
    category,
    page,
    platform,
    genre
  );
  useEffect(() => {
    setPage(1);
  }, [category, platform, genre]);

  return (
    <div className={styles.Webtoons}>
      <Filter
        array={platformFilter}
        selected={platform}
        setSelected={setplatform}
      />
      <Filter array={genreFilter} selected={genre} setSelected={setGenre} />
      <Cards
        title={`${capitalize(category)} Webtoons`}
        webtoons={data?.webtoons}
      />
    </div>
  );
};

export default Webtoons;
