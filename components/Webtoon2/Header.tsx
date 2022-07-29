import type { NextPage } from "next";
import { IoStarSharp } from "react-icons/io5";
import { webtoonP } from "../../types/types";
import styles from "../../styles/Webtoon2/Header.module.scss";

const Header: NextPage<webtoonP> = ({ webtoon }) => {
  return (
    <header className={styles.Header}>
      <ul className={styles.badges}>
        <li className={styles.rating}>
          <IoStarSharp />
          <span>{webtoon?.rating || ""}</span>
        </li>
        <li className={styles.category}>{webtoon.category}</li>
      </ul>
      <h1 className={styles.title}>{webtoon.title}</h1>
      <div className={styles.tags}>
        <div className={styles.genre}>{webtoon.genre.join(" · ")}</div>
        <div>|</div>
        <div className={styles.genre}>{webtoon.platform}</div>
      </div>
    </header>
  );
};

export default Header;
