import type { NextPage } from "next";
import { IoArrowRedoOutline, IoPlayCircle } from "react-icons/io5";
import styles from "../../styles/Webtoon/Detail.module.scss";
import { webtoonP } from "../../types/types";
import Tags from "./Tags";

const Detail: NextPage<webtoonP> = ({ webtoon }) => {
  return (
    <div className={styles.Detail}>
      <div className={styles.links}>
        <a className={styles.url} href={webtoon.url}>
          <IoPlayCircle />
          <span>무료보기</span>
        </a>
        <a className={styles.firstEpisode} href={webtoon.first_episode_url}>
          <IoArrowRedoOutline />
          <span>1화보기</span>
        </a>
      </div>
      <div className={styles.section}>
        <div className={styles.left}>
          <div
            className={styles.synopsis}
            dangerouslySetInnerHTML={{ __html: webtoon.synopsis }}
          />

          <Tags webtoon={webtoon} />
        </div>
        <aside className={styles.aside}>
          <ul>
            <li>
              <h6>제작</h6>
              <span>{webtoon.publisher || "-"}</span>
            </li>
            <li>
              <h6>작가</h6>
              <span>{webtoon.author.join(", ")}</span>
            </li>
            <li>
              <h6>연재</h6>
              <span>{webtoon.days.join(", ")}</span>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Detail;
