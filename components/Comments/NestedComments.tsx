import type { NextPage } from "next";
import SkeletonComment from "../Skeletons/SkeletonComment";
import styles from "../../styles/Comments/NestedComments.module.scss";
import Comment from "./Comment";

const NestedComments: NextPage = () => {
  const data = [
    {
      id: "507f191e810c19729de860ea",
      image:
        "https://shared-comic.pstatic.net/thumb/webtoon/783054/thumbnail/thumbnail_IMAG10_6917f3d9-c5bb-4bfd-aa04-a288f7b252af.jpg",
      authorId: "5d6ede6a0ba62570afcedd3a",
      authorEmail: "test@gmail.com",
      authorName: "testName",
      comment: "nested comment 1",
      createdAt: "createdAt",
      like: ["5d6ede6a0ba62570afcedd3a"],
      dislike: ["570afcedd3a"],
      updatedAt: "updatedAt",
      parentId: 1,
      childrenId: ["5d6ede6a0ba625a", "asdfasdf"],
      webtoonId: 123123,
    },
    {
      id: "507f191e810c19729de860eb",
      image:
        "https://shared-comic.pstatic.net/thumb/webtoon/783054/thumbnail/thumbnail_IMAG10_6917f3d9-c5bb-4bfd-aa04-a288f7b252af.jpg",
      authorId: "5d6ede6a0ba62570afcedd3a",
      authorEmail: "test2@gmail.com",
      authorName: "testName2222",
      comment: "nested comment 2",
      createdAt: "createdAt",
      like: ["5d6ede6a0ba625a", "asdfasdf"],
      dislike: ["570afcedd3a", "f", "ddas"],
      webtoonId: 123123,
    },
  ];

  return (
    <div className={styles.NestedComments}>
      {data ? (
        data.map((comment) => <Comment key={comment.id} c={comment} />)
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

export default NestedComments;
