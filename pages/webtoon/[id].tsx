import axios from "axios";
import type { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import SkeletonWebtoon from "../../components/Skeletons/SkeletonWebtoon";
import Detail from "../../components/Webtoon/Detail";
import Header from "../../components/Webtoon/Header";
import Icons from "../../components/Webtoon/Icons";
import Images from "../../components/Webtoon/Images";
import Rating from "../../components/Webtoon/Rating";
import Reccomendation from "../../components/Webtoon/Reccomendation";
import Tabs from "../../components/Webtoon/Tabs";
import styles from "../../styles/Webtoon/Webtoon.module.scss";
import { IParams, webtoonP } from "../../types/types";

const Webtoon: NextPage<webtoonP> = ({ webtoon }) => {
  const router = useRouter();
  const [tab, setTab] = useState("평점");

  if (router.isFallback) {
    return <SkeletonWebtoon />;
  }
  return (
    <div className={styles.Webtoon}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <Images image={webtoon?.image} />
          <Icons />
          <div className={styles.about}>
            <Header webtoon={webtoon} />
            <Detail webtoon={webtoon} />
          </div>
        </div>
        <div className={styles.bottom}>
          <Tabs tab={tab} setTab={setTab} />
          {tab === "평점" && <Rating webtoon={webtoon} />}
          {tab === "비슷한 작품" && <Reccomendation webtoon={webtoon} />}
        </div>
      </div>
    </div>
  );
};

export default Webtoon;

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: "6259e518dd51c07e6eb1f45f" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const URL = process.env.NEXT_PUBLIC_URL;
  const { id } = context.params as IParams;
  try {
    const { data } = await axios.get(`${URL}/webtoon/${id}`);
    return {
      props: {
        webtoon: data,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
