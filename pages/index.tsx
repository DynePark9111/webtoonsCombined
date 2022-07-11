import axios from "axios";
import type { NextPage } from "next";
import Cards from "../components/Cards";
import Filter from "../components/Filter";
import styles from "../styles/Home.module.scss";
import { webtoons } from "../types/types";

type newToonsT = {
  newToons: webtoons[];
};

const Home: NextPage<newToonsT> = ({ newToons }) => {
  console.log(newToons);
  return (
    <div className={styles.Home}>
      <Filter />
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
  console.log(newToons);
  return { props: { newToons } };
}
