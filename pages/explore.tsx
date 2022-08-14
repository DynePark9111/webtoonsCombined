import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExploreCards, OfficialPlatforms } from "../data/arrays";
import styles from "../styles/Pages/Explore.module.scss";
import { CardExploreProps } from "../types/types";

const Explore: NextPage = () => {
  return (
    <div className={styles.Explore}>
      <h2>사이트 탐색</h2>
      <Cards />
      <h2>공식 사이트 바로가기</h2>
      <Officials />
    </div>
  );
};

export default Explore;

const Cards: NextPage = () => {
  return (
    <div className={styles.Cards}>
      {ExploreCards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
};

const Card: NextPage<CardExploreProps> = ({ card }) => {
  return (
    <Link href={card.link}>
      <div className={styles.Card}>
        <div className={styles.icon}>
          {card.icon ? (
            <Image
              width={32}
              height={32}
              src={card.icon}
              alt={card.title}
              priority
              quality={100}
            />
          ) : (
            <div className={styles.empty} />
          )}
        </div>
        <div className={styles.title}>{card.title}</div>
      </div>
    </Link>
  );
};

type PlatformProps = {
  platform: {
    id: number;
    name: string;
    icon: string;
    link: string;
    background: string;
  };
};

const Officials: NextPage = () => {
  return (
    <div className={styles.Officials}>
      {OfficialPlatforms.map((platform) => (
        <a
          key={platform.id}
          className={styles.link}
          title={platform.name}
          href={platform.link}
          style={{ backgroundColor: platform.background }}
          rel="noreferrer noopener"
          target="_blank"
        >
          <Platform platform={platform} />
        </a>
      ))}
    </div>
  );
};

const Platform: NextPage<PlatformProps> = ({ platform }) => {
  return (
    <div className={styles.Platform}>
      <Image
        width={300}
        height={300}
        src={platform.icon}
        alt={platform.name}
        className={styles.image}
      />
    </div>
  );
};
