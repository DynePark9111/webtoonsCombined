import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import {
  IoArrowBackOutline,
  IoArrowRedoOutline,
  IoBookmarkOutline,
  IoEllipsisVerticalSharp,
  IoEyeOutline,
  IoHeartOutline,
  IoPlayCircle,
  IoPlayCircleOutline,
  IoStarSharp,
} from "react-icons/io5";
import EllipsisPopup from "../../components/EllipsisPopup";
import useClickOutside from "../../Hooks/useClickOutside";
import styles from "../../styles/Webtoon2.module.scss";

type TableProps = {
  webtoon: {
    title: string;
    category: string;
    platform: string;
    author: string[];
    genre: string[];
    image: string;
    url: string;
    age: string;
    synopsis: string;
    days: string[];
    like: number;
    dislike: number;
    bookmark: number;
    view: number;
    firstEpisode: string;
    rating: number;
    publisher: string;
  };
};

const Webtoon2: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [tab, setTab] = useState("평점");
  const tabArray = ["평점", "비슷한 작품"];

  const webtoon = {
    title: "왕의 딸로 태어났다고 합니다",
    category: "ongoing",
    platform: "Kakaopage",
    author: ["프로리", "IlIlIIll", "마젠타블랙", "김렉나", "비츄"],
    genre: ["액션", "로맨스", "판타지"],
    image:
      "https://dn-img-page.kakao.com/download/resource?kid=cvkAfb/hymrdQh7F1/ZF5Rsz2RR9NdGaZMAKb7yk&filename=th1",
    url: "https://page.kakao.com/home?seriesId=48211586",
    age: "전체",
    synopsis:
      "대충 줄거리.. 대충 줄거리.. 대충 줄거리.. 대충 줄거리.. 대충 줄거리.. 대충 줄거리.. 대충 줄거리.. 대충 줄거리.. 대충 줄거리.. 대충 줄거리..",
    days: ["일"],
    like: 10,
    dislike: 10,
    bookmark: 10,
    view: 10,
    firstEpisode: "https://page.kakao.com/home?seriesId=48211586",
    rating: 4.3,
    publisher: "REDICE STUDIO",
  };

  return (
    <div className={styles.Webtoon2}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <Images image={webtoon.image} />
          <Icons />
          <div className={styles.about}>
            <Header webtoon={webtoon} />
            <Detail webtoon={webtoon} />
            <Tags webtoon={webtoon} />
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.tabs}>
            {tabArray.map((i) => (
              <div
                className={styles.tab}
                key={i}
                id={tab === i ? styles.selected : ""}
                onClick={() => setTab(i)}
              >
                {i}
              </div>
            ))}
          </div>
          {tab === "평점" && <h1>`평점` 개발중</h1>}
          {tab === "비슷한 작품" && <h1>`비슷한` 작품 개발중</h1>}
        </div>
      </div>
    </div>
  );
};

export default Webtoon2;
type ImageProps = {
  image: string;
};

const Images: NextPage<ImageProps> = ({ image }) => {
  return (
    <div className={styles.Images}>
      <div
        className={styles.imageBackground}
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className={styles.imagePoster}>
        <Image
          width={200}
          height={267}
          src={image}
          alt="오버로드 3기_thumbnail"
        />
      </div>
    </div>
  );
};
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

const Header: NextPage<TableProps> = ({ webtoon }) => {
  return (
    <header className={styles.Header}>
      <ul className={styles.badges}>
        <li className={styles.rating}>
          <IoStarSharp />
          <span>{webtoon.rating || "-"}</span>
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

const Detail: NextPage<TableProps> = ({ webtoon }) => {
  return (
    <div className={styles.Detail}>
      <div className={styles.links}>
        <a className={styles.url} href={webtoon.url}>
          <IoPlayCircle />
          <span>무료보기</span>
        </a>
        <a className={styles.firstEpisode} href={webtoon.firstEpisode}>
          <IoArrowRedoOutline />
          <span>1화보기</span>
        </a>
      </div>
      <div className={styles.section}>
        <div className={styles.synopsis}>{webtoon.synopsis}</div>
        <aside className={styles.aside}>
          <ul>
            <li>
              <h6>제작</h6>
              <span>{webtoon.publisher}</span>
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

const Tags: NextPage<TableProps> = ({ webtoon }) => {
  return (
    <ul className={styles.Tags}>
      <Link href={`/webtoons?platform=${webtoon.platform}`}>
        <li>{webtoon.platform}</li>
      </Link>
      <Link href={`/webtoons?category=${webtoon.category}`}>
        <li title="바로가기">{webtoon.category}</li>
      </Link>
      {webtoon.genre.map((i) => (
        <Link key={i} href={`/webtoons?genre=${i}`}>
          <li>{i}</li>
        </Link>
      ))}
      {webtoon.author.map((i) => (
        <Link key={i} href={`/search/${i}`}>
          <li>{i}</li>
        </Link>
      ))}
    </ul>
  );
};
