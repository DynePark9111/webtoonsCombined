import axios from "axios";
import type { GetStaticProps, NextPage } from "next";
import { useContext } from "react";
import Ribbon from "../components/Commons/Ribbon";
import CardRow from "../components/New/CardRow";
import { UserContext } from "../context/userContext";
import styles from "../styles/Pages/Home.module.scss";
import { HomeProps } from "../types/types";

const Home: NextPage<HomeProps> = ({ webtoons }) => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div className={styles.Home}>
      <Ribbon
        line1="모든 웹툰은 공식 홈페이지와 연결되어 있습니다."
        line2="공식 페이지로"
        href="/explore"
      />

      <CardRow webtoons={webtoons} />
      {/* <NewToons webtoons={webtoons} title="방금 업로드된 웹툰" />
      <NewToons webtoons={webtoons} title="연재중 웹툰" />
      <NewToons webtoons={webtoons} title="추천하는 웹툰" />
      <NewToons webtoons={webtoons} title="지금 인기 웹툰" /> */}
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
      props: {
        webtoons: data,
      },
      revalidate: revalidateTime,
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
