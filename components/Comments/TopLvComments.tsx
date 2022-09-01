import axios from "axios";
import type { NextPage } from "next";
import useSWR from "swr";
import styles from "../../styles/Comments/TopLvComments.module.scss";
import SkeletonComment from "../Skeletons/SkeletonComment";
import Comment from "./Comment";
import ShowReply from "./ShowReply";

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
  webtoonId?: number;
  updatedAt?: string;
  childrenId?: string[];
};

type TopLvCommentsP = {
  parentId: string;
};

const TopLvComments: NextPage<TopLvCommentsP> = ({ parentId }) => {
  const URL = process.env.NEXT_PUBLIC_URL;
  const fetcher = async () => {
    const res = await axios.get(`${URL}/comment/${parentId}`);
    return res.data;
  };
  const { data } = useSWR(`/comment/${parentId}`, fetcher);

  return (
    <div className={styles.TopLvComments}>
      {data ? (
        data.map((comment: c) => (
          <>
            <Comment key={comment.id} c={comment} />
            {comment.childrenId?.length && (
              <ShowReply
                commentId={comment.id}
                replyCount={comment.childrenId.length}
              />
            )}
          </>
        ))
      ) : (
        <>
          <SkeletonComment />
          <SkeletonComment />
          <SkeletonComment />
        </>
      )}
    </div>
  );
};

export default TopLvComments;
