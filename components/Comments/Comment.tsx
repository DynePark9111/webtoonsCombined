import type { NextPage } from "next";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  IoEllipsisVerticalSharp,
  IoThumbsDown,
  IoThumbsDownOutline,
  IoThumbsUp,
  IoThumbsUpOutline,
} from "react-icons/io5";
import useClickOutside from "../../Hooks/useClickOutside";
import styles from "../../styles/Comments/Comment.module.scss";
import CommentEllipsis from "./CommentEllipsis";
import ReplyForm from "./ReplyForm";

type c = {
  id: string;
  image: string;
  authorId: string;
  authorEmail: string;
  authorName: string;
  comment: string;
  createdAt: string;
  like: string[];
  dislike: string[];
  updatedAt?: string;
  parentId?: number;
};

type CommentP = {
  c: c;
};

const Comment: NextPage<CommentP> = ({ c }) => {
  const [showMore, setShowMore] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [show, setShow] = useState(false);
  const ellipsisRef = useRef<HTMLDivElement>(null);
  const clickOutsidehandler = () => {
    setShow(false);
  };
  useClickOutside(ellipsisRef, clickOutsidehandler);
  const dummyImage =
    "https://shared-comic.pstatic.net/thumb/webtoon/783054/thumbnail/thumbnail_IMAG10_6917f3d9-c5bb-4bfd-aa04-a288f7b252af.jpg";

  return (
    <div className={styles.Comment}>
      <div className={styles.profileImage}>
        <Image src={dummyImage} width={40} height={40} alt={c.authorName} />
      </div>
      <div className={styles.commentBox}>
        <UserAndDate c={c} />
        <CommentText c={c} showMore={showMore} setShowMore={setShowMore} />
        <Buttons c={c} setShowInput={setShowInput} />
        {showInput && <ReplyForm postId={c.id} isTopLevel={false} />}
      </div>
      <div
        className={styles.ellipsis}
        onClick={() => setShow((prev) => !prev)}
        ref={ellipsisRef}
      >
        <IoEllipsisVerticalSharp title="더보기" />
        <div className={styles.popup}>{show && <CommentEllipsis />}</div>
      </div>
    </div>
  );
};

export default Comment;

type UserAndDateP = {
  c: c;
};
const UserAndDate: NextPage<UserAndDateP> = ({ c }) => {
  return (
    <div className={styles.UserAndDate}>
      <div className={styles.username}>{c.authorName}</div>
      <div className={styles.createdAt}>{c.createdAt}</div>
      <div className={styles.updatedAt}>{c.updatedAt && "(수정됨)"}</div>
    </div>
  );
};

type CommentTextP = {
  c: c;
  showMore: boolean;
  setShowMore: (arg: any) => void;
};

const CommentText: NextPage<CommentTextP> = ({ c, showMore, setShowMore }) => {
  return (
    <div className={styles.CommentText}>
      <div className={styles.message} id={showMore ? styles.showMore : ""}>
        {c.comment}
      </div>
      {c.comment.length > 100 && (
        <div
          className={styles.more}
          onClick={() => setShowMore((pre: boolean) => !pre)}
        >
          {showMore ? "간략히" : "자세히 보기"}
        </div>
      )}
    </div>
  );
};

type ButtonsP = {
  c: c;
  setShowInput: (arg: any) => void;
};

const Buttons: NextPage<ButtonsP> = ({ c, setShowInput }) => {
  const userId = "5d6ede6a0ba62570afcedd3a";
  return (
    <div className={styles.Buttons}>
      <div className={styles.likeIcon}>
        {c.like?.includes(userId) ? <IoThumbsUp /> : <IoThumbsUpOutline />}
      </div>
      <div className={styles.likeCount}>{c?.like?.length || 0}</div>
      <div className={styles.dislikeIcon}>
        {c.dislike?.includes(userId) ? (
          <IoThumbsDown />
        ) : (
          <IoThumbsDownOutline />
        )}
      </div>
      <div className={styles.dislikeCount}>{c.dislike?.length || 0}</div>
      <div
        className={styles.reply}
        onClick={() => setShowInput((pre: boolean) => !pre)}
      >
        답글
      </div>
    </div>
  );
};
