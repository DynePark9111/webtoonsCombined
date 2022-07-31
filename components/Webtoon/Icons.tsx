import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { IoArrowBackOutline, IoEllipsisVerticalSharp } from "react-icons/io5";
import useClickOutside from "../../Hooks/useClickOutside";
import styles from "../../styles/Webtoon/Icons.module.scss";
import EllipsisPopup from "../Commons/EllipsisPopup";

const Icons: NextPage = () => {
  const [show, setShow] = useState(false);
  const ellipsisRef = useRef<HTMLDivElement>(null);
  const clickOutsidehandler = () => {
    setShow(false);
  };
  useClickOutside(ellipsisRef, clickOutsidehandler);

  const router = useRouter();

  return (
    <nav className={styles.Icons}>
      <div
        className={styles.ellipsis}
        onClick={() => setShow((prev) => !prev)}
        ref={ellipsisRef}
      >
        <IoEllipsisVerticalSharp title="더보기" />
        <div className={styles.popup}>{show && <EllipsisPopup />}</div>
      </div>
      <div
        className={styles.backArrow}
        title="돌아가기"
        onClick={() => router.back()}
      >
        <IoArrowBackOutline />
      </div>
    </nav>
  );
};

export default Icons;
