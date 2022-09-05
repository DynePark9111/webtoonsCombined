import axios from "axios";
import type { GetStaticProps, NextPage } from "next";
import Ribbon from "../components/Commons/Ribbon";
import Cards from "../components/New/Cards";
import styles from "../styles/Pages/Home.module.scss";
import { HomeProps } from "../types/types";

const Home: NextPage<HomeProps> = ({ data }) => {
  return (
    <div className={styles.Home}>
      <Ribbon
        line1="모든 웹툰은 공식 홈페이지와 연결되어 있습니다."
        line2="공식 페이지로"
        href="/explore"
      />
      <Cards webtoons={data.webtoons} />
      {/* <Ribbon line1="광고 없는 웹툰 사이트" /> */}
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const URL = process.env.URL;
  const revalidateTime = 60 * 60;
  try {
    const { data } = await axios.get(`${URL}/new`);
    return {
      props: { data },
      revalidate: revalidateTime,
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
