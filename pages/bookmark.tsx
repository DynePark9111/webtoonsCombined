import axios from "axios";
import type { NextPage } from "next";
import useSWR from "swr";
import Introduction from "../components/Commons/Introduction";
import CardRow from "../components/New/CardRow";
import styles from "../styles/Pages/Bookmark.module.scss";

const Bookmark: NextPage = () => {
  const URL = process.env.NEXT_PUBLIC_URL;
  const fetcher = async () => {
    const res = await axios.get(`${URL}/new/bookmark`, {
      withCredentials: true,
    });
    return res.data;
  };

  const { data, error } = useSWR("/new/bookmark", fetcher);
  return (
    <div className={styles.Bookmark}>
      <Introduction title="북마크" src="/images/explore.svg" />
      {data?.length === 0 ? (
        <section>
          <h1>아직 목록에 웹툰이 없습니다.</h1>
        </section>
      ) : (
        <section>
          <h1>최신웹툰</h1>
          <CardRow webtoons={data} />
        </section>
      )}
    </div>
  );
};

export default Bookmark;
