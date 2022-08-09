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
      {/* <NewToons webtoons={webtoons} title="방금 업로드된 웹툰" />
      <NewToons webtoons={webtoons} title="연재중 웹툰" />
      <NewToons webtoons={webtoons} title="추천하는 웹툰" />
      <NewToons webtoons={webtoons} title="지금 인기 웹툰" /> */}
      <footer></footer>
      <Ribbon line1="광고 없는 웹툰 사이트" />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const URL = process.env.NEXT_PUBLIC_URL;
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
