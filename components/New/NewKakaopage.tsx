import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import useClickOutside from "../../hooks/useClickOutside";
import styles from "../../styles/NewKakaopage.module.scss";
import { SampleCardProps, SampleNewProps } from "../../types/types";
import EllipsisPopup from "../EllipsisPopup";

const NewKakaopage: NextPage<SampleNewProps> = ({ webtoons }) => {
  return (
    <div className={styles.NewKakaopage}>
      {webtoons.map((webtoon) => {
        return (
          <div className={styles.webtoon} key={webtoon.title}>
            <CardKakaopage webtoon={webtoon} />
          </div>
        );
      })}
    </div>
  );
};

export default NewKakaopage;

const CardKakaopage: NextPage<SampleCardProps> = ({ webtoon }) => {
  const [show, setShow] = useState(false);
  const domNode: any = useClickOutside(() => {
    setShow(false);
  });
  return (
    <div className={styles.CardKP}>
      <div className={styles.image}>
        <Image
          src={"/sample/sample_kp.png"}
          width={240}
          height={240}
          alt="webtoon cover image"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.new}>new</div>
          <div
            className={styles.ellipsis}
            onClick={() => setShow((prev) => !prev)}
            ref={domNode}
          >
            <IoEllipsisVerticalSharp id={styles.selected} title="더보기" />
            <div className={styles.popup}>{show && <EllipsisPopup />}</div>
          </div>
        </div>
        <div className={styles.title} title={webtoon.title}>
          {webtoon.title}
        </div>
        <div className={styles.episode} title={webtoon.episode}>
          {webtoon.episode}
        </div>
      </div>
    </div>
  );
};
