import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import { adsArray } from "../../data/arrays";
import styles from "../../styles/Ad/BannerSlide.module.scss";

const BannerSlide: NextPage = () => {
  const [slide, setSlide] = useState(0);
  const slideRef = useRef(0);
  const timeRef = useRef<null | NodeJS.Timeout>(null);

  useEffect(() => {
    const timeout = setInterval(() => {
      slideRef.current >= adsArray.length - 1
        ? (slideRef.current = 0)
        : (slideRef.current = slideRef.current + 1);
      timeRef.current = timeout;
      setSlide(slideRef.current);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  const slideLeft = () => {
    slide <= 0 ? setSlide(adsArray.length - 1) : setSlide(slide - 1);
    clearTimeout(timeRef.current as NodeJS.Timeout);
  };
  const slideRight = () => {
    slide >= adsArray.length - 1 ? setSlide(0) : setSlide(slide + 1);
    clearTimeout(timeRef.current as NodeJS.Timeout);
  };

  return (
    <div className={styles.BannerSlide}>
      <div
        className={styles.banner}
        style={{ transform: `translateX(-${slide}00%)` }}
      >
        {adsArray.map((ad) => (
          <a
            key={ad.id}
            href={ad.link}
            target="_blank"
            rel="noreferrer noopener"
            title={`${ad.name} Youtube 채널 바로가기`}
          >
            <Image width={20480} height={3390} src={ad.src} alt={ad.name} />
          </a>
        ))}
      </div>
      <div className={styles.buttons}>
        <button title="이전 광고" onClick={() => slideLeft()}>
          <IoChevronBackSharp />
        </button>
        <button title="다음 광고" onClick={() => slideRight()}>
          <IoChevronForwardSharp />
        </button>
      </div>
      <div className={styles.progress}>
        {adsArray.map((ad, index) => (
          <div
            key={ad.id}
            title={`${index + 1}번 광고로 가기`}
            className={styles.dots}
            id={slide === index ? `${styles.active}` : ""}
            onClick={() => setSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlide;
