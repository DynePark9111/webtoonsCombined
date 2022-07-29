import axios from "axios";
import type { GetStaticProps, NextPage } from "next";
import Ribbon from "../components/Commons/Ribbon";
import NewToons from "../components/New/NewToons";
import styles from "../styles/Pages/Home.module.scss";
import { HomeProps } from "../types/types";

const Home: NextPage<HomeProps> = ({ webtoons }) => {
  return (
    <div className={styles.Home}>
      <Ribbon
        line1="모든 웹툰은 공식 홈페이지와 연결되어 있습니다."
        line2="공식 페이지로"
        href="/explore"
      />
      <NewToons webtoons={webtoons} title="방금 업로드된 웹툰" />
      <NewToons webtoons={webtoons} title="연재중 웹툰" />
      <NewToons webtoons={webtoons} title="추천하는 웹툰" />
      <NewToons webtoons={webtoons} title="지금 인기 웹툰" />
    </div>
  );
};

export default Home;

// export async function getServerSideProps() {
//   const URL = process.env.URL;
//   const resNaver = await axios.get(`${URL}/new`);
//   const resKakao = await axios.get(`${URL}/new`);

//   const webtoons1 = resNaver.data.splice(0, 5);
//   const webtoons2 = resKakao.data.splice(0, 5);
//   return { props: { webtoons1, webtoons2 } };
// }

export const getStaticProps: GetStaticProps = async (context) => {
  const URL = process.env.NEXT_PUBLIC_URL;
  const { data } = await axios.get(`${URL}/new`);
  return {
    props: {
      webtoon: data,
    },
  };
};
