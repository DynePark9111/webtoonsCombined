import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExploreCards, OfficialPlatforms } from "../data/arrays";
import styles from "../styles/Explore.module.scss";
import { CardProps } from "../types/types";

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

const Card: NextPage<CardProps> = ({ card }) => {
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
  };
};

const Officials: NextPage = () => {
  return (
    <div className={styles.Officials}>
      {OfficialPlatforms.map((platform) => (
        <Platform key={platform.id} platform={platform} />
      ))}
    </div>
  );
};

const Platform: NextPage<PlatformProps> = ({ platform }) => {
  return (
    <a
      className={styles.Platform}
      title={platform.name}
      href={platform.link}
      rel="noreferrer noopener"
      target="_blank"
    >
      <Image width={92} height={92} src={platform.icon} alt={platform.name} />
    </a>
  );
};
