import axios from "axios";
import type { NextPage } from "next";
import { useContext } from "react";
import useSWR from "swr";
import Introduction from "../components/Commons/Introduction";
import Cards from "../components/New/Cards";
import { UserContext } from "../context/userContext";
import styles from "../styles/Pages/Hidden.module.scss";

const Hidden: NextPage = () => {
  const { user } = useContext(UserContext);
  const URL = process.env.NEXT_PUBLIC_URL;
  const fetcher = async () => {
    const res = await axios.get(`${URL}/new/liked`, {
      withCredentials: true,
    });
    return res.data;
  };
  const isGuest = user.username === undefined;
  const { data, error } = useSWR("/new/liked", fetcher);

  return (
    <div className={styles.Hidden}>
      <Introduction title="북마크" src="/images/explore.svg" />
      <section>
        {isGuest && <h1>로그인이 필요한 서비스 입니다.</h1>}
        {!isGuest && data?.length === 0 && (
          <h1>아직 목록에 웹툰이 없습니다.</h1>
        )}
        {!isGuest && data?.length !== 0 && (
          <>
            <h1>최신웹툰</h1>
            <Cards webtoons={data} />
          </>
        )}
      </section>
    </div>
  );
};

export default Hidden;
