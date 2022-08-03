import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import {
  IoAddOutline,
  IoChevronDownOutline,
  IoChevronUpOutline,
  IoHomeOutline,
} from "react-icons/io5";
import styles from "../../styles/Layout/RemoteBtn.module.scss";

const RemoteBtn: NextPage = () => {
  const [showHover, setShowHover] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const scrollBottom = () => {
    window.scrollTo({ top: 99999, behavior: "smooth" });
  };
  return (
    <div className={styles.RemoteBtn}>
      <div
        className={styles.buttons}
        id={showHover ? styles.show : styles.hidden}
      >
        <button onClick={scrollTop}>
          <IoChevronUpOutline />
        </button>
        <Link href="/">
          <button>
            <IoHomeOutline />
          </button>
        </Link>
        <button onClick={scrollBottom}>
          <IoChevronDownOutline />
        </button>
      </div>
      <button
        className={showHover ? `${styles.plus}` : ""}
        onClick={() => setShowHover((prev) => !prev)}
      >
        <IoAddOutline />
      </button>
    </div>
  );
};

export default RemoteBtn;
