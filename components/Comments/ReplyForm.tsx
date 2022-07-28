import type { NextPage } from "next";
import Image from "next/image";
import { FormEvent, useState } from "react";
import styles from "../../styles/ReplyForm.module.scss";

type ReplyFormProps = {
  parentId: number;
  isTopLevel: boolean;
};

const ReplyForm: NextPage<ReplyFormProps> = ({ parentId, isTopLevel }) => {
  const [message, setMessage] = useState("");
  const user = {
    userImage:
      "https://shared-comic.pstatic.net/thumb/webtoon/783054/thumbnail/thumbnail_IMAG10_6917f3d9-c5bb-4bfd-aa04-a288f7b252af.jpg",
    userId: "5d6ede6a0ba62570afcedd3a",
    userName: "testName",
  };

  const postFirstType = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("post type 1");
  };

  const postSecondType = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("post type 2");
  };

  return (
    <div className={styles.ReplyForm}>
      <div className={styles.profileImage}>
        <Image
          src={user.userImage}
          width={40}
          height={40}
          alt={user.userName}
        />
      </div>
      <form className={styles.replyForm}>
        <input
          type="text"
          placeholder="댓글 추가..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className={styles.replyUnderline}>
          <div className={styles.line} />
          <div className={styles.ripple} />
        </div>
        <div className={styles.formButtons}>
          <button className={styles.cancel} title="삭제">
            취소
          </button>
          <button
            className={styles.submit}
            title="제출"
            onClick={isTopLevel ? postFirstType : postSecondType}
          >
            {isTopLevel ? "댓글" : "답글"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReplyForm;
