import axios from "axios";
import type { NextPage } from "next";
import { useState } from "react";
import Cards from "../components/Cards";
import Filter from "../components/Filter";
import styles from "../styles/Home.module.scss";
import { webtoons } from "../types/types";
import { filterArray } from "../data/arrays";

type newToonsT = {
  newToons: webtoons[];
};

const Home: NextPage<newToonsT> = ({ newToons }) => {
  const [filter, setFilter] = useState([0]);

  return (
    <div className={styles.Home}>
      <Filter array={filterArray} selected={filter} setSelected={setFilter} />
      <Cards webtoons={newToons} title="지금 인기 웹툰" />
      <Cards webtoons={newToons} title="지금 인기 웹툰" />
      <Cards webtoons={newToons} title="지금 인기 웹툰" />
      <Cards webtoons={newToons} title="지금 인기 웹툰" />
      <Cards webtoons={newToons} title="지금 인기 웹툰" />
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3000/api");
  const newToons = res.data.data;
  return { props: { newToons } };
}
