import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import {
  IoBookmarkOutline,
  IoEllipsisVerticalSharp,
  IoEyeOutline,
  IoHeartOutline,
  IoTrashOutline,
} from "react-icons/io5";
import EllipsisPopup from "../../components/Common/EllipsisPopup";
import useClickOutside from "../../Hooks/useClickOutside";
import styles from "../../styles/Pages/Webtoon.module.scss";

const Webtoon: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const webtoon = {
    title: "왕의 딸로 태어났다고 합니다",
    cateogory: "ongoing",
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
  };

  return (
    <div className={styles.Webtoon}>
      <div className={styles.wrapper}>
        <div className={styles.detail}>
          <ImageAndButtons webtoon={webtoon} />
          <Table webtoon={webtoon} />
        </div>
        <Synopsis webtoon={webtoon} />
      </div>
      <div className={styles.wrapper2}>
        <h3>웹툰추천</h3>
        {/* <div className={styles.recs}>
          <div className={styles.rec}>
            <Image layout="fill" src={webtoon.image} alt={webtoon.title} />
            <div className={styles.recTitle}>{webtoon.title}</div>
          </div>
        </div> */}
      </div>
      <div className={styles.wrapper3}>
        <h3>댓글</h3>
        <div className={styles.recs}>
          <div>댓글</div>
          <div>댓글</div>
          <div>댓글</div>
          <div>댓글</div>
          <div>댓글</div>
          <div>댓글</div>
          <div>댓글</div>
        </div>
      </div>
    </div>
  );
};

export default Webtoon;

type TableProps = {
  webtoon: {
    title: string;
    cateogory: string;
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
  };
};

const ImageAndButtons: NextPage<TableProps> = ({ webtoon }) => {
  const [show, setShow] = useState(false);
  const ellipsisRef = useRef<HTMLDivElement>(null);
  const clickOutsidehandler = () => {
    setShow(false);
  };
  useClickOutside(ellipsisRef, clickOutsidehandler);

  return (
    <div className={styles.ImageAndButtons}>
      <div className={styles.image}>
        <Image layout="fill" src={webtoon.image} alt={webtoon.title} />
        <div
          className={styles.ellipsis}
          onClick={() => setShow((prev) => !prev)}
          ref={ellipsisRef}
        >
          <IoEllipsisVerticalSharp id={styles.selected} title="더보기" />
          <div className={styles.popup}>{show && <EllipsisPopup />}</div>
        </div>
      </div>
      <div className={styles.buttons}>
        {webtoon.url && <button>웹툰목록</button>}
        {webtoon.firstEpisode && <button>첫화보기</button>}
      </div>
    </div>
  );
};

const Table: NextPage<TableProps> = ({ webtoon }) => {
  return (
    <div className={styles.Table}>
      <div className={styles.title}>{webtoon.title || "-"}</div>
      <div className={styles.tr}>
        <div className={styles.th}>연재처</div>
        <div className={styles.td}>{webtoon.platform || "-"}</div>
      </div>
      <div className={styles.tr}>
        <div className={styles.th}>작가</div>
        <div className={styles.td}>{webtoon.author.join(", ") || "-"}</div>
      </div>
      <div className={styles.tr}>
        <div className={styles.th}>장르</div>
        <div className={styles.td}>
          {webtoon.genre?.map((item) => (
            <span
              key={item}
              className={styles.genre}
              onClick={() => alert(`link to ${item}`)}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.tr}>
        <div className={styles.th}>이용등급</div>
        <div className={styles.td}>{webtoon.age || "-"}</div>
      </div>
      <div className={styles.tr}>
        <div className={styles.th}>연재주기</div>
        <div className={styles.td}>{webtoon.days || "-"}</div>
      </div>
      <div className={styles.tr}>
        <div className={styles.th}>Stats</div>
        <div className={styles.td}>
          <span className={styles.stat}>
            <IoEyeOutline />
            <span>{webtoon.view || "0"}</span>
          </span>
          <span className={styles.stat}>
            <IoHeartOutline />
            <span>{webtoon.like || "0"}</span>
          </span>
          <span className={styles.stat}>
            <IoBookmarkOutline />
            <span>{webtoon.bookmark || "0"}</span>
          </span>
          <span className={styles.stat}>
            <IoTrashOutline />
            <span>{webtoon.dislike || "0"}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

const Synopsis: NextPage<TableProps> = ({ webtoon }) => {
  return (
    <div className={styles.Synopsis}>
      <div>작품소개</div>
      <div dangerouslySetInnerHTML={{ __html: webtoon.synopsis || "-" }} />
    </div>
  );
};
