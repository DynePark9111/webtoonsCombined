import type { NextPage } from "next";
import styles from "../styles/NaverToons.module.scss";
import data from "../data/database.json";
import Image from "next/image";

const NaverToons: NextPage = () => {
  return (
    <ul className={styles.NaverToons}>
      {data?.naver.map((webtoon) => (
        <li key={webtoon.id}>
          <div className={styles.image}>
            <Image
              width={83}
              height={90}
              src={webtoon.image}
              alt={webtoon.title}
              onClick={() =>
                window.open(
                  `https://comic.naver.com${webtoon.episodeLink}`,
                  "_blank"
                )
              }
            />
          </div>
          <a
            className={styles.title}
            href={`https://comic.naver.com${webtoon.episodeLink}`}
            title={`<${webtoon.title}> ${webtoon.episodeTitle}`}
          >
            {webtoon.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NaverToons;
