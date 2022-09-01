import axios from "axios";
import type { NextPage } from "next";
import Image from "next/image";
import { FormEvent, useContext, useState } from "react";
import { AlertContext } from "../../context/alertContext";
import { UserContext } from "../../context/userContext";
import styles from "../../styles/Comments/ReplyForm.module.scss";

type ReplyFormProps = {
  postId: string;
  isTopLevel: boolean;
};

const ReplyForm: NextPage<ReplyFormProps> = ({ postId, isTopLevel }) => {
  const URL = process.env.NEXT_PUBLIC_URL;
  const { user } = useContext(UserContext);
  const { addAlert } = useContext(AlertContext);
  const [comment, setComment] = useState("");
  const dummyImage =
    "https://shared-comic.pstatic.net/thumb/webtoon/783054/thumbnail/thumbnail_IMAG10_6917f3d9-c5bb-4bfd-aa04-a288f7b252af.jpg";
  const postTopLvComment = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${URL}/comment`, {
        comment,
        postId,
        authorId: user._id,
        authorName: user.username,
        authorEmail: user.email,
      });
      addAlert("댓글 작성 완료", "success");
    } catch {
      addAlert("댓글 달기 실패", "error");
    }
  };

  const postNestedComment = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("post type 2");
  };

  return (
    <div className={styles.ReplyForm}>
      <div className={styles.profileImage}>
        <Image src={dummyImage} width={40} height={40} alt={user.username} />
      </div>
      <form className={styles.replyForm}>
        <input
          type="text"
          placeholder="댓글 추가..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div className={styles.replyUnderline}>
          <div className={styles.line} />
          <div className={styles.ripple} />
        </div>
        <div
          className={styles.formButtons}
          onClick={(e) => {
            e.preventDefault();
            setComment("");
          }}
        >
          <button className={styles.cancel} title="삭제">
            취소
          </button>
          <button
            className={styles.submit}
            title="제출"
            onClick={isTopLevel ? postTopLvComment : postNestedComment}
          >
            {isTopLevel ? "댓글" : "답글"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReplyForm;
