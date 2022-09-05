import axios from "axios";
import type { NextPage } from "next";
import Image from "next/image";
import useSWR from "swr";
import styles from "../../styles/Ad/PromoSlide.module.scss";

type PromoSlideProps = {
  play: boolean;
};

type WebtoonType = {
  episodeLink: string;
  episodeTitle: string;
  image: string;
  link: string;
  platform: string;
  title: string;
  updatedAt: Date;
  _id: string;
};

const PromoSlide: NextPage<PromoSlideProps> = ({ play }) => {
  const URL = process.env.NEXT_PUBLIC_URL;
  const fetcher = async () => {
    const res = await axios.get(`${URL}/new?&platform=kakao`);
    return res.data;
  };
  const { data } = useSWR(`/new?&platform=kakao`, fetcher);
  return (
    <div className={styles.PromoSlide}>
      <div className={styles.wrapper}>
        <ul id={!play ? styles.paused : ""}>
          {data?.webtoons.map((webtoon: WebtoonType) => {
            return <Promo key={webtoon._id} webtoon={webtoon} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default PromoSlide;

type PromoProps = {
  webtoon: WebtoonType;
};

const Promo: NextPage<PromoProps> = ({ webtoon }) => {
  return (
    <a href={webtoon.episodeLink} target="_blank" rel="noreferrer">
      <li>
        <Image src={webtoon.image} layout="fill" alt={webtoon.title} />
        <div className={styles.titleContainer}>
          <div className={styles.genre} title={"플랫폼"}>
            {webtoon.platform}
          </div>
          <div className={styles.title} title={webtoon.title}>
            {webtoon.title}
          </div>
        </div>
      </li>
    </a>
  );
};
