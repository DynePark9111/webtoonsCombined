import axios from "axios";
import type { NextPage } from "next";
import Cards from "../components/Cards";
import Ribbon from "../components/Ribbon";
import styles from "../styles/Home.module.scss";
import { HomeProps } from "../types/types";

const Home: NextPage<HomeProps> = ({ webtoons1, webtoons2 }) => {
  return (
    <div className={styles.Home}>
      <Ribbon line1="모든 웹툰은 공식 홈페이지와 연결되어 있습니다." />
      <Cards webtoons={webtoons1} title="방금 업로드된 웹툰" />
      <Cards webtoons={webtoons2} title="연재중 웹툰" />
      <Cards webtoons={webtoons1} title="추천하는 웹툰" />
      <Cards webtoons={webtoons2} title="지금 인기 웹툰" />
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const URL = process.env.URL;
  const resNaver = await axios.get(`${URL}/new/${encodeURI("네이버")}`);
  const resKakao = await axios.get(`${URL}/new/${encodeURI("카카오")}`);

  const webtoons1 = resNaver.data.splice(0, 5);
  const webtoons2 = resKakao.data.splice(0, 5);
  return { props: { webtoons1, webtoons2 } };
}
