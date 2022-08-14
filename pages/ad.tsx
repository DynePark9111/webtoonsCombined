import type { NextPage } from "next";
import { useState } from "react";
import BannerSlide from "../components/Ad/BannerSlide";
import PlayBtn from "../components/Ad/PlayBtn";
import PromoBox from "../components/Ad/PromoBox";
import PromoSlide from "../components/Ad/PromoSlide";
import styles from "../styles/Pages/Ad.module.scss";

const Ad: NextPage = () => {
  const [play, setPlay] = useState(true);
  return (
    <div className={styles.Ad}>
      <BannerSlide />
      <div className={styles.wrapper2}>
        <PromoSlide play={play} />
        <PlayBtn isActive={play} setIsActive={setPlay} />
      </div>
      <div className={styles.wrapper}>
        <PromoBox />
        {/* <PromoBox /> */}
      </div>
    </div>
  );
};

export default Ad;
