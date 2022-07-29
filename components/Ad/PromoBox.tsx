import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
  let rec = [
    {
      title: "Title 1",
      genre: "genre1",
    },
    {
      title: "Title 2",
      genre: "genre2",
    },
    {
      title: "Title 3",
      genre: "genre3",
    },
    {
      title: "Title 4",
      genre: "genre4",
    },
    {
      title: "Title 5",
      genre: "genre5",
    },
  ];
  const [recc, setRecc] = useState(rec);
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
          <h3>iCloud</h3>
          <p>The best place for all your photos, files, and more.</p>
          <ul className={styles.links}>
            <li>Try it free x</li>
            <li>Learn more +</li>
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
    <div className={styles.Slide} id={center ? styles.center : ""}>
      <div className={styles.imageWrapper}>
        <Image
          src={"/sample/sample_kp.png"}
          layout="fill"
          alt={webtoon.title}
        />
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.genre}>Genre</div>
        <div className={styles.title} title={webtoon.title}>
          {webtoon.title}
        </div>
      </div>
      <div className={styles.slideHover}>
        <div className={styles.textHover}>Click to watch</div>
      </div>
    </div>
  );
};
