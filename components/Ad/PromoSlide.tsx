import type { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/Ad/PromoSlide.module.scss";

type PromoSlideProps = {
  play: boolean;
};

const PromoSlide: NextPage<PromoSlideProps> = ({ play }) => {
  const webtoons = [
    { title: "title1 asdfasd fasdf asd fs", genre: "action romance comedy" },
    { title: "as fs", genre: "romance" },
    { title: "asdfsdf asd fs", genre: "comedy" },
    { title: "asf asd fs", genre: "episode" },
    { title: " asdfasd fasdf asd fs", genre: "action romance comedy" },
    { title: "a as fs", genre: "romance" },
    { title: "df asd fs", genre: "comedy" },
    { title: "sd fs", genre: "episode" },
    { title: "sd fasdf asd fs", genre: "action romance comedy" },
    { title: "fasdf asdadsf ", genre: "romance" },
    { title: "df asd fs", genre: "comedy" },
    { title: "asf adsd fs", genre: "episode" },
    { title: "asdfasdd fasdf asd fs", genre: "action romance comedy" },
    { title: "as fds", genre: "romance" },
    { title: "asdfsddf asd fs", genre: "comedy" },
    { title: "asf asdd fs", genre: "episode" },
  ];
  return (
    <div className={styles.PromoSlide}>
      <div className={styles.wrapper}>
        <ul id={!play ? styles.paused : ""}>
          {webtoons.map((webtoon) => {
            return (
              <li key={webtoon.title}>
                <Image
                  src={"/sample/sample_kakao.webp"}
                  layout="fill"
                  alt={webtoon.title}
                />
                <div className={styles.titleContainer}>
                  <div className={styles.genre} title={"장르"}>
                    action romance comedy
                  </div>
                  <div className={styles.title} title={webtoon.title}>
                    {webtoon.title}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PromoSlide;
