import type { NextPage } from "next";
import Card from "../components/Card";
import Cards from "../components/Cards";
import Filter from "../components/Filter";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.Home}>
      <Filter />
      <Cards title="지금 인기 웹툰" />
      <Cards title="업데이트 된 웹툰" />
      <Cards title="액션 웹툰" />
      <Cards title="판타지 웹툰" />
    </div>
  );
};

export default Home;
