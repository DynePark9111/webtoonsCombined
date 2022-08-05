import type { NextPage } from "next";
import { useRef, useState } from "react";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import useClickOutside from "../../Hooks/useClickOutside";
import styles from "../../styles/Commons/EllipsisButton.module.scss";
import { EllipsisButtonP } from "../../types/types";
import EllipsisPopup from "./EllipsisPopup";

const EllipsisButton: NextPage<EllipsisButtonP> = ({ webtoon_id }) => {
  const [show, setShow] = useState(false);
  const ellipsisRef = useRef<HTMLDivElement>(null);
  const clickOutsidehandler = () => {
    setShow(false);
  };
  useClickOutside(ellipsisRef, clickOutsidehandler);
  return (
    <div
      className={styles.EllipsisButton}
      onClick={() => setShow((prev) => !prev)}
      ref={ellipsisRef}
    >
      <IoEllipsisVerticalSharp title="더보기" />
      <div className={styles.popup}>
        {show && <EllipsisPopup webtoon_id={webtoon_id} />}
      </div>
    </div>
  );
};

export default EllipsisButton;
