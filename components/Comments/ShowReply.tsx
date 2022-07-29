import { ObjectId } from "mongodb";
import type { NextPage } from "next";
import { useState } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import styles from "../../styles/Comments/ShowReply.module.scss";
import Comments from "./Comments";

type ShowReplyP = {
  commentId: ObjectId;
  replyCount: number;
};

const ShowReply: NextPage<ShowReplyP> = ({ commentId, replyCount }) => {
  const [showReply, setShowReply] = useState(false);
  //axios GET {commenId}

  return (
    <div className={styles.ShowReply}>
      <ShowReplyButton
        showReply={showReply}
        setShowReply={setShowReply}
        replyCount={replyCount}
      />
      {showReply && <Comments isTopLevel={false} />}
    </div>
  );
};

export default ShowReply;

type ShowReplyButtonProps = {
  showReply: boolean;
  setShowReply: (arg: boolean) => void;
  replyCount: number;
};

const ShowReplyButton: NextPage<ShowReplyButtonProps> = ({
  showReply,
  setShowReply,
  replyCount,
}) => {
  return (
    <div
      className={styles.ShowReplyButton}
      onClick={() => setShowReply(!showReply)}
    >
      {showReply ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
      {replyCount && <span>답글 {replyCount}</span>}
    </div>
  );
};
