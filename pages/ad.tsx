import type { NextPage } from "next";
import { useState } from "react";
import BannerSlide from "../components/BannerSlide";
import PlayBtn from "../components/PlayBtn";
import PromoBox from "../components/PromoBox";
import PromoSlide from "../components/PromoSlide";
import styles from "../styles/Ad.module.scss";

const Ad: NextPage = () => {
  const [play, setPlay] = useState(true);
  return (
    <div className={styles.Ad}>
      <BannerSlide />
      <div className={styles.wrapper}>
        <PromoBox />
        <PromoBox />
      </div>
      <div className={styles.wrapper2}>
        <PromoSlide play={play} />
        <PlayBtn isActive={play} setIsActive={setPlay} />
      </div>
    </div>
  );
};

export default Ad;
