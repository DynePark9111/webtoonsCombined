import type { NextPage } from "next";
import styles from "../../styles/Webtoon2/Rating.module.scss";
import { webtoonP } from "../../types/types";
import Comments from "../Comments/Comments";
import ReplyForm from "../Comments/ReplyForm";

const Rating: NextPage<webtoonP> = ({ webtoon }) => {
  return (
    <div className={styles.Rating}>
      {/* <Comment /> */}
      <ReplyForm parentId={webtoon._id} isTopLevel={true} />
      <Comments isTopLevel={true} />
    </div>
  );
};

export default Rating;
