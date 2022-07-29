import type { NextPage } from "next";
import Image from "next/image";
import { useRef, useState } from "react";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import useClickOutside from "../../Hooks/useClickOutside";
import styles from "../../styles/New/NewNaver.module.scss";
import { SampleCardProps, SampleNewProps } from "../../types/types";
import EllipsisPopup from "../Commons/EllipsisPopup";

const NewNaver: NextPage<SampleNewProps> = ({ webtoons }) => {
  return (
    <div className={styles.NewNaver}>
      {webtoons.map((webtoon) => {
        return (
          <div className={styles.webtoon} key={webtoon.title}>
            <CardNaver webtoon={webtoon} />
          </div>
        );
      })}
    </div>
  );
};
export default NewNaver;

const CardNaver: NextPage<SampleCardProps> = ({ webtoon }) => {
  const [show, setShow] = useState(false);
  const ellipsisRef = useRef<HTMLDivElement>(null);
  const clickOutsidehandler = () => {
    setShow(false);
  };
  useClickOutside(ellipsisRef, clickOutsidehandler);
  return (
    <div className={styles.CardNaver}>
      <div className={styles.image}>
        <Image
          src={"/sample/sample_naver.jpg"}
          width={126}
          height={135}
          alt="webtoon cover image"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.new}>New</div>
          <div
            className={styles.ellipsis}
            onClick={() => setShow((prev) => !prev)}
            ref={ellipsisRef}
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
