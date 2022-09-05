import axios from "axios";
import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { promoBoxData } from "../../data/arrays";
import styles from "../../styles/Ad/PromoBox.module.scss";
import PlayBtn from "./PlayBtn";

type SlideProps = {
  webtoon: {
    title: string;
    genre: string;
  };
  center: boolean;
};

const PromoBox: NextPage = () => {
  const [recc, setRecc] = useState(promoBoxData);
  const [isActive, setIsActive] = useState(true);
  const [center, setCenter] = useState(1);

  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function addToEnd(index: number) {
      let item = recc[index];
      setRecc([...recc, item]);
    }

    const timeout = setTimeout(() => {
      setCenter((prev) => prev + 1);
      addToEnd(center - 1);
    }, 3000);

    !isActive && clearTimeout(timeout);

    return () => {
      clearTimeout(timeout);
    };
  }, [isActive, center, recc]);

  const transformStyle = 14 - (center - 1) * 224;
  return (
    <div className={styles.PromoBox}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h3>iWatch!</h3>
          <p>Top 10 Kakaopage webtoons Click to Watch</p>
          <ul className={styles.links}>
            <a
              href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1002"
              target="_blank"
              rel="noreferrer noopener"
            >
              <li>Watch More Webtoons!</li>
            </a>
          </ul>
        </div>
        <div className={styles.content}>
          <PlayBtn isActive={isActive} setIsActive={setIsActive} />
          <div
            className={styles.slides}
            onMouseOver={() => setIsActive(false)}
            onMouseOut={() => setIsActive(true)}
            style={{ transform: `translate(${transformStyle}px)` }}
            ref={slideRef}
          >
            {recc.map((webtoon, i) => {
              return (
                <Slide
                  key={i}
                  webtoon={webtoon}
                  center={center === i && true}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBox;

const Slide: NextPage<SlideProps> = ({ webtoon, center }: any) => {
  return (
    <a href={webtoon.link} target="_blank" rel="noreferrer noopener">
      <div className={styles.Slide} id={center ? styles.center : ""}>
        <div className={styles.imageWrapper}>
          <Image src={webtoon.image} layout="fill" alt={webtoon.title} />
        </div>
        <div className={styles.textWrapper}>
          <div className={styles.genre}>{webtoon.genre}</div>
          <div className={styles.title} title={webtoon.title}>
            {webtoon.title}
          </div>
        </div>
        <div className={styles.slideHover}>
          <div className={styles.textHover}>Click to watch</div>
        </div>
      </div>
    </a>
  );
};
