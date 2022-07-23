import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import useClickOutside from "../../hooks/useClickOutside";
import styles from "../../styles/NewKakao.module.scss";
import { SampleCardProps, SampleNewProps } from "../../types/types";
import EllipsisPopup from "../EllipsisPopup";

const NewKakao: NextPage<SampleNewProps> = ({ webtoons }) => {
  return (
    <div className={styles.NewKakao}>
      {webtoons.map((webtoon) => {
        return (
          <div className={styles.webtoon} key={webtoon.title}>
            <CardKaKao webtoon={webtoon} />
          </div>
        );
      })}
    </div>
  );
};

export default NewKakao;

const CardKaKao: NextPage<SampleCardProps> = ({ webtoon }) => {
  const [show, setShow] = useState(false);
  const domNode: any = useClickOutside(() => {
    setShow(false);
  });
  return (
    <div className={styles.CardKakao}>
      <div className={styles.image}>
        <Image
          src={"/sample/sample_kakao.webp"}
          width={248}
          height={520}
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
