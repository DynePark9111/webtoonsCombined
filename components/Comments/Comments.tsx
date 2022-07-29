import type { NextPage } from "next";
import styles from "../../styles/Comments/Comments.module.scss";
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

type CommentsP = {
  isTopLevel: boolean;
};

const Comments: NextPage<CommentsP> = ({ isTopLevel }) => {
  const data = [
    {
      id: "507f191e810c19729de860ea",
      image:
        "https://shared-comic.pstatic.net/thumb/webtoon/783054/thumbnail/thumbnail_IMAG10_6917f3d9-c5bb-4bfd-aa04-a288f7b252af.jpg",
      authorId: "5d6ede6a0ba62570afcedd3a",
      authorEmail: "test@gmail.com",
      authorName: "testName",
      comment: "test comment here ~~",
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
      comment: "test co1231231 2312 3123mment here ~~",
      createdAt: "createdAt",
      like: ["5d6ede6a0ba625a", "asdfasdf"],
      dislike: ["570afcedd3a", "f", "ddas"],
      webtoonId: 123123,
    },
  ];

  const postFirstType = async () => {
    console.log("post type 1");
  };

  const postSecondType = async () => {
    console.log("post type 2");
  };

  return (
    <div className={styles.Comments}>
      {data.map((comment) => (
        <>
          <Comment key={comment.id} c={comment} />
          {isTopLevel && comment.childrenId?.length && (
            <ShowReply
              commentId={comment.id}
              replyCount={comment.childrenId.length}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default Comments;
